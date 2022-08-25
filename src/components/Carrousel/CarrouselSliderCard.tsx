import { useEffect, useRef, useState } from "react";

interface CarrouselSliderCardProps {
    text: string;
    active: boolean;
}

export function CarrouselSliderCard({ text, active }: CarrouselSliderCardProps) {

    const [isActive, setIsActive] = useState(active)

    return (
        <div
            className={
                `
                bg-gray-700 w-40 h-28 flex items-center justify-center rounded-md flex-shrink-0 cursor-pointer 
                ${isActive ? 'ring-2 ring-orange-400' : 'hover:ring-4'} ring-offset-1
                `
            }
        >
            {text}
        </div>
    )
}