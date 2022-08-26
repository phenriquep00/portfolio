import { SetStateAction, useState } from "react";
import { CarrouselDescription } from "./CarrouselDescription";
import { CarrouselImage } from "./CarrouselImage";
import { CarrouselSlider } from "./CarrouselSlider";
import { projectsData, ProjectsProps } from "../../data";

// TODO: Change the color of the background based on the main color of the image

export function Carrousel() {

    const [ activeProject, setActiveProject ] = useState(projectsData[0])
    const [ image, setImage ] = useState(activeProject.img)

    const updateActive = (a: SetStateAction<ProjectsProps>) => {
        setActiveProject(a)
    }

    return (
        <div className="text-white w-full h-full flex flex-col items-center justify-center">
            <div className="flex md:flex-row flex-col gap-2">
                <CarrouselDescription></CarrouselDescription>
                <CarrouselImage image={image}/>
            </div>
            <CarrouselSlider updateActive={updateActive} data={projectsData}></CarrouselSlider>
        </div>
    )
}