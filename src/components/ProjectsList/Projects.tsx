import { IData, data } from "../../../data";
import { IProjectsList } from "./ProjectsList";

export function Projects({ updateCurrentProject, isMobile }: IProjectsList) {
  return (
    <ul className="h-full w-full py-1 flex flex-col justify-between items-end gap-1">
      {data.map((project, index) => (
        <li
          className={`${
            isMobile
              ? "min-w-[180px] bg-black text-white"
              : "text-black bg-brand"
          } flex flex-1 w-full text-xl font-bold justify-center truncate flex-grow items-center rounded-l-full hover:bg-opacity-50 transition-colors duration-300 ease-in-out`}
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
  );
}
