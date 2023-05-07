import FirstGraph from './first';
import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import BarParticipations from './bar';

const Graph = () => {
    const [userMeasurements, setUserMeasurements] = useState([]);
    const { currentUser, token } = useContext(AuthContext);
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const res = await axios.get(`http://localhost:3600/api/measurements/${currentUser.gmail}`, config).catch(error => console.error(error));
        if (res.statusText === 'OK') {
            setUserMeasurements(res.data);
        }
    }

    var data1 = [];
    userMeasurements.forEach(e => {
        data1.push({ name: e.measureDate, value: e.WaistCircumference });
    })

    var data2 = [];
    userMeasurements.forEach(e => {
        data2.push({ name: e.measureDate, value: e.HipCircumference });
    })

    var data3 = [];
    userMeasurements.forEach(e => {
        var BMI = e.weight / (e.height * e.height);
        data3.push({ name: e.measureDate, value: BMI });
    })


    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: 1 }}>
                <h4>היקף ירכיים</h4>
                <FirstGraph data={data1} />
            </div>
            <div style={{ flex: 1 }}>
                <h4>היקף מותניים</h4>
                <FirstGraph data={data2} />
            </div>
            <div style={{ flex: 1 }}>
                <h4>BMI</h4>
                <FirstGraph data={data3} />
            </div>
            <div style={{ flex: 1 }}>
                <h4>השתתפויות</h4>
                <BarParticipations></BarParticipations>
            </div>
        </div>
    );
};

export default Graph;
