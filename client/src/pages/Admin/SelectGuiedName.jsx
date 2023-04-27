// import Select from '@mui/joy/Select';
// import Option from '@mui/joy/Option';
// import { useEffect,useState } from 'react';
// import axios from 'axios';
// export default function SelectBasic(props) {
  
  
// const [guieds,setGuieds]=useState([]);
// const loadData=async()=>{

//     const res = await axios.get(`http://localhost:3600/api/secretary`).catch(error => console.error(error));
//     console.log("res" ,res);
//     if (res.statusText=='OK') 
//         setGuieds([...res.data]);

// }
//   useEffect(()=>{loadData()
// },[]);
   

//     return (
//       <Select  onChange={(e,value)=>{props.setGuiedId(value); console.log(value, "guide") }}  placeholder="Choose one…"   color="neutral"> 
//        { guieds.map((guied)=><Option value={guied.id}>{guied.firstName+' '+guied.lastName}</Option>) }
//     </Select>
      
      
      

//   );
// }
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useEffect,useState } from 'react';
import axios from 'axios';
export default function SelectLesson(props) {
  
  
  const [guieds,setGuieds]=useState([]);
const loadData=async()=>{

  const res = await axios.get(`http://localhost:3600/api/secretary`).catch(error => console.error(error));
      console.log("res" ,res);
      if (res.statusText=='OK') 
          setGuieds([...res.data]);
}
  useEffect(()=>{loadData()
},[]);
   
   //;
  
    return (
    // <Select  onChange={(e,value)=>{props.setLessonTypeId(value) }}  placeholder="Choose one…"   color="neutral">
    //  { guieds.map((guied)=><Option value={guied.id}>{guied.firstName+' '+guied.lastName}</Option>) }
    // </Select>

<Select  onChange={(e,value)=>{console.log("sssssssssss")}}  placeholder="Choose one…"   color="neutral">
{ guieds.map((guied)=><Option value={guied.id}>{"aaa"}</Option>) } 
{/* { guieds.map((guied)=><Option value={guied.id}>{guied.firstName+' '+guied.lastName}</Option>) } */}
</Select>
  );
}
