// import * as React from 'react';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
// import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';

// import { useState, useEffect } from 'react';

// import DisplayRating from './DisplayRating'
// const Participation = (props) => {

//     const [participation, setparticipations] = useState(props.details);
//     const [fullDate, setFullDate] = useState('');
//     let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
//     useEffect(()=>{
//         let ind=parseInt(participation.dateLesson.slice(5,7))
//         let m=month[ind];
//         let d=parseInt(participation.dateLesson.slice(8,10))
//         let y=parseInt(participation.dateLesson.slice(0,4))
//         let dateStr=` ${d}, ${y}`;
//         setFullDate(m+dateStr)
 
//     })
    
 
//     return (
//         <ListItem>
//         <ListItemAvatar>
//           <Avatar>
//            {props.icon? <FitnessCenterIcon></FitnessCenterIcon> :<SportsGymnasticsIcon></SportsGymnasticsIcon> }
//           </Avatar>
//         </ListItemAvatar>
//         <ListItemText primary={participation.lessonType} secondary={fullDate}/>   
//        <ListItemAvatar>  <DisplayRating  stars={participation.grading}></DisplayRating> </ListItemAvatar>
//       </ListItem>
//     )
//   }
//   export default Participation;

import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';

import { useState, useEffect } from 'react';

import DisplayRating from './DisplayRating'
const Participation = (props) => {

    const [participation, setparticipations] = useState(props.details);
    const [fullDate, setFullDate] = useState('');
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    useEffect(()=>{
        let ind=parseInt(participation.dateLesson.slice(5,7))
        let m=month[ind];
        let d=parseInt(participation.dateLesson.slice(8,10))
        let y=parseInt(participation.dateLesson.slice(0,4))
        let dateStr=` ${d}, ${y}`;
        setFullDate(m+dateStr)
 
    })
    
 
    return (
        <ListItem>
        <ListItemAvatar>
          <Avatar>
           {props.icon? <FitnessCenterIcon></FitnessCenterIcon> :<SportsGymnasticsIcon></SportsGymnasticsIcon> }
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={participation.lessonType} secondary={fullDate}/>   
       <ListItemAvatar>  <DisplayRating  stars={participation.grading}></DisplayRating> </ListItemAvatar>
      </ListItem>
    )
  }
  export default Participation;