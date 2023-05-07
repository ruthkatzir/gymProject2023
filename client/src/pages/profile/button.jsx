import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useState, useContext } from 'react';
import { AuthContext } from "../../context/authContext";

const Btns = (props) => {
    const w = props.width;
    const h = props.height;
    const hip = props.Hip;
    const waist = props.Waist;
    const { currentUser } = useContext(AuthContext);

    const setMeasurments = () => {
        const token = localStorage.getItem("token");
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.post("http://localhost:3600/api/measurements", {
            weight: w,
            userId: currentUser.gmail,
            height: h,
            HipCircumference: hip,
            WaistCircumference: waist
        }, config)
            .then(console.log)
            .catch(console.log);
    };

    return (
        <Stack direction="row" spacing={2}>
            <Button
                style={{
                    width: 100,
                    marginLeft:50,
                    backgroundColor: '#4caf50',
                    marginTop:2,
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#357a38'
                    }
                }}
                onClick={setMeasurments}
                variant="contained"
                endIcon={<SendIcon />}
            >
                Send
            </Button>
        </Stack>
    );
};

export default Btns;