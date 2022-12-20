import { useState } from "react";

interface IProjectImage {
  img: string;
}

export function ProjectImage({ img }: IProjectImage) {
  const [showImage, setShowImage] = useState<boolean>(true);

  return (
    <>
      {showImage ? (
        <div className="w-full h-2/3 border-2 border-[#feda4a]">
          <img
            className="w-full h-full object-contain"
            src={img}
            alt="project image"
          />
          <button onClick={() => setShowImage(false)} className="absolute right-6 flex px-2 text-black text-sm items-center  h-4 bg-[#feda4a] top-0">
            <p>
              - minimize
            </p>
          </button>
        </div>
      ): 
        <div className="w-full min-h-[2px] bg-[#feda4a]">
          <button onClick={() => setShowImage(true)} className="absolute right-6 flex px-2 text-black text-sm items-center  h-4 bg-[#feda4a] top-0">
            <p>
              + image
            </p>
          </button>
        </div>
      }
    </>
  );
}
