// import FirstGraph from './first';
// //change to real data
// const Graph = () => {
//     const data = [
//         { name: 'Jan', value: 10 },
//         { name: 'Feb', value: 20 },
//         { name: 'Mar', value: 15 },
//         { name: 'Apr', value: 25 },
//         { name: 'May', value: 30 },
//         { name: 'Jun', value: 20 },
//     ];
//     return (
//         <>
//             <FirstGraph data={data} />
//             <FirstGraph data={data} />
//             <FirstGraph data={data} />
//             <FirstGraph data={data} />
//         </>
//     );
// }

// export default Graph;

import FirstGraph from './first';

const Graph = () => {
    const data = [
        { name: 'Jan', value: 10 },
        { name: 'Feb', value: 20 },
        { name: 'Mar', value: 15 },
        { name: 'Apr', value: 25 },
        { name: 'May', value: 30 },
        { name: 'Jun', value: 20 },
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: 1 }}>
                <FirstGraph data={data} />
            </div>
            <div style={{ flex: 1 }}>
                <FirstGraph data={data} />
            </div>
            <div style={{ flex: 1 }}>
                <FirstGraph data={data} />
            </div>
            <div style={{ flex: 1 }}>
                <FirstGraph data={data} />
            </div>
        </div>
    );
};

export default Graph;
