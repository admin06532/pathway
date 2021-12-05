import React from "react";
import {
  HeroShot,
  SoftwareConsultancy,
  IntroApp,
  Striper,
  Publish,
  ItConsulting,
  Mdash
} from "./../../components/dashboard";
import {Form} from "./../../components/form";

export const HomeContainer = () => {
  
  return (
    <>
      <Mdash />
      <HeroShot />
      <Striper />
      <IntroApp />
      <ItConsulting />
      <Publish />
      <SoftwareConsultancy /> 
      <Form />
    </>
  );
};
