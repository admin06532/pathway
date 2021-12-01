import React from "react";
import { Grid, List, ListItem, Typography } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AboutImage from "./../../assets/images/heroshot/banner_2-min.png";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundPosition: "center right 50px",
    backgroundRepeat: "no-repeat",
    paddingBottom: "50px",
  },
  deskTopMaxWidth: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  banner: {
    boxSizing: "border-box",
    paddingTop: "100px",
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${AboutImage})`,
    backgroundSize: "cover",
    position: "relative",
    "& .MuiTypography-h2": {
      position: "absolute",
      left: "50%",
      top: "28%",
      fontWeight: "400",
    },
  },
  box: {
    position: "absolute",
    left: "50%",
    top: "40%",
    maxWidth: "450px",
  },
}));


export const ApiDev = () => {
    const classes = useStyles();
    return (
        <Grid container>
         <div className={classes.banner}>
        <Typography
          variant='h2'
          className={classes.deskTopMaxWidth}
          component='div'
          align='left'
        >
          API Integration
        </Typography>
        <div className={classes.box}>
        <Typography gutterBottom={true}>
            Connecting to an external service through an API is one of the common practices for the ecommerce management. APIs make applications more flexible and feature-rich. A seamless implementation of API is essential for providing the benefits of API integration to the end-users. Dpathway develops dedicated and customized APIs for the web applications. At the same time, we provide API integration service to our clients.
        </Typography>
        </div>
      </div>
      <Grid container className={classes.deskTopMaxWidth}>
            <Typography variant="h5">
                Our Custom API Services
            </Typography>
            <Typography variant="body2">
                We offer end-to-end support for API integration. Our experts are poised with years of experience and skills to render the most satisfactory service. Find our custom APIs integration service in the following section.
            </Typography>

            <List>
                <ListItem>API Integration: Integrate third-party APIs to your current business management system to find more features in business management. Our experts assure quick and error-free service to the clients.</ListItem>
                <ListItem>Custom API Development: 
                Want to develop third-party API and integrate the API to your system? We have skilled personnel for API development service. We offer service as per your requirements.</ListItem>
                <ListItem>API as a Service Develop API as a service for your online business. Our service will provide you a seamless API development and integration experience. We have expertise in API development for different industries.</ListItem>
                <ListItem>Cloud Integration: You can turn your API-integrated system more flexible in terms of data storage through cloud integration service. Nevertheless, our cloud integration service ensures more data safety.</ListItem>
                <ListItem>API Testing: Do you want to test the efficiency of a third-party API integrated with your business? APIs with bugs cause unwanted errors and wastage of time for the businesses. Our testing service helps improving the APIs.</ListItem>
                <ListItem>API Platform Migrate: Do you want to migrate APIs from one platform to another platform? We have specialized team for providing seamless API platform migration solution to our clients.</ListItem>
            </List>
            <Typography variant="h5">
                Benefits of Choosing Us
            </Typography>
            <Typography variant="body2">
                Choosing D-pathway for API development and integration service is beneficial for many reasons. Our team is poised with experience and skills to render high-quality service. Most importantly, we have a team of dedicated and professional personnel. Thus, choosing us will give you the following benefits.
            </Typography>
            <List>
                <ListItem>Custom API development and integration</ListItem>
                <ListItem>Error-free service with assurance of zero glitches</ListItem>
                <ListItem>API development for helping different businesses</ListItem>
                <ListItem>API integration for better ecommerce performance</ListItem>
                <ListItem>Specialized API developers</ListItem>
                <ListItem>24/7 support for the clients</ListItem>
            </List>
            <Typography variant="h5">
                Our Expertise
            </Typography>
            
            <Typography variant="body2">
                We offer API integration service for different industries. Bagging years of experience, we possess expertise in the following services.
            </Typography>
            <List>
                <ListItem>API for Payment: We integrate API to make the payment processing a seamless thing for your online business.</ListItem>
                <ListItem>Third-Party API: Dpathway has skilled executives who deliver error-free third-party API integration service.</ListItem>
                <ListItem>API Platforms: We are poised with skills to work on different API platforms such as Google, Windows, Twitter, Facebook, Amazon, and many more.</ListItem>
                <ListItem>Partner API: Obtain licenses easily with us for using the top-quality partner APIs for your business.</ListItem>
            </List>
            <Typography variant="body2">For more information on our API development and integration service, we request you to call us anytime. Alternatively, you can write an email to us. We will reach will at the earliest.</Typography>
            </Grid>
          </Grid>
        )
    } 