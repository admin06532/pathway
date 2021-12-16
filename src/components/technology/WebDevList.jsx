import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Divider, ListItemText, List, ListItem} from "@material-ui/core";
import {CARD_CUSTOM} from "./../../constant";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "90ch",
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export const WebDevList = React.memo(() => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {CARD_CUSTOM.WEB_DEV_CHOOSE.map(({listHeading, listPara}, index) => (
        <div key={`list${index}`}>
          <ListItem alignItems='flex-start'>
            <ListItemText primary={listHeading} secondary={listPara} />
          </ListItem>
          <Divider variant='inset' component='li' />
        </div>
      ))}
    </List>
  );
});
