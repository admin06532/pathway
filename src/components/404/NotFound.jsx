import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";
import UnderConstruction from './../../assets/images/underConstruction.jpg'
import { Button, Grid } from '@material-ui/core';

let theme = createTheme();
theme = responsiveFontSizes(theme);


const useStyles = makeStyles(() => ({
  image: {
    maxWidth: '100%'
  },
  btnStrach : {
    padding: '8px 30px',
    backgroundColor: '#fff',
    borderRadius: '4px',
    fontWeight: '500',
    boxSizing: 'border-box',
    textDecoration: 'none',
    border: '1px solid rgba(45,179,235,0.53)',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    color: '#3FBDED',
    textTransform: 'inherit',
    lineHeight: 1,
    '&:hover': {
      background: '#3FBDED',
      color: '#fff',
      textDecoration: 'none',
    }
  },
  fixedCenter: {
    position: 'absolute',
    top: 'calc(95%)',
    left: 'calc(50% - 55px)',
  }
}))


export const NotFound = () => {
  const classes = useStyles();
  const home = () => {
    window.location.assign('/');
  }  
  return (
    <div className={classes.root}>

      <ThemeProvider theme={theme} style={{position: 'relative'}} >
        <img src={UnderConstruction} className={classes.image} alt="under construction" />
        <Grid align="center" className={classes.fixedCenter}>
            <Button className={classes.btnStrach} onClick={home}>Back to home </Button>
          </Grid>
      </ThemeProvider>
    </div>
  );
}
