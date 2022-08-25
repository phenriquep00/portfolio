import { CarrouselSliderCard } from "./CarrouselSliderCard";
import { projectsData, ProjectsProps } from "../../data";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';


export function CarrouselSlider() {

    const [width, setWidth] = useState(0);
    const [activeId, setActiveId] = useState(0)

    const carrousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carrousel.current?.scrollWidth != undefined && carrousel.current?.offsetWidth != undefined) {
            setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth)
        }
    }, [])

    return (
        <motion.div ref={carrousel} className="bg-white bg-opacity-30 absolute md:bottom-6 md:left-12 bottom-4 right-6 md:w-[75%] w-[85%] h-32 rounded-md flex flex-row flex-grow-0 items-center overflow-hidden">
            <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className="flex gap-3 px-2">
                {
                    projectsData.map(({ id, name, thumb }: ProjectsProps) => (

                        id === activeId
                            ?
                            <CarrouselSliderCard key={id} text={name} active={true} />
                            :
                            <CarrouselSliderCard key={id} text={name} active={false} />
                    ))
                }
            </motion.div>
        </motion.div>
    )

}