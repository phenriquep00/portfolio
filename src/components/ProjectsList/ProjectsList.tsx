import { ProjectTitle } from "./ProjectTitle";
import { IData } from "../../../data";

interface IProjectList {
  isMobile: boolean;
  data: IData[];
  active: string;
  changeSelectedProject: (newProjectTitle: string) => void;
}

export function ProjectsList({
  isMobile,
  data,
  active,
  changeSelectedProject,
}: IProjectList) {
  return (
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
  );
}
