import { ProjectsData, ProjectsProps } from '../../../data'


export function Projects() {
    return (
        <div>
            Projects
            {
                ProjectsData.map(({ id, name }: ProjectsProps) => (
                    <p key={id}>{name}</p>
                ))
            }
        </div>
    )
}