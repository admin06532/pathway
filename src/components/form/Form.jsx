import React, {useEffect, useState} from "react";
import {ThemeProvider, makeStyles, createTheme} from "@material-ui/core/styles";
import {Grid, CircularProgress, Backdrop, TextField, Button, Snackbar, Typography} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import {green, deepOrange} from "@material-ui/core/colors";
import clsx from "clsx";
import ContactUs from "./../../assets/images/contactUs.jpg";
import {SectionBackground, SectionTitle } from "./../common";
import {BASE_API} from "./../../constant";

const useStyles = makeStyles((theme) => ({
  snackbar: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  rootContainer: {
    position: "relative",
    background: '#ffffff'
  },

  root: {
    display: "block",
    flexWrap: "wrap",
    marginRight: theme.spacing(10),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
  },
  margin: {
    margin: theme.spacing(1),
  },
  fullwidth: {
    width: "97%",
  },
  cta: {
    padding: "10px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}));

const theme = createTheme({
  palette: {
    primary: green,
    secondary: deepOrange,
  },
});

const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />;

export const Form = () => {
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
  
  const handleToggle = () => {
    setOpenBackdrop(!openBackdrop);
  };


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
    <Grid container className={classes.rootContainer}>
      <Backdrop className={classes.backdrop} open={openBackdrop} onClick={handleToggle}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <SectionBackground imagePath={ContactUs} align='right' />
      <section className='container'>
        <Grid container style={{paddingTop: 40}}>
          <Grid item md={6} xs={12}>
            <SectionTitle>Contact Us</SectionTitle>
            <Typography variant='body2'>
              We’re based in Noida; our primary motto is to serve our
              publishing, IT, and manpower services to small and large
              businesses. As Pathways is one of the leading names in the Noida
              and Delhi NCR region, we’re already helping many small-scale and
              multinational companies across the country.{" "}
            </Typography>

            <Typography variant='body2'>
              By partnering with Pathways, we’re always ready to maintain your
              peace of mind by delivering the best possible services. Pathways
              is India’s one of the leading publishing and IT services companies
              available 24/7/365. At our company, we encourage you to push your
              limits and skyrocket your brand with our services.{" "}
            </Typography>

            <Grid
              container
              className={classes.container}
            >
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
                <Grid item xs={12}>
                  <ThemeProvider theme={theme}>
                    <TextField
                      className={classes.margin}
                      label='First Name'
                      variant='outlined'
                      name='firstName'
                      id='firstName'
                      onChange={handleUser}
                      value={userInput.firstName}
                      placeholder={requiredLabel}
                    />
                    <TextField
                      className={classes.margin}
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
                <Grid
                  item
                  xs={12}
                  className={classes.cta}
                >
                  <Button
                    variant='contained'
                    onClick={submitUserQuery}
                    size='large'
                    color='secondary'
                    disabled={validation}
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </Grid>
  );
};
