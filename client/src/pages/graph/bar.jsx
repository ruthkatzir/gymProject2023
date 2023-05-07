import React from "react";
import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
    const { currentUser, token } = useContext(AuthContext);
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                <h3 className="desc">{currentUser.firstName} you work so great!</h3>
            </div>
        );
    }
    return null;
};

export default function BarParticipations() {

    const [userParticipations, setUserParticipations] = useState([]);
    const { currentUser, token } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const res = await axios.get(`http://localhost:3600/api/participations/${currentUser.gmail}`, config).catch(error => console.error(error));
        if (res.statusText == 'OK') {
            setUserParticipations(res.data);
            let types = [];
            res.data.forEach(x => { types.push(x.lessonType) })
            let unique = [...new Set(types)];
            setData({ name: unique[0] });
            let countlesson = {};
            unique.forEach(lesson => { countlesson[lesson] = 0 });
            types.forEach(lesson => { countlesson[lesson]++ });

            let obj = [];
            unique.forEach(x => {
                obj.push({
                    name: x,
                    uv: 3000,
                    pv: countlesson[x],
                    amt: 2210
                })
            })
            setData(obj);
        }
    }

    return (
        <BarChart
            width={700}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="pv" barSize={20} fill="#8884d8" />
        </BarChart>
    );
}
