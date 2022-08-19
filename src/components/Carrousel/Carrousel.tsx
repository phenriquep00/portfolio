import { CarrouselDescription } from "./CarrouselDescription";
import { CarrouselImage } from "./CarrouselImage";
import { CarrouselSlider } from "./CarrouselSlider";

export function Carrousel() {
    return (
        <div className="flex flex-col flex-1 items-center">
            <div className="flex flex-row justify-around w-screen">
                <CarrouselDescription></CarrouselDescription>
                <CarrouselImage/>
            </div>
            <CarrouselSlider></CarrouselSlider>
        </div>
    )
}