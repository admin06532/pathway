import React, {Suspense} from "react";
import {Form} from "./../../components/form";
import {makeStyles} from "@material-ui/core/styles";
import {SectionContext} from "../../contexts/theme";
import Polygon from "./../../assets/images/polygon.png";
const Mdash = React.lazy(() =>
  import("./../../components/dashboard/mdash/Mdash")
);
const HeroShot = React.lazy(() =>
  import("./../../components/dashboard/heroshot/HeroShot")
);
const SoftwareConsultancy = React.lazy(() =>
  import("./../../components/dashboard/softwareConsultancy/SoftwareConsultancy")
);
const IntroApp = React.lazy(() =>
  import("./../../components/dashboard/intro/Intro")
);
const Striper = React.lazy(() =>
  import("./../../components/dashboard/striper/Striper")
);
const Publish = React.lazy(() =>
  import("./../../components/dashboard/publish/Publish")
);
const ItConsulting = React.lazy(() =>
  import("./../../components/dashboard/consulting/ItConsulting")
);

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

export const HomeContainer = () => {
  const classes = useStyles();
  return (
    <Suspense fallback='<p>loading ...</p>'>
      <SectionContext.Provider value={{classes}}>
        <Mdash />
        <HeroShot />
        <Striper />
        <IntroApp />
        <ItConsulting />
        <Publish />
        <SoftwareConsultancy />
        <Form />
      </SectionContext.Provider>
    </Suspense>
  );
};
