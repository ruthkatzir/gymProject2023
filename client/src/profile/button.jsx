// import * as React from 'react';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';
// import axios from 'axios';


// const Btns = (props) => {
//     const w = props.width;
//     const h = props.height;
//     const hip = props.Hip;
//     const waist = props.Waist;

//     const setMeasurments = () => {
//         const token = localStorage.getItem("token");
//         const userId = localStorage.getItem("userId");
//         const config = {
//             headers: { Authorization: `Bearer ${token}` }
//         };
//         axios.post("http://localhost:3600/api/measurements", { weight: w, userId: 'rutkatzir@gmail.com', height: h, HipCircumference: hip, WaistCircumference: waist },
//             config
//         ).then(console.log).catch(console.log);
//     }
//     //weight, measureDate, userId,height,WaistCircumference,HipCircumference
//     return (
//         <Stack direction="row" spacing={2}>
//             {/* <Button style={{ "width": 100 }} onClick={setMeasurments} variant="outlined" startIcon={<DeleteIcon />}>
//             Delete
//         </Button> */}
//             <Button style={{ "width": 100 }} onClick={setMeasurments} variant="contained" endIcon={<SendIcon />}>
//                 Send
//             </Button>
//         </Stack>
//     );
// }
// export default Btns;
// //onClick={setMeasurments}

import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import axios from 'axios';

const Btns = (props) => {
    const w = props.width;
    const h = props.height;
    const hip = props.Hip;
    const waist = props.Waist;

    const setMeasurments = () => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.post("http://localhost:3600/api/measurements", {
            weight: w,
            userId: 'rutkatzir@gmail.com',
            height: h,
            HipCircumference: hip,
            WaistCircumference: waist
        }, config)
            .then(console.log)
            .catch(console.log);
    };

    return (
        <Stack direction="row" spacing={2}>
            {/* <Button style={{ "width": 100 }} onClick={setMeasurments} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button> */}
            <Button
                style={{
                    width: 100,
                    backgroundColor: '#4caf50',
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
