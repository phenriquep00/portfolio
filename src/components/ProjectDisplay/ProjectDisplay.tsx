import { IData } from "../../../data";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectImage } from "./ProjectImage";

interface IProjectDisplay {
  isOpen: boolean;
  selectedProject: IData;
}

export function ProjectDisplay({ isOpen, selectedProject }: IProjectDisplay) {
  return (
    <>
      {isOpen && (
        <div
          key={selectedProject.title}
          className="flex flex-col gap-4 items-center flex-1 p-2 animate-project_display"
        >
          <ProjectImage img={selectedProject.img} />
          <ProjectDescription
            description={selectedProject.description}
            status={selectedProject.status}
            technologies={selectedProject.technologies}
          />
        </div>
      )}
    </>
  );
}
