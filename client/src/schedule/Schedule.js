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
        setCurrentStep(currentStep + 1);
    }
    return (
        <div className="schedule">
            <button>to the oters schedules</button>
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
            </table>
            <br />
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
            </table>
            <br />
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
            </table>
        </div>
    );
};

export default Schedule;
