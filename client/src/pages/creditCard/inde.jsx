import React from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";

const ServiceForm = () => {

    return <>
        <Grid item xs={12}>
            <Typography variant="h6">Additional data</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                type="date"
                label="date"
                name="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Service"
                name="service"
                variant="outlined"
                fullWidth
            />
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h6">Social Network?</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="facebook"
                name="facebook"
                variant="outlined"
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="twitter"
                name="twitter"
                variant="outlined"
                fullWidth
            />
        </Grid>
    </>
}

export default ServiceForm;