import { CarrouselSliderCard } from "./CarrouselSliderCard";

export function CarrouselSlider() {
    return (
        <div className="bg-white bg-opacity-40 absolute md:bottom-6 md:left-12 bottom-4 right-2 md:w-[70%] w-[85%] h-32 rounded-md flex flex-row items-center p-2 gap-2">
            <CarrouselSliderCard />
            <CarrouselSliderCard />
            <CarrouselSliderCard />
            <CarrouselSliderCard />
            <CarrouselSliderCard />
            <CarrouselSliderCard />
        </div>
    )
}