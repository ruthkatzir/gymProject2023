import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useEffect,useState } from 'react';
import axios from 'axios';
export default function SelectBasic(props) {
  
  
const [guieds,setGuieds]=useState([{id:"aaa@gmail.com",firstName:'tzofia',lastname:'benzion'},{id:"aaa@gmail.com",firstName:'kazir',lastname:'benzion'},{id:"aaa@gmail.com",firstName:'tamar',lastname:'benzion'}]);
const loadData=async()=>{

    // const res = await axios.get(`http://localhost:3600/api/guieds`).catch(error => console.error(error));
    // console.log(res);
    // if (res.statusText=='OK') 
    //     setGuieds([...res.data]);

}
  useEffect(()=>{loadData()
},[]);
   
   //;
  
    return (
    <Select  onChange={(e,value)=>{props.setGuiedId(value) }}  placeholder="Choose one…"   color="neutral">
      { guieds.map((guied)=><Option value={guied.id}>{guied.firstName+' '+guied.lastName}</Option>) }
      {/* <Option value={1}>Zumba</Option>
      <Option value="Pylatic">Pylatic</Option>
      <Option value="junc">junc</Option>
      <Option value="Sport">Sport</Option> */}
    </Select>
  );
}
