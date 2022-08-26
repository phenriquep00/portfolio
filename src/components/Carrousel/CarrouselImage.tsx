interface CarrouselImageProps {
    image: string;
}


export function CarrouselImage({ image }: CarrouselImageProps) {
    return (
        <div className="bg-black flex flex-col gap-2">
            <img src='' alt="project img" />
            {image}
        </div>
    )
}