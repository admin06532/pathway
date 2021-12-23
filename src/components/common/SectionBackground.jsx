import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";

const useStyle = makeStyles((theme) => ({
  bannerImage: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    position: 'absolute',
    left: '-10%',
    borderRadius: '40px',
    width: '40%',
    textAlign: 'center',
    padding: 0,
    top: '100px',
    zIndex: 2,    
    '&::before': {
      content: '""',
      display: "block",
      position: "absolute",
      borderRadius: "40px",
      zIndex: 0,
      top: '-20px',
      left: -80,
      height: "100%",
      width: "112%",
      background: "linear-gradient( 45deg,#3FBDED 0%,#00A4E8 100%)",
      transform: "rotate(10deg)",
    },
  },
  bannerImageRight: {
    left: 'auto',
    right: '-1%',
    '&::before': {
      left: 'auto',
      right: '-15%',
    }
  },

  img: {
    height: "100%",
    margin: "auto",
    borderRadius: "50%",
    boxShadow: "5px 5px 36px rgb(64 189 237 / 50%)",
    backgroundColor: '#ffffff',
    position: 'relative'
  },
  imgRight: {
    borderRadius: "80px",
  }
}))

export const SectionBackground = ({imagePath, align = 'left'}) => {
  const classes =  useStyle();

  return (
    <div className={align === 'left' ? clsx(classes.bannerImage) : clsx(classes.bannerImage, classes.bannerImageRight)}>
      <img className={align === 'left' ? clsx(classes.img) : clsx(classes.img, classes.imgRight)} width="486" height="436" src={imagePath}  alt={imagePath} />
    </div>
  )
}
