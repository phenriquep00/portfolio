import { PropsWithChildren } from "react";

type NavbarProps = PropsWithChildren<{
    
}>


export function Navbar({ children }: NavbarProps) {
    return(
        <div className="flex flex-row gap-4 justify-start items-center">
            {children}
        </div>
    )
}