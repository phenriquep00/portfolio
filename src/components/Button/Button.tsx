import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

type ButtonProps = PropsWithChildren<{
    type: string;
    onClick: any;
}>

export function Button({ children, type, onClick }: ButtonProps) {
    return (
        <motion.div
            onClick={onClick}
            whileHover={{scale: 1.1}}
            className={
                type.startsWith("p")
                    ? // primary button style
                    'flex flex-1 flex-row items-center justify-center bg-buttonPrimary text-white font-semibold p-2 rounded-md w-auto h-auto hover:cursor-pointer ring-primary hover:bg-buttonSecondary hover:ring-4 ring-offset-1 transition-colors duration-200'
                    :
                    type.startsWith("s")
                        ? // secondary button style
                        'flex flex-1 flex-row items-center justify-center border-2 border-primary text-highlightedPrimary font-bold p-[6px] rounded-md w-auto h-auto hover:cursor-pointer hover:border-secondary transition-colors duration-200 hover:bg-buttonSecondary hover:text-white'
                        :
                        type.startsWith("t")
                            ? // tertiary button style
                            'flex flex-1 flex-row items-center justify-center text-highlightedPrimary font-semibold p-2 w-auto h-auto hover:cursor-pointer hover:opacity-70 transition-colors duration-200'
                            :
                            ''
            }
        >
            {children}
        </motion.div>
    )
}