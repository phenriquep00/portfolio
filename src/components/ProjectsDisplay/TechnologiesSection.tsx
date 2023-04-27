import { IData, technologies } from "../../../data";
import { icons } from "../../utils/icons";

export interface ISection {
    currentProject: IData | any;
}

export function TechnologiesSection({currentProject}: ISection) {
    return (
        <div className="flex flex-col items-center justify-center p-4  rounded-xl w-full text-white border-2 border-blue-500">
                <div className="bg-blue-500 rounded p-2 px-4 relative -top-9">
                  technologies
                </div>
                <div className="flex w-full justify-evenly">
                  {currentProject.technologies.map(
                    (tech: technologies, index: number) => (
                    {icons.map(())}
                    )
                  )}
                </div>
              </div>
    )
}