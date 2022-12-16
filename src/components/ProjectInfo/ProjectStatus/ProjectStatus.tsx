import { status } from "../../../../data";

interface IProjectStatus {
    stts: status;
}

export function ProjectStatus({stts}: IProjectStatus) {
    return (
        <div className="border-2 p-2 border-black">
            {stts}
        </div>
    )
}