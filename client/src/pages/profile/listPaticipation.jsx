// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';
// import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
// import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
// import axios from 'axios';
// import Participation   from './participation'
// import { useState, useEffect } from 'react';

// import DisplayRating from './DisplayRating'

// const ListParticipation = (props) => {

//     const [userParticipations, setUserParticipations] = useState([]);

//   useEffect(()=>{

 
//    setUserParticipations([{id: 1, userId: 't@gmail.com', guideName: '"aaa"', dateLesson: '2020-03-01', lessonType: 'zomba',grading:4},{id: 1, userId: 't@gmail.com', guideName: '"aaa"', dateLesson: '2020-04-01', lessonType: 'zomba',grading:4}])
//    //  const userId= "t@gmail.com"//localStorage.getItem("userId").
//    //    const token = localStorage.getItem("token");
//    //    const config = {
//    //     headers: { Authorization: `Bearer ${token}` }
//    //    };
//    // axios.get(`http://localhost:3600/api/participations/${userId}`,config ).then(response =>console.log(response.data))
//    //.then(response =>console.log(response.data)).then(response=>{setUserParticipations(response.data)})  
  
//    //.catch(error => console.error(error));
// }, []);


// let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

//     return (
 
       
//        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//      { userParticipations.map((participation, index) =>
//       {
//          <Participation key={index} icon={index%2} details={participation}></Participation>
  
//       })
//      }
//   </List>
    
   
//   );
// }

// export default ListParticipation;

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
import Participation from './participation'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';



import DisplayRating from './DisplayRating'

const ListParticipation = (props) => {

   const [userParticipations, setUserParticipations] = useState([]);
   const { currentUser, token } = useContext(AuthContext);
   
   useEffect(() => {

      loadDate();

   }, []);

const loadDate=async() => {

   const config = {
      headers: { Authorization: `Bearer ${token}` }
   };
   const res = await axios.get(`http://localhost:3600/api/participations/${currentUser.gmail}`, config).catch(error => console.error(error));
   
   if (res.statusText=='OK') {
      setUserParticipations(res.data);
   }

}
   let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

   return (

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
         {userParticipations.map((participation, index) =>

            <Participation key={index} icon={index % 2} details={participation}></Participation>
         )
         }
      </List>

   );
}

export default ListParticipation;
