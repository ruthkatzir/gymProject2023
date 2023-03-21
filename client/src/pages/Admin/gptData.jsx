import { useState } from 'react';
import { Grid, Typography, TextField, Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import ConfirmationDialog from './popupSchedule';

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const HOURS_OF_DAY = ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'];

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
    console.log(`Cell ${day} - ${hour} was clicked!`);
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
                      <TextField
                        fullWidth
                        variant="outlined"
                        value={schedule[day][hour]}
                        onChange={(e) => handleScheduleChange(day, hour, e.target.value)}
                      />
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
