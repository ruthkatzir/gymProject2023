import { useState, useEffect } from 'react';
import axios from 'axios';
import './schedule.css';

const Schedule = () => {
    const [rows1, setRows1] = useState([]);
    const [rows2, setRows2] = useState([]);
    const [rows3, setRows3] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        axios
            .get("http://localhost:3600/api/schedules")
            .then((response) => {
                console.log(response.data);
                setRows1(response.data[0]);
                setRows2(response.data[1]);
                setRows3(response.data[2]);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleNextStep = (e) => {
        e.preventDefault();
        {
            if (currentStep < 3) {
                setCurrentStep(currentStep + 1);
            }
        }

    }
    const handlePrevStep = (e) => {
        e.preventDefault();
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    }
    return (
        (<div className="schedule">
            {currentStep === 1 && <h2>Lessons</h2>}
            {currentStep === 1 &&
                <table id='1'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => {
                            const hour = i + 8;
                            return (
                                <tr key={hour}>
                                    <td>{hour}:00:00</td>
                                    <td>{rows1.find(row => row.DayOfWeek === 1 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                    <td>{rows1.find(row => row.DayOfWeek === 2 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                    <td>{rows1.find(row => row.DayOfWeek === 3 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                    <td>{rows1.find(row => row.DayOfWeek === 4 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                    <td>{rows1.find(row => row.DayOfWeek === 5 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                    <td>{rows1.find(row => row.DayOfWeek === 6 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>}
            {currentStep === 2 && <h2>Gym</h2>}
            {currentStep === 2 &&
                <table id='2'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {Array.from({ length: 12 }).map((_, i) => {
                            const hour = i + 8;
                            return (
                                <tr key={hour}>
                                    <td>{hour}:00:00</td>
                                    <td>{rows2.find(row => row.DayOfWeek === 1 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                    <td>{rows2.find(row => row.DayOfWeek === 2 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                    <td>{rows2.find(row => row.DayOfWeek === 3 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                    <td>{rows2.find(row => row.DayOfWeek === 4 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                    <td>{rows2.find(row => row.DayOfWeek === 5 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                    <td>{rows2.find(row => row.DayOfWeek === 6 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>}
            {currentStep >= 3 && <h2>Pool</h2>}
            {currentStep >= 3 &&
                <table id='3'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => {
                            const hour = i + 8;
                            return (
                                <tr key={hour}>
                                    <td>{hour}:00:00</td>
                                    <td>{rows3.find(row => row.DayOfWeek === 1 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                    <td>{rows3.find(row => row.DayOfWeek === 2 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                    <td>{rows3.find(row => row.DayOfWeek === 3 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                    <td>{rows3.find(row => row.DayOfWeek === 4 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                    <td>{rows3.find(row => row.DayOfWeek === 5 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                    <td>{rows3.find(row => row.DayOfWeek === 6 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>}
            <button type="submit" class="button" onClick={handleNextStep}>Next schedules</button>
            <button type="submit" class="button" onClick={handlePrevStep}>Prev schedules</button>
        </div>
        ));
};

export default Schedule;
