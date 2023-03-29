import { forwardRef, useEffect, useState } from "react";
import { IPage, Ref } from "../Projects/Projects";
import { HomeInfo } from "../../components/HomeInfo/HomeInfo";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import useWindowDimensions from "../../hooks/useWindowDimentions";

export const LandingPage = forwardRef<Ref, IPage>((props, ref) => {
  const { height, width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(height > width ? true : false);

  useEffect(() => {
    setIsMobile(height > width ? true : false);
  }, [height, width]);

  return (
    <div className="flex flex-row gap-4 items-center justify-center w-screen h-[90vh] ">
      {isMobile ? (
        <div>
          <h1 className="text-2xl px-4 text-center text-brand font-bold">
            Sorry, I'm still working on the project's mobile version :(
          </h1>

          <div>
            <img src="/jawas.png" alt="" />
          </div>
        </div>
      ) : (
        <>
          <HomeInfo />
          <AboutMe />
        </>
      )}
    </div>
  );
});
