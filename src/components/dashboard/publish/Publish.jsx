import React, {useContext} from "react";
import {Typography, Grid} from "@material-ui/core";
import {CustomCard, SectionTitle, SectionBackground} from "./../../common";
import DemoImage from "./../../../assets/images/Publishing.png";
import { CARD_CUSTOM } from "../../../constant";
import {SectionContext} from './../../../contexts/theme'

export default function() {
  const {classes} = useContext(SectionContext);

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
