import { status } from "../../../data";
import { ISection } from "./TechnologiesSection";

export function StatusSection({currentProject}: ISection) {

    return (
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
    )
}