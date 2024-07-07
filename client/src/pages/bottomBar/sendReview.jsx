// // import * as React from 'react';
// // import Button from '@mui/material/Button';
// // import TextField from '@mui/material/TextField';
// // import Dialog from '@mui/material/Dialog';
// // import DialogActions from '@mui/material/DialogActions';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogContentText from '@mui/material/DialogContentText';
// // import DialogTitle from '@mui/material/DialogTitle';
// // import axios from "axios";
// // import Alert from '@mui/material/Alert';
// // import Stack from '@mui/material/Stack';
// // import { useNavigate } from "react-router-dom";
// // import { useState } from 'react';

// // // function BasicAlerts({ success }) {

// // //   return (
// // //     <Stack sx={{ width: '100%' }} spacing={2}>
// // //       {!success && <Alert severity="error">פנייתך לא התקבלה אנא נסה שנית</Alert>}

// // //       {success && <Alert severity="success">פנייתך התקבלה בהצלחה ותטופל בהקדם</Alert>}
// // //     </Stack>
// // //   );
// // // }

// // export default function concatUs() {

// //   const navigate = useNavigate();
// //   const [success, setSuccess] = useState(false);
// //   const [alert, setAlert] = useState(false);
// //   // const [open, setOpen] = React.useState(true);
// //   const [name, setName] = React.useState("");
// //   const [email, setEmail] = React.useState("");
// //   const [content, setContent] = React.useState("");


// //   const handleSubmit = async (event) => {
// //     handleClose();
// //     event.preventDefault();
// //     const newContent = `name: ${name} email: ${email} content:${content}`;
// //     const res = await axios.post('http://localhost:3600/reviews', { content: newContent }, {
// //       headers: {
// //         'authorization': `Bearer ${localStorage.getItem('token')}`,
// //         'content-type': 'application/json'
// //       }
// //     })
// //     if (res.statusText == 'Created')
// //       setSuccess(true);

// //     else {
// //       setSuccess(false);
// //     }
// //   }

// //   const handleClickOpen = () => {
// //     // setOpen(true);
// //   };

// //   const handleClose = () => {
// //     navigate(-1);
// //     // setOpen(false);
// //     setAlert(true);
// //   };

// //   const handleChange = event => {
// //     if (event.target.id == 'name')
// //       setName(event.target.value);
// //     if (event.target.id == 'email')
// //       setEmail(event.target.value);
// //     else
// //       setContent(event.target.value);


// //   };

// //   return (
// //     <>
// //       {/* {alert && <Alert severity="error">This is an error alert — check it out!</Alert>} */}
// //       <Dialog>
// //         <DialogTitle>צור קשר</DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             autoFocus
// //             margin="dense"
// //             id="name"
// //             label="Name:"
// //             type="text"
// //             fullWidth
// //             variant="standard"
// //             // onChange={handleChange}
// //           />
// //           <TextField
// //             autoFocus
// //             margin="dense"
// //             id="email"
// //             label="Email Address:"
// //             type="email"
// //             fullWidth
// //             variant="standard"
// //             // onChange={handleChange}
// //           />
// //           <TextField multiline
// //             autoFocus
// //             margin="dense"
// //             id="content"
// //             label="Content:"
// //             type="text"
// //             fullWidth
// //             variant="standard"
// //             // onChange={handleChange}
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button>Cancel</Button>
// //           <Button onClick={handleSubmit}>Submit</Button>
// //         </DialogActions>
// //       </Dialog>
// //     </>
// //   );}
// // }
// import React, { Component } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import axios from "axios";
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
// // import { withRouter } from 'react-router-dom'; // for useNavigate equivalent in class component

// class ContactUs extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       success: false,
//       alert: false,
//       open: true,
//       name: "",
//       email: "",
//       content: "",
//     };
//   }

//   handleChange = (event) => {
//     const { id, value } = event.target;
//     this.setState({ [id]: value });
//   }

//   handleSubmit = async (event) => {
//     event.preventDefault();
//     this.handleClose();
//     const { name, email, content } = this.state;
//     const newContent = `name: ${name} email: ${email} content:${content}`;
//     try {
//       const res = await axios.post('http://localhost:3600/reviews', { content: newContent }, {
//         headers: {
//           'authorization': `Bearer ${localStorage.getItem('token')}`,
//           'content-type': 'application/json',
//         }
//       });
//       if (res.statusText === 'Created') {
//         this.setState({ success: true });
//       } else {
//         this.setState({ success: false });
//       }
//     } catch (error) {
//       this.setState({ success: false });
//     }
//     this.setState({ alert: true });
//   }

//   handleClose = () => {
//     this.props.history.goBack(); // Equivalent to navigate(-1)
//     this.setState({ open: false, alert: true });
//   }

//   render() {
//     const { open, alert, success, name, email, content } = this.state;

//     return (
//       <>
//         {alert && (
//           <Stack sx={{ width: '100%' }} spacing={2}>
//             {!success && <Alert severity="error">פנייתך לא התקבלה אנא נסה שנית</Alert>}
//             {success && <Alert severity="success">פנייתך התקבלה בהצלחה ותטופל בהקדם</Alert>}
//           </Stack>
//         )}
//         <Dialog open={open} onClose={this.handleClose}>
//           <DialogTitle>צור קשר</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Please fill out the form below and we will get back to you shortly.
//             </DialogContentText>
//             <TextField
//               autoFocus
//               margin="dense"
//               id="name"
//               label="Name:"
//               type="text"
//               fullWidth
//               variant="standard"
//               value={name}
//               onChange={this.handleChange}
//             />
//             <TextField
//               margin="dense"
//               id="email"
//               label="Email Address:"
//               type="email"
//               fullWidth
//               variant="standard"
//               value={email}
//               onChange={this.handleChange}
//             />
//             <TextField
//               multiline
//               margin="dense"
//               id="content"
//               label="Content:"
//               type="text"
//               fullWidth
//               variant="standard"
//               value={content}
//               onChange={this.handleChange}
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={this.handleClose}>Cancel</Button>
//             <Button onClick={this.handleSubmit}>Submit</Button>
//           </DialogActions>
//         </Dialog>
//       </>
//     );
//   }
// }

// export default ContactUs;

import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      alert: false,
      open: true,
      name: "",
      email: "",
      content: "",
    };
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, content } = this.state;
    const newContent = `name: ${name} email: ${email} content:${content}`;
    try {
      const res = await axios.post('http://localhost:3600/reviews', { content: newContent }, {
        headers: {
          'authorization': `Bearer ${localStorage.getItem('token')}`,
          'content-type': 'application/json',
        }
      });
      if (res.statusText === 'Created') {
        this.setState({ success: true });
      } else {
        this.setState({ success: false });
      }
    } catch (error) {
      this.setState({ success: false });
    }
    this.setState({ open: false, alert: true });
  }

  handleClose = () => {
    // this.props.history.goBack(); // Equivalent to navigate(-1)
    this.setState({ open: false });
  }

  render() {
    const { open, alert, success, name, email, content } = this.state;

    return (
      <>
        {alert && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            {!success && <Alert severity="error">פנייתך לא התקבלה אנא נסה שנית</Alert>}
            {success && <Alert severity="success">פנייתך התקבלה בהצלחה ותטופל בהקדם</Alert>}
          </Stack>
        )}
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>צור קשר</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below and we will get back to you shortly.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name:"
              type="text"
              fullWidth
              variant="standard"
              value={name}
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="email"
              label="Email Address:"
              type="email"
              fullWidth
              variant="standard"
              value={email}
              onChange={this.handleChange}
            />
            <TextField
              multiline
              margin="dense"
              id="content"
              label="Content:"
              type="text"
              fullWidth
              variant="standard"
              value={content}
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default ContactUs;
