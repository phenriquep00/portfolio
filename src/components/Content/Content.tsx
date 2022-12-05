import { useRef } from "react";
import { Contact } from "../../pages/Contact/Contact";
import { LandingPage } from "../../pages/LandingPage/LandingPage";
import { Projects } from "../../pages/Projects/Projects";

export function Content() {
  return (
    <div className="absolute w-full h-full top-0 left-0 text-white">
      <div className="flex flex-col items-center justify-center">
        <LandingPage />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
