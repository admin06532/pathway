import React from "react";
import {
  Grid,
  List,
  ListItem,
  Typography,
  ListItemText
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ContractImage from "./../../assets/images/contract.jpg";
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
    backgroundImage: `url(${ContractImage})`,
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
    left: "calc(50% + 80px)",
    top: "42%",
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
    '& .MuiTypography-body2': {
      paddingBottom: 0
    }
  },
  paddingLeft50: {
    paddingLeft: "50px"
  }
}));

export const Contract = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <div className={classes.banner}>
        <Typography
          variant='h2'
          className={clsx(classes.deskTopMaxWidth, classes.paddingLeft50) }
          component='div'
          align='left'
        >
          Contract Recruitment
        </Typography>
        <div className={classes.box}>
          <Typography gutterBottom={true}>
            D Pathway helps you in getting into a Contract Permanent Recruitment
            which is a short-term position with the later opportunity to become
            a full-time or permanent job at the end of the tenure or after the
            end of the contract.
          </Typography>
          <Typography gutterBottom={true}>
            This particular opportunity is for those who want to work
            temporarily or for a short duration of time span.
          </Typography>
        </div>
      </div>
      <Grid container className={classes.deskTopMaxWidth}>
        <Typography
          variant='body1'
          className={clsx(classes.initial, classes.paddingTop)}
          gutterBottom={true}
        >
          Generally, Contract Permanent Recruitment is a procedure for accepting
          one, or even a few, contract-to-hire positions that can help you in
          your job tracking, permitting you to test drive jobs and companies
          without making a long-term commitment.
        </Typography>
        <Typography variant='body1' gutterBottom={true}>
          Such positions last from three months to a year and maybe extended as
          per your efforts or as a needy resource for the organization which may
          further lead to permanent recruitment from a contract base
          recruitment.
        </Typography>
        <List className={classes.listItem}>
          <ListItem alignItems='flex-start'>
            <ListItemText
              primary='Written Contract'
              secondary={
                <React.Fragment>
                  {
                    "Written contracts are legal documents explaining your employment relationship's details, involving your salary compensation, working hours, tenure, PTO policies, on-the-job benefits, and more."
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems='flex-start'>
            <ListItemText
              primary='Verbal Contract'
              secondary={
                <React.Fragment>
                  {
                    "Verbal contracts are non-written agreements depending upon your relationships with the companies. A hiring manager may verbally present you with a position including salary, benefits, and other terms in the eye of a witness to testify the agreement made between both parties"
                  }
                </React.Fragment>
              }
            />
          </ListItem>
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
          <ListItem>
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
          <ListItem>
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
        <Typography variant='body1' gutterBottom={true}>
          Unfortunately, such job types might be terrified by the name of a contract-based job but in fact, these types of jobs are still in the market not yet ended. In 2018, about 16.8 million employees were in contract-to-hire roles—that’s up from 15.5 million in 2017. Fortunately, these flexible roles can have advantages for both employers as well for employees.
        </Typography>
        <Typography variant='body1' gutterBottom={true}>
          There is not much much hard or complex recruitment process behind this as it would be just the same as in the recruitment it has. Involving interviewing, evaluating your skills, selecting, and hiring the employees as per the job role, with a smooth onboarding process.
        </Typography>
        <Typography variant='body1' gutterBottom={true}>
          At DPathway, we comprehend in placing the right employee in the hands of the right organization additionally focussing on the core aspects of business, and employee place of interest.
        </Typography>
      </Grid>
    </Grid>
  );
};
