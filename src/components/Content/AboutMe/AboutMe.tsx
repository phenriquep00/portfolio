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

            {/* 
                what do I want in the about me section?
                - greeting message
                - working technologies
                - something interesting
            */}
            <div className="flex flex-row gap-3 w-80 h-16">
                <Button type={"p"} onClick={updateCurrent}>Projects</Button>
                <Button type={"s"} onClick={updateCurrent}>Contacts</Button>
            </div>
        </div>
    )
}