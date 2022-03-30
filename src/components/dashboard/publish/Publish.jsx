import React, {useContext} from "react";
import {Typography, Grid} from "@material-ui/core";
import {CustomCard, SectionSubTitle, SectionBackground} from "./../../common";
import DemoImage from "./../../../assets/images/Publishing.png";
import { CARD_CUSTOM } from "../../../constant";
import {SectionContext} from './../../../contexts/theme'

const Publish = () => {
  const {classes} = useContext(SectionContext);

  return (
    <Grid id="publish" container className={classes.root}>
      <SectionBackground imagePath={DemoImage} align='right' />
      <section className='container'>
        <Grid
          item
          xs={12}
          md={6}
        >
          <SectionSubTitle>
            Create eBooks Easily with the Right e-Publishing Company India
          </SectionSubTitle>
          <Grid container>
            <Grid item>
              <Typography variant='body2' gutterBottom={true}>
                We'll convert it to the digital output format of your choice, regardless of the original format (digital or non-digital). Digital Pathway, a prominent e-publishing company in India, uses cutting-edge technology for conversion and digitization. For all types of material, our team of experts can scan, tag, input, index, label, and produce digital content. As we work, we structure, modify, and validate the digital source files. From eBooks to interactive textbooks, digital journals, and websites, we can do it all.
              </Typography>
              <Typography variant='body2' gutterBottom={true}>
                Digital Pathway, one of the globally recognized e-publishing services providers in India, offers end-to-end digital publishing services, including ebook conversion and ebook formatting, with more than two decades of experience and in-depth knowledge of eBook formats such as ePub, ePub3, KF8, Mobi, PDF, and others.
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

export default Publish;