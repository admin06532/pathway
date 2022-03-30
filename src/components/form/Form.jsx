import React, {useEffect, useState} from "react";
import {makeStyles, createTheme} from "@material-ui/core/styles";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import ContactUs from "./../../assets/images/contact_map.png";
import Polygon from "./../../assets/images/polygon.png";
import { SectionSubTitle } from "../common";
import { UserForm } from "./UserForm";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    position: "relative",
    backgroundImage: `url(${ContactUs})`,
    backgroundPosition: "center right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "50%",

    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'none',
    },
  },
  sixBgImg: {
    backgroundImage: `url(${Polygon})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '25%'
  }
}));

export const Form = () => {
  const classes = useStyles();
  return (
    <div className={classes.sixBgImg}>
      <Grid container className={classes.rootContainer}>
      <section className={'container'}>
        <Grid container style={{paddingTop: 40}}>
          <Grid item md={6} xs={12}>
            <SectionSubTitle>
              Contact Us
            </SectionSubTitle>
            <Typography variant='body2' gutterBottom={true}>
              We’re based in Noida; our primary motto is to serve our
              publishing, IT, and manpower services to small and large
              businesses. As Pathways is one of the leading names in the Noida
              and Delhi NCR region, we’re already helping many small-scale and
              multinational companies across the country.
            </Typography>
            <Typography variant='body2'>
              By partnering with Pathways, we’re always ready to maintain your
              peace of mind by delivering the best possible services. Pathways
              is India’s one of the leading publishing and IT services companies
              available 24/7/365. At our company, we encourage you to push your
              limits and skyrocket your brand with our services.
            </Typography>
            <UserForm />
          </Grid>
        </Grid> 
      </section>
    </Grid>
    </div>
  );
};
