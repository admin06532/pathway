import React from "react";
import {
  HeroShot,
  SoftwareConsultancy,
  OurClient,
  IntroApp,
  IntroEcom,
  IntroApi,
  IntroCms,
} from "./../../components/dashboard";
import {Form} from "./../../components/form";

export const HomeContainer = () => {
  return (
    <>
      <HeroShot />
      <IntroApp />
      <SoftwareConsultancy />
      <IntroCms />
      <IntroEcom />
      <IntroApi />
      <Form />
      <OurClient />
    </>
  );
};
