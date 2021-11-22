import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '100%',
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
  avatar: {
    background: "linear-gradient(45deg,#3FBDED 0%,#00A4E8 100%)",
    width: "70px",
    boxShadow: "0 5px 15px 0 rgb(0 0 0 / 15%)",
    height: "70px",
    marginBottom: "10px",
  },
  link: {
    textDecoration: "none",
  },
});

export const CustomCard = ({
  avatarLabel = "",
  boxHeading = "",
  boxPara = [],
  boxUrl = "/",
  boxButtonlabel = "",
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        {avatarLabel && (
          <Avatar className={classes.avatar}>{avatarLabel}</Avatar>
        )}
        <Typography variant='h6' component='h6'>
          {boxHeading}
        </Typography>
        {boxPara.map((value, index) => {
          return (
            <Typography
              key={`para${index}`}
              className={classes.pos}
              gutterBottom={true}
              color='textSecondary'
            >
              {value}
            </Typography>
          );
        })}
        <Grid align='center'>
          <Link to={boxUrl} className={classes.link}>
            <Button color='primary' variant='contained' fullWidth>
              {boxButtonlabel}
            </Button>
          </Link>
        </Grid>
      </CardContent>
    </Card>
  );
};
