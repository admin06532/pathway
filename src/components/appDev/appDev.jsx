import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        minHeight: "50",
        position: 'absolute',
        top: 110,
        right: 20,
        width: 400
      },
      item: {
        padding: theme.spacing(1),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: '2px inset #e65100',
        color: '#e65100',
        borderRadius: '4px',
        boxShadow: '2px 6px 3px 2px rgba(150,150,150,0.6)',
        transition: 'color 0.25s ease-in',
        fontWeight: '500',
        '&:hover': {
            backgroundColor: '#e65100',
            color: '#ffffff',
            fontWeight: '600',
            borderColor: 'transparent'  
        }
      },
}));


export const AppDev = () => {
    const classes = useStyles();
        return (
            <Grid>

            
<Typography variant="h2">Application Development</Typography>
<Typography variant="h2">Next-Gen Application Development Services to Bring Your Business to Life</Typography>

<Typography variant="body1">D pathway is a leading web and mobile application development company that creates award-winning IOS and Android mobile and online apps. We provide custom mobile and web software solutions that provide rich digital experiences on both the web and mobile devices.</Typography>
<Typography variant="body1">Our application development services include technology consultation, development, testing, support and maintenance. Our client success stories include audit and improvement of existing apps and modernization of legacy apps.</Typography>
<Typography variant="h2">Our Application Development Services </Typography>
	Native App Development Services
    <Typography variant="body1">Using bespoke frameworks, create native web and mobile applications. Our technical teams have created award-winning apps and have extensive experience with open-source technologies like react-native.</Typography>
	Cloud Application Development
    <Typography variant="body1">We create unique Cloud Applications with remarkable agility, performance, and interoperability, as well as cloud-native architectures, legacy app modernization, IoT solutions, microservices application architecture, cloud-ready app migration, and more.</Typography>
	UX/UI Design &amp; Development
    <Typography variant="body1">Across different digital devices and internet channels, we transform customer experiences. To add functionality to your bespoke app, our UX/UI design professionals leverage the latest user experience and interface (UX/UI) technologies, architectures, setups, and other development best practices.</Typography>
	API Integrations
    <Typography variant="body1">By integrating third-party APIs with your existing business systems, we can make use of the tremendous data sharing possibilities. We can also create new APIs to increase the functionality of your existing app, improve performance, and much more.</Typography>
	Progressive Web Apps (PWA)
    <Typography variant="body1">We unite web and mobile users in a single PWA with improved UX, a customized UI, and native-like features built using the app shell approach.</Typography>
	iOS App Development
    <Typography variant="body1">We specialize in developing full-featured iOS mobile apps that are reliable, scalable, and compatible with iPhone, iPad, Apple TV, and Apple Watch.</Typography>
	Android App Development
    <Typography variant="body1">Our Android app developers use cutting-edge technology to create native apps with a solid and evolving architecture.</Typography>
	Application Maintenance &amp; Support Services
    <Typography variant="body1">Periodic quality testing and maintenance are performed to identify bottlenecks and areas for improvement, as well as after-sales support to verify that security vulnerabilities are not present.</Typography>
Cutting-edge Technologies We Use for Application Development 
	Big Data
	Internet of Things 
	Artificial Intelligence 
	VR &amp; AR App Development 
	Machine Learning 
	Blockchain 
Why Choose Us?
<Typography variant="body1">Understand You: We uncover your story, learn about your objectives, and devise a strategy to help you reach your target audience and develop your business.</Typography>
<Typography variant="body1">Budget-Friendly: We work smart, fast, and always complete our projects on schedule without having to increase your budget, whether it's building a website, coding a mobile app, or creating a marketing campaign.</Typography>
<Typography variant="body1">Exceptional Approach:  Our designers, developers, and project managers use a unique, proven approach to ensure that all of our projects are of the greatest quality, based on your needs.</Typography>
<Typography variant="body1">24*7 Assistance: Our clients prefer us not only because we are fantastic and reasonably priced, but also because we are constantly available. Whether you have a last-minute emergency or require a status report, we are only a phone call, email, or text away!</Typography>

</Grid>
)
} 
