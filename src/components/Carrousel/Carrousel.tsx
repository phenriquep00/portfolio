import { CarrouselDescription } from "./CarrouselDescription";
import { CarrouselImage } from "./CarrouselImage";
import { CarrouselSlider } from "./CarrouselSlider";

export function Carrousel() {
    return (
        <div className="text-white w-full h-full flex flex-col items-center justify-center">
            <div className="flex md:flex-row flex-col gap-2">
                <CarrouselDescription></CarrouselDescription>
                <CarrouselImage/>
            </div>
            <CarrouselSlider></CarrouselSlider>
        </div>
    )
}