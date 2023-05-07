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
  // const { Name, setName } = useState("")
  const [recommendationsExc, setRecommendationsExc] = useState([]);
  const [recommendationsLessons, setRecommendationsLessons] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const res = await axios.get(`http://localhost:3600/api/recommendations/Abdominals`, config).catch(error => console.error(error));
    if (res.statusText === 'OK') {
      setRecommendationsLessons(res.data[0]);
      setRecommendationsExc(res.data[1]);
    }
  }

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
              {recommendationsLessons.map((card, index) => (
                <Lesson key={index} name={card}></Lesson>
              ))}
            </Grid><br></br><br></br>
            <Divider textAlign="right"> The excersize recommended for you</Divider><br></br><br></br>
            <Grid container spacing={4}>
              {recommendationsExc.map((card, index) => (
                <Exercises key={index} exc={card.Name} desc={card.Description}></Exercises>
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}


