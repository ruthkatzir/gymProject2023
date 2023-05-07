import { useState, useEffect } from 'react';
import axios from 'axios';
import './schedule.css';
// import RecommendationsPopup from '../RecommentsPopup/schedulePopup';
import PoolIcon from '@mui/icons-material/Pool';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';

const Schedule = (props) => {
    const [rows1, setRows1] = useState([]);
    const [rows2, setRows2] = useState([]);
    const [rows3, setRows3] = useState([]);
    const currentStep = props.page;

    console.log(currentStep + 'currentStep')

    useEffect(() => {
        loadDate();
    }, []);
    const loadDate = async () => {
        axios.get("http://localhost:3600/api/schedules")
            .then((response) => {
                console.log('aaa', response.data);
                setRows1(response.data[0]);
                setRows2(response.data[1]);
                setRows3(response.data[2]);
            })
            .catch((error) => console.error('aaaaaaaaaaaaaaaaaaaaaa', error));

    }

    return (
        (<div className="schedule" style={{ width: '30%', height: '300px' }}>
            {/* <RecommendationsPopup /> */}
            {currentStep === 1 && <h2>Lessons</h2>}
            {currentStep === 1 &&
                <table id='1' style={{ maxHeight: '300px' }}>
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
                        {Array.from({ length: 10 }).map((_, i) => {
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

                        {Array.from({ length: 10 }).map((_, i) => {
                            const hour = i + 8;
                            return (
                                <tr key={hour}>
                                    <td>{hour}:00:00</td>
                                    <td>{rows2.find(row => row.DayOfWeek === 1 && row.StartHour.startsWith(`${hour}:`)) ? <SportsMartialArtsIcon /> : <></>}</td>
                                    <td>{rows2.find(row => row.DayOfWeek === 2 && row.StartHour.startsWith(`${hour}:`)) ? <SportsMartialArtsIcon /> : <></>}</td>
                                    <td>{rows2.find(row => row.DayOfWeek === 3 && row.StartHour.startsWith(`${hour}:`)) ? <SportsMartialArtsIcon /> : <></>}</td>
                                    <td>{rows2.find(row => row.DayOfWeek === 4 && row.StartHour.startsWith(`${hour}:`)) ? <SportsMartialArtsIcon /> : <></>}</td>
                                    <td>{rows2.find(row => row.DayOfWeek === 5 && row.StartHour.startsWith(`${hour}:`)) ? <SportsMartialArtsIcon /> : <></>}</td>
                                    <td>{rows2.find(row => row.DayOfWeek === 6 && row.StartHour.startsWith(`${hour}:`)) ? <SportsMartialArtsIcon /> : <></>}</td>
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
                        {Array.from({ length: 10 }).map((_, i) => {
                            const hour = i + 8;
                            return (
                                <tr key={hour}>
                                    <td>{hour}:00:00</td>
                                    <td>{rows3.find(row => row.DayOfWeek === 1 && row.StartHour.startsWith(`${hour}:`)) ? <PoolIcon /> : <></>}</td>
                                    <td>{rows3.find(row => row.DayOfWeek === 2 && row.StartHour.startsWith(`${hour}:`)) ? <PoolIcon /> : <></>}</td>
                                    <td>{rows3.find(row => row.DayOfWeek === 3 && row.StartHour.startsWith(`${hour}:`)) ? <PoolIcon /> : <></>}</td>
                                    <td>{rows3.find(row => row.DayOfWeek === 4 && row.StartHour.startsWith(`${hour}:`)) ? <PoolIcon /> : <></>}</td>
                                    <td>{rows3.find(row => row.DayOfWeek === 5 && row.StartHour.startsWith(`${hour}:`)) ? <PoolIcon /> : <></>}</td>
                                    <td>{rows3.find(row => row.DayOfWeek === 6 && row.StartHour.startsWith(`${hour}:`)) ? <PoolIcon /> : <></>}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>}
        </div>
        ));
};

export default Schedule;
