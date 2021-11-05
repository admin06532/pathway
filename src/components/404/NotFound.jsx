import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import UnderConstruction from './../../assets/images/underConstruction.jpg'

let theme = createTheme();
theme = responsiveFontSizes(theme);


const useStyles = makeStyles(() => ({
  image: {
    maxWidth: '100%'
  }
}))

export const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ThemeProvider theme={theme} >
        <img src={UnderConstruction} className={classes.image} alt="under construction" />
      </ThemeProvider>
    </div>
  );
}
