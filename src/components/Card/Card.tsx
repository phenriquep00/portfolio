import { motion } from 'framer-motion';
import { X } from 'phosphor-react';
import { PropsWithChildren, useState } from 'react';

type CardProps = PropsWithChildren<{
    title: string;
}>


export function Card({ title, children }: CardProps) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            transition={{
                layout: {
                    duration: 1,
                    type: 'spring'
                }
            }}
            className='bg-white p-6'
            onClick={() => { setIsOpen(!isOpen) }}
            style={{ borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0,0.5)' }}
        >
            <motion.h2 layout="position" className='flex items-center justify-between cursor-pointer'>
                {title}
                {
                    isOpen &&
                    <div className='rounded-full border-2 p-1 border-gray-400 text-gray-400 cursor-pointer'>
                        <X weight='bold'/>
                    </div>
                    
                }
            </motion.h2>

            {
                isOpen &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .7 }}
                    className='pt-4 leading-[150%] w-[30rem]'
                >
                    {children}
                </motion.div>
            }

        </motion.div>
    )
}