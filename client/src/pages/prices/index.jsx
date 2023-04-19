import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './prices.css';
import CourseCard from './card';
import StepContent from '../creditCard/index'
import { Grid } from '@material-ui/core';

const Prices = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3600/api/price')
            .then(response => {
                console.log(response.data);
                setRows(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const handleChoosingButtonClick = async (rowId) => {
        const token = localStorage.getItem("token");
        const numEnters = rows[rowId].numOfEnters;
        const type = rows[rowId].id;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        console.log("before");
        const res = await axios.get(`http://localhost:3600/api/price/${rowId}`);
        const price = res.data;
    };

    return (
        <div className="prices" style={{ marginTop: 70, color: 'red' }}>
            {/* <StepContent></StepContent> */}
            <Grid container spacing={1}>
                {rows.map((row) => (
                    <React.Fragment key={row.id}>
                        <Grid item xs={6} sm={4} md={3} lg={6}>
                            <CourseCard
                                type={row.id}
                                typeName={row.type}
                                price={row.price}
                                term={row.term}
                                numEnter={row.numEnter}
                                handleChoosingButtonClick={() => handleChoosingButtonClick(row.id)}
                                choosing={row.choosing}
                            />
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </div>
    );
};
export default Prices;



// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import StarIcon from '@mui/icons-material/StarBorder';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import GlobalStyles from '@mui/material/GlobalStyles';
// import Container from '@mui/material/Container';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const tiers = [
//   {
//     title: 'Free',
//     price: '0',
//     description: [
//       '10 users included',
//       '2 GB of storage',
//       'Help center access',
//       'Email support',
//     ],
//     buttonText: 'Sign up for free',
//     buttonVariant: 'outlined',
//   },
//   {
//     title: 'Pro',
//     subheader: 'Most popular',
//     price: '15',
//     description: [
//       '20 users included',
//       '10 GB of storage',
//       'Help center access',
//       'Priority email support',
//     ],
//     buttonText: 'Get started',
//     buttonVariant: 'contained',
//   },
//   {
//     title: 'Enterprise',
//     price: '30',
//     description: [
//       '50 users included',
//       '30 GB of storage',
//       'Help center access',
//       'Phone & email support',
//     ],
//     buttonText: 'Contact us',
//     buttonVariant: 'outlined',
//   },
// ];

// function PricingContent() {
//   return (
//     <React.Fragment>
//       <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
//       <CssBaseline />
//       <AppBar
//         position="static"
//         color="default"
//         elevation={0}
//         sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
//       >
//         <Toolbar sx={{ flexWrap: 'wrap' }}>
//           <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
//             Company name
//           </Typography>
//           <nav>
//             <Link
//               variant="button"
//               color="text.primary"
//               href="#"
//               sx={{ my: 1, mx: 1.5 }}
//             >
//               Features
//             </Link>
//             <Link
//               variant="button"
//               color="text.primary"
//               href="#"
//               sx={{ my: 1, mx: 1.5 }}
//             >
//               Enterprise
//             </Link>
//             <Link
//               variant="button"
//               color="text.primary"
//               href="#"
//               sx={{ my: 1, mx: 1.5 }}
//             >
//               Support
//             </Link>
//           </nav>
//           <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
//             Login
//           </Button>
//         </Toolbar>
//       </AppBar>
//       {/* Hero unit */}
//       <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
//         <Typography
//           component="h1"
//           variant="h2"
//           align="center"
//           color="text.primary"
//           gutterBottom
//         >
//           Pricing
//         </Typography>
//         <Typography variant="h5" align="center" color="text.secondary" component="p">
//           Quickly build an effective pricing table for your potential customers with
//           this layout. It&apos;s built with default MUI components with little
//           customization.
//         </Typography>
//       </Container>
//       {/* End hero unit */}
//       <Container maxWidth="md" component="main">
//         <Grid container spacing={5} alignItems="flex-end">
//           {tiers.map((tier) => (
//             // Enterprise card is full width at sm breakpoint
//             <Grid
//               item
//               key={tier.title}
//               xs={12}
//               sm={tier.title === 'Enterprise' ? 12 : 6}
//               md={4}
//             >
//               <Card>
//                 <CardHeader
//                   title={tier.title}
//                   subheader={tier.subheader}
//                   titleTypographyProps={{ align: 'center' }}
//                   action={tier.title === 'Pro' ? <StarIcon /> : null}
//                   subheaderTypographyProps={{
//                     align: 'center',
//                   }}
//                   sx={{
//                     backgroundColor: (theme) =>
//                       theme.palette.mode === 'light'
//                         ? theme.palette.grey[200]
//                         : theme.palette.grey[700],
//                   }}
//                 />
//                 <CardContent>
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'baseline',
//                       mb: 2,
//                     }}
//                   >
//                     <Typography component="h2" variant="h3" color="text.primary">
//                       ${tier.price}
//                     </Typography>
//                     <Typography variant="h6" color="text.secondary">
//                       /mo
//                     </Typography>
//                   </Box>
//                   <ul>
//                     {tier.description.map((line) => (
//                       <Typography
//                         component="li"
//                         variant="subtitle1"
//                         align="center"
//                         key={line}
//                       >
//                         {line}
//                       </Typography>
//                     ))}
//                   </ul>
//                 </CardContent>
//                 <CardActions>
//                   <Button fullWidth variant={tier.buttonVariant}>
//                     {tier.buttonText}
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </React.Fragment>
//   );
// }

// export default function Prices() {
//   return <PricingContent />;
// }