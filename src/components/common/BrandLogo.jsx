import React from "react";
import Logo from "./../../assets/images/pathway-logo.png";
import LogoMobile from "./../../assets/images/mobile_logo.png";
import {Hidden} from '@material-ui/core';

export const BrandLogo = React.memo(() => (
  <>
    <Hidden only={["xs", "sm"]} n>
      <img src={Logo} alt='pathways logo' />
    </Hidden>
    <Hidden only={["md", "lg", "xl"]}>
      <img src={LogoMobile} alt='pathways logo' />
    </Hidden>
  </>
));

