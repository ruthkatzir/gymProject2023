import { useState ,useContext} from 'react';
import { AuthContext } from "../../context/authContext"; 
import * as React from 'react';
import axios from 'axios';
import { Button, Card, CardMedia, CardActions, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 import img from './1.jpg';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return < IconButton {...other} />

})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function BasicCard(props) {
    const [expanded, setExpanded] = React.useState(false);
    const [bought, setBought] = React.useState('Buy');
    const {currentUser} = useContext(AuthContext);

    const handleExpandClick = () => {
        setExpanded(!expanded)
    };
    const ChoosingButtonClick = async () => {
        const token = localStorage.getItem("token");
        console.log(props.type, props.numEnter);
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        if (bought === 'Bought') {
            console.log('Item already bought');
            return;
        }
        console.log("here");
        axios.post("http://localhost:3600/api/purchase", { userId: currentUser.gmail, type: props.type, numEnters: props.numEnter }, config)
            .then(console.log)
            .catch(console.log);
        setBought('Bought');
    };


    return (
        <div style={{ margin: 10 }}>
            <Card raised={true} sx={{ maxWidth: 270}}>
                <CardMedia
                    component="img"
                     height="300"
                    //  backgroundSize= 'cover'
                    //  backgroundPosition= 'center 40%'
                    // width="10"
                    //src={'./1.jpg'}
                     image={img}
                    //'https://www.nofshonit-club.co.il/files//%D7%97%D7%93%D7%A8%20%D7%9B%D7%95%D7%A9%D7%A8/%D7%97%D7%93%D7%A8_%D7%9B%D7%95%D7%A9%D7%A8_%D7%91%D7%97%D7%95%D7%9C%D7%95%D7%9F_2.jpg'
                    alt="GFG Logo"
                />
                <CardContent sx={{ bgcolor: "#E8E8E8" }}>
                    <h3>{props.typeName}</h3>
                    <h4 style={{ color: "red" }}>

                    </h4>
                </CardContent>
                <CardActions >
                    {/* <Button variant="contained"
                        color="warning">
                        Share
                    </Button> */}
                    <Button variant="contained"

                        onClick={() => ChoosingButtonClick(props)}
                        color={bought === 'Bought' ? "error" : "success"}>
                        {bought}
                    </Button>

                    <Button variant="contained"
                        color="success">
                         more
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </Button>
                </CardActions>
                <Collapse in={expanded} timeout="auto"
                    unmountOnExit>
                    <CardContent>
                        {<Typography paragraph style={{ color: 'red', backgroundColor: 'black' }}>
                            This course does not require any prior knowledge
                            of Data Structure and Algorithms and it covers
                            all topics in two languages: C++ and Java.
                            You will also learn algorithmic techniques for
                            solving various problems, get to learn
                            important topics for interviews and get fluent
                            in the basics of programming. You will master all
                            the important topics of data structures and
                            algorithms like sorting, strings, heaps, DP,
                            searching, trees and more and even learn this
                            concepts by practicing on real-world projects.
                            If you have any more queries you can write
                            to us at courses@geeksforgeeks.org
                        </Typography>}

                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}