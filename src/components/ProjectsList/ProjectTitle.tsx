import { useEffect, useState } from "react";

interface IProjectTitle {
  title: string;
  active: string;
  handleClick: (newProjectTitle: string) => void;
  isMobile: boolean;
}

export function ProjectTitle({
  title,
  active,
  handleClick,
  isMobile,
}: IProjectTitle) {
  const [isActive, setIsActive] = useState<boolean>(
    title === active ? true : false
  );

  useEffect(() => {
    setIsActive(title === active ? true : false);
  }, [active]);

  return (
    <button
      onClick={() => {
        handleClick(title);
      }}
      className={`border-2 border-[#feda4a] ${
        isActive
          ? "bg-[#FFE81F] text-black"
          : "text-[#feda4a] hover:active-item"
      }
      ${isMobile ? "min-h-[9vh]" : "min-h-[12vh]"}
      p-2 font-black transition ease-in-out duration-75 -skew-y-12 -skew-x-12  whitespace-nowrap overflow-clip`}
    >
      {title}
    </button>
  );
}
