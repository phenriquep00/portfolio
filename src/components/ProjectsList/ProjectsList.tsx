import { ProjectTitle } from "./ProjectTitle";

interface IProjectList {
  isMobile: boolean;
}

export function ProjectsList({isMobile}: IProjectList) {
  return (
    <div className={`${isMobile ? 'w-screen text-[8vh]': 'w-[40vw] text-[12vh]'} flex flex-col p-16 h-screen overflow-y-scroll overflow-x-auto`}>
      <ProjectTitle title={"teste"} />
      <ProjectTitle title={"aaaaaaaaa"} />
      <ProjectTitle title={"aaaaaaaaaaaaaaaaaaa"} />
      <ProjectTitle title={"a"} />
      <ProjectTitle title={"aaaaaaaaa"} />
      <ProjectTitle title={"aaaaaaaaa"} />
      <ProjectTitle title={"aaaaaaaaa"} />
    </div>
  );
}
