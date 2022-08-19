import { CarrouselDescription } from "./CarrouselDescription";
import { CarrouselImage } from "./CarrouselImage";

export function Carrousel() {
    return (
        <div>
            <div>
                <CarrouselDescription></CarrouselDescription>
                <CarrouselImage/>
            </div>
            <CarrouselSlider></CarrouselSlider>
        </div>
    )
}