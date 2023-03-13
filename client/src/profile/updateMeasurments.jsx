import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Btns from 'button';

function RedBar() {
  return (
    <Box
      sx={{
        height: 20,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? 'rgba(255, 0, 0, 0.1)'
            : 'rgb(255 132 132 / 25%)',
      }}
    />
  );
}

const Measurment = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >
      <RedBar />
      <TextField label={'margin="height"'} id="margin-none" />
      <RedBar />
      <TextField label={'margin="width"'} id="margin-dense" margin="dense" />
      <RedBar />
      <TextField label={'margin="Hip circumference"'} id="margin-normal" margin="normal" />
      <RedBar />
      <TextField label={'margin="Waist circumference"'} id="margin-normal" margin="normal" />
      <RedBar />
      <Btn></Btn>
      <RedBar />
    </Box>
  );
}
export default Measurment;