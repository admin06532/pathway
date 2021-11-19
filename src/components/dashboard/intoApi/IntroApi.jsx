import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, List, ListItem, Button } from '@material-ui/core';
import ECommPng from './../../../assets/images/e_Comm.png';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${ECommPng})`,
    backgroundPosition: 'center left 50px',
    backgroundSize: '30%',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#ffffff',
    paddingBottom: '50px'
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  initial: {
    "&:first-letter": {
      fontSize: "40px",
      position: "absolute",
      lineHeight: 1,
    },
  },
  link: {
      textDecoration: 'none'
  }
}));

export const IntroApi = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} direction="row-reverse" >
      <Grid item xs={12} md={7} style={{marginRight: 50,  marginTop: 50, textAlign:'left'}}>
      <Typography variant="h3" align="center">API Integration</Typography>
        <Grid container >
            <Grid item>
              <Typography gutterBottom={true} className={classes.initial}>
                Connecting to an external service through an API is one of the common practices for the ecommerce management. APIs make applications more flexible and feature-rich. A seamless implementation of API is essential for providing the benefits of API integration to the end-users. Dpathway develops dedicated and customized APIs for the web applications. At the same time, we provide API integration service to our clients.
              </Typography>
              <Typography variant="h5" style={{marginTop: '30px'}}>Our Custom API Services</Typography>
              <Typography gutterBottom={true}>
                We offer end-to-end support for API integration. Our experts are poised with years of experience and skills to render the most satisfactory service. Find our custom APIs integration service in the following section.
              </Typography>

                <List>
                  <ListItem>Custom API Development</ListItem>
                  <ListItem>API as a Service</ListItem>
                  <ListItem>Cloud Integration</ListItem>
                  <ListItem>API Testing</ListItem>
                  <ListItem>API Platform Migrate</ListItem>
                </List>
                <Grid align="center">
                  <Link to="/pathapi" className={classes.link}><Button color="primary" variant="contained">Know more...</Button></Link>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
