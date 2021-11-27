import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {  useMediaQuery, Grid, Typography } from '@material-ui/core';
import DemoImage from "./../../../assets/images/ImageInBg.PNG";
import Polygon from "./../../../assets/images/polygon.png";
import { CustomCard, SectionTitle, SectionBackground } from './../../common';

const useStyles = makeStyles({
  containerWrapper: {
    position: 'relative',
    backgroundColor: "#ffffff",
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


export const Publish = () => {
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
            Publishing &amp; Conversion 
            </SectionTitle>
        <Typography variant="body1">
        We'll convert it to the digital output format of your choice, regardless of the original format (digital or non-digital). We use cutting-edge technology for conversion and digitization. For all types of material, our team of experts can scan, tag, input, index, label, and produce digital content. As we work, we structure, modify, and validate the digital source files. From eBooks to interactive textbooks, digital journals, and websites, we can do it all.
        </Typography>
        
        <Typography variant="body1">
          We provide end-to-end digital publishing services, including ebook conversion and ebook formatting, with more than two decades of experience and in-depth knowledge of eBook formats such as ePub, ePub3, KF8, Mobi, PDF, and others.
        </Typography>
        

        </Grid>
          </Grid>
            <Grid container spacing={3} className={classes.container}>
            <Grid item xs={12} md={3}>
              <CustomCard 
                avatarLabel="ID"
                boxHeading="Typesetting & Pagination"
                boxList={[
                  'Galley',
                  'Pagination',
                  'Revise/Repro',
                  'Final Print PDF'
                ]}
                boxUrl="/placement"
                boxButtonlabel="Know More..."
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomCard 
                avatarLabel="EC"
                boxHeading="eBook Conversion"
                boxList={[
                  'Reflowable',
                  'Fixed Layout',
                  'HTML5/ePub3 Interactive eBook',
                  'UI/UX,CSS / CSS3 Development',
                  'Enhanced eBooks / Multimedia eBooks',
                  'Web Accessible eBook Development',
                  'Mobi/ KF8 Conversion Services',
                  'Interactive Digital Comic Books'
                ]}
                boxUrl="/placement"
                boxButtonlabel="Know More..."
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomCard 
                avatarLabel="XT"
                boxHeading="XML Transformation "
                boxList={[
                  'DTD Design Services',
                  'XML Schema Design',
                  'PDF to XML',
                  'DOC to XML',
                  'DocBook XML',
                  'XML to HTML Transformation'
                ]}
                boxUrl="/placement"
                boxButtonlabel="Know More..."
              />
            </Grid>
            <Grid item xs={12} md={3}>
            <CustomCard 
                avatarLabel="AM"
                boxHeading="Animation Magazines"
                boxList={['PDF to XML',
                'DOC to XML',
                'DocBook XML',
                ]}
                boxUrl="/usstaff"
                boxButtonlabel="Know More..."
              />
            </Grid>
        </Grid>
        </section>
      </Grid>
  );
}
