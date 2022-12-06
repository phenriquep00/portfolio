import { forwardRef, ReactNode,  useEffect,  useState } from "react";
import { ProjectsList } from "../../components/ProjectsList/ProjectsList";
import useWindowDimensions from "../../hooks/useWindowDimentions";

export interface IPage {
  children?: ReactNode;
}

export type Ref = HTMLDivElement;

export const Projects = forwardRef<Ref, IPage>((props, ref) => {
  const { height, width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(
    height >= 700 && width >= 641 ? false : true
  );
  
  useEffect(() => {setIsMobile(height >= 700 && width >= 641 ? false : true)}, [height, width])

  return (
    <div
      tabIndex={0}
      ref={ref}
      className="flex flex-row items-center justify-center w-screen h-screen "
    >
      <ProjectsList isMobile={isMobile} />
    </div>
  );
});
