import { CarrouselSliderCard } from "./CarrouselSliderCard";
import {  ProjectsProps } from "../../data";

import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

interface CarrouselSliderProps {
    data: Array<ProjectsProps>;
    updateActive: any;
}

export function CarrouselSlider({ updateActive, data }: CarrouselSliderProps) {

    const [width, setWidth] = useState(0);
    const carrousel = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        if (carrousel.current?.scrollWidth != undefined && carrousel.current?.offsetWidth != undefined) {
            setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth)
        }
    }, [])

    useEffect(() => {

    }, [])

    return (
        <motion.div ref={carrousel} className="bg-white bg-opacity-30 absolute md:bottom-6 md:left-12 bottom-4 right-6 md:w-[75%] w-[85%] h-32 rounded-md flex flex-row flex-grow-0 items-center overflow-hidden">
            <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className="flex gap-3 px-2">
                {
                    data.map(({ id, name }) => (
                            <CarrouselSliderCard key={id} text={name} />
                    ))
                }
            </motion.div>
        </motion.div>
    )

}