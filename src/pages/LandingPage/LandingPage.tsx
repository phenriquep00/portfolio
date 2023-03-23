import { forwardRef, useEffect, useState } from "react";
import { IPage, Ref } from "../Projects/Projects";
import { HomeInfo } from "../../components/HomeInfo/HomeInfo";
import { AboutMe } from "../../components/AboutMe/AboutMe";

export const LandingPage = forwardRef<Ref, IPage>((props, ref) => {
  return (
    <div className="flex flex-row gap-4 items-center justify-center w-screen h-[90vh] ">
      <HomeInfo />
      <AboutMe />
    </div>
  );
});
