// import Select from '@mui/joy/Select';
// import Option from '@mui/joy/Option';
// import { useEffect,useState } from 'react';
// import axios from 'axios';
// export default function SelectBasic(props) {


// const [guieds,setGuieds]=useState([]);
// const loadData=async()=>{
 // import axios from 'axios';
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
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function SelectLesson(props) {


  const [guieds, setGuieds] = useState([]);
  const loadData = async () => {

    const res = await axios.get(`http://localhost:3600/api/secretary`).catch(error => console.error(error));
    if (res.statusText == 'OK')
      setGuieds([...res.data]);
  }
  useEffect(() => {
    loadData()
  }, []);

  //;

  return (
    <Select onChange={(e, value) => {console.log('hhh',guieds[value])  ; props.setGuiedId(guieds[value].gmail) }} placeholder="Choose one…" color="neutral">
      {guieds.map((guied, index) => <Option key={index} value={index}>{guied.firstName + ' ' + guied.lastName}</Option>)}
    </Select>
  );
}
