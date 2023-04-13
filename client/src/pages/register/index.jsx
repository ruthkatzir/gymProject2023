
// import './signUp.css';
// function Signup() {
// const [firstName, setFirstName] = useState('');
// const [lastName, setLastName] = useState('');
// const [dob, setDob] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [passwordVerify, setPasswordVerify] = useState('');
// const [err, setErr] = useState(null);
//     // const [height, setHeight] = useState('');
//     // const [weight, setWeight] = useState('');
//     // const [hip, setHip] = useState('');
//     // const [WaistCircumference, setWaistCircumference] = useState('');
// const [pic, setPic] = useState('');
// const [phone, setPhone] = useState('');
//     const [currentStep, setCurrentStep] = useState(1);

//     const registToApi = async (e) => {
//         try {
//             const res = await axios.post("http://localhost:3600/api/auth/register", { gmail: email, firstName: firstName, lastName: lastName, phoneNum: phone, password, ImgPath: "aa/aaa/aaaf", DateOfBirth: dob })
//             setErr("created");
//         } catch (err) {
//             setErr(err.response.data?.message);
//         }
//     }

//     const handleNextStep = (e) => {
//         e.preventDefault();
//         setCurrentStep(currentStep + 1);
//     }

//     const handlePrevStep = (e) => {
//         e.preventDefault();
//         setCurrentStep(currentStep - 1);
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // handle signup logic
//     }
//     function handleFileInputChange(event) {
//         setPic(event.target.files[0]);
//     }

//     return (
//         <div className="form-container">
//             <h1> Signup</h1>
//             <h2 className="impressive-heading">Step {currentStep} of 2: Personal Information</h2>
//             {currentStep === 1 && (
//                 <form onSubmit={handleNextStep}>
//                     <label>
//                         First Name:
//                         <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//                     </label>
//                     <br />
//                     <label>
//                         Last Name:
//                         <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//                     </label>
//                     <br />
//                     <label>
//                         Date of Birth:
//                         <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
//                     </label>
//                     <label>
//                         Email:
//                         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                     </label>
//                     <label>
//                         phone number:
//                         <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
//                     </label>
//                     <br />

//                     <br />
//                     <button type="submit">Next Step</button>
//                 </form>
//             )}

//             {currentStep === 2 && (
//                 <form onSubmit={handleSubmit}>
//                     <p>Step 2: Other Information</p>
//                     {/* Add other fields for step 3 */}
//                     <label>
//                         Password:
//                         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                     </label>
//                     <br />
//                     <label>
//                         Confirm Password:
//                         <input type="password" value={passwordVerify} onChange={(e) => setPasswordVerify(e.target.value)} required />
//                     </label>
//                     <label>
//                         picture:
//                         <input type="file" onChange={handleFileInputChange} />
//                     </label>
//                     {err && err}
//                     <br />
//                     <button type="submit" onClick={registToApi}>Submit</button>
//                     <button onClick={handlePrevStep}>Previous Step</button>
//                 </form>
//             )}
//         </div>
//     );
// }

// export default Signup;

// // //mdbootstrap


// // import { useState } from 'react';
// // import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';
// // import { Container } from '@material-ui/core';
// // import { makeStyles } from '@mui/styles';


// // const useStyles = makeStyles({
// //     formContainer: {
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         padding: '1rem',
// //         backgroundColor: '#f0f0f0',
// //     },
// //     impressiveHeading: {
// //         marginTop: '2rem',
// //     },
// //     formControl: {
// //         marginBottom: '1rem',
// //         width: '100%',
// //     },
// //     buttonsContainer: {
// //         marginTop: '2rem',
// //         display: 'flex',
// //         justifyContent: 'space-between',
// //         width: '100%',
// //     },
// // });

// // const Signup = () => {
// //     const [firstName, setFirstName] = useState('');
// //     const [lastName, setLastName] = useState('');
// //     const [dob, setDob] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [passwordVerify, setPasswordVerify] = useState('');
// //     const [err, setErr] = useState(null);
// //     const [pic, setPic] = useState('');
// //     const [phone, setPhone] = useState('');
// //     const [currentStep, setCurrentStep] = useState(1);
// //     const classes = useStyles();

// //     const registToApi = async (e) => {
// //         try {
// //             const res = await axios.post("http://localhost:3600/api/auth/register", { gmail: email, firstName: firstName, lastName: lastName, phoneNum: phone, password, ImgPath: "aa/aaa/aaaf", DateOfBirth: dob })
// //             setErr("created");
// //         } catch (err) {
// //             setErr(err.response.data?.message);
// //         }
// //     }

// //     const handleNextStep = (e) => {
// //         e.preventDefault();
// //         setCurrentStep(currentStep + 1);
// //     }

// //     const handlePrevStep = (e) => {
// //         e.preventDefault();
// //         setCurrentStep(currentStep - 1);
// //     }

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         // handle signup logic
// //     }

// //     function handleFileInputChange(event) {
// //         setPic(event.target.files[0]);
// //     }

// //     return (
// //         <Container maxWidth="sm" className="form-container">
// //             <Typography variant="h1" component="h1">Signup</Typography>
// //             <Typography variant="h2" component="h2">Step {currentStep} of 2: Personal Information</Typography>
// //             {currentStep === 1 && (
// //                 <form onSubmit={handleNextStep}>
// //                     <TextField
// //                         label="First Name"
// //                         value={firstName}
// //                         onChange={(e) => setFirstName(e.target.value)}
// //                         variant="outlined"
// //                         fullWidth
// //                         required
// //                     />
// //                     <br />
// //                     <TextField
// //                         label="Last Name"
// //                         value={lastName}
// //                         onChange={(e) => setLastName(e.target.value)}
// //                         variant="outlined"
// //                         fullWidth
// //                         required
// //                     />
// //                     <br />
// //                     <TextField
// //                         label="Date of Birth"
// //                         type="date"
// //                         value={dob}
// //                         onChange={(e) => setDob(e.target.value)}
// //                         variant="outlined"
// //                         fullWidth
// //                         required
// //                     />
// //                     <br />
// //                     <TextField
// //                         label="Email"
// //                         type="email"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                         variant="outlined"
// //                         fullWidth
// //                         required
// //                     />
// //                     <br />
// //                     <TextField
// //                         label="Phone Number"
// //                         value={phone}
// //                         onChange={(e) => setPhone(e.target.value)}
// //                         variant="outlined"
// //                         fullWidth
// //                     />
// //                     <br />
// //                     <br />
// //                     <Button type="submit" variant="contained" color="primary">Next Step</Button>
// //                 </form>
// //             )}
// //             {currentStep === 2 && (
// //                 <form onSubmit={handleSubmit}>
// //                     <Typography variant="h2" component="h2">Step 2: Other Information</Typography>
// //                     <TextField
// //                         label="Password"
// //                         type="password"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                         variant="outlined"
// //                         fullWidth
// //                         required
// //                     />
// //                     <br />
// //                     <TextField
// //                         label="Confirm Password"
// //                         type="password"
// //                         value={passwordVerify}
// //                         onChange={(e) => setPasswordVerify(e.target.value)}
// //                         variant="outlined"
// //                         fullWidth
// //                         required
// //                     />
// //                     <br />
// //                     <TextField
// //                         label="Picture"
// //                         type="file"
// //                         onChange={handleFileInputChange}
// //                         variant="outlined"
// //                         fullWidth
// //                     />
// //                     {err && err}
// //                     <br />
// //                     <Button type="submit" variant="contained" color="primary" onClick={registToApi}>Submit</Button>
// //                     <Button onClick={handlePrevStep}>Previous Step</Button>
// //                 </form>
// //             )}
// //         </Container>
// //     );
// // }
// // export default Signup;

import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Uploader from '../Uploader';
// import Uploader from "../../components/Uploader";
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';


const steps = ['The first step to fitness', 'The second step to fitness', 'we almost there'];

export default function Signup() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    const [err, setErr] = useState(null);
    const [picture, setPicture] = useState('../');
    const [phone, setPhone] = useState('');

    const isStepOptional = (step) => {
        return step === 1;
    };

    const registToApi = async (e) => {
        try {
            console.log("innnnnnnnnnnnnnnnnn");
            const res = await axios.post("http://localhost:3600/api/auth/register", { gmail: email, firstName: firstName, lastName: lastName, phoneNum: phone, password, ImgPath: picture, DateOfBirth: dob })
            setErr("created");
        } catch (err) {
            setErr(err.response.data?.message);
        }
    }
    // function handleFileInputChange(event) {
    //     setPicture(event.target.files[0]);
    // }

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === steps.length - 1) {
            registToApi()
        }
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%', backgroundColor: 'white', color: 'red' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    // if (isStepOptional(index)) {
                    //     labelProps.optional = (
                    //         <Typography variant="caption">Optional</Typography>
                    //     );
                    // }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1, color: 'red' }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, color: 'red' }}>
                        <Box sx={{ flex: '1 1 auto', color: 'red' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {activeStep === 0 &&
                        <>
                            <br />
                            <TextField
                                label="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                variant="outlined"
                                fullWidth
                                required
                            /><br /><br />
                            <TextField style={{ color: 'red' }}
                                label="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                variant="outlined"
                                fullWidth
                                required
                            /><br /><br />

                            <TextField
                                label="Date of Birth"
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                variant="outlined"
                                fullWidth
                                required
                            /><br /><br />

                            <TextField
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                variant="outlined"
                                fullWidth
                                required
                            /><br /><br />

                            <TextField
                                label="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                variant="outlined"
                                fullWidth
                            />
                        </>}
                    {activeStep === 1 && <>
                        <br />
                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <br /><br />
                        <TextField
                            label="Confirm Password"
                            type="password"
                            value={passwordVerify}
                            onChange={(e) => setPasswordVerify(e.target.value)}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </>}
                    {activeStep === 2 && <>
                        <br />
                        <Uploader file={picture} setFile={setPicture} label="Add Picture" />
                        {/* <TextField
                            label="Picture"
                            type="file"
                            onChange={handleFileInputChange}
                            variant="outlined"
                            fullWidth
                        /> */}
                        {err && err}
                    </>}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, color: 'red' }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto', color: 'red' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1, color: 'red' }}>
                                Skip
                            </Button>
                        )}

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
