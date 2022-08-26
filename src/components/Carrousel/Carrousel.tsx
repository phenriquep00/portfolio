import { SetStateAction, useEffect, useState } from "react";
import { CarrouselDescription } from "./CarrouselDescription";
import { CarrouselImage } from "./CarrouselImage";
import { CarrouselSlider } from "./CarrouselSlider";
import { projectsData, ProjectsProps } from "../../data";

// TODO: Change the color of the background based on the main color of the image

export function Carrousel() {

    const [activeProject, setActiveProject] = useState(projectsData[0])
    const [activeId, setActiveId] = useState(activeProject.id)

    const updateActive = (a: SetStateAction<number>) => {
        setActiveId(a)
    }

    useEffect(() => {
        projectsData.map((project) => {
            if (project.id == activeId) {
                setActiveProject(project)
            }
        })
        
    }, [activeId])

    return (
        <div className="text-white w-full h-full flex flex-col items-center justify-center">
            <div className="flex md:flex-row flex-col gap-2">
                <CarrouselDescription ></CarrouselDescription>
                <CarrouselImage image={activeProject.img} />
            </div>
            <CarrouselSlider updateActive={updateActive} data={projectsData} act={activeId}></CarrouselSlider>
        </div>
    )
}