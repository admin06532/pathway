import React from "react";
import {Grid, Typography, List, ListItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import DemoImage from "./../../assets/images/about_us.png";
import Polygon from "./../../assets/images/polygon.png";
import {SectionBackground, SectionTitle, SectionSubTitle} from "./../common";

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

export const OtherWhySectionTwo = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <SectionBackground imagePath={DemoImage} align='right' />
      <section className='container'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <SectionTitle>Our Mission and Vision</SectionTitle>
            <Typography variant='body2' gutterBottom={true}>
              We provide high quality services in the field of digital
              transformation to our clients within prescribed time and budget
              and are committed to build a great relationship with the customers
              by converting their work in digital form. We use the latest
              technology and innovation to bring out the best for our
              prestigious clients.
            </Typography>
            <Typography variant='body2' gutterBottom={true}>
              We aim to achieve the best in eBook designing, IT solutions and
              third party payroll services and we help unlock the potential of
              the companies using the digital mediums.
            </Typography>
            <SectionSubTitle>Who are we?</SectionSubTitle>
            <Typography variant='body2' gutterBottom={true}>
              Digital Pathway is committed to helping companies transform
              business in an innovative manner. We have experience and expertise
              in several domains and help you get the best output with our
              expert team. We have an amazing team that uses best practices with
              great research and experience. With us, you will get a wide range
              of services like eBook designing, publishing, IT services, and
              third party payroll. We have a team of highly skilled team of
              experienced professionals that offers smart solutions in the
              digital field.
            </Typography>
          </Grid>
          <List>
          <ListItem>Great performance:</ListItem>
          <ListItem>
            We help the companies in achieving their goals by designing
            strategies for them.
          </ListItem>
          <ListItem>Committed to growth:</ListItem>
          <ListItem>
            We are committed to provide problem solving strategies for their
            continuous improvement.
          </ListItem>
          <ListItem>Well-experienced team:</ListItem>
          <ListItem>
            We have a team that collaborates and helps achieve goals in an
            efficient manner.
          </ListItem>
          <ListItem>Modesty:</ListItem>
          <ListItem>
            We have a team that dives into the client’s shoes and helps them
            face the challenges that they face.
          </ListItem>
          <ListItem>Global clients:</ListItem>
          <ListItem>
            We have clients located globally and go above and beyond to be
            useful to our clients and we try our best to implement and
            internalize.
          </ListItem>
          <ListItem>High-quality:</ListItem>
          <ListItem>
            We make use of strong processes and well tested methods to provide
            high-quality services that help clients grow.
          </ListItem>
        </List>
        </Grid>
      </section>
    </Grid>
  );
};
