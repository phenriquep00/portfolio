import { ProjectsData, ProjectsProps } from '../../../data'


export function Projects() {
    return (
        <div>
            Projects

        {/* 
            what do I want in the projects section?
            display projects in a nice way
            
        */}

            {
                ProjectsData.map(({ id, name }: ProjectsProps) => (
                    <p key={id}>{name}</p>
                ))
            }
        </div>
    )
}