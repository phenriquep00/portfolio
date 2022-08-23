import { CaretRight } from "phosphor-react";
import { CarrouselSliderCard } from "./CarrouselSliderCard";
import { projectsData, ProjectsProps } from "../../data";

export function CarrouselSlider() {
    // TODO: make the slider slide when CaretRight is clicked
    return (
        <div className="bg-white bg-opacity-30 absolute md:bottom-6 md:left-12 bottom-4 right-2 md:w-[70%] w-[85%] h-32 rounded-md flex flex-row flex-grow-0 items-center p-2 gap-2 overflow-hidden">
            {
                projectsData.map(({ id, name, thumb }: ProjectsProps) => (
                    <CarrouselSliderCard key={id} />
                ))
            }
            <CaretRight weight="bold" size={26} className="absolute right-0 cursor-pointer bg-black bg-opacity-60 h-28 opacity-80 hover:opacity-100" />
        </div>
    )
}