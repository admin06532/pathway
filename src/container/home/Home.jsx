import React from "react";
import { withRouter } from "react-router-dom";
import {Form} from "./../../components/form";
import {makeStyles} from "@material-ui/core/styles";
import {SectionContext} from "../../contexts/theme";
import Polygon from "./../../assets/images/polygon.png";
import Mdash  from "./../../components/dashboard/mdash/Mdash";
import HeroShot from "./../../components/dashboard/heroshot/HeroShot";
import SoftwareConsultancy  from "./../../components/dashboard/softwareConsultancy/SoftwareConsultancy";
import IntroApp from "./../../components/dashboard/intro/Intro";
import Striper from "./../../components/dashboard/striper/Striper";
import Publish from "./../../components/dashboard/publish/Publish";
import ItConsulting from "./../../components/dashboard/consulting/ItConsulting";

const useStyles = makeStyles((theme) => ({
  containerWrapper: {
    position: "relative",
    backgroundColor: "#f3f4fd",
    backgroundImage: Polygon,
    backgroundPosition: "center right",
    backgroundRepeat: "no-repeat",
    paddingTop: 50,
    paddingBottom: 50,
  },
  container: {
    paddingTop: "10px",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 5,
  },
  root: {
    position: "relative",
    flexGrow: 1,
    backgroundImage: `url(${Polygon})`,
    backgroundColor: "#fff",
    backgroundPosition: "center left -10px",
    backgroundSize: "32%",
    backgroundRepeat: "no-repeat",
    paddingBottom: "50px",
    paddingTop: 50,
    [theme.breakpoints.down("md")]: {
      paddingTop: 50,
    },
  },
  gridItem: {
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginTop: 10,
    },
    marginLeft: 50,
    marginTop: 50,
    textAlign: "left",
  },
}));

export const Home = (props) => {
  const classes = useStyles();
  
  
  return (
      <SectionContext.Provider value={{classes}}>
        <Mdash />
        <HeroShot />
        <Striper />
        <IntroApp />
        <ItConsulting  />
        <Publish />
        <SoftwareConsultancy />
        <Form />
      </SectionContext.Provider>
  );
};

export const HomeContainer = withRouter(Home);