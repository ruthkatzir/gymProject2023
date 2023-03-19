// // import { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './prices.css';
// // import BasicCard from './card';
// // import { Grid, Item } from '@material-ui/core';

// // const Prices = () => {
// //     const [rows, setRows] = useState([]);

// //     useEffect(() => {
// //         axios.get('http://localhost:3600/api/price')
// //             .then(response => {
// //                 console.log(response.data);
// //                 setRows(response.data);
// //             })
// //             .catch(error => console.error(error));
// //     }, []);

// //     const handleChoosingButtonClick = async (rowId) => {

// //         const token = localStorage.getItem("token");
// //         const userId = localStorage.getItem("userId");
// //         const current = new Date();
// //         const date = current.getDate();
// //         //const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
// //         const numEnters = rows[rowId].numEnter;
// //         const type = rows[rowId].id;
// //         const config = {
// //             headers: { Authorization: `Bearer ${token}` }
// //         };
// //         console.log("before");
// //         const res = await axios.get(`http://localhost:3600/api/price/${rowId}`);

// //         const price = res.data

// //         axios.post("http://localhost:3600/api/purchase", { userId: userId, type: type, numEnters: price.numEnter },
// //             config
// //         ).then(console.log).catch(console.log);

// //         const updatedRows = rows.map((row) => {
// //             if (row.id === rowId)
// //                 return { ...row, choosing: 'bought' };
// //             else
// //                 return row;
// //         })
// //         setRows(updatedRows);
// //     };

// //     return (
// //         <div className="prices">
// //             {/* <table>
// //                 <thead>
// //                     <tr>
// //                         <th>Type</th>
// //                         <th>Price</th>
// //                         <th>term</th>
// //                         <th>num Of Enters</th>
// //                         <th>Choosing</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {rows.map((row) => (
// //                         <tr key={row.id}>
// //                             <td>{row.type}</td>
// //                             <td>{row.price}</td>
// //                             <td>{row.term}</td>
// //                             <td>{row.numOfEnters}</td>
// //                             <td>
// //                                 {row.choosing === 'bought' ? (
// //                                     'bought'
// //                                 ) : (
// //                                     <button onClick={() => handleChoosingButtonClick(row.id)}>
// //                                         Buy
// //                                     </button>
// //                                 )}
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table> */}

// //             <Grid container spacing={2}>
// //                 {<Grid item xs={12}>
// //                     <Item><BasicCard></BasicCard></Item>
// //                 </Grid>
// //                 }
// //                 {/* {<Grid item xs={12}>
// //                     <BasicCard></BasicCard>
// //                 </Grid>
// //                 } */}
// //             </Grid>
// //         </div>
// //     );
// // };

// // export default Prices;
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './prices.css';
// import BasicCard from './card';
// import { Grid, GridListTile } from '@material-ui/core';

// const Prices = () => {
//     const [rows, setRows] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:3600/api/price')
//             .then(response => {
//                 console.log(response.data);
//                 setRows(response.data);
//             })
//             .catch(error => console.error(error));
//     }, []);

//     const handleChoosingButtonClick = async (rowId) => {

//         const token = localStorage.getItem("token");
//         const userId = localStorage.getItem("userId");
//         const current = new Date();
//         const date = current.getDate();
//         //const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
//         const numEnters = rows[rowId].numEnter;
//         const type = rows[rowId].id;
//         const config = {
//             headers: { Authorization: `Bearer ${token}` }
//         };
//         console.log("before");
//         const res = await axios.get(`http://localhost:3600/api/price/${rowId}`);

//         const price = res.data

//         axios.post("http://localhost:3600/api/purchase", { userId: userId, type: type, numEnters: price.numEnter },
//             config
//         ).then(console.log).catch(console.log);

//         const updatedRows = rows.map((row) => {
//             if (row.id === rowId)
//                 return { ...row, choosing: 'bought' };
//             else
//                 return row;
//         })
//         setRows(updatedRows);
//     };

//     return (
//         <div className="prices">
//             <Grid container spacing={2}>
//                 <Grid item xs={4}>
//                     <GridListTile><BasicCard></BasicCard></GridListTile>
//                 </Grid>
//                 {/* <Grid item xs={4}>
//                     <GridListTile><BasicCard></BasicCard></GridListTile>
//                 </Grid> */}
//             </Grid>
//         </div>
//     );
// };

// export default Prices;
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './prices.css';
import CourseCard from './card';
import { Grid } from '@material-ui/core';

const Prices = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3600/api/price')
            .then(response => {
                console.log(response.data);
                setRows(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const handleChoosingButtonClick = async (rowId) => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const numEnters = rows[rowId].numOfEnters;
        const type = rows[rowId].id;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        console.log("before");
        const res = await axios.get(`http://localhost:3600/api/price/${rowId}`);
        const price = res.data;
        // axios.post("http://localhost:3600/api/purchase", { userId: userId, type: type, numEnters: price.numEnter }, config)
        //     .then(console.log)
        //     .catch(console.log);
        // const updatedRows = rows.map((row) => {
        //     if (row.id === rowId)
        //         return { ...row, choosing: 'bought' };
        //     else
        //         return row;
        // })
        // setRows(updatedRows);
    };

    return (
        <div className="prices" style={{ marginTop: 70, color: 'red' }}>
            <Grid container spacing={2}>
                {rows.map((row) => (
                    <React.Fragment key={row.id}>
                        <Grid item xs={12} sm={6} md={3} lg={6}>
                            <CourseCard
                                type={row.id}
                                typeName={row.type}
                                price={row.price}
                                term={row.term}
                                numEnter={row.numEnter}
                                handleChoosingButtonClick={() => handleChoosingButtonClick(row.id)}
                                choosing={row.choosing}
                            />
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>


        </div>
    );
};
export default Prices;
