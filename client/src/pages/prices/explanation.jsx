import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function SimpleCollapse(props) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
        props.onChange(!checked);
    };

    return (
        // <Box sx={{ height: 20 }}>
        //     <FormControlLabel
        //         control={<Switch checked={checked} onChange={handleChange} style={{ color: 'red' }} />}
        //         label="Show"
        //     />
        //     <Box
        //         sx={{
        //             '& > :not(style)': {
        //                 display: 'flex',
        //                 justifyContent: 'space-around',
        //                 height: '10%',
        //                 width: '100%',
        //                 backgroundColor:'black' , // change blue to black
        //                 color: 'white',
        //                 borderColor: 'error.main'
        //             },
        //         }}
        //     >
        //         <div>
        //             <Collapse in={checked} collapsedSize={40} sx={{ position: 'relative', zIndex: 1 }}>
        //                 You have three different membership options to choose from, each shown as a card.

        //                 The first card is our "single card", perfect for those who prefer to train alone. This membership option provides access to your choice of our gym during normal operating hours and includes all our equipment and facilities in the gym or one-time entry to the pool in our fitness complex or participation in a studio class of your choice. With this membership you can enjoy focused training in a peaceful and quiet environment.

        //                 Our second card is a "Monthly Free Card", which provides a free 30-day membership to our gym. This option allows you to experience all of our fitness facilities and see firsthand how we can help you achieve your fitness goals. You will have access to all equipment and facilities in our gym, to the heated and invested pool in our complex, as well as free entry to all the studio classes in the complex during our regular operating hours, free of charge.

        //                 Our third card is the "Annual Free Card", which is our most comprehensive and cost-effective membership option. With this membership, you will have access to our gym at all hours of operation and all of our services, including our heated and maintained pool, group fitness classes and our personal training services, at no additional cost. This membership is ideal for those who are serious about their fitness goals and want to make a long-term commitment to their health and wellness.

        //                 When you're ready to purchase memberships, simply select the card that best suits your needs and click the "Join Now" button. You will be taken to a secure payment page where you can enter your payment information and complete the purchase.

        //                 We are committed to providing our customers with a hassle-free and enjoyable purchasing experience. If you have any questions or concerns about our membership options, please do not hesitate to contact us. We are always happy to help!
        //             </Collapse>
        //         </div>
        //     </Box>
        // </Box>
        <></>
    );
}
