import React from "react";
import {
  HeroShot,
  SoftwareConsultancy,
  IntroApp,
  IntroEcom,
  IntroApi,
  IntroCms,
  Striper
} from "./../../components/dashboard";
import {Form} from "./../../components/form";

export const HomeContainer = () => {
  return (
    <>
      <HeroShot />
      <Striper />
      <IntroApp />
      <SoftwareConsultancy />
      <IntroCms />
      <IntroEcom />
      <IntroApi />
      <Form />
    </>
  );
};
