import { forwardRef, ReactNode, useEffect, useState } from "react";
import { ProjectDisplay } from "../../components/ProjectDisplay/ProjectDisplay";
import { ProjectsList } from "../../components/ProjectsList/ProjectsList";
import useWindowDimensions from "../../hooks/useWindowDimentions";
import { data, IData } from "../../../data";

export interface IPage {
  children?: ReactNode;
}

export type Ref = HTMLDivElement;

export const Projects = forwardRef<Ref, IPage>((props, ref) => {
  const { height, width } = useWindowDimensions();
  const [selectedProject, setSelectedProject] = useState<IData>(data[0]);
  const [isMobile, setIsMobile] = useState(
    height >= 700 && width >= 641 ? false : true
  );
  const [showProjectDisplay, setShowProjectDisplay] = useState<boolean>(
    isMobile ? false : true
  );

  const changeSelectedProject = (newActiveTitle: string) => {
    data.map((project, index) => {
      project.title === newActiveTitle && setSelectedProject(project)
    })
  };

  useEffect(() => {
    setIsMobile(height >= 700 && width >= 641 ? false : true);
    setShowProjectDisplay(isMobile ? false : true);
  }, [height, width]);

  return (
    /* TODO: make the ProjectsList togglable if the viewport is mobile */
    <div
      tabIndex={0}
      ref={ref}
      className="flex flex-row  gap-6 justify-center w-screen h-screen"
    >
      <ProjectsList
        isMobile={isMobile}
        data={data}
        active={selectedProject.title}
        changeSelectedProject={changeSelectedProject}
      />
      <ProjectDisplay isOpen={showProjectDisplay} selectedProject={selectedProject}/>
    </div>
  );
});
