import React, {useState, useEffect} from "react";
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import HeroImage from "./../../../assets/images/heroshot/banner_2-min.jpg";
import {SvgCircle} from "./../svgCircle/SvgCircle";
import Typical from "react-typical";
import {HomeCarousel} from "./../homecarousel/HomeCarousel";

const useStyles = makeStyles((theme) => ({
  content: {
    paddingRight: theme.spacing(8),
    textAlign: "left",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    height: "70vh",
    position: 'relative',
  },
  contentRestrict: {
        position: 'absolute',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        zIndex: '111',
  },
  container: {
    height: "100vh",
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "0 50px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  circle: {
    position: "relative",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgb(64 189 237 / 90%)",
    borderRadius: "50%",
    width: "160px",
    color: '#ffffff',
    height: "160px",
    "&:hover": {
      boxShadow: "3px 13px 19px 0px rgb(50 50 50 / 52%)",
      backgroundColor: "#00a4e8",
      color: '#ffffff',
      transform: 'scale(0.95)'
    },
  },
  typing: {
    backgroundColor: "rgb(64 189 237 / 90%)",
    color: "#ffffff",
    width: "calc(50vw)",
    position: "absolute",
    bottom: 0,
    right: 0,
    textAlign: "left",
    padding: "20px",
    borderRadius: "4px",
  },
  initial: {
    "&:first-letter": {
      fontSize: "40px",
      position: "absolute",
      lineHeight: 1,
    },
  },

  "@keyframes animationIn": {
    "0%": {
      background: "scaleX(1)",
    },
    "50%": {
      transform: "scaleX(1.015)",
      color: "#ffffff",
    },
    "100%": {
      transform: "scaleX(1)",
      color: "#ffffff",
    },
  },
}));

export default function(){

  const classes = useStyles();

  const [firstSvgEnd, setFirstSvgEnd] = useState(false);
  const [secondSvgEnd, setSecondSvgEnd] = useState(false);
  const [thirdSvgEnd, setThirdSvgEnd] = useState(false);
  const [element, setElement] = useState(null);
  const [toolTip, setToolTip] = useState("");

  const handleBoxClick = (e) => {
    if (firstSvgEnd && secondSvgEnd && thirdSvgEnd) {
      setElement(e.target.id);
    }
  };

  if(firstSvgEnd && secondSvgEnd && thirdSvgEnd){
    localStorage.setItem("circleLoaded", "true");
  }

  useEffect(() => {

    switch (element) {
      case "id1":
      case "svgid1":
        setToolTip(
          "Providing quality recruitment is our main goal while coming to manpower services. Whenever you require quick, trustworthy, and affordable manpower services in India, choosing us would be the greatest step you will take. In this field of manpower recruitment, we would like to be your guiding star."
        );
        break;

      case "id2":
      case "svgid2":
        setToolTip(
          "Being a trustable publishing industry we have evolved from MONO MEDIA (print) to MULTIMEDIA (digital) to SMART MEDIA (tablets and smartphone) with the advent of the Internet and mobile technology. The leadership team of the industry has responded to the dynamics of the industry and rebranded the company to TRANSFORMA to reflect the technological transformation and a comprehensive approach to all requirements of its clients in the publishing industry."
        );
        break;

      case "id3":
      case "svgid3":
        setToolTip(
          "To develop a comprehensive IT strategy for a digital and technological transformation of your organization, we use deep tech background expertise that provides you ultimate IT consultation that goes in line with your business objectives. We are well known IT consulting services provider, that will help you automate and digitalize operations, optimize the software portfolio, and implement the latest technologies, as well as assist you to develop a tech-driven digital strategy, enhance your software architecture, and improve operations by optimizing your software portfolio."
        );
        break;
      default:
        setToolTip("");
    }

     
  }, [element]);

  const styleSx = {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    width: "50vw",
    height: "100vh",
    backgroundColor: "rgb(64 189 237 / 90%)",
    color: "white",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "secondary.main",
      opacity: [0.9, 0.8, 0.7],
    },
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.content} sx={{width: "100%", maxWidth: 700}}>
        {!thirdSvgEnd && <div className={classes.contentRestrict}></div>}
        <Box
          className={classes.circle}
          sx={{
            padding: "10px",
            cursor:
              firstSvgEnd && secondSvgEnd && thirdSvgEnd ? "pointer" : "wait",
                border: firstSvgEnd && '7px inset #035e81',
          }}
          marginRight='10px'
          onMouseEnter={handleBoxClick}
          onClick={handleBoxClick}
          onMouseLeave={() => setElement(null)}
          id="svgid1"
        >
         {!firstSvgEnd && <SvgCircle
            id='id1'
            duration='30s'
            start='0'
            end='510'
            repeatDuration='20s'
            onEnd={setFirstSvgEnd}
          />}
          <Typography 
            variant='h5'
            component='h5'
            align='left'>
            IT Consulting
          </Typography>
        </Box>
        <Box
          className={classes.circle}
          sx={{
            width: "151px",
            height: "151px",
            padding: "10px",
            cursor:
              firstSvgEnd && secondSvgEnd && thirdSvgEnd ? "pointer" : "wait",
              border: secondSvgEnd && '7px inset #035e81',
          }}
          marginRight='10px'
          onMouseEnter={handleBoxClick}
          onClick={handleBoxClick}
          onMouseLeave={() => setElement(null)}
          id="svgid2"
        >
          {firstSvgEnd && !secondSvgEnd && (
            <SvgCircle
              id='id2'
              duration='20s'
              onEnd={setSecondSvgEnd}
              start='0'
              end='510'
              repeatDuration='20s'
            />
          )}
          <Typography
            variant='h5'
            component='h5'
            align='left'
          >
            Publishing
          </Typography>
        </Box>
        <Box
          className={classes.circle}
          sx={{
            width: "151px",
            height: "151px",
            padding: "10px",
            cursor:
              firstSvgEnd && secondSvgEnd && thirdSvgEnd ? "pointer" : "wait",
              border: thirdSvgEnd && '7px inset #035e81',
          }}
          marginRight='10px'
          onMouseEnter={handleBoxClick}
          onClick={handleBoxClick}
          onMouseLeave={() => setElement(null)}
          id="svgid3"
        >
          {secondSvgEnd && !thirdSvgEnd && (
            <SvgCircle
              id='id3'
              duration='20s'
              onEnd={setThirdSvgEnd}
              start='10'
              end='510'
              repeatDuration='30s'
            />
          )}
          <Typography
            variant='h5'
            component='h5'
            align='left'
          >
            Technology
          </Typography>
        </Box>
      </Box>
      {/* <HomeCarousel /> */}
      {!firstSvgEnd && (
        <Typical
          className={classes.typing}
          steps={[
            "Providing quality recruitment is our main goal while coming to manpower services. Whenever you require quick, trustworthy, and affordable manpower services in India, choosing us would be the greatest step you will take. In this field of manpower recruitment, we would like to be your guiding star.",
            5000,
          ]}
          loop={1}
          wrapper='code'
        />
      )}
      {!secondSvgEnd && firstSvgEnd && (
        <Typical
          className={classes.typing}
          steps={[
            "Being a trustable publishing industry we have evolved from MONO MEDIA (print) to MULTIMEDIA (digital) to SMART MEDIA (tablets and smartphone) with the advent of the Internet and mobile technology. The leadership team of the industry has responded to the dynamics of the industry and rebranded the company to TRANSFORMA to reflect the technological transformation and a comprehensive approach to all requirements of its clients in the publishing industry.",
            8000,
          ]}
          loop={1}
          wrapper='code'
        />
      )}
      {!thirdSvgEnd && secondSvgEnd && firstSvgEnd && (
        <Typical
          className={classes.typing}
          steps={[
            "To develop a comprehensive IT strategy for a digital and technological transformation of your organization, we use deep tech background expertise that provides you ultimate IT consultation that goes in line with your business objectives. We are well known IT consulting services provider, that will help you automate and digitalize operations, optimize the software portfolio, and implement the latest technologies, as well as assist you to develop a tech-driven digital strategy, enhance your software architecture, and improve operations by optimizing your software portfolio.",
            8000,
          ]}
          loop={1}
          wrapper='code'
        />
      )}

{toolTip && (
        <Box
          pl={6}
          pr={6}
          sx={styleSx}
        >
          <Typography
            variant='subtitle1'
            align='left'
            gutterBottom
            component='div'
            className={classes.initial}
            color='cyan'
          >
            {toolTip}
          </Typography>
        </Box>
      )}

    </Box>
  );
};
