import { SetStateAction, useEffect, useState } from "react";
import { CarrouselDescription } from "./CarrouselDescription";
import { CarrouselImage } from "./CarrouselImage";
import { CarrouselSlider } from "./CarrouselSlider";
import { projectsData, ProjectsProps } from "../../data";
import { motion } from "framer-motion";

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

            <motion.div
                key={activeId}
                initial={{ opacity: 0, }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1
                }}
                className="flex md:flex-row flex-col gap-2"
            >
                <CarrouselDescription description={activeProject.description}></CarrouselDescription>
                <CarrouselImage image={activeProject.img} />
            </motion.div>

            <CarrouselSlider updateActive={updateActive} data={projectsData} act={activeId}></CarrouselSlider>
        </div>
    )
}