import { Button } from "../../Button/Button";

interface AboutMeProps {
    updateActiveContent: any;
}

export function AboutMe({ updateActiveContent }: AboutMeProps) {

    const updateCurrent = (
        e: React.MouseEvent<HTMLInputElement>
    ) => {
       updateActiveContent(e.currentTarget.innerText)
    }

    return (
        <div className="text-white">
            About Me
            <div className="flex flex-row gap-3">
                <Button type={"p"} onClick={updateCurrent}>Projects</Button>
                <Button type={"s"} onClick={updateCurrent}>Contacts</Button>
            </div>
        </div>
    )
}