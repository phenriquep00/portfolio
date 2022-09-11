import { PropsWithChildren } from "react";

type NavbarItemProps = PropsWithChildren<{
    active: boolean;
    onClick: any;
}>


export function NavbarItem({ onClick, active, children }: NavbarItemProps) {
    return (
        <div
            className={
                `flex flex-row items-center justify-center ${active ? 'text-highlightedSecondary border-b-2  border-orange-400 ' : 'text-highlightedPrimary'} font-semibold p-2 w-fit h-fit hover:cursor-pointer hover:opacity-70 transition-colors duration-200`
            }
            onClick={onClick}
        >
            {children}
        </div>
    )
}