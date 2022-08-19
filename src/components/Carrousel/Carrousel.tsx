import { CarrouselDescription } from "./CarrouselDescription";

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