import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import RoundingImage from "./../../assets/images/ronding.png";
import Polygon from "./../../assets/images/polygon.png";
import {SectionTitle, SectionBackground} from "./../../components/common";
import clsx from "clsx";

const useStyles = makeStyles({
  containerWrapper: {
    position: "relative",
    backgroundColor: "#ffffff",
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

export const OtherWhySection = React.memo(() => {
  const classes = useStyles();

  return (
    <Grid container className={clsx(classes.containerWrapper)}>
      <SectionBackground imagePath={RoundingImage} />
      <section className='container'>
        <Grid container spacing={2} direction='row-reverse'>
          <Grid item xs={12} md={6}>
            <SectionTitle>Let’s move down the Digital Pathway:</SectionTitle>
            <Typography variant='body2' gutterBottom={true}>
              Digital Pathway has the expertise that can help companies make use
              of digital technology to leverage their content and get new
              valuable products. With fantastic solutions from our experts, you
              can streamline the workflows and generate better revenues. We will
              increase your brand awareness and enhancement with our services
              and make sure that the entire operations run smoothly.
            </Typography>
            <Typography variant='body2' gutterBottom={true}>
              At Digital Pathway, we design, enrich, and convert the existing
              content so that it can be repurposed and managed. Content is
              available in many forms like books, training materials, and other
              marketing materials and we have industry veterans with unmatched
              expertise. We make use of complex technology and offer solutions
              that are efficient and low cost. We turn flat and unappealing
              content into a smart one so that this digital information can be
              monetized and utilized freely.
            </Typography>
          </Grid>
        </Grid>
      </section>
    </Grid>
  );
});
