import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, List, ListItem, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ECommPng from './../../../assets/images/e_Comm.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${ECommPng})`,
    backgroundPosition: 'center left 50px',
    backgroundSize: '30%',
    backgroundRepeat: 'no-repeat',
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
  link: {
    textDecoration: 'none'
  }
}));

export const IntroCms = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="row-reverse">
      <Grid item xs={12} md={7} style={{marginRight: 50,  marginTop: 50, textAlign:'left'}}>
      <Typography variant="h3" align="center">Content Management System</Typography>
        <Grid container >
            <Grid item>
              <Typography gutterBottom={true} className={classes.initial}>
              Web developers use content management systems for developing dynamic websites. Some of these websites integrate ecommerce features.  Today, developers have many choices for content management systems. At Dpathway, we are poised with knowledge and skills to deliver website development solutions on different content management systems.
              </Typography>
              <Typography variant="h5" style={{marginTop: '30px'}}>What Do We Offer?</Typography>
              <Typography gutterBottom={true}>
                Dpathway offers end-to-end support for website development using a robust and advanced content management system (CMS). If you want an experienced website development company to render web development services on your preferred CMS platform, Dpathway is the place for you. At Dpathway, you will find the following CMS services.
              </Typography>
              
                <List>
                  <ListItem>CMS Consulting: Which CMS platform is ideal for your business? Do you have a specific budget for running an ecommerce store? Get answers to all your queries regarding CMS platforms from our CMS experts.</ListItem>
                  <ListItem>Web Development: We provide a powerful and seamless web development solution based on your chosen content management systems. You can develop a fully functional ecommerce web store on your chosen CMS platform.</ListItem>
                </List>
                <Grid align="center">
                  <Link to="/cms" className={classes.link}>
                    <Button color="primary" variant="contained">Know more...</Button>
                  </Link>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
