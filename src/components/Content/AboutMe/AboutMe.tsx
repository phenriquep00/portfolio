import { Button } from "../../Button/Button";

export function AboutMe() {
    return (
        <div className="text-white">
            About Me
            <div className="flex flex-row gap-3">
                <Button type={"p"} onClick={null}> Check Projects</Button>
                <Button type={"s"} onClick={null}> contacts</Button>
            </div>

        </div>
    )
}