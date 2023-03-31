import { CaretLeft, CaretRight } from "phosphor-react";
import { IData, data } from "../../../data";
import { Projects } from "./Projects";
import { useState } from "react";

export interface IProjectsList {
  isMobile: boolean;
  updateCurrentProject: (newCurrentProject: IData | string) => void;
}

export function ProjectsList({
  isMobile,
  updateCurrentProject,
}: IProjectsList) {
  const [isProjectListOpen, setIsProjectListOpen] = useState(false);

  const toggleIsProjectListOpen = () => {
    setIsProjectListOpen(!isProjectListOpen);
  };

  return (
    <div className="flex w-auto">
      {isMobile ? (
        isProjectListOpen ? (
          <div className="bg-brand flex items-center rounded-l-3xl">
            <button className="text-black hover:text-white transition-colors duration-300" onClick={toggleIsProjectListOpen}>
              <CaretRight size={48} weight="fill"/>
            </button>
            
            <Projects isMobile={isMobile} updateCurrentProject={updateCurrentProject} />
          </div>
          
        ) : (
          <button
            className="bg-brand h-full rounded-l-full text-black hover:bg-opacity-70 hover:text-white transition-all duration-300"
            onClick={toggleIsProjectListOpen}
          >
            <CaretLeft size={48} weight="fill" />
          </button>
        )
      ) : (
        <Projects isMobile={isMobile} updateCurrentProject={updateCurrentProject} />
      )}
    </div>
  );
}
