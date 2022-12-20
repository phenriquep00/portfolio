interface IProjectImage {
  img: string;
}

export function ProjectImage({ img }: IProjectImage) {
  return (
    <img
      className="w-full h-2/3 border-2 border-[#feda4a] object-contain"
      src={img}
      alt="project image"
    />
  );
}
