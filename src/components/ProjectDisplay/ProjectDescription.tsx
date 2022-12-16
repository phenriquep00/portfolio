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
    <div className="flex items-center bg-slate-50 text-black overflow-y-scroll rounded p-6 text-2xl font-medium flex-1 gap-2 flex-col">
      
      <div className="flex flex-row gap-3">
        {
          status.map((stts: status, index:number) => (
            <ProjectStatus key={index} stts={stts} />
          ))
        }
      </div>
      
      <div className="flex flex-row gap-3 border-2 p-2 border-black">
        {description}
      </div>

      <div className="flex flex-row gap-3">
        {
        technologies.map((technology: technologies, index:number) => (
          <ProjectTechnology key={index} tech={technology}/>
        ))
      }
      </div>
      
    </div>
  );
}
