import { status } from "../../../../data";

interface IProjectStatus {
  stts: status;
}

export function ProjectStatus({ stts }: IProjectStatus) {
  return (
    <div
      className={`flex items-center justify-center border-2 rounded
            ${
              stts === "active"
                ? "border-green-600 text-green-600 bg-green-200"
                : stts === "offline"
                ? "border-orange-400 text-orange-400 bg-orange-200"
                : stts === "in progress"
                ? "border-indigo-600 text-indigo-600 bg-indigo-300"
                : stts === "repository only"
                ? "border-yellow-400 text-yellow-400 bg-yellow-200"
                : "border-sky-600 text-sky-600 bg-sky-200"
            }
        `}
    >
      {stts}
    </div>
  );
}
