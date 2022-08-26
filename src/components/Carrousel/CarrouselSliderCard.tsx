import { motion } from "framer-motion";


interface CarrouselSliderCardProps {
    text: number;
    onClick: any;
}

export function CarrouselSliderCard({ text, onClick }: CarrouselSliderCardProps) {

    return (
        <motion.div
            whileHover={{scale:1.1}}
            onClick={onClick}
            className="bg-gray-700 w-40 h-28 flex items-center justify-center rounded-md flex-shrink-0 cursor-pointer ring-violet-600 hover:ring-4 ring-offset-1"
        >
            {text}
        </motion.div>
    )
}