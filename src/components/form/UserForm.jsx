import React, {useEffect, useState} from "react";
import {ThemeProvider, makeStyles, createTheme} from "@material-ui/core/styles";
import {Grid, TextField, Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import CircularProgress from '@material-ui/core/CircularProgress';
import {green, deepOrange} from "@material-ui/core/colors";
import clsx from "clsx";
import {BASE_API} from "../../constant";

const useStyles = makeStyles((theme) => ({
  snackbar: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  root: {
    display: "block",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(0),
    },
    paddingBottom: theme.spacing(5),
  },
  margin: {
    margin: theme.spacing(1),
  },
  fullwidth: {
    width: "97%",
  },
  fullwidthInput: {
    [theme.breakpoints.down("md")]: {
      width: "97%",
    },
  },
  cta: {
    padding: "10px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  }, 
}));

const theme = createTheme({
  palette: {
    primary: green,
    secondary: deepOrange,
  },
});
const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />;

export const UserForm = (props) => {
  const userDefaultValue = {
    firstName: "",
    lastName: "",
    email: "",
    queryQuestion: "",
  };
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const [userInput, setUserInput] = useState(userDefaultValue);
  const [validation, setValidation] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [openBackdrop, setOpenBackdrop] = useState(false);

   
  const handleUser = (e) => {
    let {name, value} = e.currentTarget;
    setUserInput({...userInput, [name]: value});
  };

  const requiredLabel = "This is a required field";

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const submitUserQuery = () => {
    setOpenBackdrop(true);

    const payLoadData = {
      contactUserName: `${userInput.firstName} ${userInput.lastName}`,
      contactUserEmail: `${userInput.email}`,
      contactUserMessage: `${userInput.queryQuestion}`,
    };

    fetch(`${BASE_API}/api/contactus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payLoadData),
    })
      .then((response) => {
        setSuccessMessage(
          "We have received your query/question, we will get back to you soon."
        );
        setOpenSnackbar(true);
        setUserInput(userDefaultValue);
        setOpenBackdrop(false);
        props && props.handleClose();
        
        return response.json();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/gim;
    let valuesArray = Object.values(userInput);
    let check =
      valuesArray.length === 4
        ? valuesArray.every((value) => value.length >= 2)
        : false;

    if (check && userInput.queryQuestion.length > 100) {
      setValidation(!pattern.test(userInput.email));
    } else {
      setValidation(true);
    }
  }, [userInput, openSnackbar, successMessage, openBackdrop]);

  return (
    <Grid container className={classes.container}>
      <div className={classes.snackbar}>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{vertical: "top", horizontal: "right"}}
        >
          <Alert onClose={handleClose} severity='success'>
            {successMessage}
          </Alert>
        </Snackbar>
      </div>

      <form className={classes.root} noValidate autoComplete='off'>
      {(
        <>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <TextField
              className={clsx(classes.fullwidthInput, classes.margin)}
              label='First Name'
              variant='outlined'
              name='firstName'
              id='firstName'
              onChange={handleUser}
              value={userInput.firstName}
              placeholder={requiredLabel}
            />
            <TextField
              className={clsx(classes.fullwidthInput, classes.margin)}
              label='Last Name'
              variant='outlined'
              id='lastName'
              onChange={handleUser}
              name='lastName'
              value={userInput.lastName}
              placeholder={requiredLabel}
            />
          </ThemeProvider>
        </Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <TextField
              className={clsx(classes.margin, classes.fullwidth)}
              label='Email address'
              variant='outlined'
              id='email'
              onChange={handleUser}
              name='email'
              placeholder={requiredLabel}
              value={userInput.email}
            />
          </ThemeProvider>
        </Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <TextField
              className={clsx(classes.margin, classes.fullwidth)}
              label='Query/Question'
              variant='outlined'
              multiline
              id='queryQuestion'
              rows={4}
              value={userInput.queryQuestion}
              onChange={handleUser}
              placeholder={`Minimum character 100 is required`}
              name='queryQuestion'
            />
          </ThemeProvider>
        </Grid>
        <Grid item xs={12} className={classes.cta}>
        <Button
            variant='contained'
            onClick={submitUserQuery}
            size='large'
            color='secondary'
            disabled={validation || openBackdrop}
            fullWidth
          >
            Submit
          </Button>
        </Grid>
        </>)}
      </form>
    </Grid>
  );
};
