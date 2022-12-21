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
    height <= 700 || width <= 450 ? true : false
  );

  return (
    <button
      onClick={onClick}
      className="flex flex-col flex-1 items-center justify-center"
    >
      <p
        className={`text-md font-semibold 
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
      <div className="flex flex-row items-center">
        <img
          className={`${isMobile ? 'w-6 h-14 mt-[-20px]' : 'w-10  h-18 mt-[-28px]'} lightsaber z-10`}
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
