import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';
import Btns from './button';

function RedBar() {
    return (
        <Box
            sx={{
                height: 20,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? 'rgba(255, 0, 0, 0.1)'
                        : 'rgb(255 132 132 / 25%)',
            }}
        />
    );
}

const Measurment = () => {
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [Hip, setHip] = useState('');
    const [Waist, setWaist] = useState('');

    useEffect(() => {
        console.log(width);
    }, [width]);

    const handleReset = () => {
        setWidth('');
        setHeight('');
        setHip('');
        setWaist('');
    };

    return (
        <Box style={{ marginTop: 60, marginRight: 500 }}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8f8f8',
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    padding: '40px',
                    borderRadius: '4px',
                }}
            >
                <h1 style={{ marginBottom: 20 }}>Update Your Data</h1>
                <RedBar style={{ marginTop: 10, marginBottom: 10 }} />
                <TextField
                    onChange={(e) => setWidth(e.target.value)}
                    type="number"
                    InputProps={{ inputProps: { min: 100, max: 300 } }}
                    style={{ marginLeft: 100 }}
                    label={'Width'}
                    id="margin-none"
                    value={width}
                />

                <RedBar style={{ marginTop: 10, marginBottom: 10 }} />
                <TextField
                    onChange={(e) => setHeight(e.target.value)}
                    type="number"
                    InputProps={{ inputProps: { min: 15, max: 300 } }}
                    style={{ marginLeft: 100 }}
                    label={'Height'}
                    id="margin-dense"
                    margin="dense"
                    value={height}
                />
                <RedBar style={{ marginTop: 10, marginBottom: 10 }} />
                <TextField
                    onChange={(e) => setHip(e.target.value)}
                    type="number"
                    InputProps={{ inputProps: { min: 10, max: 300 } }}
                    style={{ marginLeft: 100 }}
                    label={'Hip circumference'}
                    id="margin-normal"
                    margin="normal"
                    value={Hip}
                />
                <RedBar style={{ marginTop: 10, marginBottom: 10 }} />
                <TextField
                    onChange={(e) => setWaist(e.target.value)}
                    type="number"
                    InputProps={{ inputProps: { min: 10, max: 300 } }}
                    style={{ marginLeft: 100 }}
                    label={'Waist circumference'}
                    id="margin-normal"
                    margin="normal"
                    value={Waist}
                />
                <RedBar style={{ marginTop: 10, marginBottom: 10 }} />
                <Btns width={width} height={height} Hip={Hip} Waist={Waist}></Btns>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                    <Button style={{ "width": 100, marginRight: 20 }} onClick={handleReset} variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                </div>
                <RedBar style={{ marginTop: 10, marginBottom: 10 }} />
            </Box>
        </Box>
    );
};

export default Measurment;