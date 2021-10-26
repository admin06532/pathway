import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    List,
    Paper,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Grid,
    Typography,
    Link
  } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: 'darkslategray',
    borderRadius: 0,
  },
  main: {
    color: 'white',
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  avatar: {
    color: 'white',
    backgroundColor: 'green',
  },
  listWrap: {
    display: 'flex'
  },
  listItem: {
    transition: 'transform 0.33s ease-in-out',
    '&:hover' : {
      cursor: 'pointer',
      transform: 'scale(1.1)'
    }
  },
  copy: {
    color: 'white',
  },
  link: {
      width: '100%',
      display: 'flex',
      position: 'relative',
      boxSizing: 'border-box',
      textAlign: 'left',
      alignItems: 'center',
      justifyContent: 'flex-start',
      textDecoration: 'none',
      color: '#fff'
  }
}));
 


export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper} color="invert">
            <div className={classes.main}>
              <List className={classes.listWrap}>
                    <Link href="https://www.facebook.com/Digital-Pathway-Pvt-Ltd-111697710588591" className={classes.link} target="_blank" rel="noopener"> 
                    <ListItem className={classes.listItem}>
                      <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <FacebookIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Facebook"
                    />
                  </ListItem>
                  </Link>
                  <Link href="https://www.linkedin.com/company/digital-pathway" className={classes.link} target="_blank" rel="noopener"> 
                  <ListItem className={classes.listItem}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <LinkedInIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="LinkedIn"
                    />
                  </ListItem>
                  </Link>
                  <Link href="https://twitter.com/DigitalPathway2"  className={classes.link} target="_blank" rel="noopener"> 
                  <ListItem className={classes.listItem}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <TwitterIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Tweeter"
                    />
                  </ListItem>
                  </Link>
                  <Link href="https://www.instagram.com/digital_pathway/" className={classes.link} target="_blank" rel="noopener"> 
                  <ListItem className={classes.listItem}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <InstagramIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Instagram"
                    />
                  </ListItem>
                  </Link>
                  <Link href="https://www.youtube.com/channel/UC3G6RmCAFXT8E-vOH1CgQQw/featured" className={classes.link} target="_blank" rel="noopener"> 
                  <ListItem className={classes.listItem}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <YouTubeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Youtube"
                    />
                  </ListItem>
                  </Link>
                  <Link href="https://goo.gl/maps/8nDiCuVv26D2jjfNA" className={classes.link} target="_blank" rel="noopener" > 
                  <ListItem className={classes.listItem}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <LocationOnIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Way to reach"
                    />
                  </ListItem>
                  </Link>
              </List>
            </div>
            <Typography variant="body2" align="center" className={classes.copy} spacing={1} >
              All designs, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2021 Digital Pathway Private Limited.
            </Typography>
          </Paper>
        </Grid>
        </Grid>
    </div>
  );
}



