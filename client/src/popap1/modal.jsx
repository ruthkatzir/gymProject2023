import SignIn from '../signIn';
import { Popover } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { autocompleteClasses } from "@mui/material";

const TransitionsModal = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,

  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button id='lgnBtn' variant="contained" color="secondary" onClick={handleOpen}>Sign In / Log In</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 0 }}>
            <div className="main">
              <input type="checkbox" id="chk" aria-hidden="true"></input>
              <SignIn></SignIn>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default TransitionsModal;


