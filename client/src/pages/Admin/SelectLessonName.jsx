import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useEffect,useState } from 'react';
import axios from 'axios';
export default function  SelectLesson(props) {
  
  
const [lessons,setLessons]=useState([]);
const loadData=async()=>{

    const res = await axios.get(`http://localhost:3600/api/lessons`).catch(error => console.error(error));
    if (res.statusText=='OK') 
        setLessons([...res.data]);

}
  useEffect(()=>{loadData()
},[]);
   
   //;
  
    return (
    <Select  onChange={(e,value)=>{props.setLessonTypeId(value) }}  placeholder="Choose one…"   color="neutral">
      { lessons.map((lesson,ind)=><Option key={ind} value={lesson.id}>{lesson.name}</Option>) }
    </Select>
  );
}
