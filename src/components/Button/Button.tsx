import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  type: "p" | "s" | "t";
  onClick: any;
}>;

export function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex text-[#feda4a] flex-row items-center justify-center
        ${
          type.startsWith("p")
            ? "border-2 border-[#feda4a] rounded font-semibold p-2"
            : type.startsWith("s")
            ? "secondary button"
            : "teritiary button"
        }          
        `}
    >
      {children}
    </button>
  );
}
