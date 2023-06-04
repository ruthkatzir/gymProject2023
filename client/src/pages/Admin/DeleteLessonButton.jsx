import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import Button from '@mui/joy/Button';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
// import Add from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from '@mui/joy/Typography';
// import SelectLesson from './SelectLessonName';
// import SelectGuied from './SelectGuiedName';
import DialogActions from '@mui/material/DialogActions';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';

export default function DeleteLessonButton(props) {
    const [open, setOpen] = useState(false);
    const [lessonName, setLessonName] = useState('');
    const [guiedName, setGuiedName] = useState('');
    const { currentUser, token } = useContext(AuthContext);
    const deleteLesson = async () => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const res = await axios.delete(`http://localhost:3600/api/secretary/${props.lesson.id}`, config).catch(error => console.error(error));

        if (res.statusText === 'OK') {
            setOpen(false)
            props.setLoadLessons(true)

        }
    }


    const loadData = async () => {

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        console.log('props.LessonType', props.LessonType)
        setLessonName(props.lesson.LessonType);

        const res = await axios.get(`http://localhost:3600/api/secretary/${props.lesson.guiedId}`, config).catch(error => console.error(error));
        if (res.statusText === 'OK')
            setGuiedName(res.data)

    }

    useEffect(() => {
        loadData();
    }, [])



    return (
        <React.Fragment>
            <Button sx={{ maxWidth: '90%' }}
                variant="outlined"
                color="neutral"
                startDecorator={<RemoveIcon />}
                onClick={() => setOpen(true)}
            >
                Delete Lesson
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog
                    aria-labelledby="basic-modal-dialog-title"
                    aria-describedby="basic-modal-dialog-description"
                    sx={{ maxWidth: 500 }}
                >
                    <Typography id="basic-modal-dialog-title" component="h2">
                        Delete Lesson
                    </Typography>
                    <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
                        lesson: {lessonName}<br />
                        guied: {guiedName}
                    </Typography>
                    <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
                        Are you sure you want to delete this lesson ?
                    </Typography>
                    <form>
                        <Stack spacing={2}>

                            <DialogActions>
                                <Button onClick={() => { setOpen(false) }} >Cancel</Button>
                                <Button onClick={() => { deleteLesson() }} >Delete</Button>
                            </DialogActions>

                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}
