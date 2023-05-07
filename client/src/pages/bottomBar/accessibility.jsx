import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
    title: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
    },
    subtitle: {
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
    },
    item: {
        margin: theme.spacing(1, 0),
    },
    contact: {
        margin: theme.spacing(2, 0),
    },
}));

const AccessibilityStatement = () => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h5" style={{ marginTop: '8%' }}>Accessibility Statement</Typography>
            <Typography variant="body1">
                Gil Sport Company has placed the issue of accessibility for people with disabilities as a leading central goal
                in its activity. We see people with disabilities as people with equal rights, who are entitled to enjoy full accessibility to our services and to be an integral part of the social and public fabric. The purpose of this section of the website is to inform you of the existing and proposed accessibility arrangements at the business and how you can benefit from them.
            </Typography>
            <Typography variant="h6">Details about the accessibility adjustments:</Typography>
            <Typography variant="body1">
                We continue our efforts to improve the website's accessibility as part of our commitment to allow its use by the entire population, including people with disabilities. The implementation of the guidelines for the service provided in the branch is also monitored.
                For detailed information about the accessibility arrangements, you can contact:
            </Typography>
            <Typography variant="h6">Accessibility Trustee: Mira Yehezkel</Typography>
            <Typography variant="body1">
                Email: g_sport@netvision.net.il
                Phone/message/whatsapp: 0509703561
            </Typography>
            <Typography variant="body1">
                The website of the Gil Sport company was accessed in accordance with the service accessibility regulations section 35 regarding the accessibility of a website, and in accordance with the Israeli standard 5568 for the accessibility of websites at the AA accessibility level. If you encounter any difficulty browsing the site, please contact us at g_sport@netvision.net.il and we will be happy to fix and improve the site.
            </Typography>
            <Typography variant="body1">
                Despite our efforts to allow browsing on the website accessible for all the pages of the website, it is possible that pages will be discovered on the website that have not yet been accessed, or for which the appropriate technological solution has not yet been found. We continue our efforts to improve the website's accessibility, as much as possible, and this out of a belief and moral obligation to allow the use of the website for the entire population, including people with disabilities.
            </Typography>
            <Typography variant="h5">Introduction:</Typography>
            <Typography variant="body1">
                We believe that everyone, without exception, deserves to enjoy visiting our website, therefore we strive to make the website clear and accessible and allow easy browsing for those who use assistive technologies.
            </Typography>
            <Typography variant="h6">Accessibility arrangements in the business:</Typography>
            <Typography variant="body1">
                Our company is accessible and has made adjustments and improvements, both in the store and on the company's website, in accordance with Amendment No. 2 to the Law on Equal Rights for Persons with Disabilities 2005.
            </Typography>
            <Typography variant="body1">
                Our goal is to improve the site and the store so that they are available, convenient and friendly for people with disabilities of various types who have difficulty with physical mobility as well as operating the computer and the Internet, thus allowing the general public to enjoy the contents and services of the network.
            </Typography>
            <Typography variant="body1">
                Accessible aids in the store:
            </Typography>
        </>
    );
}
export default AccessibilityStatement