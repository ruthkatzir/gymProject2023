import { useState } from 'react';
import { Grid, Typography, TextField, Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import ConfirmationDialog from './popupSchedule';
import AddLessonButton from './AddLessonButton';

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const HOURS_OF_DAY_1 = [ '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'];

const HOURS_OF_DAY = [ '8:00','9:00', '10:00', '11:00', '12:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00','22:00'];



const WeeklySchedule = () => {
  const [schedule, setSchedule] = useState(() => {
  const initialSchedule = {};
  DAYS_OF_WEEK.forEach((day) => {
      initialSchedule[day] = {};
      HOURS_OF_DAY.forEach((hour) => {
        initialSchedule[day][hour] = '';
      });
    });
    return initialSchedule;
  });
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  
  const handleScheduleChange = (day, hour, value) => {
    const updatedSchedule = { ...schedule };
    updatedSchedule[day][hour] = value;
    setSchedule(updatedSchedule);
  };

  const handleSubmit = () => {
    // Handle form submit

  };

  const handleCellClick = (day, hour) => {
    // Create a popup display logic
    <ConfirmationDialog></ConfirmationDialog>
  };

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h5">Weekly Schedule</Typography>
      </Grid>
      <Grid item xs={8}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                {DAYS_OF_WEEK.map((day) => (
                  <TableCell key={day}>{day}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {HOURS_OF_DAY.map((hour) => (
                <TableRow key={hour}>
                  <TableCell>{hour}</TableCell>
                  {DAYS_OF_WEEK.map((day) => (
                    <TableCell key={day} onClick={() => handleCellClick(day, hour)}>
                     <betton >Add Lesson</betton>
                    <AddLessonButton    DayOfWeek={1}  StartHour={"8:00:00"} ></AddLessonButton>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default WeeklySchedule;
