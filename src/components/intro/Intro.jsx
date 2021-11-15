import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Grid, Link} from "@material-ui/core";
import AboutImg from "./../../assets/images/about_us.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${AboutImg})`,
    backgroundPosition: "center right 143px",
    backgroundSize: "32%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#fafafa",
    paddingBottom: "50px",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  initial: {
    "&:first-letter": {
      fontSize: "40px",
      position: "absolute",
      lineHeight: 1,
    },
  },
  btnStrach : {
    padding: '8px 30px',
    backgroundColor: '#fff',
    borderRadius: '4px',
    fontWeight: '500',
    boxSizing: 'border-box',
    textDecoration: 'none',
    border: '1px solid rgba(45,179,235,0.53)',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    color: '#3FBDED',
    textTransform: 'inherit',
    lineHeight: 1,
    '&:hover': {
      background: '#3FBDED',
      color: '#fff',
      textDecoration: 'none',
    }
  },
}));

export const Intro = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={12}
        md={6}
        style={{marginLeft: 50, marginTop: 50, textAlign: "left"}}
      >
        <Typography variant='h3' align='center'>
          Introduction
        </Typography>
        <Grid container>
          <Grid item>
            <Typography gutterBottom={true} className={classes.initial}>
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
            <Typography gutterBottom={true}>
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
            </Typography>
            <Grid align="center" style={{marginTop: '50px'}} >
              <Link className={classes.btnStrach} href="/about">Know more...</Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
