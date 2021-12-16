import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Grid} from "@material-ui/core";
import {
  CustomCard,
  SectionTitle,
  SectionBackground,
} from "./../../components/common";
import DemoImage from "./../../assets/images/web_design.jpg";
import Polygon from "./../../assets/images/polygon.png";
import {CARD_CUSTOM} from "./../../constant";
import {WebDevCarousal} from "./WebDevCarousal";
import { WebDevList } from "./WebDevList";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    flexGrow: 1,
    backgroundImage: `url(${Polygon})`,
    backgroundColor: "#fff",
    backgroundPosition: "center left -10px",
    backgroundSize: "32%",
    backgroundRepeat: "no-repeat",
    paddingBottom: "50px",
    paddingTop: 50,
    [theme.breakpoints.down("md")]: {
      paddingTop: 50,
    },
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },

  bannerImage: {
    position: "absolute",
    right: "-5%",
    borderRadius: "40px",
    width: "40%",
    textAlign: "center",
    padding: 0,
    top: "15%",
    zIndex: 2,
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      borderRadius: "40px",
      zIndex: 0,
      top: "-20px",
      left: 0,
      height: "100%",
      width: "110%",
      background: "linear-gradient( 45deg,#3FBDED 0%,#00A4E8 100%)",
      transform: "rotate(10deg)",
    },
  },
  img: {
    height: "100%",
    margin: "auto",
    borderRadius: "80px 0px 0px 80px",
    boxShadow: "5px 5px 36px rgb(64 189 237 / 50%)",
    backgroundColor: "#ffffff",
    position: "relative",
  },
  container: {
    paddingTop: "10px",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 5,
  },
  flexItem: {
    marginLeft: 50,
    marginTop: 50,
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginTop: 0,
      paddingTop: 20,
    },
  },
}));

export const WebDevelopment = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <SectionBackground imagePath={DemoImage} align='right' />
      <section className='container'>
        <Grid item xs={12} md={6}>
          <SectionTitle> Website Development</SectionTitle>
          <Grid container>
            <Grid item>
              <Typography variant='body2' gutterBottom={true}>
                People have become well-accustomed with online buying and
                selling. Thus, small to large scale businesses want to
                strengthen their online presence these days. The first step for
                strengthening online presence is building a perfect business
                website. For developing an ecommerce website, you need to find a
                professional and reliable developer. At Dpathway, we provide
                top-notch ecommerce website development service at an affordable
                cost.
              </Typography>
              <Typography variant='h4' gutterBottom={true}>
                Our Website Development Services
              </Typography>
              <Typography variant='body2' gutterBottom={true}>
                At Dpathway, we offer an extensive range of ecommerce website
                development services. Find a glimpse on our ecommerce
                development service below.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <WebDevCarousal />
        <Typography variant='h4' gutterBottom={true}>
          Why Choose Us?
        </Typography>
        <Typography variant='body2' gutterBottom={true}>
          So, why should you choose Dpathway for an ecommerce development
          service? Find the reasons for choosing our advanced and seamless
          ecommerce development service.
        </Typography>
        <Grid container spacing={2} gutterBottom={true}>
        <WebDevList />
        </Grid>
        <Typography style={{marginTop: '30px'}} variant='h5' gutterBottom={true}>
          An Affordable Service Provider
        </Typography>
        <Typography variant='body2' gutterBottom={true}>
          At Dpathway, we maintain transparency in our service packages. Our
          goal is providing top-quality ecommerce website development solutions
          at the most affordable budget. Moreover, the satisfaction of the
          clients is a crucial concern for us. We offer custom ecommerce
          development services at your suitable budget.
        </Typography>
        <Typography variant='body2' gutterBottom={true}>
          For an advanced ecommerce development service, you can contact us
          anytime. Call us or write emails to us to get in touch with our team.
        </Typography>
      </section>
    </Grid>
  );
};
