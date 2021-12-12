import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import DemoImage from "./../../../assets/images/3.png";
import Polygon from "./../../../assets/images/polygon.png";
import {CustomCard, SectionTitle, SectionBackground} from "./../../common";
import {CARD_CUSTOM} from "../../../constant";

const useStyles = makeStyles({
  containerWrapper: {
    position: "relative",
    backgroundColor: "#f3f4fd",
    backgroundImage: Polygon,
    backgroundPosition: "center right",
    backgroundRepeat: "no-repeat",
    paddingTop: 50,
    paddingBottom: 50,
  },
  container: {
    paddingTop: "10px",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 5,
  },
});

export default function () {
  const classes = useStyles();

  return (
    <Grid container className={classes.containerWrapper}>
      <SectionBackground imagePath={DemoImage} />
      <section className='container'>
        <Grid container spacing={2} direction='row-reverse'>
          <Grid item xs={12} md={6}>
            <SectionTitle>IT Consulting</SectionTitle>
            <Typography variant='body2'>
              DPathway offers contract-to-hire personnel for project-based
              support, with the opportunity to hire our contractors as permanent
              employees or discover permanent top talent to match your company's
              requirements. We have obtained a unique perspective on how we may
              contribute to organizational goals by listening to our client's
              business requirements.
            </Typography>
            <Typography variant='body2'>
              Our professional consultants are local market experts who work
              with you to understand your business objectives and specific
              personnel requirements. They use the most up-to-date technologies
              to find the greatest talent, and they put their people skills to
              good use to make sure the best talent finds its way to you. This
              is how we help you move your company forward so you can gain a
              competitive edge.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.container}>
          {CARD_CUSTOM.IT_CONSULTANCY.map(
            ({avatarLabel, boxHeading, boxPara, boxUrl, boxButtonLabel}, index) => {
              return (
                <Grid item xs={12} md={3}  key={`card${index}`}>
                  <CustomCard
                    avatarLabel={avatarLabel}
                    boxHeading={boxHeading}
                    boxPara={boxPara}
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
