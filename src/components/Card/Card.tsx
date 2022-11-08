import { motion } from 'framer-motion';
import { Link, X } from 'phosphor-react';
import { PropsWithChildren, ReactElement, useState } from 'react';

type CardProps = PropsWithChildren<{
    title: ReactElement<HTMLParagraphElement>;
}>

/* TODO:
    find a way to make it more acessible to smaller screens
    
*/
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
            className='bg-white p-6 cursor-pointer'
            onClick={() => { setIsOpen(!isOpen) }}
            style={{ borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0,0.5)' }}
        >
            <motion.h2 layout="position" className='flex items-center justify-between  flex-row'>
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
                    className='pt-4 leading-[150%] md:w-[24rem] w-[6rem] underline text-lg flex '
                >
                    <Link size={18} />
                    {children}
                </motion.div>
            }

        </motion.div>
    )
}