import { PropsWithChildren } from "react";

type NavbarProps = PropsWithChildren<{
    onClick: any;
}>


export function Navbar({ onClick, children }: NavbarProps) {
    return (
        <div className="'flex flex-row items-center justify-center text-emerald-400 font-semibold p-2 w-fit h-fit hover:cursor-pointer hover:text-emerald-600 transition-colors duration-200'">

        </div>
    )
}