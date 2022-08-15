import { List } from "phosphor-react";
import { PropsWithChildren, useState } from "react";
import { Button } from "../Button/Button";

type HeaderMenuProps = PropsWithChildren<{

}>

export function HeaderMenu({ children }: HeaderMenuProps) {

    const [headerMenuActive, setHeaderMenuActive] = useState(false)

    const toggleHeaderMenu = () => {
        setHeaderMenuActive(!headerMenuActive)
    }

    return (
        <Button type={"t"} onClick={toggleHeaderMenu}>
            <div className="bg-slate-900 w-44 h-30 absolute right-2 top-2 rounded-bl-3xl transition-all">
                {
                    headerMenuActive ? children : null
                }
            </div>

            <List size={24} weight="bold" className="z-20"/>

        </Button>
    )
}