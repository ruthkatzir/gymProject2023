import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

const Regulations = ({ title, content }) => {

    return (
        <div style={{ marginTop: '20%' }}>
            <Typography variant="h6" component="h2" gutterBottom>
                Regulations
            </Typography>
            <Typography variant="body1" component="div">
                General Rules and Regulations:
                Persons using the equipment in the Gymnasium are responsible for their own safety. They are advised to seek advice and assistance from our staff in the Gymnasium if necessary.

                Smoking, eating and drinking (except water) is prohibited in the Gymnasium at all times.

                For the safety of all users, please refrain from preventing or interfering others’ use of the equipment in the Gymnasium.

                For the benefit of all, it is requested that you return equipment to the corresponding place when finished.
            </Typography>
        </div>
    );
};

export default Regulations;

