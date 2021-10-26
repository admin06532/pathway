import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import AboutImg from './../../assets/images/about_us.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${AboutImg})`,
    backgroundPosition: 'center right 143px',
    backgroundSize: '32%',
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
}));

export const Intro = () => {
  const classes = useStyles();


  return (
    <Grid container className={classes.root} >
      <Grid item xs={12} md={6} style={{marginLeft: 50,  marginTop: 50, textAlign:'left'}}>
      <Typography variant="h3" align="center">Introduction</Typography>
        <Grid container >
            <Grid item>
              <Typography gutterBottom={true} className={classes.initial}>
                    Digital Pathway has the expertise that can help companies make use of digital technology to leverage their content and get new valuable products. With fantastic solutions from our experts, you can streamline the workflows and generate better revenues. We will increase your brand awareness and enhancement with our services and make sure that the entire operations run smoothly.
              </Typography>
                <Typography>
                    At Digital Pathway, we design, enrich, and convert the existing content so that it can be repurposed and managed. Content is available in many forms like books, training materials, and other marketing materials and we have industry veterans with unmatched expertise. We make use of complex technology and offer solutions that are efficient and low cost. We turn flat and unappealing content into a smart one so that this digital information can be monetized and utilized freely.
                </Typography>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
