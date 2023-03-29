import { CaretLeft } from "phosphor-react";
import { IData, data } from "../../../data";

interface IProjectsList {
  isMobile: boolean;
  updateCurrentProject: (newCurrentProject: IData | string) => void;
}

export function ProjectsList({
  isMobile,
  updateCurrentProject,
}: IProjectsList) {
  return (
    <div className="flex w-1/12">
      {isMobile ? (
        <button className="bg-brand h-full rounded-l-full">
          <CaretLeft size={48} weight="fill" color={"#000000"} />
        </button>
      ) : (
        <ul className="h-full w-full flex flex-col justify-between items-end gap-2">
          {data.map((project, index) => (
            <li
              className="flex flex-1 w-full justify-center flex-grow text-black items-center rounded-l-full bg-brand hover:bg-opacity-50 transition-colors duration-300 ease-in-out"
              key={`${project.title}+${index}`}
            >
              <button
                onClick={() => {
                  updateCurrentProject(project);
                }}
                className="w-full h-full"
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
