import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, List, ListItem, Button } from '@material-ui/core';
import AppDevPng from './../../assets/images/appDev.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${AppDevPng})`,
    backgroundPosition: 'center left 50px',
    backgroundSize: '30%',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#fafafa',
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
  btnStrach : {
    padding: '8px 30px',
    border: '1px solid rgba(45,179,235,0.53)',
    transition: 'ease all .5s',
    color: '#3FBDED',
    textTransform: 'inherit',
    '&:hover': {
      background: '#3FBDED',
      color: '#fff'
    }
  },
}));

export const IntroApp = () => {
  const classes = useStyles();


  return (
    <Grid container className={classes.root} direction="row-reverse" >
      <Grid item xs={12} md={7} style={{marginRight: 50,  marginTop: 50, textAlign:'left'}}>
      <Typography variant="h3" align="center">App Development</Typography>
        <Grid container >
            <Grid item>
              <Typography gutterBottom={true} className={classes.initial}>
                D pathway is a leading web and mobile application development company that creates award-winning IOS and Android mobile and online apps. We provide custom mobile and web software solutions that provide rich digital experiences on both the web and mobile devices.
              </Typography>
                <Typography>
                Our application development services include technology consultation, development, testing, support and maintenance. Our client success stories include audit and improvement of existing apps and modernization of legacy apps.
                </Typography>
                <Typography variant="h5" style={{marginTop: '30px'}}>Our Application Development Services </Typography>
                <List>
                  <ListItem>Native App Development Services</ListItem>
                  <ListItem>Cloud Application Development</ListItem>
                  <ListItem>UX/UI Design &amp; Development</ListItem>
                  <ListItem>API Integrations</ListItem>
                  <ListItem>Progressive Web Apps (PWA)</ListItem>
                </List>
                <Grid align="center">
                  <Button className={classes.btnStrach}>Know more...</Button>
                </Grid>
                
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
