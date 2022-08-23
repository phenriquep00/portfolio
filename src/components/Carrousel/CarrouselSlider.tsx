import { CaretRight } from "phosphor-react";
import { CarrouselSliderCard } from "./CarrouselSliderCard";
import { projectsData, ProjectsProps } from "../../data";

export function CarrouselSlider() {
    return (
        <div className="bg-white bg-opacity-30 absolute md:bottom-6 md:left-12 bottom-4 right-2 md:w-[70%] w-[85%] h-32 rounded-md flex flex-row items-center p-2 gap-2">
            {
                projectsData.map(({ id, name, thumb }: ProjectsProps) => (
                    <CarrouselSliderCard key={id} />
                ))
            }
            <CaretRight weight="bold" size={26} className="absolute right-1 cursor-pointer" />
        </div>
    )
}