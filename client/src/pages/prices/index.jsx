import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './prices.css';
import CourseCard from './card';
import StepContent from '../creditCard/index'
import { Grid } from '@material-ui/core';

const Prices = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3600/api/price')
            .then(response => {
                console.log(response.data);
                setRows(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const handleChoosingButtonClick = async (rowId) => {
        const token = localStorage.getItem("token");
        const numEnters = rows[rowId].numOfEnters;
        const type = rows[rowId].id;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        console.log("before");
        const res = await axios.get(`http://localhost:3600/api/price/${rowId}`);
        const price = res.data;
    };

    return (
        <div className="prices" style={{ marginTop: 70, color: 'red' }}>
            {/* <StepContent></StepContent> */}
            <Grid container spacing={1}>
                {rows.map((row) => (
                    <React.Fragment key={row.id}>
                        <Grid item xs={6} sm={4} md={3} lg={6}>
                            <CourseCard
                                type={row.id}
                                typeName={row.type}
                                price={row.price}
                                term={row.term}
                                numEnter={row.numEnter}
                                handleChoosingButtonClick={() => handleChoosingButtonClick(row.id)}
                                choosing={row.choosing}
                            />
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </div>
    );
};
export default Prices;
