import * as React from 'react';
import List from '@mui/material/List';
import axios from 'axios';
import Participation from './participation';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/authContext';
import BarParticipations from './participationsBar';
import { Grid } from '@material-ui/core';

const ListParticipation = (props) => {

   const [userParticipations, setUserParticipations] = useState([]);
   const { currentUser, token } = useContext(AuthContext);

   useEffect(() => {
      loadDate();
   }, []);

   const loadDate = async () => {
      const config = {
         headers: { Authorization: `Bearer ${token}` }
      };
      const res = await axios.get(`http://localhost:3600/api/participations/${currentUser.gmail}`, config).catch(error => console.error(error));

      if (res.statusText === 'OK') {
         setUserParticipations(res.data);
      }
   }
   //let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

   return (
      <>
         <h1 style={{ marginLeft: '30%' }}>your participations</h1>
         <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
               <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  {userParticipations.map((participation, index) =>
                     index === userParticipations.length - 1 && !participation.grading ?
                        <Participation allowRating={true} key={index} icon={index % 2} details={participation} />
                        :
                        <Participation allowRating={false} key={index} icon={index % 2} details={participation} />
                  )}
               </List>
            </Grid>
            <Grid item xs={12} sm={6}>
               <BarParticipations />
            </Grid>
         </Grid>
      </>
   );
}

export default ListParticipation;
