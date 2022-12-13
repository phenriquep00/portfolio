import { ProjectTitle } from "./ProjectTitle";
import { IData } from "../../../data";
import { ArrowLineLeft } from "phosphor-react";

interface IProjectList {
  isMobile: boolean;
  isOpen: boolean;
  toggle: () => void;
  data: IData[];
  active: string;
  changeSelectedProject: (newProjectTitle: string) => void;
}

export function ProjectsList({
  isMobile,
  isOpen,
  toggle,
  data,
  active,
  changeSelectedProject,
}: IProjectList) {
  return (
    <>
      {isOpen && (
        <div className="flex flex-col animate-project_list">
          {isMobile ? (
            <button
              onClick={() => {
                toggle();
              }}
              className="flex items-center justify-center w-14 h-14 border-2 border-[#feda4a] m-2"
            >
              <ArrowLineLeft size={40} color={"#feda4a"} weight="bold" />
            </button>
          ) : null}
          <div
            className={`${
              isMobile ? "w-screen text-[8vh]" : "w-[40vw] text-[8vh]"
            } flex flex-col p-16 h-screen overflow-y-scroll overflow-x-auto`}
          >
            {data.map((project, index) => (
              <ProjectTitle
                key={index}
                title={project.title}
                active={active}
                handleClick={changeSelectedProject}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
