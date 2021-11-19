import React from "react";
import {Grid, List, ListItem, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AboutImage from "./../../assets/images/heroshot/banner_2-min.png";

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
    backgroundImage: `url(${AboutImage})`,
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
}));

export const UsStaff = () => {
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
          US Staffing
        </Typography>
        <div className={classes.box}>
          <Typography gutterBottom={true}>
            Leverage US Staffing Solutions to Help Your Business Become
            Future-Oriented Enterprises
          </Typography>
          <Typography gutterBottom={true}>
            We are dedicated to providing niche-based staffing solutions with
            industry expertise in financial services, energy and utilities, oil,
            healthcare and insurance, telecommunications and retail
            distribution.
          </Typography>
        </div>
      </div>
      <Grid container className={classes.deskTopMaxWidth}>
      <Typography variant='body1'>
      DPathway offers contract-to-hire personnel for project-based support, with the opportunity to hire our contractors as permanent employees or discover permanent top talent to match your company's requirements. We have obtained a unique perspective on how we may contribute to organizational goals by listening to our client's business requirements.
      </Typography>
      <Typography variant='body1'>DPathway offers contract-to-hire personnel for project-based support, with the opportunity to hire our contractors as permanent employees or discover permanent top talent to match your company's requirements. We have obtained a unique perspective on how we may contribute to organizational goals by listening to our client's business requirements.
</Typography>
      <Typography variant='body1'>Our professional consultants are local market experts who work with you to understand your business objectives and specific personnel requirements. They use the most up-to-date technologies to find the greatest talent, and they put their people skills to good use to make sure the best talent finds its way to you. This is how we help you move your company forward so you can gain a competitive edge. </Typography>
      <Typography variant='h5'>How Do We Do it?</Typography>
        <List>
          <ListItem>
          Speed: We don't walk about with grass growing between our toes. We answer in a timely and positive manner.
          </ListItem>
          <ListItem>
          Technology: We use cutting-edge technology to make informed choices quicker.
          </ListItem>
          <ListItem>
            Grit : We are driven and tenacious. We accept the difficult aspects of life and face every problem straight on. We Can Meet your Staffing Requirements.
          </ListItem>
        </List>
        
        <Typography variant='body1'>
        Whether you're seeking exceptional employees to join your team or a candidate looking for a job with a reputable organization, USA Staffing Solutions can assist you!
        </Typography>
        <Typography variant='body1'>
            What is the most difficult aspect of recruitment for you?
        </Typography>
        <Typography variant='body1'>
            Talk to our employment and recruitment experts about how they're transforming the digital world and creating better workplaces.
        </Typography>
        <Typography variant='body1'>
            Let's connect and get this started!
        </Typography>
      </Grid>
    </Grid>
  );
};
