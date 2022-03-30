import React from "react";
import {Typography, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { OtherWhySectionTwo } from "../../components/whyPath/OtherSectionTwo";
import { SectionBackground} from "./../../components/common";
import VisionImage from "./../../assets/images/vision.jpg";
import clsx from "clsx";
import AboutImage from "./../../assets/images/heroshot/banner_2-min.png";
import Polygon from "./../../assets/images/polygon.png";

const useStyles = makeStyles(() => ({
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

export const AboutUs = () => {
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
          About Us
        </Typography>
        <div className={classes.box}>
          <Typography variant='body2' gutterBottom={true}>
            Searching for the best publishing, IT, and manpower services for
            your business? Pathways will deliver services that will only boost
            your brand reputation and take your business to the next level.
          </Typography>
          <Typography gutterBottom={true}>
            We’re based in Noida; our primary motto is to serve our publishing,
            IT, and manpower services to small and large businesses. As Pathways
            is one of the leading names in the Noida and Delhi NCR region, we’re
            already helping many small-scale and multinational companies across
            the country.
          </Typography>
        </div>
      </div>
      <Grid container className={clsx(classes.containerWrapper)}>
      <SectionBackground imagePath={VisionImage} />
      <Grid container spacing={2} direction='row-reverse'>
          <Grid item xs={12} md={8}>
      <Typography className="initial-letter" variant='body2' gutterBottom={true} style={{paddingTop: '40px'}}>
          By partnering with Pathways, we’re always
          ready to maintain your peace of mind by delivering the best possible
          services. Pathways is India’s one of the
          leading publishing and IT services companies available 24/7/365. At
          our company, we encourage you to push your limits and skyrocket your
          brand with our services.
        </Typography>
        <Typography variant='body2' gutterBottom={true}>
          At Pathways, we’re blessed with
          well-qualified, professional, and certified team members who help you
          preserve your resources and still get the desired results.
        </Typography>
        <Typography variant='body2' gutterBottom={true}>
          Our vision is to become our country’s leading publishing and IT
          services company and keep delivering quality recruitment services to
          our clients.
        </Typography>
        <Typography variant='body2' gutterBottom={true}>
          Our mission is to deliver customer-oriented, results-driven,
          affordable, and innovative services to our national and international
          clients.
        </Typography>
        <Typography variant='body2' gutterBottom={true}>
          To keep an innovative approach towards all our clients, keeping our
          core values and principles in our mind. We believe in our principles
          and core values that will indeed help us in growing our business.
        </Typography>
        <Typography variant='body2' gutterBottom={true}>
          As of now, we’re already the official business partners of many small
          and large businesses based all over India.
        </Typography>
        <Typography variant='body2' gutterBottom={true}>
          Our core team members are working in publishing, IT services, and
          recruitment services for decades. As a result, we have experience in
          working for different industries.
        </Typography>
        <Typography variant='body2' gutterBottom={true}>
          At Pathways, everyone hates HIDDEN
          CHARGES, and we keep our quotes crystal clear with our clients;
          whatever quotes we provide are final and non-negotiable.
        </Typography>
        <Typography variant='body2' gutterBottom={true}>
          When you share your project details with us, we manage the briefing
          and conduct meetings for completing your projects within the deadline.
        </Typography>
        <Typography variant='body2' gutterBottom={true}>
          At Pathways, we deliver IT services,
          recruitment, and publishing services at the best possible value. When
          you partner with our company, you’ve already beaten your competitors.
        </Typography>
        </Grid>
        </Grid>
      </Grid>
      <OtherWhySectionTwo />
</Grid>
  );
};
