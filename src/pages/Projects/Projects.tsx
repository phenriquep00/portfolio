import { forwardRef, ReactNode, useEffect, useState } from "react";
import { ProjectsDisplay } from "../../components/ProjectsDisplay/ProjectsDisplay";
import { ProjectsList } from "../../components/ProjectsList/ProjectsList";
import useWindowDimensions from "../../hooks/useWindowDimentions";

export interface IPage {
  children?: ReactNode;
}

export type Ref = HTMLDivElement;

export const Projects = forwardRef<Ref, IPage>((props, ref) => {

  const { height, width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(height > width ? true : false);

  useEffect(() => {
    setIsMobile(height > width ? true : false);
  }, [height, width])

  return (
    <div
      tabIndex={0}
      ref={ref}
      className="flex flex-row  gap-6 justify-center w-screen h-[90vh] overflow-hidden"
    >
      <ProjectsDisplay isMobile={isMobile}/>
      <ProjectsList isMobile={isMobile}/>
    </div>
  );
});
