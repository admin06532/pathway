import React from "react";
import {
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      minHeight: 'auto',
    },
    minHeight: 410,
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
    [theme.breakpoints.down('md')]: {
      borderRadius: '0',
      marginTop: 10,
      marginBottom: 10,
      margin: "0 auto"
    },
  },
  link: {
    textDecoration: "none",
  },
  header: {
    [theme.breakpoints.down('md')]: {
      textAlign: "center",
      paddingBottom: '10px',
    },
  }
}));

export const CustomCard = ({
  avatarLabel = "",
  boxHeading = "",
  boxPara = [],
  boxList = [],
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
        <Typography variant='h6' className={classes.header} component='h6'>
          {boxHeading}
        </Typography>
        {boxPara.length > 0 && boxPara.map((value, index) => {
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
        <List>
          {boxList.map((value, index) => {
                return (
                  <ListItem 
                    key={`list${index}`}
                    disableGutters={true}
                    color='textSecondary'
                  >
                   {value}
                    </ListItem>
                  );
              })
            }
        </List>
        <Grid align='center'>
          <Link to={boxUrl} className={classes.link}>
            <Button color='primary' className={'btn-mobile'} variant='contained' fullWidth>
              {boxButtonlabel}
            </Button>
          </Link>
        </Grid>
      </CardContent>
    </Card>
  );
};
