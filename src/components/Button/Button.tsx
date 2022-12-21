import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  type: "p" | "s" | "t";
  onClick: () => void;
}>;

export function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex text-[#feda4a] flex-row items-center justify-center hover:animate-button border-4 border-[#feda4a] rounded font-bold p-2"
    >
      {children}
    </button>
  );
}
