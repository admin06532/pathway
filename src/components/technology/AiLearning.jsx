import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import DemoImage from "./../../assets/images/ai.jpg";
import Polygon from "./../../assets/images/polygon.png";
import {
  CustomCard,
  SectionTitle,
  SectionBackground,
} from "./../../components/common";
import {CARD_CUSTOM} from "./../../constant";

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
  root: {
    minHeight: 360,
    boxSizing: "border-box",

    boxShadow: "0 0 20px 0 rgb(64 189 237 / 50%)",
    "&:hover": {
      boxShadow: "0 2px 30px 0 rgb(64 189 237 / 50%)",
    },
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    paddingTop: "10px",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 5,
  },
});

export const AiLearning = React.memo(() => {
  const classes = useStyles();

  return (
    <Grid container className={classes.containerWrapper}>
      <SectionBackground imagePath={DemoImage} />
      <section className='container'>
        <Grid container spacing={2} direction='row-reverse'>
          <Grid item xs={12} md={6}>
            <SectionTitle>Artificial Learning</SectionTitle>
            <Typography variant='body2'>
              Artificial intelligent systems have affected enterprises in a
              variety of ways during the last few years. We live in a cognitive
              era in which systems can observe, listen, respond, and learn from
              every encounter we have, and the next wave of digital
              transformation solutions will redefine existing benchmarks in the
              digital domain.
            </Typography>
            <Typography variant='body2' gutterBottom={true}>
              D Pathway’s Artificial Learning offerings help organizations build
              highly-customized solutions successively on advanced Artificial
              learning algorithms. We also assist firms in integrating these
              algorithms with picture and video analytics, as well as upcoming
              technologies like augmented reality and virtual reality, to
              provide the best possible customer experience and gain a
              competitive advantage.
            </Typography>
            <Typography variant='h4' gutterBottom={true}>
          We’re Your Team of Software Developers
        </Typography>

        <Typography variant='body2'>
          At D Pathway, we’re a team of 200+ experienced software developers,
          ready to deliver your project. We know our stuff when it comes to
          bespoke software development, having completed over 200 projects for
          our clients.
        </Typography>
        <Typography variant='body2'>
          Because we're an extended team, we may join your project at any moment
          and work alongside your in-house software engineers. You're not part
          of a team? We also take on whole projects, so don't worry.
        </Typography>
          </Grid>
        </Grid>

        

        <Typography variant='h4' gutterBottom={true} align="center">
          Our Artificial learning expertise
        </Typography>

        <Grid container spacing={3} className={classes.container}>
          {CARD_CUSTOM.AI.map(
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
});
