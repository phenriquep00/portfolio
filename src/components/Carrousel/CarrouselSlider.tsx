import { CaretRight } from "phosphor-react";
import { CarrouselSliderCard } from "./CarrouselSliderCard";
import { projectsData, ProjectsProps } from "../../data";
import { useEffect, useRef, useState } from "react";


export function CarrouselSlider() {
    
    const [activeProjects, setActiveProjects] = useState([0, 1, 2, 3, 4, 5])
    const divRef = useRef<HTMLDivElement>(null)

    const handleArrowRight = () => {
        activeProjects.map((element, index) => {
            const arr = activeProjects
            arr[index] = element + 1
            setActiveProjects(arr)
        })
    }

    useEffect(() => {
        divRef.current?.focus();
        console.log('updated')
    }, [activeProjects])

    return (
        <div  className="bg-white bg-opacity-30 absolute md:bottom-6 md:left-12 bottom-4 right-6 md:w-[70%] w-[85%] h-32 rounded-md flex flex-row flex-grow-0 items-center p-2 gap-2 overflow-hidden">
            {
                projectsData.map(({ id, name, thumb }: ProjectsProps) => (
                    activeProjects.includes(id) ?
                    <div ref={divRef}>
                       <CarrouselSliderCard key={id} text={name}/> 
                    </div>
                    : null
                ))
            }
            <CaretRight weight="bold" size={26} className="absolute right-0 cursor-pointer bg-black bg-opacity-60 h-28 opacity-80 md:hover:opacity-100 " onClick={handleArrowRight}/>
        </div>
    )
    
}