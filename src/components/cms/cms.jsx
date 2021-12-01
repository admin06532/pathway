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
    top: "50%",
    maxWidth: "450px",
  },
}));


export const CMS = () => {
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
          Content Management System
        </Typography>
        <div className={classes.box}>
        <Typography gutterBottom={true}>
          Web developers use content management systems for developing dynamic websites. Some of these websites integrate ecommerce features.  Today, developers have many choices for content management systems. At Dpathway, we are poised with knowledge and skills to deliver website development solutions on different content management systems.
        </Typography>
        </div>
      </div>
      <Grid container className={classes.deskTopMaxWidth} >
            <Typography variant="h5">
            What Do We Offer?
            </Typography>
            <Typography variant="body2">
            Dpathway offers end-to-end support for website development using a robust and advanced content management system (CMS). If you want an experienced website development company to render web development services on your preferred CMS platform, Dpathway is the place for you. At Dpathway, you will find the following CMS services.
            </Typography>

            <List>
                <ListItem>CMS Consulting: Which CMS platform is ideal for your business? Do you have a specific budget for running an ecommerce store? Get answers to all your queries regarding CMS platforms from our CMS experts.</ListItem>
                <ListItem>Web Development: We provide a powerful and seamless web development solution based on your chosen content management systems. You can develop a fully functional ecommerce web store on your chosen CMS platform. </ListItem>
                <ListItem>Revamping Existing Website: Do you already have a website on a particular CMS platform? Find our service to revamp your website so that it brings better business opportunities for your company.</ListItem>
                <ListItem>CMS Migration: You can move your website from one CMS platform to another. However, the migration process is complex. Thus, you need the help of the experts. We provide a seamless CMS migration service.</ListItem>
                <ListItem>Tracking and Analysis: We provide tracking and analysis services for your existing website. Analytics helps website owners to understand the drawbacks of the existing CMS. We can fix those issues for your website.</ListItem>
                <ListItem>CMS Maintenance: If you have a business website on a CMS platform, you need to find an experienced and reliable service for web maintenance. We provide dedicated web maintenance and CMS update support.</ListItem>
                </List>
                <Typography variant="h5">
                Why Choose Us?
                </Typography>
                <Typography variant="body2">
                Dpathway is a company driven by ethical business values. We focus on delivering the most satisfactory services at the most affordable budget.
Our team is enthusiastic about dealing with different ranges of website development services on various CMS platforms. We love challenging projects and meet the expectations of clients with perfection.
                  </Typography>
                <List>
                <ListItem>Extensive CMS Experience: Dpathway has a team of skilled and proficient individuals who possess extensive CMS experience. We can suffice all your needs regarding the CMS web development services.</ListItem>
                <ListItem>Satisfactory Solutions: Providing satisfactory solutions to clients is the motto of our CMS development team. You will find services that match your budget and requirements. We have an excellent client-retention record.</ListItem>
                <ListItem>
                Affordable Price: Do you want CMS development service at an affordable price? We offer top-notch service that suits your budget. At the same time, we keep the budget of our services realistic and affordable.
                </ListItem>
                <ListItem>
                24/7 Support: We have an active, dedicated, and passionate team to deliver flawless CMS web development service. You can get in touch with us anytime and talk to our experts.
                </ListItem>
            </List>

            <Typography variant="body2">
            Dpathway has expertise in working with different CMS platforms. Call us or write an email to us to know more about our services.
            </Typography>
            </Grid>
          </Grid>
        )
    } 