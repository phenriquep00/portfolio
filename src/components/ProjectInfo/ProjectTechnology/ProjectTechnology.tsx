import { technologies } from "../../../../data"

interface IProjectTechnology {
    tech: technologies;
}

export function ProjectTechnology({tech}: IProjectTechnology) {
    return (
        <div className="border-2 p-2 border-black">
            {tech}
        </div>
    )
}