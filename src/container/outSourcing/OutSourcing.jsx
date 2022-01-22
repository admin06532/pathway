import React from "react";
import {Typography, Grid, List, ListItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TechImage from "./../../assets/images/techbanner.png";
import {
  CustomCard,
  SectionTitle,
  SectionBackground,
} from "./../../components/common";
import {CARD_CUSTOM} from "./../../constant";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  deskTopMaxWidth: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  banner: {
    boxSizing: "border-box",
    paddingTop: "100px",
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${TechImage})`,
    backgroundSize: "cover",
    position: "relative",
    "& .MuiTypography-h2": {
      position: "absolute",
      left: "50%",
      top: "28%",
      fontWeight: "400",
    },
  },
  box: {
    position: "absolute",
    left: "50%",
    top: "42%",
    maxWidth: "450px",
  },
  paddingTop: {
    paddingTop: "40px",
  },
}));

export const OutSource = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <div className={classes.banner}>
          <Typography
            variant='h2'
            className={classes.deskTopMaxWidth}
            component='div'
            align='left'
          >
            Out Sourcing
          </Typography>
          <div className={classes.box}>
            <Typography gutterBottom={true}>
              Outsourcing is a business technique servicing relevant jobs out to
              a third-party organization. Specifically, In Information
              Technology (IT) department this approach is served the most.
              Further involving a range of designing, developing, QA testing,
              maintenance operations for the specified software.
            </Typography>
          </div>
        </div>
      </Grid>
      <section className={clsx("container", classes.paddingTop)}>
        <Typography gutterBottom={true}>
          DPathway helps you in getting into Outsource as probably known as the
          business approach of engaging an employee outside a company for
          performing the same activities as he was supposed to perform in the
          in-house company as the company's employee and staff.
        </Typography>
        <List>
          <ListItem>
            Generally, outsourcing is a procedure usually launched by companies
            as a cost-cutting step.
          </ListItem>
          <ListItem>Concerning a wide range of jobs</ListItem>
          <ListItem>
            Ranging from customer support to manufacturing to the back office
            depending upon the role of interest or knowledge contained by the
            specified employee.
          </ListItem>
          <ListItem>
            By Reading, may you will find it a little much hard or complex but
            in actual, the recruitment process behind this would be low in cost
            as outsourcing an employee from an organization to a different
            organization, by keeping in mind his interest areas and
            specialization of the employee in the matter of effective execution
            and efficiency time span.
          </ListItem>
        </List>
        <Typography gutterBottom={true}>
          Although, Outsourcing was first identified as a business strategy in
          1989 and grew as a crucial part of business economics throughout the
          1990s. But we as an organization considers this practice of
          outsourcing as a subject for allocating our resources where they are
          effective the most and serve you the best out of it.
        </Typography>
        <Grid container spacing={3} className={clsx(classes.container, classes.paddingTop)}>
          {CARD_CUSTOM.OUT_SOURCE.map(
            ({avatarLabel, boxHeading, boxPara}, index) => {
              return (
                <Grid item xs={12} md={3} key={`item${index}`}>
                  <CustomCard
                    avatarLabel={avatarLabel}
                    boxHeading={boxHeading}
                    boxPara={[boxPara]}
                  />
                </Grid>
              );
            }
          )}
        </Grid>
        <Typography variant='h5' className={classes.paddingTop}>
          Its Benefits and Costs :
        </Typography>
        <List>
          <ListItem>Positional Occupancy</ListItem>
          <ListItem>Promote Growth</ListItem>
          <ListItem>Staffing Flexibility</ListItem>
          <ListItem>Developing Internal Staff </ListItem>
          <ListItem>Focusing more on the Core Task</ListItem>
          <ListItem>Lower Costs indulge during the Recruitment</ListItem>
          <ListItem>
            Flexible while changing business and commercial conditions.
          </ListItem>
        </List>
        <Typography variant='h5' className={classes.paddingTop}>
          Some of its Risks :
        </Typography>
        <List>
          <ListItem>Language Barricades</ListItem>
          <ListItem>Time Zone Differences</ListItem>
          <ListItem>Lack of Business Knowledge</ListItem>
          <ListItem>Lack of Domain and Skill Expertise</ListItem>
        </List>

        <Typography gutterBottom={true} className={classes.paddingTop}>
          Although, OutSourcing contains some risks associated with it. But we
          as an organization look into consideration for placing or providing
          rights candidates, better to say outsource employees at the right
          destination.
        </Typography>
        <Typography gutterBottom={true}>
          At DPathway, we comprehend outsourcing the right employee in the hands
          of the right organization additionally focussing on the core aspects
          of business, rotating off the slight crucial operations to external
          organizations.
        </Typography>
      </section>
    </>
  );
};
