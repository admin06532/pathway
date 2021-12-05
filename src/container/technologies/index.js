import React from "react";
import {Typography, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AboutImage from "./../../assets/images/techbanner.png";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundPosition: "center right 50px",
    backgroundRepeat: "no-repeat",
    paddingBottom: "50px",
  },
  deskTopMaxWidth: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  banner: {
    boxSizing: "border-box",
    paddingTop: "100px",
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${AboutImage})`,
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
      <div className={clsx("content", classes.deskTopMaxWidth)}>
        <Typography gutterBottom={true} style={{paddingTop: "40px"}}>
          By partnering with Pathways, we’re always ready to maintain your peace
          of mind by delivering the best possible services. Pathways is India’s
          one of the leading publishing and IT services companies available
          24/7/365. At our company, we encourage you to push your limits and
          skyrocket your brand with our services.
        </Typography>
        <Typography gutterBottom={true}>
          At Pathways, we’re blessed with well-qualified, professional, and
          certified team members who help you preserve your resources and still
          get the desired results.
        </Typography>
        <Typography gutterBottom={true}>
          Our vision is to become our country’s leading publishing and IT
          services company and keep delivering quality recruitment services to
          our clients.
        </Typography>
        <Typography gutterBottom={true}>
          Our mission is to deliver customer-oriented, results-driven,
          affordable, and innovative services to our national and international
          clients.
        </Typography>
        <Typography gutterBottom={true}>
          To keep an innovative approach towards all our clients, keeping our
          core values and principles in our mind. We believe in our principles
          and core values that will indeed help us in growing our business.
        </Typography>
        <Typography gutterBottom={true}>
          As of now, we’re already the official business partners of many small
          and large businesses based all over India.
        </Typography>
        <Typography gutterBottom={true}>
          Our core team members are working in publishing, IT services, and
          recruitment services for decades. As a result, we have experience in
          working for different industries.
        </Typography>
        <Typography gutterBottom={true}>
          At Pathways, everyone hates HIDDEN CHARGES, and we keep our quotes
          crystal clear with our clients; whatever quotes we provide are final
          and non-negotiable.
        </Typography>
        <Typography gutterBottom={true}>
          When you share your project details with us, we manage the briefing
          and conduct meetings for completing your projects within the deadline.
        </Typography>
        <Typography gutterBottom={true}>
          At Pathways, we deliver IT services, recruitment, and publishing
          services at the best possible value. When you partner with our
          company, you’ve already beaten your competitors.
        </Typography>
      </div>
    </Grid>
  );
};
