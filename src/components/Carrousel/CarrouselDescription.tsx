interface CarrouselDescriptionProps {
    description: string;
}

export function CarrouselDescription({ description }: CarrouselDescriptionProps) {
    return (
        <div className="bg-black">
            {description}
        </div>
    )
}