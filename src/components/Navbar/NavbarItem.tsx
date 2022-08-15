import { PropsWithChildren } from "react";

type NavbarItemProps = PropsWithChildren<{
    active: boolean;
    onClick: any;
}>


export function NavbarItem({ onClick, active, children }: NavbarItemProps) {
    return (
        <div
            className={
                `flex flex-row items-center justify-center ${active ? 'text-orange-400' : 'text-emerald-400'} font-semibold p-2 w-fit h-fit hover:cursor-pointer ${active ? 'hover:text-orange-600' : 'hover:text-emerald-600'} transition-colors duration-200`
            }
            onClick={onClick}
        >
            {children}
        </div>
    )
}