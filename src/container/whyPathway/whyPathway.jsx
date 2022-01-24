import React from "react";
import {Typography, Grid, List, ListItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TechImage from "./../../assets/images/heroshot/banner_1-min.png";
import WhyIntro from './../../components/whyPath/ItConsulting';
// import {
//   CustomCard,
//   SectionTitle,
//   SectionBackground,
// } from "./../../components/common";
import {CARD_CUSTOM} from "./../../constant";
import clsx from "clsx";
import { OtherWhySection } from "../../components/whyPath/OtherSection";
import { OtherWhySectionTwo } from "../../components/whyPath/OtherSectionTwo";

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
    top: "42%",
    maxWidth: "450px",
  },
  paddingTop: {
    paddingTop: "40px",
  },
}));

export const Whypathway = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <div className={classes.banner}>
          <Typography
            variant='h2'
            className={classes.deskTopMaxWidth}
            component='div'
            align='left'
          >
            Why Us
          </Typography>
          <div className={classes.box}>
            <Typography gutterBottom={true}>
              D Pathway was founded to provide businesses of all sizes with IT
              consulting, publishing, and web application development services.
              We help you and your business connect with customers, integrate
              with vendors, and empower employees to do their best work.
            </Typography>
          </div>
        </div>
      </Grid>
      <WhyIntro />
      <OtherWhySection />
      <OtherWhySectionTwo />
    </>
  );
};
