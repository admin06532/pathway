import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Grid} from "@material-ui/core";
import {CustomCard, SectionTitle, SectionBackground} from "./../../common";
import DemoImage from "./../../../assets/images/Publishing.png";
import Polygon from "./../../../assets/images/polygon.png";
import { CARD_CUSTOM } from "../../../constant";

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
    [theme.breakpoints.down('md')]: {
      paddingTop: 50
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
    paddingTop: '10px',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 5
  },
  flexItem : {
    marginLeft: 50,
    marginTop: 50,
    textAlign: "left",
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginTop: 0,
      paddingTop: 20
    },
  }
}));

export default function() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <SectionBackground imagePath={DemoImage} align='right' />
      <section className='container'>
        <Grid
          item
          xs={12}
          md={6}
        >
          <SectionTitle> Publishing &amp; Conversion</SectionTitle>
          <Grid container>
            <Grid item>
              <Typography variant='body2' gutterBottom={true}>
                We'll convert it to the digital output format of your choice,
                regardless of the original format (digital or non-digital). We
                use cutting-edge technology for conversion and digitization. For
                all types of material, our team of experts can scan, tag, input,
                index, label, and produce digital content. As we work, we
                structure, modify, and validate the digital source files. From
                eBooks to interactive textbooks, digital journals, and websites,
                we can do it all.
              </Typography>
              <Typography variant='body2' gutterBottom={true}>
                We provide end-to-end digital publishing services, including
                ebook conversion and ebook formatting, with more than two
                decades of experience and in-depth knowledge of eBook formats
                such as ePub, ePub3, KF8, Mobi, PDF, and others.
              </Typography>
              </Grid>
        </Grid>
        </Grid>
              <Grid container spacing={3} className={classes.container}>
                {CARD_CUSTOM.PUBLISHING.map( ({avatarLabel, boxHeading, boxList,boxUrl, boxButtonLabel }, index) => (
                  <Grid item xs={12} md={3} key={`card${index}`}>
                    <CustomCard
                      avatarLabel={avatarLabel}
                      boxHeading={boxHeading}
                      boxList={boxList}
                      boxUrl={boxUrl}
                      boxButtonLabel={boxButtonLabel}
                    />
                </Grid>
                )) 
                }
            </Grid>
          
      </section>
    </Grid>
  );
};
