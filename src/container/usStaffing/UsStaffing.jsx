import React from "react";
import {Typography, Grid, List, ListItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import UsStaffImg from "./../../assets/images/usStaff.jpg";
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
    backgroundImage: `url(${UsStaffImg})`,
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

export const UsStaffing = () => {
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
            US Staffing
          </Typography>
          <div className={classes.box}>
            <Typography gutterBottom={true}>
              Staffing is a process or methodology of finding the right person
              with appropriate qualifications, experience (if required) for
              recruiting them at the right place in the matter of fulfilling a
              job position or a role for the suitable organization. This
              technique is planned by the managerial department before offering
              the specific job roles to the specific job seekers. But our
              organization precisely deals with US Staffing which means staffing
              the personnel for US-based companies.
            </Typography>
          </div>
        </div>
      </Grid>
      <section className={clsx("container", classes.paddingTop)}>
        <Typography gutterBottom={true}>
          DPathway helps you in getting into US Staffing as probably known as
          the Talent Acquisition Industry which has enhanced more jobs for the
          jobseekers additionally than any other industry globally, especially
          for the US companies.
        </Typography>
        <List>
          <ListItem>
            US Staffing not only helps you in getting into the industry rather
            it expands your economic expansions and contractions simultaneously.
          </ListItem>

          <ListItem>
            This technique is planned by the managerial department before
            offering the specific job roles to the specific job seekers.
          </ListItem>
        </List>
        <Typography>
          At DPathway, we comprehend how to fit the right experts with the right
          project in the right organization. Examining more up to your skills,
          communications, positive attitude body language we ensure in placing
          you at a desirable place with the help of our HR advisory, the VMS
          (Vendor Management System), and the respected managers of hiring and
          managing the team.
        </Typography>
        <Typography variant='h5' className={classes.paddingTop}>
          The recruitment process behind this would be :
        </Typography>
        <List>
          <ListItem>Interviewing</ListItem>
          <ListItem>Evaluating your Skills</ListItem>
          <ListItem>Staffing Selection</ListItem>
          <ListItem>Hiring the employees as per the job role</ListItem>
          <ListItem>Smooth Onboarding Process</ListItem>
          <ListItem>Development Training</ListItem>
          <ListItem>Promotion Appraisal</ListItem>
        </List>
        <Grid container spacing={3} className={classes.container}>
          {CARD_CUSTOM.US_STAFF.map(
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
        
        <Typography gutterBottom={true} className={classes.paddingTop}>
          Simply, the approach would be similar to recruitment as the main
        contrast in staffing is to get the right person for the right job
        depending upon the size of an organization. 
        </Typography>
        <Typography gutterBottom={true}>From 2021, Our organization
        has been providing staffing, outsourcing, contract recruitment as well
        permanent recruitment, giving you the words regarding placing you in a
        suitable position while considering your keen interest and capabilities.
        </Typography>
      </section>
    </>
  );
};
