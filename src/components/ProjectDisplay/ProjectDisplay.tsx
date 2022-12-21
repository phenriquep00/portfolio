import { Divide, List } from "phosphor-react";
import { IData } from "../../../data";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectImage } from "./ProjectImage";

interface IProjectDisplay {
  isOpen: boolean;
  isMobile: boolean;
  toggle: () => void;
  selectedProject: IData;
}

export function ProjectDisplay({
  isOpen,
  isMobile,
  toggle,
  selectedProject,
}: IProjectDisplay) {
  return (
    <>
      {isOpen && (
        <div
          key={selectedProject.title}
          className="flex w-full h-full flex-col gap-4 items-center flex-1 p-2 animate-project_display"
        >
          {isMobile && (
            <button
              onClick={() => {
                toggle();
              }}
              className="flex items-center justify-center self-start w-10 h-10 border-2 border-[#feda4a] m-2"
            >
              <List size={40} weight="bold" color="#feda4a" />
            </button>
          )}
          <ProjectImage mobile={isMobile} img={selectedProject.img} />
          <ProjectDescription
            mobile={isMobile}
            description={selectedProject.description}
            status={selectedProject.status}
            technologies={selectedProject.technologies}
          />
        </div>
      )}
    </>
  );
}
