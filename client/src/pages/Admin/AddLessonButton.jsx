import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';
import SelectLesson from './SelectLessonName';
import SelectGuied from './SelectGuiedName';
import axios from 'axios';

export default function AddLessonButton(props) {
    const [open, setOpen] = useState(false);
    const [lessonTypeId, setLessonTypeId] = useState('');
    const [guiedId, setGuiedId] = useState();
    const [error, serError] = useState(false);


    const addLesson = async () => {

        if (guiedId == '' || lessonTypeId == '') {
            serError(true)
            return;
        }
        const data = { DayOfWeek: props.DayOfWeek, StartHour: props.StartHour, LessonTypeId: lessonTypeId, guiedId, ActiveTypeId: 1 }
        const res = await axios.post(`http://localhost:3600/api/secretary`, data).catch(error => console.error(error));
        if (res.status == 201) {
            setOpen(false)
            props.setLoadLessons(true)
        }

    }
    return (
        <React.Fragment>
            <Button sx={{ maxWidth: '90%' }}
                variant="outlined"
                color="neutral"
                startDecorator={<AddIcon />}
                onClick={() => setOpen(true)}
            >
                Add Lesson
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog
                    aria-labelledby="basic-modal-dialog-title"
                    aria-describedby="basic-modal-dialog-description"
                    sx={{ maxWidth: 500 }}
                >
                    <Typography id="basic-modal-dialog-title" component="h2">
                        Add new Lesson
                    </Typography>
                    <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
                        Fill in the information of the lesson.
                    </Typography>
                    <form>
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>Type of lesson</FormLabel>
                                <SelectLesson setLessonTypeId={setLessonTypeId} ></SelectLesson>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Name of guied</FormLabel>
                                <SelectGuied setGuiedId={setGuiedId}></SelectGuied>
                            </FormControl>

                            <Button onClick={() => { addLesson() }} >Submit</Button>

                            {error && <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
                                All fields are required
                            </Typography>}

                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}
