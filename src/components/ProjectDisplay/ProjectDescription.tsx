import { IData, technologies, status } from "../../../data";
import { ProjectStatus } from "../ProjectInfo/ProjectStatus/ProjectStatus";
import { ProjectTechnology } from "../ProjectInfo/ProjectTechnology/ProjectTechnology";

interface IPorjectDescription {
  description: string;
  status: status[];
  technologies: technologies[];
}

export function ProjectDescription({
  description,
  status,
  technologies,
}: IPorjectDescription) {
  return (
    <div className="flex items-center text-black overflow-y-scroll p-3 text-2xl font-medium flex-1 gap-2 flex-col">
      <h4 className="self-start bg-[#feda4a] z-20 border-2 text-black border-[#feda4a] ml-2 mb-[-28px] rounded py-2 px-8">
        Technologies:{" "}
      </h4>
      <div className="flex flex-row gap-10 justify-center items-center w-full flex-wrap  py-2 pt-6 rounded border-2 border-[#feda4a]">
        {technologies.map((technology: technologies, index: number) => (
          <ProjectTechnology key={index} tech={technology} />
        ))}
      </div>

      <h4 className="self-start border-2 text-black bg-[#feda4a] border-[#feda4a] rounded z-20 ml-2 mb-[-28px] py-2 px-8">
        Description:{" "}
      </h4>
      <div className="flex pt-5 flex-row gap-3 border-2 p-2 border-[#feda4a] rounded text-white">
        {description}
      </div>

      <h4 className="self-start bg-[#feda4a] border-2 text-black border-[#feda4a] rounded z-20 ml-2 mb-[-28px] py-2 px-8">
        Status:{" "}
      </h4>
      <div className="flex  pt-5 w-full flex-row gap-3 justify-center border-2 border-[#feda4a] py-2 rounded">
        {status.map((stts: status, index: number) => (
          <ProjectStatus key={index} stts={stts} />
        ))}
      </div>
    </div>
  );
}
