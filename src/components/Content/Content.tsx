import { createRef, useRef, useState } from "react";
import { Contact } from "../../pages/Contact/Contact";
import { LandingPage } from "../../pages/LandingPage/LandingPage";
import { Projects } from "../../pages/Projects/Projects";
import { Navigator } from "../Navigator/Navigator";

export function Content() {
  const [activePage, setActivePage] = useState<string>("Home");
  const projectsRef = createRef<HTMLDivElement>();
  const contactRef = createRef<HTMLDivElement>();
  const LandingPageRef = createRef<HTMLDivElement>();

  const handleLandingPageFocus = () => {
    setActivePage("Home");
    LandingPageRef.current?.focus();
  };

  const handleProjectsFocus = () => {
    setActivePage("Projects");
    projectsRef.current?.focus();
  };

  const handleContactFocus = () => {
    setActivePage("Contact");
    contactRef.current?.focus();
  };

  return (
    <div className="absolute flex items-center justify-center flex-col w-full h-full top-0 left-0 text-white overflow-hidden">
        {activePage === "Home" ? (
          <LandingPage ref={LandingPageRef} />
        ) : activePage === "Projects" ? (
          <Projects ref={projectsRef} />
        ) : (
          <Contact ref={contactRef} />
        )}
      <Navigator
        activePage={activePage}
        focusLandingPage={handleLandingPageFocus}
        focusContact={handleContactFocus}
        focusProjects={handleProjectsFocus}
      />
    </div>
  );
}
