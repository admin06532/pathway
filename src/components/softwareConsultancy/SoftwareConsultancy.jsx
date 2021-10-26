import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Card, CardContent, Grid, Typography } from '@material-ui/core';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';

const useStyles = makeStyles({
  root: {
    minHeight: 320,
    boxSizing: 'border-box',
    '&:hover': {
        boxShadow: '2px 5px 6px 3px rgba(0,0,0,0.6)'
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
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
    maxWidth: '300px'
  },
  heading : {
    marginTop: '30px',
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
                <Card className={classes.root} align="center">
                    <CardContent>
                            <ContactMailIcon fontSize="large" style={{color: '#e65100', fontSize:"66"}} />
                            <Typography variant="h6" component="h6">
                            Permanent Placement Recruitment (PPR)
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Our recruitment consultants follow a client-based strategy to search for and make available the job-ready talent, thereby cutting your cost on recruitment process.
                            </Typography>
                    </CardContent>
                </Card>

            </Grid>
            <Grid item xs={12} md={3} className={isMobile ? classes.gridItemMobile : classes.gridItemDesktop}>
                <Card className={classes.root} align="center">
                    <CardContent>
                            <AvTimerIcon fontSize="large" style={{color: '#e65100', fontSize:"66"}} />
                            <Typography variant="h6" component="h6">
                            Contract Placement Recruitment (CPR)
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                            Our CPR is just the solution you need for a temporary job without running up huge expenses on employment formalities.
                            </Typography>
                    </CardContent>
                </Card>

            </Grid>
            <Grid item xs={12} md={3} className={isMobile ? classes.gridItemMobile : classes.gridItemDesktop}>
                <Card className={classes.root} align="center">
                    <CardContent>
                            <GroupAddIcon fontSize="large" style={{color: '#e65100', fontSize:"66"}} />
                            <Typography variant="h6" component="h6">
                                Outsourcing (O)
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                We also conduct outsourcing a business practice in which certain talent acquisition functions required by the business are performed on a contract basis
                            </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} className={isMobile ? classes.gridItemMobile : classes.gridItemDesktop}>
                <Card className={classes.root} align="center">
                    <CardContent>
                        <HeadsetMicIcon fontSize="large" style={{color: '#e65100', fontSize:"66"}} />
                            <Typography variant="h6" component="h6">
                            US staffing
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                             Our US staffing services help you improve operational &amp; organizational activities by putting right people with right capability at right costs doing the right thing.
                            </Typography>
                    </CardContent>
                </Card>
            </Grid>
            
           
           
        </Grid>
        </>
      
  );
}
