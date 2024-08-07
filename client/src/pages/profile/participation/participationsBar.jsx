// // import React, { useState, useEffect, useContext } from "react";
// // import axios from "axios";
// // import {
// //     BarChart,
// //     Bar,
// //     XAxis,
// //     YAxis,
// //     CartesianGrid,
// //     Tooltip,
// //     Legend,
// //     ResponsiveContainer,
// // } from "recharts";
// // import { AuthContext } from "../../../context/authContext";

// // const CustomTooltip = ({ active, payload, label }: any) => {
// //     const { currentUser } = useContext(AuthContext);
// //     if (active && payload && payload.length) {
// //         return (
// //             <div className="custom-tooltip">
// //                 <p className="label">{`${label} : ${payload[0].value}`}</p>
// //                 <h3 className="desc">{`${currentUser.firstName} you work so great!`}</h3>
// //             </div>
// //         );
// //     }
// //     return null;
// // };

// // const BarParticipations = () => {
// //     const { currentUser, token } = useContext(AuthContext);
// //     const [userParticipations, setUserParticipations] = useState([]);
// //     const [data, setData] = useState([]);

// //     useEffect(() => {
// //         loadData();
// //     }, []);

// //     const loadData = async () => {
// //         try {
// //             const config = {
// //                 headers: { Authorization: `Bearer ${token}` },
// //             };
// //             const res = await axios.get(
// //                 `http://localhost:3600/api/participations/${currentUser.gmail}`,
// //                 config
// //             );
// //             if (res.statusText === "OK") {
// //                 const participations = res.data;
// //                 setUserParticipations(participations);
// //                 const types = participations.map((p) => p.lessonType);
// //                 const unique = [...new Set(types)];
// //                 setData([{ name: unique[0] }]);
// //                 const countlesson = {};
// //                 unique.forEach((lesson) => (countlesson[lesson] = 0));
// //                 types.forEach((lesson) => countlesson[lesson]++);
// //                 const obj = unique.map((lesson) => ({
// //                     name: lesson,
// //                     uv: 3000,
// //                     pv: countlesson[lesson],
// //                     amt: 2210,
// //                 }));
// //                 setData(obj);
// //             }
// //         } catch (error) {
// //             console.error(error);
// //         }
// //     };

// //     return (
// //         <ResponsiveContainer width="100%" height={500}>
// //             <BarChart
// //                 data={data}
// //                 margin={{
// //                     top: 0,
// //                     right: 30,
// //                     left: 80,
// //                     bottom: 5,
// //                 }}
// //             >
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="name" />
// //                 <YAxis />
// //                 <Tooltip content={<CustomTooltip />} />
// //                 <Legend />
// //                 <Bar dataKey="pv" barSize={60} fill="#8884d8" />
// //             </BarChart>
// //         </ResponsiveContainer>
// //     );
// // };

// // export default BarParticipations;
// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import {
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
//     ResponsiveContainer,
// } from "recharts";
// import { AuthContext } from "../../../context/authContext";

// const CustomTooltip = ({ active, payload, label }: any) => {
//     const { currentUser } = useContext(AuthContext);
//     if (active && payload && payload.length) {
//         return (
//             <div className="custom-tooltip">
//                 <p className="label">{`${label} : ${payload[0].value}`}</p>
//                 <h3 className="desc">{`${currentUser.firstName} you work so great!`}</h3>
//             </div>
//         );
//     }
//     return null;
// };

// const BarParticipations = () => {
//     const { currentUser, token } = useContext(AuthContext);
//     const [userParticipations, setUserParticipations] = useState([]);
//     const [lessons, setLessons] = useState([]);
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         loadData();
//         loadLessons();
//     }, []);

//     const loadLessons = async () => {
//         try {
//             const config = {
//                 headers: { Authorization: `Bearer ${token}` },
//             };
//             const res = await axios.get(`http://localhost:3600/api/lessons`, config);
//             if (res.statusText === "OK") {
//                 setLessons(res.data);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const loadData = async () => {
//         try {
//             const config = {
//                 headers: { Authorization: `Bearer ${token}` },
//             };
//             const res = await axios.get(
//                 `http://localhost:3600/api/participations/${currentUser.gmail}`,
//                 config
//             );
//             if (res.statusText === "OK") {
//                 const participations = res.data;
//                 setUserParticipations(participations);

//                 const lessonCounts = participations.reduce((acc, p) => {
//                     acc[p.lessonType] = (acc[p.lessonType] || 0) + 1;
//                     return acc;
//                 }, {});
//                 const res = await axios.get(
//                     `http://localhost:3600/api/lessons/${currentUser.gmail}`,
//                     config
//                 );
//                 const lessonData = Object.keys(lessonCounts).map(lessonName => {
//                     const lesson = lessons.find(l => l.name === lessonName);
//                     return {
//                         name: lesson ? lesson.number : lessonName,
//                         uv: 3000,
//                         pv: lessonCounts[lessonName],
//                         amt: 2210,
//                     };
//                 });

//                 setData(lessonData);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <ResponsiveContainer width="100%" height={500}>
//             <BarChart
//                 data={data}
//                 margin={{
//                     top: 0,
//                     right: 30,
//                     left: 80,
//                     bottom: 5,
//                 }}
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />
//                 <Bar dataKey="pv" barSize={60} fill="#8884d8" />
//             </BarChart>
//         </ResponsiveContainer>
//     );
// };

// export default BarParticipations;
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { AuthContext } from "../../../context/authContext";

const CustomTooltip = ({ active, payload, label }: any) => {
    const { currentUser } = useContext(AuthContext);
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                <h3 className="desc">{`${currentUser.firstName} you work so great!`}</h3>
            </div>
        );
    }
    return null;
};

const BarParticipations = () => {
    const { currentUser, token } = useContext(AuthContext);
    const [userParticipations, setUserParticipations] = useState([]);
    const [lessons, setLessons] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        loadLessons();
        loadData();
    }, []);

    const loadLessons = async () => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            const res = await axios.get(`http://localhost:3600/api/lessons`, config);
            if (res.statusText === "OK") {
                setLessons(res.data);
            }
        } catch (error) {
            console.error("Failed to load lessons", error);
        }
    };

    const loadData = async () => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            const res = await axios.get(
                `http://localhost:3600/api/participations/${currentUser.gmail}`,
                config
            );
            if (res.statusText === "OK") {
                const participations = res.data;
                setUserParticipations(participations);

                const lessonCounts = participations.reduce((acc, p) => {
                    acc[p.lessonType] = (acc[p.lessonType] || 0) + 1;
                    return acc;
                }, {});

                const lessonData = Object.keys(lessonCounts).map(lessonName => {
                    const lesson = lessons.find(l => l.id == lessonName);
                    let x_names=["0","zomna","pilatis","sport"];
                    return {
                        name: x_names[lessonName],
                        uv: 3000,
                        pv: lessonCounts[lessonName],
                        amt: 2210,
                    };
                });

                setData(lessonData);
            }
        } catch (error) {
            console.error("Failed to load participations", error);
        }
    };

    return (
        <ResponsiveContainer width="100%" height={500}>
            <BarChart
                data={data}
                margin={{
                    top: 0,
                    right: 30,
                    left: 80,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="pv" barSize={60} fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarParticipations;
