import React from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    lineHeight: "1.3",
    color: "#242424",
    [theme.breakpoints.down('md')]: {
      color: "#333333",
      fontSize: "1.8rem",
      padding: "10px 0",
      margin: "0",
      textAlign: "center",
    },
    fontSize: "3rem",
    padding: "10px 0 20px",
    margin: "0 0 20px auto",
    position: "relative",
    fontWeight: "400",
    "&::after": {
      content: '""',
      [theme.breakpoints.down('md')]: {
        content: 'none',
      },
      display: "block",
      background: "linear-gradient(to left,#fff,#40BDED)",
      position: "absolute",
      bottom: 0,
      left: 0,
      height: "4px",
      width: "170px",
      borderRadius: "10px",
    },
  },
}));

export const SectionTitle = ({children, align = "left"}) => {
  const classes = useStyle();
  return (
    <Typography
      variant='h4'
      component='h1'
      align={align}
      className={classes.root}
    >
      {children}
    </Typography>
  );
};

export const SectionSubTitle = ({children, align = "left"}) => {
  const classes = useStyle();
  return (
    <Typography
      variant='h4'
      component='h2'
      align={align}
      className={classes.root}
    >
      {children}
    </Typography>
  );
};
