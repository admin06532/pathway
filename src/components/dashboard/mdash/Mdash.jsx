import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  Grid,
  Typography,
} from "@material-ui/core";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "80px  15px 15px",
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }
}));

export default function(){
  const classes = useStyles();
  
  return (
    <Grid container className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography variant="h5" component="h5" gutterBottom>IT Consulting</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Providing quality recruitment is our main goal while coming to
            manpower services. Whenever you require quick, trustworthy, and
            affordable manpower services in India, choosing us would be the
            greatest step you will take. In this field of manpower recruitment,
            we would like to be your guiding star.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography variant="h5" component="h5" gutterBottom>Publishing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Being a trustable publishing industry we have evolved from MONO
            MEDIA (print) to MULTIMEDIA (digital) to SMART MEDIA (tablets and
            smartphone) with the advent of the Internet and mobile technology.
            The leadership team of the industry has responded to the dynamics of
            the industry and rebranded the company to TRANSFORMA to reflect the
            technological transformation and a comprehensive approach to all
            requirements of its clients in the publishing industry.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3a-content'
          id='panel3a-header'
        >
          <Typography variant="h5" component="h5" gutterBottom>Technology</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To develop a comprehensive IT strategy for a digital and
            technological transformation of your organization, we use deep tech
            background expertise that provides you ultimate IT consultation that
            goes in line with your business objectives. We are well known IT
            consulting services provider, that will help you automate and
            digitalize operations, optimize the software portfolio, and
            implement the latest technologies, as well as assist you to develop
            a tech-driven digital strategy, enhance your software architecture,
            and improve operations by optimizing your software portfolio.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};
