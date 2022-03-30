import React from "react";
import BackToTop from "react-back-to-top-button";
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles(() => ({
      iconStyle: {
        fontSize: '32px',
      }
    })
  );

  const style = {
    backgroundColor : 'rgba(0,0,0,0.8)',
    borderRadius : '50%',
    width : '50px',
    height : '50px',
    zIndex: '9999',
    color: '#ffffff'
  }
      

const ScrollToTop = () => {

  const classes = useStyles();

  return (
    <BackToTop showOnScrollUp style={style} showAt={100} speed={1500} easing='easeInOutQuint'>
      <ArrowUpwardIcon className={classes.iconStyle} />
    </BackToTop>
  )
};


export default ScrollToTop;
