import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import DemoImage from "./../../assets/images/ai.jpg";
import Polygon from "./../../assets/images/polygon.png";
import {SectionTitle, SectionBackground} from "./../../components/common";
import {CARD_CUSTOM} from "./../../constant";
import {WebDevCarousal} from './WebDevCarousal';
import clsx from 'clsx';

const useStyles = makeStyles({
  containerWrapper: {
    position: "relative",
    backgroundColor: "#f3f4fd",
    backgroundImage: Polygon,
    backgroundPosition: "center right",
    backgroundRepeat: "no-repeat",
    paddingTop: 50,
    paddingBottom: 50,
  },
  root: {
    minHeight: 360,
    boxSizing: "border-box",

    boxShadow: "0 0 20px 0 rgb(64 189 237 / 50%)",
    "&:hover": {
      boxShadow: "0 2px 30px 0 rgb(64 189 237 / 50%)",
    },
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    paddingTop: "10px",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 5,
  },
});

export const AppDevelop = React.memo(() => {
  const classes = useStyles();

  return (
    <Grid container className={clsx(classes.containerWrapper)}>
      <SectionBackground imagePath={DemoImage} />
      <section className='container'>
        <Grid container spacing={2} direction='row-reverse'>
          <Grid item xs={12} md={6}>
            <SectionTitle>Application Development</SectionTitle>
            <Typography varient='h3' gutterBottom={true}>
              Next-Gen Application Development Services to Bring Your Business
              to Life
            </Typography>
            <Typography variant='body2' gutterBottom={true}>
              D pathway is a leading web and mobile application development
              company that creates award-winning IOS and Android mobile and
              online apps. We provide custom mobile and web software solutions
              that provide rich digital experiences on both the web and mobile
              devices.
            </Typography>
            <Typography variant='body2' gutterBottom={true}>
              Our application development services include technology
              consultation, development, testing, support and maintenance. Our
              client success stories include audit and improvement of existing
              apps and modernization of legacy apps.
            </Typography>
            <Typography variant='h5' gutterBottom={true}>
              Our Application Development Services
            </Typography>
          </Grid>
        </Grid>
          <WebDevCarousal carouselData={CARD_CUSTOM.APP_DEV_CARD} />
       </section>
    </Grid>
  );
});
