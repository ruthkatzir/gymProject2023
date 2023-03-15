import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import axios from 'axios';
import { useState, useEffect } from 'react';

import DisplayRating from './DisplayRating'
export default function FolderList() {
  
    const [userParticipations, setUserParticipations] = useState([]);
  //const [userId,setUserId] =useState('');
  
  
 
 
//  const loadData=async()=>{
//   const userId= localStorage.getItem("userId")
//   const token = localStorage.getItem("token");
//   const config = {
//    headers: { Authorization: `Bearer ${token}` }
//   };
//   if(userId)
//   {
//    console.log("start")
//    const res=await axios.get(`http://localhost:3600/api/participations/${userId}`,config )
//    setUserParticipations(res.data) 
//    console.log("aaa"+res)
   
//   }}
  useEffect(()=>{
    const userId= "t@gmail.com"//localStorage.getItem("userId").
      const token = localStorage.getItem("token");
      const config = {
       headers: { Authorization: `Bearer ${token}` }
      };
   axios.get(`http://localhost:3600/api/participations/${userId}`,config )
   .then(response => {
       console.log(response);
      
   })
   .catch(error => console.error(error));
}, []);


  
 
  
  


    return (
  //     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  //    { userParticipations.map((participation, index) =>
  //     {
  //       <ListItem>
  //       <ListItemAvatar>
  //         <Avatar>
  //           <ImageIcon />
  //         </Avatar>
  //       </ListItemAvatar>
  //       <ListItemText primary={participation.lessonType} secondary="Jan 9, 2014" />
  //     
     //   <ListItemAvatar>  <DisplayRating  stars={participation.grading}></DisplayRating>     </ListItemAvatar>
 // </ListItem>
  //     })
  //  }
  //  </List>
    
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FitnessCenterIcon />
          </Avatar>
        </ListItemAvatar>
      
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
       
        <ListItemAvatar>  <DisplayRating  stars={4}></DisplayRating>     </ListItemAvatar>
        
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <FitnessCenterIcon />

          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
           <SportsGymnasticsIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}