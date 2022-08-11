import { DotsThree, DotsThreeVertical, List } from "phosphor-react";
import { Button } from "../Button/Button";

export function HeaderMenu() {

    const toggleHeaderMenu = () => {
        
    }

    return (
        <Button type={"t"} onClick={toggleHeaderMenu}>
            <List size={24} weight="bold"/>
        </Button>
    )
}