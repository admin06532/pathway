import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, List, ListItem, Button } from '@material-ui/core';
import ECommPng from './../../assets/images/e_Comm.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${ECommPng})`,
    backgroundPosition: 'center right 50px',
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

export const IntroEcom = () => {
  const classes = useStyles();


  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={7} style={{marginLeft: 50,  marginTop: 50, textAlign:'left'}}>
      <Typography variant="h3" align="center">e-Commerce Web Development</Typography>
        <Grid container >
            <Grid item>
              <Typography gutterBottom={true} className={classes.initial}>
              People have become well-accustomed with online buying and selling. Thus, small to large scale businesses want to strengthen their online presence these days. The first step for strengthening online presence is building a perfect business website. For developing an e-commerce website, you need to find a professional and reliable developer. At Dpathway, we provide top-notch ecommerce website development service at an affordable cost.
              </Typography>
              <Typography variant="h5" style={{marginTop: '30px'}}>Our e-Commerce Development Services </Typography>
                <List>
                  <ListItem>Online Store Development</ListItem>
                  <ListItem>Auction Platforms</ListItem>
                  <ListItem>B2B Marketplace</ListItem>
                  <ListItem>CMS Integration</ListItem>
                  <ListItem>Update and Migration</ListItem>
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
