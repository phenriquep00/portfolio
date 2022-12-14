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
    height > width ? true : false
  );
  const [showProjectDisplay, setShowProjectDisplay] = useState<boolean>(
    isMobile ? false : true
  );
  const [showProjectsList, setShowProjectsList] = useState<boolean>(true);

  const changeSelectedProject = (newActiveTitle: string) => {
    data.map((project, index) => {
      project.title === newActiveTitle && setSelectedProject(project);
    });
  };

  const toggleProjectsList = () => {
    if (isMobile && showProjectsList === true) {
      setShowProjectsList(false);
      setShowProjectDisplay(true);
    } else if (isMobile) {
      setShowProjectsList(true);
      setShowProjectDisplay(false);
    }
  };

  useEffect(() => {
    setIsMobile(height > width ? true : false);
    setShowProjectDisplay(isMobile ? false : true);
    if (!isMobile) {
      setShowProjectDisplay(true);
      setShowProjectsList(true);
    };
  }, [height, width]);

  useEffect(() => {
    toggleProjectsList();
  }, [selectedProject]);

  return (
    <div
      tabIndex={0}
      ref={ref}
      className="flex flex-row  gap-6 justify-center w-screen h-[90vh] overflow-hidden"
    >
      <ProjectsList
        isMobile={isMobile}
        isOpen={showProjectsList}
        toggle={toggleProjectsList}
        data={data}
        active={selectedProject.title}
        changeSelectedProject={changeSelectedProject}
      />
      <ProjectDisplay
        isOpen={showProjectDisplay}
        isMobile={isMobile}
        toggle={toggleProjectsList}
        selectedProject={selectedProject}
      />
    </div>
  );
});
