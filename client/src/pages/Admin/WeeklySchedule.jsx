import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddLessonButton from './AddLessonButton'
import DeleteLessonButton from './DeleteLessonButton'
import { useEffect } from 'react';
// import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// const HOURS_OF_DAY_1 = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'];
const hourOfDay = ['08:00', '09:00', '10:00', '11:00', '12:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];


export default function WeeklySchedule() {


    const [lessons, setLessons] = useState([]);
    const [loadLessons, setLoadLessons] = useState(false);

    useEffect(() => {
        loadLesson()
    }, [])

    useEffect(() => {
        if (loadLessons === true) {
            loadLesson()
            setLoadLessons(false)
            console.log('after delete');
        }

    }, [loadLessons])
    const loadLesson = async () => {

        const res = await axios.get(`http://localhost:3600/api/schedules`).catch(error => console.error(error));
        if (res.statusText === 'OK')
            setLessons([...res.data[0]])
        console.log("lessons", lessons);

    }


    function getButton(hour, day) {
        let lessonExists;
        lessons.forEach(lesson => {
            console.log(hour)
            if (day === lesson.DayOfWeek & hour === lesson.StartHour) {
                lessonExists = lesson;
            }
        })

        return lessonExists ? <DeleteLessonButton setLoadLessons={setLoadLessons} lesson={lessonExists}></DeleteLessonButton> : <AddLessonButton setLoadLessons={setLoadLessons} StartHour={hour} DayOfWeek={day}></AddLessonButton>;
    }



    return (
        <TableContainer component={Paper} style={{ marginLeft: '10%', maxWidth: '60%'}} >
            <Table sx={{ minWidth: 650, maxWidth: '100%' }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {daysOfWeek.map((day, ind) => <TableCell key={ind} align="left" style={{ fontWeight: '1000', borderBottom: '1px solid rgb(143, 74, 74)' }} >{day}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>

                    {hourOfDay.map((hour, ind) =>
                        <TableRow key={ind}>
                            <TableCell key={ind * 2} component="th" scope="row" align="left" style={{ fontWeight: '1000', border: '1px solid rgb(143, 74, 74)' }} sx={{ maxWidth: '1%' }}>
                                {hour}
                            </TableCell>
                            {daysOfWeek.map((day, index) =>
                                <TableCell key={index} align="left" style={{ fontWeight: '1000', border: '1px solid rgb(143, 74, 74)' }} sx={{ maxWidth: 1, maxHeight: 10 }} >
                                    {getButton(hour + ':00', index + 1)}
                                </TableCell>)
                            }
                        </TableRow>
                    )
                    }

                </TableBody>
            </Table>
        </TableContainer>
    );
}