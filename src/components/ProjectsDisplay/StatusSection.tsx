import { status } from "../../../data";
import { statuses } from "../../utils/statuses";
import { ISection } from "./TechnologiesSection";

export function StatusSection({ currentProject }: ISection) {
  function selectStatusStyles(status: string) {
    if (status === "online") {
      return "text-green-500 font-semibold border border-2 px-2 rounded border-green-400";
    } else if (status === "offline") {
      return "text-orange-500 font-semibold border border-2 px-2 rounded border-orange-400";
    } else if (status === "in progress") {
      return "text-yellow-500 font-semibold border border-2 px-2 rounded border-yellow-400";
    } else if (status === "repository only") {
      return "text-violet-500 font-semibold border border-2 px-2 rounded border-violet-400";
    } else {
      return "text-blue-500 font-semibold border border-2 px-2 rounded border-blue-400";
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-3 rounded-xl w-full text-white border-2 border-blue-500">
      <div className="bg-blue-500 rounded p-2 px-4 relative -top-9">status</div>
      <div className="flex w-full justify-evenly -mt-6">
        {currentProject.status.map((status: status, index: number) => (
          <p className={selectStatusStyles(status)} key={`${status}+${index}`}>
            {status}
          </p>
        ))}
      </div>
    </div>
  );
}
