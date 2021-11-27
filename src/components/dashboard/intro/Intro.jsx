import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Grid, Button} from "@material-ui/core";
import {Link} from 'react-router-dom';
import { SectionTitle, SectionBackground } from './../../common';
import DemoImage from "./../../../assets/images/ImageInBg.PNG";
import Polygon from "./../../../assets/images/polygon.png";


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    flexGrow: 1,
    backgroundImage: `url(${Polygon})`,
    backgroundColor: '#fff',
    backgroundPosition: "center left -10px",
    backgroundSize: "32%",
    backgroundRepeat: "no-repeat",
    paddingBottom: "50px",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  
  bannerImage: {
    position: 'absolute',
    right: '-5%',
    borderRadius: '40px',
    width: '40%',
    textAlign: 'center',
    padding: 0,
    top: '15%',
    zIndex: 2,    
    '&::before': {
      content: '""',
      display: "block",
      position: "absolute",
      borderRadius: "40px",
      zIndex: 0,
      top: '-20px',
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
    backgroundColor: '#ffffff',
    position: 'relative'
  }

}));

export const IntroApp = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <SectionBackground imagePath={DemoImage} align="right"/>
       
      <section className="container">
      <Grid
        item
        xs={12}
        md={6}
        style={{marginLeft: 50, marginTop: 50, textAlign: "left"}}
      >
        <SectionTitle>Introduction</SectionTitle>
        <Grid container>
          <Grid item>
            <Typography gutterBottom={true}>
              Digital Pathway has the expertise that can help companies make use
              of digital technology to leverage their content and get new
              valuable products. With fantastic solutions from our experts, you
              can streamline the workflows and generate better revenues. We will
              increase your brand awareness and enhancement with our services
              and make sure that the entire operations run smoothly.
            </Typography>
            <Typography gutterBottom={true}>
              At Digital Pathway, we design, enrich, and convert the existing
              content so that it can be repurposed and managed. Content is
              available in many forms like books, training materials, and other
              marketing materials and we have industry veterans with unmatched
              expertise. We make use of complex technology and offer solutions
              that are efficient and low cost. We turn flat and unappealing
              content into a smart one so that this digital information can be
              monetized and utilized freely.
            </Typography>
            {/* <Typography gutterBottom={true}>
              We’re based in Noida, our primary motto is to serve our
              publishing, IT, and manpower services to small and large
              businesses. As Pathway is one of the
              leading names in the Noida and Delhi NCR region, we’re already
              helping many small-scale and multinational companies across the
              country.
            </Typography>
            <Typography gutterBottom={true}>
              By partnering with Pathway, we’re
              always ready to maintain your peace of mind by delivering the best
              possible services. Pathway is
              India’s one of the leading publishing and IT services companies
              available 24/7/365. At our company, we encourage you to push your
              limits and skyrocket your brand with our services.
            </Typography> */}
            <Grid align="center">
              <Link to="/about" className={classes.link}>
                  <Button color="primary" variant="contained">Know more...</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </section>
    </Grid>
  );
};
