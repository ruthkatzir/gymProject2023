import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';
import SelectLesson from './SelectLessonName';
import SelectGuied from './SelectGuiedName';
import axios from 'axios';

export default function AddLessonButton(props) {
    const [open, setOpen] = useState(false);
    const [lessonTypeId, setLessonTypeId] = useState('');
    const [guiedId, setGuiedId] = useState(1);
    const [error, serError] = useState(false);

    useEffect(
        () => {
            console.log("lessonType", lessonTypeId)
        }
        , [lessonTypeId])
    useEffect(
        () => {
            console.log("guiedId", guiedId)
        }
        , [guiedId])

    const addLesson = async () => {
    
        
        if (guiedId == '' || lessonTypeId == '') {
            serError(true)
            return;
        }
        
        const data = { DayOfWeek: props.DayOfWeek, StartHour: props.StartHour, lessonTypeId, guiedId, ActiveTypeId: 1 }
        console.log(data)
         let data1= {
         

                DayOfWeek: 1,
                    StartHour: "8:00:00",
                        LessonTypeId: 1,
                            guiedId: "aaa",
                                ActiveTypeId: 1
    
            }
        const res = await axios.post(`http://localhost:3600/api/secretary`, data1).catch(error => console.error(error));
    //
        if(res.statusText='ok')
          setOpen(false)
           
        console.log(res)
        // {
         

        //     "DayOfWeek": 1,
        //         "StartHour": "8:00:00",
        //             "LessonTypeId": 1,
        //                 "guiedId": "aaa",
        //                     "ActiveTypeId": 1

        // }
   
    }
    return (
        <React.Fragment>
            <Button
                variant="outlined"
                color="neutral"
                startDecorator={<Add />}
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
                    <form
                    //     onSubmit={(event) => {
                    //         event.preventDefault();
        
                    //         addLesson()==true?setOpen(true):setOpen(false);
                    //         // ;
                    //     }}
                      >
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>Type of lesson</FormLabel>
                                <SelectLesson setLessonTypeId={setLessonTypeId} ></SelectLesson>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Name of guied</FormLabel>
                                <SelectLesson setLessonTypeId={setLessonTypeId} ></SelectLesson>
                                {/* <SelectGuied setGuiedId={setGuiedId}></SelectGuied> */}
                            </FormControl>
                            {/* type="submit" */}
                            <Button onClick={()=>{addLesson()}} >Submit</Button>
     
                            {error&&<Typography id="basic-modal-dialog-description" textColor="text.tertiary">
                                All fields are required
                            </Typography>}
                         
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}
// DayOfWeek: {
//   type: DataTypes.INTEGER,
//   allowNull: false
// },
// StartHour: {
//   type: DataTypes.TIME(6),//check  ?
//   allowNull: false,
// },
// LessonType: {
//   type: DataTypes.INTEGER,
//   allowNull: true //fix
// },
// guiedId: {
//   type: DataTypes.STRING(30),
//   allowNull: true
// },
// ActiveType: {
//   type:1 DataTypes.INTEGER,
//   allowNull: false
// },
// },