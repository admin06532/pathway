import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {  useMediaQuery, Grid, Typography } from '@material-ui/core';
import DemoImage from "./../../../assets/images/3.png";
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
  container: {
      paddingTop: '10px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 5
  },
});



export default function(){
  const classes = useStyles();
  
  return (
      <Grid container className={classes.containerWrapper}>
        <SectionBackground imagePath={DemoImage} />
        <section className="container">
          <Grid container spacing={2} direction="row-reverse">
            <Grid item xs={12} md={6}>
            <SectionTitle>
                IT Consulting 
            </SectionTitle>

            <Typography variant="body2">
                DPathway offers contract-to-hire personnel for project-based support, with the opportunity to hire our contractors as permanent employees or discover permanent top talent to match your company's requirements. We have obtained a unique perspective on how we may contribute to organizational goals by listening to our client's business requirements.
            </Typography>
            <Typography variant="body2">
                Our professional consultants are local market experts who work with you to understand your business objectives and specific personnel requirements. They use the most up-to-date technologies to find the greatest talent, and they put their people skills to good use to make sure the best talent finds its way to you. This is how we help you move your company forward so you can gain a competitive edge.
            </Typography>
        </Grid>
          </Grid>
            <Grid container spacing={3} className={classes.container}>
            <Grid item xs={12} md={3}>
              <CustomCard 
                avatarLabel="US"
                boxHeading="US Staffing"
                boxPara={['Our HR advisory services help you improve operational & organizational activities by putting right people with right capability at right costs doing the right thing.']}
                boxUrl="/"
                boxButtonlabel="Know More..."
              />
            </Grid>
            {/*d We also conduct outsourcing a business practice in which certain talent acquisition functions required by the business are performed on a contract basis */}
            <Grid item xs={12} md={3}>
              <CustomCard 
                avatarLabel="O"
                boxHeading="Outsourcing"
                boxPara={['We also conduct outsourcing a business practice in which certain talent acquisition functions required by the business are performed on a contract basis.']}
                boxUrl="/placement"
                boxButtonlabel="Know More..."
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomCard 
                avatarLabel="CPR"
                boxHeading="Contract Permanent Recruitment "
                boxPara={['Our CPR is just the solution you need for a temporary job without running up huge expenses on employment formalities.']}
                boxUrl="/"
                boxButtonlabel="Know More..."
              />
            </Grid>
            <Grid item xs={12} md={3}>
            <CustomCard 
                avatarLabel="PPR"
                boxHeading="Permanent Placement Recruitment"
                boxPara={['Our recruitment consultants follow a client-based strategy to search for and make available the job-ready talent, thereby cutting your cost on recruitment process.']}
                boxUrl="/"
                boxButtonlabel="Know More..."
              />
            </Grid>
        </Grid>
        </section>
      </Grid>
  );
}

