import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Avatar, Button, useMediaQuery, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minHeight: 360,
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
      paddingTop: '10px',
      boxSizing: 'border-box',
      
  },
  gridItemMobile : {
      margin: '0 40px 40px',
      maxWidth: '320px'
  },
  gridItemDesktop : {
    margin: '0 20px 40px 0',
    maxWidth: '300px',
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
  },
  link: {
    textDecoration: 'none'
  }
});


export const SoftwareConsultancy = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

  return (
      <>
        <Typography variant="h3" component="h3" gutterBottom align="center" className={classes.heading}>IT Consulting</Typography>
            <Grid container justifyContent="center" spacing={0} className={classes.container}>
            
            <Grid item xs={12} md={3} className={isMobile ? classes.gridItemMobile : classes.gridItemDesktop}>
                <Card className={classes.root}>
                    <CardContent>
                      <Avatar className={classes.avatar}>PPR</Avatar>
                            <Typography variant="h6" component="h6">
                            Permanent Placement Recruitment
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Our recruitment consultants follow a client-based strategy to search for and make available the job-ready talent, thereby cutting your cost on recruitment process.
                            </Typography>
                            <Button color="primary" variant="contained" fullWidth>Know More...</Button>
                    </CardContent>
                </Card>

            </Grid>
            <Grid item xs={12} md={3} className={isMobile ? classes.gridItemMobile : classes.gridItemDesktop}>
                <Card className={classes.root}>
                    <CardContent>
                    <Avatar className={classes.avatar}>CPR</Avatar>
                            <Typography variant="h6" component="h6">
                              Contract Placement Recruitment
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                              Our CPR is just the solution you need for a temporary job without running up huge expenses on employment formalities.
                            </Typography>
                            <Button color="primary" variant="contained" fullWidth>Know More...</Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} className={isMobile ? classes.gridItemMobile : classes.gridItemDesktop}>
                <Card className={classes.root}>
                    <CardContent>
                    <Avatar className={classes.avatar}>O</Avatar>
                            <Typography variant="h6" component="h6">
                                Outsourcing
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                We also conduct outsourcing a business practice in which certain talent acquisition functions required by the business are performed on a contract basis
                            </Typography>
                            <Button color="primary" variant="contained" fullWidth>Know More...</Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} className={isMobile ? classes.gridItemMobile : classes.gridItemDesktop}>
                <Card className={classes.root}>
                    <CardContent>
                        <Avatar className={classes.avatar}>US</Avatar>
                            <Typography variant="h6" component="h6">
                            US staffing
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                             Our US staffing services help you improve operational &amp; organizational activities by putting right people with right capability at right costs doing the right thing.
                            </Typography>
                            <Grid align="center">
                              <Link to="/usstaff" className={classes.link}>
                                <Button color="primary" variant="contained" fullWidth>Know More...</Button>
                              </Link>
                            </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </>
      
  );
}
