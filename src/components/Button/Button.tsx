import { PropsWithChildren } from "react";

/* TODO: pass all button props to children */

type ButtonProps = PropsWithChildren<{
  type: "p" | "s" | "t";
  onClick: () => void;
}>;

export function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex text-brand flex-row items-center justify-center hover:animate-button border-4 border-brand rounded font-bold p-2"
    >
      {children}
    </button>
  );
}
