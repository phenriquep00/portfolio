import { IData, status, technologies } from "../../../data";

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
          <div className="flex w-1/2  justify-between h-full py-4 gap-4 flex-col items-center text-black">
            <div className="flex flex-col items-center justify-center gap-4  p-4 h-1/2 w-full">
              <img
                className="border-2 border-brand rounded-md"
                src={currentProject.img}
                alt="project image"
              />
            </div>
            <div className="flex flex-col items-center justify-between gap-2 w-full h-1/2 mt-5">
              <div className="flex flex-col items-center mt-5 justify-center p-4 rounded-xl w-full text-white border-2 border-blue-500">
                <div className="bg-blue-500 rounded p-2 px-4 relative -top-9">
                  links
                </div>
                <div className="relative -mt-6">
                  links (github repo / project page)
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-4  rounded-xl w-full text-white border-2 border-blue-500">
                <div className="bg-blue-500 rounded p-2 px-4 relative -top-9">
                  technologies
                </div>
                <div className="flex w-full justify-evenly">
                  {currentProject.technologies.map(
                    (tech: technologies, index: number) => (
                      <p key={`${tech}+${index}`}>{tech}</p>
                    )
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-4 rounded-xl w-full text-white border-2 border-blue-500">
                <div className="bg-blue-500 rounded p-2 px-4 relative -top-9">
                  status
                </div>
                <div className="flex w-full justify-evenly -mt-6">
                  {currentProject.status.map(
                    (status: status, index: number) => (
                      <p key={`${status}+${index}`}>{status}</p>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col h-full w-1/2 justify-around text-center text-2xl items-center p-4 ">
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
