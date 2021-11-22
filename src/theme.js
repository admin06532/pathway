import { createTheme } from '@material-ui/core/styles';
import { deepPurple, amber } from '@material-ui/core/colors';
import HelvitacaNeue from './assets/helveticaNeue.woff';

const HelvitacaNeu = {
  fontFamily: 'HelvitacaNeue',
  fontStyle: 'semi-bold',
  fontDisplay: 'swap',
  fontWeight: '600',
  src: `
    local('HelvitacaNeue'),
    local('HelvitacaNeue-SemiBold'),
    url(${HelvitacaNeue}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
 };

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
      fontFamily: ['HelvitacaNeu', 'sans-serif'].join(','),
      h5: {
        fontFamily: 'inherit',
        fontSize: '20px'
      },
      body1: {
        paddingBottom: '40px'
      },
      overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [HelvitacaNeu],
          },
        }
      }
     }
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
      },
    },
  };
