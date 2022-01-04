import React, {useContext} from "react";
import {Typography, Grid, Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {SectionSubTitle, SectionBackground} from "./../../common";
import DemoImage from "./../../../assets/images/Introduction.png";
import {SectionContext} from "../../../contexts/theme";

export default function () {
  const {classes} = useContext(SectionContext);

  return (
    <Grid container className={classes.root}>
      <SectionBackground imagePath={DemoImage} align='right' />
      <section className='container'>
        <Grid item xs={12} md={6} className={classes.gridItem}>
          <SectionSubTitle>Introduction</SectionSubTitle>
          <Grid container>
            <Grid item>
              <Typography variant='body2' gutterBottom={true}>
                Digital Pathway has the expertise that can help companies make
                use of digital technology to leverage their content and get new
                valuable products. With fantastic solutions from our experts,
                you can streamline the workflows and generate better revenues.
                We will increase your brand awareness and enhancement with our
                services and make sure that the entire operations run smoothly.
              </Typography>
              <Typography variant='body2' gutterBottom={true}>
                At Digital Pathway, we design, enrich, and convert the existing
                content so that it can be repurposed and managed. Content is
                available in many forms like books, training materials, and
                other marketing materials and we have industry veterans with
                unmatched expertise. We make use of complex technology and offer
                solutions that are efficient and low cost. We turn flat and
                unappealing content into a smart one so that this digital
                information can be monetized and utilized freely.
              </Typography>

              <Grid align='center'>
                <Link to='/about' className={classes.link}>
                  <Button color='primary' variant='contained'>
                    Know more...
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </Grid>
  );
}
