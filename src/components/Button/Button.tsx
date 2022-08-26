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
                    'flex flex-1 flex-row items-center justify-center bg-gradient-to-b from-emerald-600 to-emerald-300 text-white font-semibold p-2 rounded-md w-auto h-auto hover:cursor-pointer ring-emerald-700 hover:bg-emerald-400 hover:ring-2 ring-offset-1 transition-colors duration-200'
                    :
                    type.startsWith("s")
                        ? // secondary button style
                        'flex flex-1 flex-row items-center justify-center border-2 border-emerald-400 text-emerald-400 font-bold p-[6px] rounded-md w-auto h-auto hover:cursor-pointer hover:border-emerald-200 hover:text-emerald-200 transition-colors duration-200'
                        :
                        type.startsWith("t")
                            ? // tertiary button style
                            'flex flex-1 flex-row items-center justify-center text-emerald-400 font-semibold p-2 w-auto h-auto hover:cursor-pointer hover:text-emerald-600 transition-colors duration-200'
                            :
                            ''
            }
        >
            {children}
        </motion.div>
    )
}