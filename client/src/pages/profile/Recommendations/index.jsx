import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Lesson from './RecommendedLessons'
import Exercises from './RecommendedExercises'
import { useState, useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import { useEffect } from 'react';
import axios from 'axios';

import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const cards = [1, 2, 3];

const theme = createTheme();

export default function Album() {
  const { currentUser, token } = useContext(AuthContext);

  const [recommendationsExc, setRecommendationsExc] = useState([]);
  const [recommendationsLessons, setRecommendationsLessons] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  // const loadData = async () => {
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` }
  //   };
  //   //get the last details of the client
  //   let partName = 'general';
  //   const measurments = await axios.get(`http://localhost:3600/api/measurements/${currentUser.gmail}`, config).catch(error => console.error(error));
  //   if (measurments.statusText === 'OK') {
  //     const sortedData = measurments.data.sort((a, b) => new Date(b.measureDate) - new Date(a.measureDate));
  //     const latestRow = sortedData[0];
  //     console.log("partttt ", partName);
  //     if (latestRow.weight > 60 && latestRow.WaistCircumference > 15) {
  //       partName = "Abdominals";
  //     }
  //     else if (latestRow.weight > 60 && (latestRow.height < 170 || latestRow.HipCircumference > 40)) {
  //       partName = "hips and pelvis";
  //     }
  //   }
  //   const res = await axios.get(`http://localhost:3600/api/recommendations/${partName}`, config).catch(error => console.error(error));
  //   if (res.statusText === 'OK') {
  //     console.log(res.data);
  //     setRecommendationsLessons(res.data[0]);
  //     setRecommendationsExc(res.data[1]);
  //   }
  // }

  const loadData = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    // Get the last details of the client
    let partName = 'general';
    try {
      const measurements = await axios.get(`http://localhost:3600/api/measurements/${currentUser.gmail}`, config);
      if (measurements.statusText === 'OK') {
        console.log("measurements ", measurements.data);
        const sortedData = measurements.data.sort((a, b) => new Date(b.measureDate) - new Date(a.measureDate));
        const latestRow = sortedData[0];
        console.log("latestRow ", latestRow);
        console.log("partttt ", partName);

        if (latestRow.weight > 60 && latestRow.WaistCircumference > 40) {
          console.log("in ");
          partName = "Abdominals";
        } else if (latestRow.weight > 60 && (latestRow.height < 170 || latestRow.HipCircumference > 40)) {
          console.log("in2 ");
          partName = "general";
        }
        // partName = "hips";
        console.log("partttt1 ", partName);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      const res = await axios.get(`http://localhost:3600/api/recommendations/${partName}`, config);
      if (res.statusText === 'OK') {
        console.log(res.data);
        setRecommendationsLessons(res.data[0]);
        setRecommendationsExc(res.data[1]);
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h3"
                align="center"
                color="text.primary"
                gutterBottom
              >
                {currentUser.firstName}   we are happy to offer you a personal training program
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Something short and leading about the collection below—its contents,
                the creator, etc. Make it short and sweet, but not too short so folks
                don&apos;t simply skip over it entirely.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >

              </Stack>
            </Container>
          </Box>
          <Container sx={{ py: 10 }} maxWidth="md"><br></br><br></br>
            <Divider textAlign="left"> The lessons recommended for you</Divider><br></br><br></br>
            <Grid container spacing={4}>
              {console.log(recommendationsLessons)}
              {recommendationsLessons.map((card, index) => (
                <Lesson key={index} name={card.name} imgPath={card.imgPath} ></Lesson>
              ))}
            </Grid><br></br><br></br>
            <Divider textAlign="right"> The excersize recommended for you</Divider><br></br><br></br>
            <Grid container spacing={4}>
              {recommendationsExc.map((card, index) => (
                <Exercises key={index} exc={card.Name} desc={card.Description} imgPath={card.MoviePath}></Exercises>
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}


