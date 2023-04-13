// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import {
//     Chart,
//     ArgumentAxis,
//     ValueAxis,
//     BarSeries,
//     Title,
// } from '@devexpress/dx-react-chart-material-ui';

// import { Animation } from '@devexpress/dx-react-chart';

// const imageSize = 50;
// const labelOffset = 10;

// const owner = 'facebook';
// const repository = 'react';

// const getPath = (x, width, y, y1) => `M ${x} ${y1}
//    L ${width + x} ${y1}
//    L ${width + x} ${y + 30}
//    L ${x + width / 2} ${y}
//    L ${x} ${y + 30}
//    Z`;

// const labelStyle = { fill: '#BBDEFB' };

// const BarWithLabel = ({
//     arg, barWidth, maxBarWidth, val, startVal, color, value, style,
// }) => {
//     const width = maxBarWidth * barWidth;
//     return (
//         <React.Fragment>
//             <path d={getPath(arg - width / 2, width, val, startVal)} fill={color} style={style} />
//             <Chart.Label
//                 x={arg}
//                 y={(val + startVal) / 2}
//                 dominantBaseline="middle"
//                 textAnchor="middle"
//                 style={labelStyle}
//             >
//                 {value}
//             </Chart.Label>
//         </React.Fragment>
//     );
// };

// const Grid = props => (
//     <ValueAxis.Grid {...props} strokeDasharray="10 5" />
// );

// const makeAxisLabel = (data) => {
//     const loginToAvatar = new Map();
//     data.forEach(({ login, avatar_url: url }) => {
//         loginToAvatar.set(login, url);
//     });
//     return (props) => {
//         const { text, x, y } = props;
//         // Though "xlinkHref" is deprecated it is used because Safari does not support "href".
//         return (
//             <React.Fragment>
//                 <image
//                     xlinkHref={loginToAvatar.get(text)}
//                     width={imageSize}
//                     height={imageSize}
//                     transform={`translate(${x - (imageSize / 2)} ${y - labelOffset})`}
//                 />
//                 <ArgumentAxis.Label {...props} y={y + imageSize} />
//             </React.Fragment>
//         );
//     };
// };

// export default class Demo extends React.PureComponent {
//     constructor(props) {
//         super(props);

//         this.state = {
//             data: false,
//         };
//     }

//     componentDidMount() {
//         this.getData();
//     }

//     componentDidUpdate() {
//         this.getData();
//     }

//     getData() {
//         const { data: dataState } = this.state;
//         if (!dataState) {
//             fetch(`https://api.github.com/repos/${owner}/${repository}/contributors`)
//                 .then(response => response.json())
//                 .then((data) => {
//                     const slice = data.slice(0, 8);
//                     this.setState({
//                         data: slice,
//                         AxisLabel: makeAxisLabel(slice),
//                     });
//                 })
//                 .catch(() => this.setState({ data: false }));
//         }
//     }

//     render() {
//         const {
//             data: chartData, AxisLabel,
//         } = this.state;

//         return (
//             <Paper>
//                 {
//                     chartData ? (
//                         <Chart data={chartData}>
//                             <ArgumentAxis
//                                 labelComponent={AxisLabel}
//                                 showTick={false}
//                             />
//                             <ValueAxis gridComponent={Grid} />

//                             <BarSeries
//                                 name="Contributions"
//                                 valueField="contributions"
//                                 argumentField="login"
//                                 pointComponent={BarWithLabel}
//                             />
//                             <Title
//                                 text={`Contributions commits to master ${owner}/${repository} repository`}
//                             />
//                             <Animation />
//                         </Chart>
//                     ) : (
//                         <h1>
//                             No data
//                         </h1>
//                     )
//                 }
//             </Paper>
//         );
//     }
// }

// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(() => ({
//     root: {
//         width: '100%',
//         height: '100%',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// }));

// const FirstGraph = ({ data }) => {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <LineChart width={600} height={300} data={data}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="value" stroke="#8884d8" />
//             </LineChart>
//         </div>
//     );
// };

// export default FirstGraph;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const FirstGraph = ({ data, width = 400, height = 200 }) => {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{ width: width, height: height }}>
            <LineChart width={width} height={height} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default FirstGraph;
