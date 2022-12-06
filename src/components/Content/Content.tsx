import { createRef, useRef } from "react";
import { Contact } from "../../pages/Contact/Contact";
import { LandingPage } from "../../pages/LandingPage/LandingPage";
import { Projects } from "../../pages/Projects/Projects";

export function Content() {

  const projectsRef = createRef<HTMLDivElement>();
  const contactRef = useRef<any>();

  const handleProjectsFocus = () => {
    projectsRef.current?.focus();
  }

  const handleContactFocus = () => {
    contactRef.current?.focus();
  }

  return (
    <div className="absolute w-full h-full top-0 left-0 text-white">
      <div className="flex flex-col items-center justify-center">
        <LandingPage focusProjects={handleProjectsFocus} focusContact={handleContactFocus}/>
        <Projects ref={projectsRef}/>
        <Contact ref={contactRef}/>
      </div>
    </div>
  );
}
