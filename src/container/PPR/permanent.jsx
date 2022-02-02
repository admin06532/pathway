import React from "react";
import {
  Grid,
  List,
  ListItem,
  Typography,
  ListItemText,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PermanentImg from "./../../assets/images/ppr.jpg";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundPosition: "center right 50px",
    backgroundRepeat: "no-repeat",
    paddingBottom: "50px",
  },
  deskTopMaxWidth: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  banner: {
    boxSizing: "border-box",
    paddingTop: "100px",
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${PermanentImg})`,
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
    top: "40%",
    maxWidth: "450px",
  },
  initial: {
    "&:first-letter": {
      fontSize: "40px",
      position: "absolute",
      lineHeight: 1,
    },
  },
  paddingTop: {
    paddingTop: "40px",
  },
  listItem: {
    "& .MuiTypography-body2": {
      paddingBottom: 0,
    },
  },
}));

export const Permanent = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <div className={classes.banner}>
        <Typography
          variant='h2'
          className={classes.deskTopMaxWidth}
          component='div'
          align='left'
        >
          Permanent Recruitment
        </Typography>
        <div className={classes.box}>
          <Typography gutterBottom={true}>
            Permanent Placement Recruitment is an approach done by a senior team
            of highly experienced managers who hires a full-time employee for
            their organization by keeping in mind both the occupancy and
            expertise of specific onboarding employees.
          </Typography>
          <Typography gutterBottom={true}>
            DPathway helps you in getting into a Permanent Placement Recruitment
            which is a full-time position providing you with great experience,
            incentives, perks, monetary benefits, monthly salary additionally
            with bonus.
          </Typography>
        </div>
      </div>
      <Grid container className={classes.deskTopMaxWidth}>
        <Typography
          variant='body1'
          className={clsx(classes.initial, classes.paddingTop)}
          gutterBottom={true}
        >
          This particular opportunity is for those who want to work permanently
          for a long duration of time span.
        </Typography>
        <Typography variant='body1' gutterBottom={true}>
          Generally, Permanent Placement Recruitment is similar to a recruitment
          process whereas per the employee's job interest he attends that
          particular placement drive, performs their best, and is hired as per
          the company's role and occupancy in the organization.
        </Typography>
        <Typography variant='body1' gutterBottom={true}>
          Such positions last from a minimum of 12 months to 24 months and may
          be extended as per the employee's work efforts which may further lead
          to promotions reaching an employee to a higher post in his department.
        </Typography>
        <Typography variant='h5' className={classes.paddingTop}>
          The recruitment process behind this would be :
        </Typography>
        <List className={classes.listItem}>
          <ListItem alignItems='flex-start'>
            <ListItemText
              primary='Interviewing'
              secondary={
                <React.Fragment>
                  {
                    "Interviewing the staffer according to the job profile by sending or conveying proper job description to the employee."
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems='flex-start'>
            <ListItemText
              primary='Evaluating your Skills'
              secondary={
                <React.Fragment>
                  {
                    "After seeing the respected quality, self-confidence, positive attitude, communication skills, and skill expertise then only the hiring team moves forward for the further process."
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems='flex-start'>
            <ListItemText
              primary='Staffing Selection and Hiring'
              secondary={
                <React.Fragment>
                  {
                    "The objective behind the selection is to decide whether a candidate is suitable for employment in the organization or not. Therefore, the crucial step is to select the right candidates to fulfill various positions in the organization."
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Smooth Onboarding Process'
              secondary={
                <React.Fragment>
                  {
                    "After selection, the next step is to onboard the employee into the organization for his/her specific role. Which not only praises the organization but also boosts the morale of the onboarding employee."
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Development Training'
              secondary={
                <React.Fragment>
                  {
                    "After Onboarding, the next step is to train the employee both for on-the-job as well for off-the-job training with your business values and code of conduct, additionally enriching their learning capabilities so that employee can provide a huge amount of work during his tenure."
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Promotion Appraisal'
              secondary={
                <React.Fragment>
                  {
                    "After successful above steps, the next move is to mark the performance of each employee for promoting and rewarding them for their successful work givings."
                  }
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        <List>
          <ListItem>
            This even includes fixed-term contracts, where you will be hired
            through the client/employer's payroll. For permanent positions, you
            will be eligible for full employee benefits offered by the
            client/employer.
          </ListItem>
          <ListItem>
            Additionally, Fixed CTC can be varied for fixed-term contracts as it
            depends upon the number of skills and dedication you have for the
            organization you are willing to work for.
          </ListItem>
          <ListItem>
            There is not much much hard or complex recruitment process behind
            this as it would be just the same as in the recruitment it has
          </ListItem>
          <ListItem>
            Involving interviewing, evaluating your skills, selecting, and
            hiring the employees as per the job role, with a smooth onboarding
            process.
          </ListItem>
        </List>
        <Typography variant='body1' gutterBottom={true}>
          Our recruitment and managing team follows a client-based strategy to
          explore for and make available the job-ready talent, thereby cutting
          external organization costs on the recruitment process.
        </Typography>
        <Typography variant='body1' gutterBottom={true}>
          At DPathway, we comprehend in placing the right employee in the hands
          of the right organization additionally focussing on the core aspects
          of business, and employee place of interest.
        </Typography>
      </Grid>
    </Grid>
  );
};
