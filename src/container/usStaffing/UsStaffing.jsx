import React from "react";
import {Typography, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TechImage from "./../../assets/images/techbanner.png";

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
      <section className='container'>
        <Typography gutterBottom={true}>
          DPathway helps you in getting into US Staffing as probably known as
          the Talent Acquisition Industry which has enhanced more jobs for the
          jobseekers additionally than any other industry globally, especially
          for the US companies.
        </Typography>
        <Typography gutterBottom={true}>
          US Staffing not only helps you in getting into the industry rather it
          expands your economic expansions and contractions simultaneously.
        </Typography>
        <Typography gutterBottom={true}>
          This technique is planned by the managerial department before offering
          the specific job roles to the specific job seekers.
        </Typography>
        <Typography gutterBottom={true}>
          At DPathway, we comprehend how to fit the right experts with the right
          project in the right organization. Examining more up to your skills,
          communications, positive attitude body language we ensure in placing
          you at a desirable place with the help of our HR advisory, the VMS
          (Vendor Management System), and the respected managers of hiring and
          managing the team.
        </Typography>
      </section>
    </>
  );
};
