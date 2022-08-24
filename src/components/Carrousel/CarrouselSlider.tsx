import { CaretRight } from "phosphor-react";
import { CarrouselSliderCard } from "./CarrouselSliderCard";
import { projectsData, ProjectsProps } from "../../data";
import { useState } from "react";


export function CarrouselSlider() {


    const handleArrowRight = () => {
        
    }

    return (
        <div className="bg-white bg-opacity-30 absolute md:bottom-6 md:left-12 bottom-4 right-6 md:w-[70%] w-[85%] h-32 rounded-md flex flex-row flex-grow-0 items-center p-2 gap-2 overflow-hidden">
            {
                projectsData.map(({ id, name, thumb }: ProjectsProps) => (
                    
                    <CarrouselSliderCard key={id} text={name}/>
                    
                ))
            }
            <CaretRight weight="bold" size={26} className="absolute right-0 cursor-pointer bg-black bg-opacity-60 h-28 opacity-80 md:hover:opacity-100 " onClick={handleArrowRight}/>
        </div>
    )
}