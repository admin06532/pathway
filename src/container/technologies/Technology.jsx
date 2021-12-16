import React from "react";
import {Typography, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TechImage from "./../../assets/images/techbanner.png";

import {AiLearning, WebDevelopment, AppDevelop} from './../../components/technology';

const useStyles = makeStyles(() => ({
  deskTopMaxWidth: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  banner: {
    boxSizing: "border-box",
    paddingTop: "100px",
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${TechImage})`,
    backgroundSize: "cover",
    position: "relative",
    "& .MuiTypography-h2": {
      position: "absolute",
      left: "50%",
      top: "28%",
      fontWeight: "400",
    },
  },
  box: {
    position: "absolute",
    left: "50%",
    top: "40%",
    maxWidth: "450px",
  },
}));

export const Technology = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <div className={classes.banner}>
        <Typography
          variant='h2'
          className={classes.deskTopMaxWidth}
          component='div'
          align='left'
        >
          Technology
        </Typography>
        <div className={classes.box}>
          <Typography gutterBottom={true}>
            Technology, we believe, has the potential to improve customer
            service, raise revenue, and streamline all company procedures. We
            can help you with a variety of services, such as strategy, corporate
            application support, bespoke application development of all types
            and stages, and pioneering technology.
          </Typography>
        </div>
      </div>
      <AiLearning />
      <WebDevelopment />
      <AppDevelop />
    </Grid>
  );
};
