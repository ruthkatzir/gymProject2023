import { useState } from 'react';
import axios from 'axios';
import './signUp.css';
function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    const [err, setErr] = useState(null);
    // const [height, setHeight] = useState('');
    // const [weight, setWeight] = useState('');
    // const [hip, setHip] = useState('');
    // const [WaistCircumference, setWaistCircumference] = useState('');
    const [pic, setPic] = useState('');
    const [phone, setPhone] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    const registToApi = async (e) => {
        try {
            const res = await axios.post("http://localhost:3600/api/auth/register", { gmail: email, firstName: firstName, lastName: lastName, phoneNum: phone, password, ImgPath: "aa/aaa/aaaf", DateOfBirth: dob });
            setErr("created");
        } catch (err) {
            setErr(err.response.data?.message);
        }
    }

    const handleNextStep = (e) => {
        e.preventDefault();
        setCurrentStep(currentStep + 1);
    }

    const handlePrevStep = (e) => {
        e.preventDefault();
        setCurrentStep(currentStep - 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle signup logic
    }
    function handleFileInputChange(event) {
        setPic(event.target.files[0]);
    }

    return (
        <div className="form-container">
            <h1> Signup</h1>
            <h2 className="impressive-heading">Step {currentStep} of 2: Personal Information</h2>
            {currentStep === 1 && (
                <form onSubmit={handleNextStep}>
                    <label>
                        First Name:
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </label>
                    <br />
                    <label>
                        Last Name:
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </label>
                    <br />
                    <label>
                        Date of Birth:
                        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        phone number:
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </label>
                    <br />

                    <br />
                    <button type="submit">Next Step</button>
                </form>
            )}
            
            {currentStep === 2 && (
                <form onSubmit={handleSubmit}>
                    <p>Step 2: Other Information</p>
                    {/* Add other fields for step 3 */}
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </label>
                    <br />
                    <label>
                        Confirm Password:
                        <input type="password" value={passwordVerify} onChange={(e) => setPasswordVerify(e.target.value)} required />
                    </label>
                    <label>
                        picture:
                        <input type="file" onChange={handleFileInputChange} />
                    </label>
                    {err && err}
                    <br />
                    <button type="submit" onClick={registToApi}>Submit</button>
                    <button onClick={handlePrevStep}>Previous Step</button>
                </form>

            )}
        </div>
    );
}

export default Signup;

//mdbootstrap