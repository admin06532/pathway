import React, {useContext} from "react";
import {Grid, Typography} from "@material-ui/core";
import DemoImage from "./../../../assets/images/Technology.png";
import {CustomCard, SectionTitle, SectionBackground} from "./../../common";
import {CARD_CUSTOM} from "./../../../constant";
import {SectionContext} from "../../../contexts/theme";

export default function () {

  const {classes} = useContext(SectionContext);

  return (
    <Grid container className={classes.containerWrapper}>
      <SectionBackground imagePath={DemoImage} />
      <section className='container'>
        <Grid container spacing={2} direction='row-reverse'>
          <Grid item xs={12} md={6}>
            <SectionTitle>Technology</SectionTitle>
            <Typography variant='body2'>
              Technology, we believe, has the potential to improve customer
              service, raise revenue, and streamline all company procedures. We
              can help you with a variety of services, such as strategy,
              corporate application support, bespoke application development of
              all types and stages, and pioneering technology.
            </Typography>
            <Typography variant='body2' gutterBottom={true}>
              Digital Pathway is a prominent tech-driven platform that aims to
              assist businesses in assembling a team of highly efficient and
              competent experts, as well as serve people by expanding their job
              options. We take satisfaction in assisting in the creation of a
              professional environment that is conducive to achieving the goal
              and vision upon which businesses are founded. What’s more, we
              offer a multitude of services, including AI Development, Web
              Development, App Development, Content Production Service, Internet
              Marketing Service, IT Architecture, to name a few.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.container}>
          {CARD_CUSTOM.TECHNOLOGY.map(
            (
              {avatarLabel, boxHeading, boxPara, boxUrl, boxButtonLabel},
              index
            ) => {
              return (
                <Grid item xs={12} md={3} key={`item${index}`}>
                  <CustomCard
                    avatarLabel={avatarLabel}
                    boxHeading={boxHeading}
                    boxPara={[boxPara]}
                    boxUrl={boxUrl}
                    boxButtonLabel={boxButtonLabel}
                  />
                </Grid>
              );
            }
          )}
        </Grid>
      </section>
    </Grid>
  );
}
