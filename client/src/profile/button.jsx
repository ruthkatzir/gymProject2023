import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import axios from 'axios';


const Btns = (props) => {

  const setMeasurments = () => {
    axios.post("http://localhost:3600/api/purchase", {  },
      config
    ).then(console.log).catch(console.log);
  }

  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={ } variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button onClick={setMeasurments} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}
export default Btns;