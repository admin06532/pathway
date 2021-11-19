import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Card, CardContent, Grid, Typography, Avatar, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minHeight: 320,
    boxSizing: 'border-box',
    boxShadow: '0 0 20px 0 rgb(64 189 237 / 50%)',
    '&:hover': {
        boxShadow: '0 2px 30px 0 rgb(64 189 237 / 50%)'
    }
  },
  pos: {
    marginBottom: 12,
  },
  container: {
      paddingTop: '50px',
      boxSizing: 'border-box',
  },
  gridItemMobile : {
      margin: '0 40px 40px',
      maxWidth: '320px'
  },
  gridItemDesktop : {
    margin: '0 20px 40px 0',
    maxWidth: '300px'
  },
  heading : {
    marginTop: '30px',
  },
  avatar: {
    background: 'linear-gradient(45deg,#3FBDED 0%,#00A4E8 100%)',
    width: '70px',
    boxShadow: '0 5px 15px 0 rgb(0 0 0 / 15%)',
    height: '70px',
    marginBottom: '10px'
  }
});

export const BoxHome = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

  return (
      <>
            <Grid container justifyContent="center" spacing={0} className={classes.container}>
            <Grid item xs={12} md={3} className={isMobile ? classes.gridItemMobile : classes.gridItemDesktop}>
                <Card className={classes.root}>
                    <CardContent>
                        <Avatar className={classes.avatar}>PC</Avatar>
                            <Typography variant="h6" component="h6">
                                Publishing &amp; Conversion
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Stellar Digital Content Publishing & Conversion Services for Your Mushrooming Business
                            </Typography>
                            <Button color="primary" variant="contained" fullWidth>Know More...</Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} className={isMobile ? classes.gridItemMobile : classes.gridItemDesktop}>
                <Card className={classes.root}>
                    <CardContent>
                    <Avatar className={classes.avatar}>CSS</Avatar>
                            <Typography variant="h6" component="h6">
                                Cyber Security Solutions
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Our cyber security solutions safeguard your data and IT infrastructure from both internal and external threats.
                            </Typography>
                            <Button color="primary" variant="contained" fullWidth>Know More...</Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} className={isMobile ? classes.gridItemMobile : classes.gridItemDesktop}>
                <Card className={classes.root}>
                    <CardContent>
                    <Avatar className={classes.avatar}>EP</Avatar>
                            <Typography variant="h6" component="h6">
                                E-Learning Platforms
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Delivering Cost-Effective Platform Services for Your Business. Professional e-learning services are in higher demand as a result of technological improvements. 
                            </Typography>
                            <Button color="primary" variant="contained" fullWidth>Know More...</Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} className={isMobile ? classes.gridItemMobile : classes.gridItemDesktop}>
                <Card className={classes.root}>
                    <CardContent>
                    <Avatar className={classes.avatar}>ML</Avatar>
                            <Typography variant="h6" component="h6">
                                Machine Learning
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Develop cutting-edge intelligence to boost your productivity. Machine intelligent systems have affected enterprises in a variety of ways during the last few years.
                            </Typography>
                            <Button color="primary" variant="contained" fullWidth>Know More...</Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </>
    );
}
