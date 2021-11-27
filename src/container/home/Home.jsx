import React from "react";
import {
  HeroShot,
  SoftwareConsultancy,
  IntroApp,
  IntroEcom,
  IntroApi,
  IntroCms,
  Striper,
  Publish,
  ItConsulting
} from "./../../components/dashboard";
import {Form} from "./../../components/form";

export const HomeContainer = () => {
  return (
    <>
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
