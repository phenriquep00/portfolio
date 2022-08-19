import { ProjectsData, ProjectsProps } from '../../../data'
import { Carrousel } from '../../Carrousel/Carrousel'


export function Projects() {
    return (
        <div className='flex flex-col items-center w-full h-full justify-center'>

            <Carrousel></Carrousel>

            {/* {
                ProjectsData.map(({ id, name }: ProjectsProps) => (
                    <p key={id}>{name}</p>
                ))
            } */}
        </div>
    )
}