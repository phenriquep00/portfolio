import { ProjectsData, ProjectsProps } from '../../../data'
import { Carrousel } from '../../Carrousel/Carrousel'


export function Projects() {
    return (
        <div className='bg-white flex flex-1 items-center justify-center w-fill h-fill'>

            <Carrousel></Carrousel>

            {/* {
                ProjectsData.map(({ id, name }: ProjectsProps) => (
                    <p key={id}>{name}</p>
                ))
            } */}
        </div>
    )
}