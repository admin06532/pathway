import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {
        AppBar,
        Toolbar,
        IconButton,
        Typography,
        useMediaQuery,
        Button,
        Menu,
        MenuItem,
      } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import {BrandLogo, HideOnScroll} from './../common';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#ffffff'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    },
    toolbar: {
        justifyContent: 'space-between'
    },
    menu: {
        marginTop: '57px',
        '& .MuiPaper-rounded' : {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
        },
        '& .MuiMenu-list': {
            paddingTop: 0,
            borderTop: '8px solid #1fb1ea',
            '& .MuiListItem-root': {
               
            } 
        },
        '.MuiListItem-button': {
          '&:hover' : {
            backgroundColor: 'purple'
          }
        }
    },
    buttonBase: {
        padding: '6px 20px',
        marginRight: '10px',
        position: 'relative',
        '&[activeclassname="active"]' : {
            backgroundColor: '#1fb1ea',
            color: 'white',  
        },
        "&:after" : {
            content: '',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: -1,
            transform: 'scaleX(0)'
        },
        '&:not([activeclassname="active"]):hover' : {
            animation: `$hoverIn 300ms ${theme.transitions.easing.easeInOut} forwards`,
            backgroundColor: '#1fb1ea'
        }
    },
    "@keyframes hoverIn": {
        "0%" : {
            transform: 'scaleX(1)'
         },
         "50%" : {
            transform: 'scaleX(1.015)',
            color: '#ffffff'
        },
         "100%" : {
             transform: 'scaleX(1)',
             color: '#ffffff'
         }
      },
          
      animatedItem: {
        animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`
      },
      animatedItemExiting: {
        animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeInOut}`,
        opacity: 0,
        transform: "translateY(-200%)"
      },
      "@keyframes myEffect": {
        "0%": {
          opacity: 0,
          transform: "translateY(-200%)"
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)"
        }
      },
      "@keyframes myEffectExit": {
        "0%": {
          opacity: 1,
          transform: "translateY(0)"
        },
        "100%": {
          opacity: 0,
          transform: "translateY(-200%)"
        }
      }
}));

export const Header = (props) => {
  const classes = useStyles();

  const [anchor, setAnchor] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openId, setOpenId] = useState("");

  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

function handleClick(event) {
  if (anchorEl !== event.currentTarget) {
    setAnchorEl(event.currentTarget);
    setOpenId(event.currentTarget.id);
  }
}

function handleClose() {
    setAnchorEl(null);
    setOpenId("");
  }
  
function openNewUrl(path, blank){
    var str;
    if(blank){
      str = '_blank'
    }
    window.open( path, str );
  }

  return (
    <div className={classes.root}>
        <HideOnScroll {...props}>
        <AppBar color="inherit">
        <Toolbar className={classes.toolbar}>
            <div>
                <Link
                    to="/"
                    component="a"
                    variant="body2"
                    color="inherit"
                    >
                       <BrandLogo />   
                </Link>
            </div>
            {isMobile ? (
                <>
                  <IconButton
                    color="primary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                  >
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/"
                    >
                      <Typography variant="h6">OUR SOLUTION</Typography>
                    </MenuItem>
                    
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/"
                    >
                      <Typography variant="h6">ENTERPRISE</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/"
                    >
                      <Typography variant="h6">CONTENT &amp; PUBLISHING</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/"
                    >
                      <Typography variant="h6">WHY PATHWAY?</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/"
                    >
                      <Typography variant="h6">CAREERS</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/"
                    >
                      <Typography variant="h6">CONTACT US</Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div style={{ marginRight: "20px" }}>
                  <Button
                    variant="text"
                    component={Link}
                    to="/"
                    color="default"
                    activeclassname={ (openId === 'simpleMenu' && 'active').toString()}
                    className={
                        clsx(classes.buttonBase, classes.hoverIn)
                        }
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    onClick={handleClick}
                    onMouseOver={handleClick}
                    aria-haspopup="false"
                    id="simpleMenu"
                    >
                    OUR SOLUTION
                  </Button>
                  <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={openId === 'simpleMenu'}
                        onClose={handleClose}
                        className={classes.menu}
                        MenuListProps={{ onMouseLeave: handleClose }}
                    >
                      <MenuItem 
                        onClick={handleClose}
                        to="/oursolution/ustaff"
                        component={Link}
                      >US Staffing</MenuItem>        
                      <MenuItem 
                        onClick={handleClose}
                        to="/oursolution/appdev"
                        component={Link}
                        >Application Development</MenuItem>
                      <MenuItem 
                        onClick={handleClose}
                        to="/oursolution/publishing"
                        component={Link}
                      >Publishing &amp; Conversion</MenuItem>
                      <MenuItem 
                        onClick={handleClose}
                        to="/oursolution/learning"
                        component={Link}>E-learning platform</MenuItem>
                      <MenuItem 
                        onClick={handleClose}
                        to="/oursolution/cyber"
                        component={Link}>Cyber-Security</MenuItem>
                      <MenuItem 
                        onClick={handleClose}
                        to="/oursolution/machine"
                        component={Link}>Machine Learning</MenuItem>
                    </Menu>
                  <Button
                    variant="text"
                    component={Link}
                    to="/technology"
                    color="default"
                    className={classes.buttonBase}
                    aria-owns={anchorEl ? "simple-menu1" : undefined}
                    onClick={handleClick}
                    onMouseOver={handleClick}
                    id="simpleMenu1"
                    aria-haspopup="false"
                    activeclassname={ (openId === 'simpleMenu1' && 'active').toString()}
                  >
                    ENTERPRISE
                  </Button>
                  
                  <Menu
                        id="simple-menu1"
                        anchorEl={anchorEl}
                        open={openId === 'simpleMenu1'}
                        onClose={handleClose}
                        className={classes.menu}
                        MenuListProps={{ onMouseLeave: handleClose }}
                    >
                      <MenuItem 
                        onClick={handleClose} 
                        to="/enterprise/RPO"
                        component={Link}
                      >Recruitment Process Outsourcing</MenuItem>
                      <MenuItem 
                        onClick={handleClose}
                        to="/technology"
                        component={Link}>Technology</MenuItem>
                      <MenuItem 
                      onClick={handleClose} 
                      to="/enterprise/education"
                      component={Link}
                      >Education</MenuItem>
                    </Menu>

                    <Button
                        variant="text"
                        color="default"
                        className={classes.buttonBase}
                        onClick={ () => openNewUrl("https://www.aenyvish.com/", true)}
                    >
                      CONTENT &amp; PUBLISHING
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/whypathways"
                    color="default"
                    className={classes.buttonBase}
                  >
                    WHY PATHWAY?
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/career"
                    color="default"
                    className={classes.buttonBase}
                  >
                    CAREERS
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/contactus"
                    color="default"
                    className={classes.buttonBase}
                  >
                    CONTACT US
                  </Button>
                </div>
              )}
            </Toolbar>
      </AppBar>
</HideOnScroll>  
</div>
  );
}
