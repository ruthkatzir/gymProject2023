// // import React from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// // import List from '@material-ui/core/List';
// // import ListItem from '@material-ui/core/ListItem';
// // import ListItemIcon from '@material-ui/core/ListItemIcon';
// // import ListItemText from '@material-ui/core/ListItemText';
// // import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

// // const useStyles = makeStyles((theme) => ({
// //     root: {
// //         width: '100%',
// //         maxWidth: 360,
// //         backgroundColor: theme.palette.background.paper,
// //     },
// // }));

// // const gymBranches = [
// //     'New York City',
// //     'Los Angeles',
// //     'Chicago',
// //     'Houston',
// //     'Philadelphia',
// //     'Miami',
// //     'San Francisco',
// //     'Seattle',
// //     'Atlanta',
// // ];

// // const GymBranchList = () => {
// //     const classes = useStyles();

// //     return (
// //         <>
// //         <h2 style={{marginTop:'7%'}}>Our Branches</h2>
// //         <List component="nav" className={classes.root} aria-label="gym branches list">
// //             {gymBranches.map((branch) => (
// //                 <ListItem key={branch}>
// //                     <ListItemIcon>
// //                         <FitnessCenterIcon />
// //                     </ListItemIcon>
// //                     <ListItemText primary={branch} />
// //                 </ListItem>
// //             ))}
// //         </List>
// //         </>
// //     );
// // };

// // export default GymBranchList;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         maxWidth: 360,
//         backgroundColor: theme.palette.background.paper,
//     },
// }));

// const gymBranches = [
//     'New York City',
//     'Los Angeles',
//     'Chicago',
//     'Houston',
//     'Philadelphia',
//     'Miami',
//     'San Francisco',
//     'Seattle',
//     'Atlanta',
// ];

// const GymBranchList = () => {
//     const classes = useStyles();

//     return (
//         <>
//             <h2 style={{ marginTop: '7%' }}>Our Branches</h2>
//             <List component="nav" className={classes.root} aria-label="gym branches list">
//                 {gymBranches.map((branch) => (
//                     <ListItem key={branch}>
//                         <ListItemIcon>
//                             <FitnessCenterIcon />
//                         </ListItemIcon>
//                         <ListItemText primary={branch} />
//                     </ListItem>
//                 ))}
//             </List>
//         </>
//     );
// };

// export default GymBranchList;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 500,
        margin: 'auto',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
    },
    listItem: {
        backgroundColor: 'white',
        borderRadius: '5px',
        marginBottom: '10px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
    },
    listItemIcon: {
        color: '#ff5722',
    },
    listItemText: {
        fontWeight: 'bold',
    },
}));

const gymBranches = [
    'New York City',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Jerusalem',
    'Bnei Brak',
];

const GymBranchList = () => {
    const classes = useStyles();

    return (
        <>
            <h2 style={{ marginTop: '7%', textAlign: 'center' }}>Our Branches</h2>
            <List component="nav" className={classes.root} aria-label="gym branches list">
                {gymBranches.map((branch) => (
                    <ListItem key={branch} className={classes.listItem}>
                        <ListItemIcon className={classes.listItemIcon}>
                            <FitnessCenterIcon />
                        </ListItemIcon>
                        <ListItemText primary={branch} classes={{ primary: classes.listItemText }} />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GymBranchList;
