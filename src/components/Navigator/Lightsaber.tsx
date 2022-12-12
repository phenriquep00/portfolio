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
          className="w-10 mt-[-28px] z-10 h-18 lightsaber"
          src={hilt}
          alt=""
        />
        {activePage === text ? (
          color === "lime" ? (
            <div className="saber-lime"></div>
          ) : color === "red" ? (
            <div className="saber-red"></div>
          ) : (
            <div className="saber-blue"></div>
          )
        ) : null}
      </div>
    </button>
  );
}
