import { IData } from "../../../data";

interface IPorjectDescription {
    description: string;
    status: IData['status'];
    technologies: string
}

export function ProjectDescription({description, status, technologies}: IPorjectDescription) {
    return (
        <div className="flex items-center flex-1 gap-2 flex-col border-2 border-[#feda4a]">
            <p>{description}</p>
            <p>{technologies}</p>
            <p>{status}</p>
        </div>
    )
}