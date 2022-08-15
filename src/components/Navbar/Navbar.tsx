import { PropsWithChildren } from "react";

type NavbarProps = PropsWithChildren<{
    active: boolean;
    onClick: any;
}>


export function Navbar({ onClick, active, children }: NavbarProps) {
    return (
        <div
            className={
                `flex flex-row items-center justify-center ${active ? 'text-amber-400' : 'text-emerald-400'} font-semibold p-2 w-fit h-fit hover:cursor-pointer ${active ? 'hover:text-amber-600' : 'hover:text-emerald-600'} transition-colors duration-200`
            }
            onClick={onClick}
        >
            {children}
        </div>
    )
}