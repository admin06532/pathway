import React, {Suspense} from "react";


import {Form} from "./../../components/form";

const Mdash = React.lazy( () => import("./../../components/dashboard/mdash/Mdash"));
const HeroShot = React.lazy( () => import("./../../components/dashboard/heroshot/HeroShot"));
const SoftwareConsultancy = React.lazy( () => import("./../../components/dashboard/softwareConsultancy/SoftwareConsultancy"));
const IntroApp = React.lazy( () => import("./../../components/dashboard/intro/Intro"));
const Striper = React.lazy( () => import("./../../components/dashboard/striper/Striper"));
const Publish = React.lazy( () => import("./../../components/dashboard/publish/Publish"));
const ItConsulting = React.lazy( () => import("./../../components/dashboard/softwareConsultancy/SoftwareConsultancy"));



export const HomeContainer = () => {
  
  return (
    <Suspense fallback="<p>loading ...</p>">
      <Mdash />
      <HeroShot />
      <Striper />
      <IntroApp />
      <ItConsulting />
      <Publish />
      <SoftwareConsultancy /> 
      <Form />
    </Suspense>
  );
};
