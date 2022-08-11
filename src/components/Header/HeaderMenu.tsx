import { List } from "phosphor-react";
import { Button } from "../Button/Button";

// TODO: conclude header menu

export function HeaderMenu() {

    const toggleHeaderMenu = () => {

    }

    return (
        <Button type={"t"} onClick={toggleHeaderMenu}>
            <List size={24} weight="bold"/>
        </Button>
    )
}