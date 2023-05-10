import { IData, technologies } from "../../../data";
import { icons } from "../../utils/icons";

export interface ISection {
  currentProject: IData | any;
}

export function TechnologiesSection({ currentProject }: ISection) {
  const iconElements = [];

  for (const icon in icons) {
    if (currentProject.technologies.includes(icon)) {
      iconElements.push(
        <img
          key={icon}
          className="w-8 h-8"
          // @ts-ignore
          src={icons[icon]}
          alt={`${icon} logo`}
        />
      );
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-3  rounded-xl w-full text-white border-2 border-blue-500">
      <div className="bg-blue-500 rounded p-2 px-4 relative -top-9">
        technologies
      </div>
      <div className="flex w-full justify-evenly relative -top-4 ">{iconElements}</div>
    </div>
  );
}
