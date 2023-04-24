import { IData, status, technologies } from "../../../data";
import { AnchorsSection } from "./AnchorsSection";
import { StatusSection } from "./StatusSection";
import { TechnologiesSection } from "./TechnologiesSection";

interface IProjectsDisplay {
  isMobile: boolean;
  currentProject: string | IData | any;
}

export function ProjectsDisplay({
  isMobile,
  currentProject,
}: IProjectsDisplay) {
  return (
    <div
      className={`flex w-11/12 gap-2 p-2 h-full ${isMobile ? "flex-col" : ""}`}
    >
      {currentProject === "" ? (
        <div className="flex flex-1 items-center justify-center">
          <h1 className="text-2xl font-black text-brand">
            Select a project on the sidebar
          </h1>
        </div>
      ) : (
        <>
          <div className="flex w-1/2 justify-between h-full py-4 gap-4 flex-col items-center text-black">
            <div className="flex first-line:marker:flex-col items-center justify-center gap-4  p-4 h-1/2 w-full">
              <img
                className="border-2 border-brand w-full h-full rounded-md"
                src={currentProject.img}
                alt="project image"
              />
            </div>
            <div className="flex flex-col items-center justify-between gap-2 w-full h-1/2 mt-5">
              <AnchorsSection />

              <TechnologiesSection currentProject={currentProject}/>

              <StatusSection currentProject={currentProject}/>
            </div>
          </div>

          <div className="flex flex-1 flex-col border-brand border-2 rounded h-full w-1/2 justify-around text-center text-2xl items-center p-4 ">
            <div className="">
                <h1 className="flex text-5xl font-black font-outline-2 text-transparent">
              {currentProject?.title}{" "}
            </h1>
            </div>
            
            {currentProject.description}
          </div>
        </>
      )}
    </div>
  );
}
