import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useEffect,useState } from 'react';
import axios from 'axios';
export default function SelectBasic(props) {
  
  
const [lessons,setLessons]=useState([]);
const loadData=async()=>{

    const res = await axios.get(`http://localhost:3600/api/lessons`).catch(error => console.error(error));
    console.log(res);
    if (res.statusText=='OK') 
        setLessons([...res.data]);

}
  useEffect(()=>{loadData()
},[]);
   
   //;
  
    return (
    <Select  onChange={(e,value)=>{props.setLessonType(value) }}  placeholder="Choose one…"   color="neutral">
      { lessons.map((lesson)=><Option value={lesson.id}>{lesson.name}</Option>) }
      {/* <Option value={1}>Zumba</Option>
      <Option value="Pylatic">Pylatic</Option>
      <Option value="junc">junc</Option>
      <Option value="Sport">Sport</Option> */}
    </Select>
  );
}
