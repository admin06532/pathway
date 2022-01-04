import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    Grid,
    Typography,
    Link,
    Button
  } from '@material-ui/core';
import clsx from 'clsx';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RoomIcon from '@material-ui/icons/Room';
import Logo from './../../assets/images/mobile_logo.png'
import {FOOTER} from './../../constant';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    background: '#fff',
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
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: "center 56%",
    },
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
    paddingBottom: '12px', 
    color: '#6a767b',
    '&:hover' : {
      cursor: 'pointer',
    }
  },
  copy: {
    color: '#666666',
    padding: '30px 0 0',
    fontSize: '12px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: "65px",
    }
  },
  link: {
      color: '#666666',
      display: 'inline-block',
      position: 'relative',
      fontSize: '14px',
      padding: '0 10px',
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
    padding: '20px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '5px 0',
    }
  },
  column: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15,
      flexDirection: 'column',
    },
  }
}));
 
export const Footer = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.banner} >
          <Button onClick={() => document.querySelector('html').scrollTop = 0 } color="inherit">Back to top</Button>
      </div>
      <Grid container className={clsx(classes.mxWidth, classes.column) }>
        {
         FOOTER.ITEM.map( (v, i) => {
          return <Grid item md={3} key={`ind${i}`} className={classes.listItem}>{v}</Grid>
         })   
        }
      </Grid>
      <Grid item xs={12} >
        <Paper className={classes.paper} color="invert" elevation={0} >
          <div className={  clsx(classes.main, classes.mxWidth) }>
            <Link href={FOOTER.LINK_FACEBOOK} className={classes.link} target="_blank" rel="noopener"> <FacebookIcon /></Link>
            <Link href={FOOTER.LINK_LIKEDIN} className={classes.link} target="_blank" rel="noopener"><LinkedInIcon /></Link>
            <Link href={FOOTER.LINK_TWITTER}  className={classes.link} target="_blank" rel="noopener"> <TwitterIcon /> </Link>
            <Link href={FOOTER.LINK_INSTA} className={classes.link} target="_blank" rel="noopener"><InstagramIcon /> </Link>
            <Link href={FOOTER.LINK_YOUTUBE} className={classes.link} target="_blank" rel="noopener">
              <YouTubeIcon /></Link>
            <Link href={FOOTER.LINK_LOCATION} className={classes.link} target="_blank" rel="noopener" ><RoomIcon /></Link>
          </div>
          <Typography variant="body2" align="center" className={classes.copy} spacing={1} >
            {FOOTER.COPYRIGHT}
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}
