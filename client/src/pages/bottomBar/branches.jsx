// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
// import MyComponent from './map';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         maxWidth: 500,
//         margin: 'auto',
//         backgroundColor: '#f0f0f0',
//         borderRadius: '10px',
//         padding: '20px',
//         boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
//     },
//     listItem: {
//         backgroundColor: 'white',
//         borderRadius: '5px',
//         marginBottom: '10px',
//         boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
//     },
//     listItemIcon: {
//         color: '#ff5722',
//     },
//     listItemText: {
//         fontWeight: 'bold',
//     },
// }));

// const gymBranches = [
//     {
//         name: 'New York City',
//         center: [32.07219624639436, 34.77150072649663]
//     },
//     {
//         name: 'Los Angeles',
//         center: [32.07219624639436, 34.77150072649663]
//     }
//     ,
//     {
//         name: 'Chicago',
//         center: [32.07219624639436, 34.77150072649663]
//     }
//     // 'Chicago',
//     // 'Houston',
//     // 'Jerusalem',
//     // 'Bnei Brak',
// ];

// const GymBranchList = () => {
//     const classes = useStyles();

//     return (
//         <>
//             <h2 style={{ marginTop: '7%', textAlign: 'center' }}>Our Branches</h2>
//             <List component="nav" className={classes.root} aria-label="gym branches list">
//                 {gymBranches.map((branch) => (
//                     <ListItem key={branch.name} className={classes.listItem}>
//                         <ListItemIcon className={classes.listItemIcon}>
//                             <FitnessCenterIcon />
//                         </ListItemIcon>
//                         <ListItemText primary={branch.name} classes={{ primary: classes.listItemText }} />
//                     </ListItem>
//                 ))}
//             </List>
//             <h2>our Jerusalem branch location</h2>
//             <MyComponent />

//         </>
//     );
// };

// export default GymBranchList;
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import MyComponent from './map';

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
        cursor: 'pointer',
    },
    listItemIcon: {
        color: '#ff5722',
    },
    listItemText: {
        fontWeight: 'bold',
    },
}));

const gymBranches = [
    {
        name: 'New York City',
        center: { lat: 40.712776, lng: -74.005974 },
    },
    {
        name: 'Los Angeles',
        center: { lat: 34.052235, lng: -118.243683 },
    },
    {
        name: 'Chicago',
        center: { lat: 41.878113, lng: -87.629799 },
    },
    {
        name: 'Jerusalem',
        center: { lat: 31.768319, lng: 35.213710 },
    },
    {
        name: 'Bnei Brak',
        center: { lat: 32.084185, lng: 34.853718 },
    },

];

const GymBranchList = () => {
    const classes = useStyles();
    const [selectedBranch, setSelectedBranch] = useState(null);

    const handleBranchClick = (branch) => {
        setSelectedBranch(branch);
    };

    return (
        <>
            <h2 style={{ marginTop: '7%', textAlign: 'center' }}>Our Branches</h2>
            <List component="nav" className={classes.root} aria-label="gym branches list">
                {gymBranches.map((branch) => (
                    <ListItem
                        key={branch.name}
                        className={classes.listItem}
                        onClick={() => handleBranchClick(branch)}
                        selected={selectedBranch === branch}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            <FitnessCenterIcon />
                        </ListItemIcon>
                        <ListItemText primary={branch.name} classes={{ primary: classes.listItemText }} />
                    </ListItem>
                ))}
            </List>
            {selectedBranch && (
                <>
                    <h2>{`Our ${selectedBranch.name} branch location`}</h2>
                    <MyComponent center={selectedBranch.center} />
                </>
            )}
        </>
    );
};

export default GymBranchList;
