import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimentions";
import "./navigator.css";

interface ILightsaber {
  hilt: string;
  color: "lime" | "red" | "blue";
  text: string;
  activePage: string;
  onClick: () => void;
}

export function Lightsaber({
  hilt,
  color,
  text,
  activePage,
  onClick,
}: ILightsaber) {

  const { height, width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(
    height > width ? true : false
  );

  return (
    <button
      onClick={onClick}
      className="flex flex-col flex-1 items-center pt-2 justify-evenly hover:bg-white rounded hover:bg-opacity-20 transition-all duration-300 ease-in-out"
    >
      <p
        className={`lg:text-xl md:text-lg text-base leading-loose pt-4 font-semibold -mb-5
        ${
          activePage === text
            ? color === "lime"
              ? "text-lime-500"
              : color === "red"
              ? "text-red-500"
              : "text-blue-500"
            : "text-white"
        }
      `}
      >
        {text}
      </p>
      <div className="flex flex-row items-center mt-4 ">
        <img
          className={`${isMobile ? 'w-6 h-14 mt-[-20px]' : 'w-10  h-18 md:mt-[-28px]'} lightsaber z-50 `}
          src={hilt}
          alt=""
        />
        {activePage === text ? (
          color === "lime" ? (
            <div className={`saber-lime ${isMobile ? 'w-12 h-[2px] -mb-2 ml-4' : ''}`}></div>
          ) : color === "red" ? (
            <div className={`saber-red ${isMobile ? 'w-12 h-[2px] -mb-2 ml-4' : ''}`}></div>
          ) : (
            <div className={`saber-blue ${isMobile ? 'w-12 h-[2px] -mb-2 ml-4' : ''}`}></div>
          )
        ) : null}
      </div>
    </button>
  );
}
