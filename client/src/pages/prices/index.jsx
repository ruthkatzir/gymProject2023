import * as React from 'react';
import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
// import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { AuthContext } from "../../context/authContext";
import axios from 'axios';

// function Copyright(props) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }
function PricingContent() {
    const [rows, setRows] = useState([]);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        axios.get('http://localhost:3600/api/price')
            .then(response => {
                console.log(response.data);
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
        console.log("here");
        console.log(currentUser.gmail, numEnters, type);
        axios.post("http://localhost:3600/api/purchase", { userId: currentUser.gmail, type: type, numEnters: numEnters }, config)
            .then(console.log)
            .catch(console.log);
    };

    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 10, pb: 5 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Pricing
                </Typography>
                {/* <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Quickly build an effective pricing table for your potential customers with
                    this layout.
                </Typography> */}
            </Container>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {rows.map((tier) => (
                        <Grid
                            item
                            key={tier.type}
                            xs={12}
                            sm={tier.type === 'month' ? 12 : 6}
                            md={4}
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
                                    }
                                    }
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 1,
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
                                    <Button onClick={() => { handleChoosingButtonClick(tier.id) }} fullWidth variant={tier.buttonVariant}>
                                        {'buy'}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default function Prices() {
    return <PricingContent />;
}
