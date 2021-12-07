import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {  useMediaQuery, Grid, Typography } from '@material-ui/core';
import DemoImage from "./../../../assets/images/Technology.png";
import Polygon from "./../../../assets/images/polygon.png";
import { CustomCard, SectionTitle, SectionBackground } from './../../common';

const useStyles = makeStyles({
  containerWrapper: {
    position: 'relative',
    backgroundColor: "#f3f4fd",
    backgroundImage: Polygon,
    backgroundPosition: 'center right',
    backgroundRepeat: 'no-repeat',
    paddingTop: 50,
    paddingBottom: 50,
  },
  root: {
    minHeight: 360,
    boxSizing: 'border-box',
    
    boxShadow: '0 0 20px 0 rgb(64 189 237 / 50%)',
    '&:hover': {
        boxShadow: '0 2px 30px 0 rgb(64 189 237 / 50%)'
    }
  },
  pos: {
    marginBottom: 12,
  },
  container: {
      paddingTop: '10px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 5
  },
});


export default function(){
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

  return (
      <Grid container className={classes.containerWrapper}>
        <SectionBackground imagePath={DemoImage} />
        <section className="container">
          <Grid container spacing={2} direction="row-reverse">
            <Grid item xs={12} md={6}>
            <SectionTitle>
              Technology 
            </SectionTitle>
        <Typography variant="body2">
          Technology, we believe, has the potential to improve customer service, raise revenue, and streamline all company procedures. We can help you with a variety of services, such as strategy, corporate application support, bespoke application development of all types and stages, and pioneering technology.
        </Typography>
        <Typography variant="body2" gutterBottom={true}>
          Digital Pathway is a prominent tech-driven platform that aims to assist businesses in assembling a team of highly efficient and competent experts, as well as serve people by expanding their job options. We take satisfaction in assisting in the creation of a professional environment that is conducive to achieving the goal and vision upon which businesses are founded. What’s more, we offer a multitude of services, including AI Development, Web Development, App Development, Content Production Service, Internet Marketing Service, IT Architecture, to name a few. 
        </Typography>
        </Grid>
          </Grid>
            <Grid container spacing={3} className={classes.container}>
            <Grid item xs={12} md={3}>
              <CustomCard 
                avatarLabel="AD"
                boxHeading="AI Development "
                boxPara={['By applying AI to your products, business operations, new domains, developing tools, and more, we help your company create amazing customer experiences and become smarter.']}
                boxUrl="/tech"
                boxButtonlabel="Know More..."
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomCard 
                avatarLabel="WD"
                boxHeading="Web Development"
                boxPara={['Our web developers assist brands in navigating the ever-changing digital landscape by being client-focused, customer-centric, and designing website solutions that produce concrete business results.']}
                boxUrl="/tech"
                boxButtonlabel="Know More..."
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomCard 
                avatarLabel="AD"
                boxHeading="App Development "
                boxPara={['We can assist you in developing consumer-facing or business-to-business apps for a variety of digital platforms, including mobile, online, desktop, smartwatch, VR, and AR.']}
                boxUrl="/tech"
                boxButtonlabel="Know More..."
              />
            </Grid>
            <Grid item xs={12} md={3}>
            <CustomCard 
                avatarLabel="SS"
                boxHeading="SEO Services"
                boxPara={['Our staff is dedicated to providing the most efficient and lucrative internet marketing methods to help your organization achieve revenue-generating goals.']}
                boxUrl="/tech"
                boxButtonlabel="Know More..."
              />
            </Grid>
        </Grid>
        </section>
      </Grid>
  );
}
