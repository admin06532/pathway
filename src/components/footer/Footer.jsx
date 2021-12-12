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
    [theme.breakpoints.down('md')]: {
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
    [theme.breakpoints.down('md')]: {
      paddingTop: "65px",
    }
  },
  link: {
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
    padding: '20px 0',
    [theme.breakpoints.down('md')]: {
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
            <Link href={FOOTER.LINK_FACEBOOK} className={classes.link} target="_blank" rel="noopener"> Facebook</Link>
            <Link href={FOOTER.LINK_LIKEDIN} className={classes.link} target="_blank" rel="noopener">LinkedIn</Link>
            <Link href={FOOTER.LINK_TWITTER}  className={classes.link} target="_blank" rel="noopener"> Twitter </Link>
            <Link href={FOOTER.LINK_INSTA} className={classes.link} target="_blank" rel="noopener">Instagram</Link>
            <Link href={FOOTER.LINK_YOUTUBE} className={classes.link} target="_blank" rel="noopener">Youtube</Link>
            <Link href={FOOTER.LINK_LOCATION} className={classes.link} target="_blank" rel="noopener" >Way to reach</Link>
          </div>
          <Typography variant="body2" align="center" className={classes.copy} spacing={1} >
            {FOOTER.COPYRIGHT}
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}
