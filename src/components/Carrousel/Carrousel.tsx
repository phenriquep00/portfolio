import { CarrouselDescription } from "./CarrouselDescription";
import { CarrouselImage } from "./CarrouselImage";
import { CarrouselSlider } from "./CarrouselSlider";

// TODO: Change the color of the background based on the main color of the image

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