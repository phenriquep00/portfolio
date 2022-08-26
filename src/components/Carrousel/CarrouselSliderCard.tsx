

interface CarrouselSliderCardProps {
    text: string;
}

export function CarrouselSliderCard({ text }: CarrouselSliderCardProps) {
    
    return (
        <div
            className="bg-gray-700 w-40 h-28 flex items-center justify-center rounded-md flex-shrink-0 cursor-pointer hover:ring-4 ring-offset-1"
        >
            {text}
        </div>
    )
}