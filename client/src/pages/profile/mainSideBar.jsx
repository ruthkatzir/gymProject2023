import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Main = (props) => {

    const StyledTypography = styled(Typography)({
        '@media (max-width: 600px)': {
            fontSize: '14px',
        },
        '@media (min-width: 601px) and (max-width: 960px)': {
            fontSize: '16px',
        },
        '@media (min-width: 961px)': {
            fontSize: '18px',
        },
    });

    return (
        <>
            <StyledTypography paragraph>
                Dear user,
                Welcome to your personal fitness zone! We’re thrilled to have you here at our state-of-the-art gym. This space is designed to support you in achieving your health and fitness goals, where your progress is honored, and your potential is limitless.
                Here, you can access your personal fitness data, including your past performances and milestones. This data is a testament to your hard work and determination. But it’s not just about looking back; it's about moving forward. You can review personalized recommendations to propel you towards your next goal.
            </StyledTypography>
            <StyledTypography paragraph>
                Think of this space as your command center, where you can visualize your progress and make informed decisions about your training. Our system, equipped with cutting-edge AI, provides dynamic workout plans and dietary suggestions tailored just for you.
                Explore the personalized coaching videos and take advantage of the tools and data to set new goals and map out your path forward. Celebrate your victories, no matter how small, and let this space be your sanctuary and launchpad for success.
                We believe in you and are here to support you every step of the way. Welcome to the future of your fitness journey, where your potential knows no bounds.
                Thank you, and let’s make today the start of something amazing!
            </StyledTypography>
        </>
    );
};

export default Main;

