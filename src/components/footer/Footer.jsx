import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    List,
    Paper,
    ListItem,
    Grid,
    Typography,
    Link,
    Button
  } from '@material-ui/core';
import clsx from 'clsx';
import Logo from './../../assets/images/mobile_logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#fff',
    paddingTop: '50px' 
  },
  header: {
    color: '#838383',
    fontSize: '1em'
  },

  mxWidth: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  paper: {
    borderTop: '1px solid #dcdcdc',
    padding: theme.spacing(1),
    borderRadius: 0,
    marginTop: '20px',
    backgroundImage: `url(${Logo})`,
    backgroundPosition: 'center left 50px',
    backgroundRepeat: 'no-repeat'
  },
  main: {
    textAlign: 'center',
    paddingTop: '20px',
    
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  avatar: {
    color: '#007aa0',
    backgroundColor: 'transparent',
  },
  listWrap: {
    display: 'flex'
  },
  listItem: {
    fontSize: '13px', 
    color: '#6a767b',
    '&:hover' : {
      cursor: 'pointer',
    }
  },
  copy: {
    color: '#666666',
    padding: '30px 0 0',
    fontSize: '12px'
  },
  link: {
      textDecoration: 'none',
      color: '#666666',
      display: 'inline-block',
      position: 'relative',
      fontSize: '14px',
      borderRight: '1px solid #666666',
      padding: '0 10px',
      '&:last-child': {
        borderRight: '0'
      },
      '&:hover':{
        textDecoration: 'none',
        color: ''
      }
  },
  banner : {
    background: 'rgba(63,189,237,1)',
    width: '100%',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    padding: '20px 0'
  }
}));
 


export const Footer = () => {
  const classes = useStyles();

  const goToTop = () => {
    document.querySelector('html').scrollTop = 0;
  }

  return (
    <div className={classes.root}>
      <div className={classes.banner} >
          <Button onClick={goToTop} color="inherit">Back to top</Button>
      </div>
      <Grid container className={classes.mxWidth}>
        <Grid item md={3}>
          <Typography variant="h6" className={classes.header}>
              Products
          </Typography>
          <List>
            <ListItem className={classes.listItem} disableGutters>App Builder</ListItem>
            <ListItem className={classes.listItem} disableGutters>Website Builder</ListItem>
            <ListItem className={classes.listItem} disableGutters>Chatbot Builder</ListItem>
            <ListItem className={classes.listItem} disableGutters>Design</ListItem>
            <ListItem className={classes.listItem} disableGutters>Connect</ListItem>
          </List>
        </Grid>
        <Grid item md={3}>
          <Typography variant="h6" className={classes.header}>
              Programs
          </Typography>
          <List>
            <ListItem className={classes.listItem} disableGutters>App Builder Reseller</ListItem>
            <ListItem className={classes.listItem} disableGutters>University Program</ListItem>
            <ListItem className={classes.listItem} disableGutters>Student Developer Course</ListItem>
            <ListItem className={classes.listItem} disableGutters>No-Code Developer Course</ListItem>
            <ListItem className={classes.listItem} disableGutters>Become an Affiliate</ListItem>
          </List>
        </Grid>
        <Grid item md={3}>
          <Typography variant="h6" className={classes.header}>
            Research
          </Typography>
          <List>
            <ListItem className={classes.listItem} disableGutters>About Us</ListItem>
            <ListItem className={classes.listItem} disableGutters>Pricing Plans</ListItem>
            <ListItem className={classes.listItem} disableGutters>Tutorials &amp; FAQs</ListItem>
            <ListItem className={classes.listItem} disableGutters>Blog</ListItem>
            <ListItem className={classes.listItem} disableGutters>Security</ListItem>
          </List>
        </Grid>
        <Grid item md={3}>
          <Typography variant="h6" className={classes.header}>
             Resources
          </Typography>
          <List>
            <ListItem className={classes.listItem} disableGutters>App Maker</ListItem>
            <ListItem className={classes.listItem} disableGutters>Android App Maker</ListItem>
            <ListItem className={classes.listItem} disableGutters>iPhone App Maker</ListItem>
            <ListItem className={classes.listItem} disableGutters>Convert Website to App</ListItem>
            <ListItem className={classes.listItem} disableGutters>How to Create an App</ListItem>
          </List>
        </Grid>
      </Grid>
        
        <Grid item xs={12} >
          <Paper className={classes.paper} color="invert">
            <div className={  clsx(classes.main, classes.mxWidth) }>
              <Link href="https://www.facebook.com/Digital-Pathway-Pvt-Ltd-111697710588591" className={classes.link} target="_blank" rel="noopener"> Facebook</Link>
              <Link href="https://www.linkedin.com/company/digital-pathway" className={classes.link} target="_blank" rel="noopener">LinkedIn</Link>
              <Link href="https://twitter.com/DigitalPathway2"  className={classes.link} target="_blank" rel="noopener"> Tweeter </Link>
              <Link href="https://www.instagram.com/digital_pathway/" className={classes.link} target="_blank" rel="noopener">Instagram</Link>
              <Link href="https://www.youtube.com/channel/UC3G6RmCAFXT8E-vOH1CgQQw/featured" className={classes.link} target="_blank" rel="noopener">Youtube</Link>
              <Link href="https://goo.gl/maps/8nDiCuVv26D2jjfNA" className={classes.link} target="_blank" rel="noopener" >Way to reach</Link>
            </div>
            <Typography variant="body2" align="center" className={classes.copy} spacing={1} >
              All designs, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2021 Digital Pathway Private Limited.
            </Typography>
          </Paper>
        </Grid>
    </div>
  );
}





