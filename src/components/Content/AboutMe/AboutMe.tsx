import { motion } from "framer-motion";
import { Button } from "../../Button/Button";

interface AboutMeProps {
    updateActiveContent: any;
}

export function AboutMe({ updateActiveContent }: AboutMeProps) {

    const updateCurrent = (
        e: React.MouseEvent<HTMLInputElement>
    ) => {
        updateActiveContent(e.currentTarget.innerText)
    }

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            className="text-primary transition-colors duration-700"
        >

            <div className="flex flex-col gap-4 py-6 mx-3 md:ml-0">
                <h1 className="md:text-8xl font-medium text-4xl">Hi there!</h1>
                <div className="text-secondary gap-1 flex flex-col">
                    <h2 className="md:text-6xl font-normal text-2xl">I'm Pedro Henrique</h2>
                    <h3 className="md:text-3xl text-xl">Software Student and Technology enthusiast</h3>
                </div>

            </div>

            <div className="flex flex-row gap-3 md:w-80 md:h-16 px-3 md:px-0">
                <Button type={"p"} onClick={updateCurrent}>Projects</Button>
                <Button type={"s"} onClick={updateCurrent}>Contacts</Button>
            </div>
        </motion.div>
    )
}