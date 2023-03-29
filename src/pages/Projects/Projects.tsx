import { forwardRef, ReactNode, useEffect, useState } from "react";
import { ProjectsDisplay } from "../../components/ProjectsDisplay/ProjectsDisplay";
import { ProjectsList } from "../../components/ProjectsList/ProjectsList";
import useWindowDimensions from "../../hooks/useWindowDimentions";
import { IData } from "../../../data";

export interface IPage {
  children?: ReactNode;
}

export type Ref = HTMLDivElement;

export const Projects = forwardRef<Ref, IPage>((props, ref) => {
  const { height, width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(height > width ? true : false);

  const [selectedProject, setSelectedProject] = useState<string | IData | any>(
    ""
  );

  const handleUpdateCurrentProject = (
    newCurrentProject: IData | string | any
  ) => {
    setSelectedProject(newCurrentProject);
  };

  useEffect(() => {
    setIsMobile(height > width ? true : false);
  }, [height, width]);

  return (
    <div
      tabIndex={0}
      ref={ref}
      className="flex flex-row  gap-6 justify-center w-screen h-[90vh] overflow-hidden"
    >
      <ProjectsDisplay currentProject={selectedProject} isMobile={isMobile} />
      <ProjectsList
        updateCurrentProject={handleUpdateCurrentProject}
        isMobile={isMobile}
      />
    </div>
  );
});
