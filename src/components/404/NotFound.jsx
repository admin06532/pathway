import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export const NotFound = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">This page will come soon, our team is working on it.</Typography>
      </ThemeProvider>
    </div>
  );
}
