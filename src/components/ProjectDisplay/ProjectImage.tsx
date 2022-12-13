interface IProjectImage {
  img: string;
}

export function ProjectImage({ img }: IProjectImage) {
  return (
    <img
      className="w-full h-1/2 border-2 border-[#feda4a]"
      src={img}
      alt="project image"
    />
  );
}
