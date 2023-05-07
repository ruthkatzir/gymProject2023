import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import Rating from '@mui/material/Rating';
import { useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import axios from 'axios';

export default function Rate(props) {
    const [open, setOpen] = React.useState(false);
    const [rating, setRating] = React.useState(0);
    const { currentUser, token } = useContext(AuthContext);

    const Rate = async () => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const res = await axios.post(`http://localhost:3600/api/participations/${props.participationId}`,
            { grading: rating },
            config
        ).catch(error => console.error(error));
    };

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', pt: 2 }}>
                <Button
                    variant="plain"
                    color="neutral"
                    endIcon={<StarOutlineIcon />}
                    onClick={() => setOpen(true)}
                >
                    Rate
                </Button>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <ModalDialog
                        variant="outlined"
                        role="alertdialog"
                        aria-labelledby="alert-dialog-modal-title"
                        aria-describedby="alert-dialog-modal-description"
                    >
                        <Typography
                            id="alert-dialog-modal-title"
                            component="h2"
                            startDecorator={<GradeIcon />}
                        >
                            Rating
                        </Typography>
                        <Divider />
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                pt: 2,
                                gap: 1,
                            }}
                        >
                            <Button
                                variant="plain"
                                color="neutral"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="solid"
                                color="success"
                                onClick={() => {
                                    setOpen(false);
                                    Rate();
                                }}
                            >
                                Rate
                            </Button>
                        </Box>
                    </ModalDialog>
                </Modal>
            </Box>
        </React.Fragment>
    );
}
