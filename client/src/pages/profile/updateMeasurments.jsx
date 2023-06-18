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
                height: 10,
                //backgroundColor:'red'
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? 'rgba(255, 0, 0, 0.5)'
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
    }, [width]);

    const handleReset = () => {
        setWidth('');
        setHeight('');
        setHip('');
        setWaist('');
    };

    return (
        
        <Box
            sx={{
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#fff',
                boxShadow: '0 20px 4px rgba(0,0,0,0.1)',
                padding: '10px',
                borderRadius: '4px',
                width: '800px',
            }}
        >
            <h3 style={{ marginBottom: 1 }}>Update Your Data</h3>
            <RedBar style={{ marginTop: 1, marginBottom: 1 }} />
            <TextField
                onChange={(e) => setWidth(e.target.value)}
                type="number"
                InputProps={{ inputProps: { min: 100, max: 300 } }}
                style={{ marginLeft: 50 }}
                label={'Width'}
                id="margin-none"
                margin="dense"
                value={width}
            />
            <TextField
                onChange={(e) => setHeight(e.target.value)}
                type="number"
                InputProps={{ inputProps: { min: 15, max: 300 } }}
                style={{ marginLeft: 50 }}
                label={'Height'}
                id="margin-dense"
                margin="dense"
                value={height}
            />
            <RedBar style={{ marginTop: 1, marginBottom: 1,color:'red' }} />
            <TextField
                onChange={(e) => setHip(e.target.value)}
                type="number"
                InputProps={{ inputProps: { min: 10, max: 300 } }}
                style={{ marginLeft: 50 }}
                label={'Hip circumference'}
                id="margin-normal"
                margin="dense"
                value={Hip}
            />
            <TextField
                onChange={(e) => setWaist(e.target.value)}
                type="number"
                InputProps={{ inputProps: { min: 10, max: 300 } }}
                style={{ marginLeft: 50 }}
                label={'Waist circumference'}
                id="margin-normal"
                margin="dense"
                value={Waist}
            />
            <>
                <RedBar style={{ marginTop: 1, marginBottom: 1 }} />
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button style={{ width: 100, marginLeft: 50, marginTop: 2 }} onClick={handleReset} variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    <Btns width={width} height={height} Hip={Hip} Waist={Waist}></Btns>
                </div>
            </>
        </Box>
    );
};

export default Measurment;