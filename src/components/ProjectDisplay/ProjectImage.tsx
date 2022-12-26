import { useState } from "react";

interface IProjectImage {
  img: string;
  mobile: boolean;
}

export function ProjectImage({ img, mobile }: IProjectImage) {
  const [showImage, setShowImage] = useState<boolean>(true);

  return (
    <>
      {showImage ? (
        <div className={`max-w-full w-[95%] ${mobile ? 'h-1/2' : 'h-2/3' }  border-2 border-[#1B7DEB]`}>
          <img
            className="w-full h-full object-contain"
            src={img}
            alt="project image"
          />
          <button onClick={() => setShowImage(false)} className={`text-white absolute right-6 flex px-2 text-sm items-center  h-4 bg-[#1B7DEB] ${mobile ? 'top-10' : 'top-0'} `}>
            <p>
              - minimize
            </p>
          </button>
        </div>
      ): 
        <div className="w-full min-h-[2px] bg-[#1B7DEB]">
          <button onClick={() => setShowImage(true)} className={`absolute right-6 flex px-2 text-white text-sm items-center  h-4 bg-[#1B7DEB] ${mobile ? 'top-10' : 'top-0'} `}>
            <p>
              + image
            </p>
          </button>
        </div>
      }
    </>
  );
}
