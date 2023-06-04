import { Popover } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { autocompleteClasses } from "@mui/material";
import CardDetails from './cardDetails';
import { useEffect } from 'react';

const PopupPayment = (props) => {

    useEffect(()=>{
        console.log(props.open)
        console.log('props.open')
    },[]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // boxShadow: 24,

    };
    const [open, setOpen] = React.useState(props.open);
    //const handleOpen = () => setOpen(props.open);
    const handleClose = () => {
        console.log('handleClose')
        setOpen(false);
    }//;

    return (
        <div>
            {/* <Button variant="text" onClick={handleOpen} style={{ color: 'red' }}>Buy</Button> */}
            {open && <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 0 }}>
                        <div className="main">
                            <CardDetails 
                            f={props.f}
                            />
                        </div>
                    </Typography>
                </Box>
            </Modal>}
        </div>
    );
}

export default PopupPayment;


