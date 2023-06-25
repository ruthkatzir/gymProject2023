import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import SimpleCollapse from './explanation';
import axios from 'axios';
import { AuthContext } from "../../context/authContext";
import PopupPayment from './payment';


function PricingContent() {
    const [rows, setRows] = useState([]);
    const [isShow, setisShow] = useState(false);
    const [open, setOpen] = useState(false);
    const { currentUser } = useContext(AuthContext);

    const childShow = (open) => {
        setisShow(open);
    };

    useEffect(() => {
        axios.get('http://localhost:3600/api/price')
            .then(response => {
                response.data.forEach(e => {
                    if (e.type === 'month')
                        e.buttonVariant = 'contained';
                    else {
                        e.buttonVariant = 'outlined';
                    }
                });
                setRows(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const handleChoosingButtonClick = async (rowId) => {
        const token = localStorage.getItem("token");
        const numEnters = rows[rowId].numEnter;
        const type = rows[rowId].id;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        try{
            axios.post("http://localhost:3600/api/purchase", { userId: currentUser.gmail, type: type, numEnters: numEnters }, config)
            setOpen(true);
        }
        catch{
            alert("You must login or register before making the purchase");
        } 
    };

    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 10, pb: 9 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Pricing
                </Typography>
                <SimpleCollapse onChange={childShow} />
            </Container>
            <Container
                maxWidth="md"
                component="main"
                style={{
                    marginTop: isShow ? '30%' : '-10%',
                    marginBottom: '10%',
                    maxWidth: '10%'
                }}
            />
            <Grid container spacing={5} ml={'20%'} alignItems="flex-end">
                {rows.map((tier) => (
                    <Grid
                        item
                        key={tier.type}
                        xs={12}
                        sm={tier.type === 'month' ? 12 : 6}
                        md={2}
                    >
                        <Card>
                            <CardHeader
                                title={tier.type}
                                subheader={tier.price}
                                titleTypographyProps={{ align: 'center' }}
                                action={tier.type === 'month' ? <StarIcon /> : null}
                                subheaderTypographyProps={{
                                    align: 'center',
                                }}
                                sx={{
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[200]
                                            : theme.palette.grey[700],
                                }}
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 1,
                                        marginBottom: '20%',
                                    }}
                                    height={tier.type === 'month' ? 60 : 45}
                                >
                                    <Typography component="h2" variant="h3" color="text.primary">
                                        {`$ ${tier.price}`}
                                    </Typography>
                                </Box>
                                <ul>
                                    <Typography
                                        component="li"
                                        variant="subtitle1"
                                        align="center"
                                    >
                                        {tier.term}
                                    </Typography>
                                </ul>
                            </CardContent>
                            <CardActions>
                                <Button
                                    onClick={() => { handleChoosingButtonClick(tier.id) }}
                                    fullWidth
                                    variant={tier.buttonVariant}
                                >
                                    {'Join Now'}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {/* {Open? <PopupPayment open={Open}/>:<></>} */}
            {open && <PopupPayment f={() => {setOpen(false)}} open={open}/>}
        </React.Fragment>
    );
}

export default function Prices() {
    return <PricingContent />;
}