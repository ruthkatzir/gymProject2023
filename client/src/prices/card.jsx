// import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import IconButton from '@mui/joy/IconButton';
// import Typography from '@mui/joy/Typography';
// import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

// export default function BasicCard() {
//     return (
//         <Card variant="outlined" sx={{ width: 320 }}>
//             <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
//                 Yosemite National Park
//             </Typography>
//             <Typography level="body2">April 24</Typography>
//             <IconButton
//                 aria-label="bookmark Bahamas Islands"
//                 variant="plain"
//                 color="neutral"
//                 size="sm"
//                 sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
//             >
//                 <BookmarkAdd />
//             </IconButton>
//             <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
//                 <img
//                     src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
//                     srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
//                     loading="lazy"
//                     alt=""
//                 />
//             </AspectRatio>
//             <Box sx={{ display: 'flex' }}>
//                 <div>
//                     <Typography level="body3">Total price:</Typography>
//                     <Typography fontSize="lg" fontWeight="lg">
//                         $2,900
//                     </Typography>
//                 </div>
//                 <Button
//                     variant="solid"
//                     size="sm"
//                     color="primary"
//                     aria-label="Explore Bahamas Islands"
//                     sx={{ ml: 'auto', fontWeight: 600 }}
//                 >
//                     Explore
//                 </Button>
//             </Box>
//         </Card>
//     );
// }

import * as React from 'react';
import axios from 'axios';
import { Button, Card, CardMedia, CardActions, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

    const handleExpandClick = () => {
        setExpanded(!expanded)
    };
    const ChoosingButtonClick = async () => {
        console.log("enterrr");
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        console.log(props.type, props.numEnter);
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        console.log("before");

        if (bought === 'Bought') {
            console.log('Item already bought');
            return;
        }

        axios.post("http://localhost:3600/api/purchase", { userId: userId, type: props.type, numEnters: props.numEnter }, config)
            .then(console.log)
            .catch(console.log);
        setBought('Bought');
    };


    return (
        <div style={{ margin: 10 }}>
            {/* <h1 style={{ color: 'green' }}>
                GeeksforGeeks</h1> */}
            <Card raised={true} sx={{ maxWidth: 1500 }}>
                <CardMedia
                    component="img"
                    height="200"
                    //width="400"
                    image=
                    'https://sportivi.co.il/wp-content/uploads/2016/05/grateshape.png'
                    alt="GFG Logo"
                />
                <CardContent sx={{ bgcolor: "#E8E8E8" }}>
                    <h3>{props.typeName}</h3>
                    <h4 style={{ color: "green" }}>

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
                        Expand more
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
                        {<Typography paragraph style={{ color: 'red', backgroundColor: 'green' }}>
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