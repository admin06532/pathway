import { createTheme } from '@material-ui/core/styles';
import { deepPurple, amber } from '@material-ui/core/colors';

export const theme = createTheme({
    palette: {
      primary: {
        main: deepPurple[500],
      },
  
      secondary: {
        main: amber[500],
        contrastText: deepPurple[900],
      },
    },
    typography: {
      fontFamily: ['sans-serif'],
      h5: {
        fontFamily: 'inherit',
        fontSize: '20px'
      },
      body2: {
        paddingBottom: '20px',
        color: '#333',
        fontSize: '16px',
      },
     },
  });
  
theme.props = {

    MuiButton: { // `MuiButton` is the global class name for the <Button /> component
      disableElevation: true, // this prop disables the drop shadow on all Buttons
    },
  };

  theme.overrides = {

    MuiButton: {
  
      root: {
        textTransform: 'none', // removes uppercase transformation
        boxSizing: 'border-box',
        fontWeight: '500',
      },
  
      containedPrimary: {
        backgroundColor: '#fff',
        textDecoration: 'none',
        border: '1px solid rgba(45,179,235,0.53)',
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        color: '#3FBDED',
        textTransform: 'inherit',
  
        '&:hover': { // changes colors for hover state
            backgroundColor: '#3FBDED',
            color: '#fff',
            textDecoration: 'none',
        },
        [theme.breakpoints.down('md')]: {
          backgroundColor: '#3FBDED',
          color: '#fff',
        },
      }, 
      containedSecondary: {
        backgroundColor: '#3FBDED',
        textDecoration: 'none',
        border: '1px solid rgba(45,179,235,0.53)',
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        color: '#fff',
        textTransform: 'inherit',
        fontWeight: 500,
        '&:hover': { // changes colors for hover state
          backgroundColor: '#3FBDED',
          color: '#fff',
          textDecoration: 'none',
        },
        '&:disabled': {
          border: 'none'
        }
      },
    },
  };
