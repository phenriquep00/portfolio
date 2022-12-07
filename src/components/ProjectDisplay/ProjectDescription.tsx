import { IData } from "../../../data";

interface IPorjectDescription {
  description: string;
  status: IData["status"];
  technologies: string;
}

export function ProjectDescription({
  description,
  status,
  technologies,
}: IPorjectDescription) {
  return (
    <div
      className="flex items-center bg-slate-50 text-black overflow-y-scroll rounded p-6 text-2xl font-medium flex-1 gap-2 flex-col"
    >
      <p>{description}</p>
      <p>{technologies}</p>
      <p>{status}</p>
    </div>
  );
}
