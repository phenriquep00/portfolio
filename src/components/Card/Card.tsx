import { motion } from 'framer-motion';
import { useState } from 'react';


export function Card() {

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
            <motion.h2 layout="position">
                Title
            </motion.h2>

            {
                isOpen &&
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                    className='pt-4 leading-[150%] w-[30rem]'
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugit modi sed perspiciatis deleniti laborum rerum quis. Assumenda, tempore praesentium! Nulla magnam at mollitia expedita. Quibusdam sequi temporibus voluptas praesentium.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sequi alias officiis a sunt eius eos! Impedit nobis aut sequi sit praesentium amet fuga, blanditiis iste, incidunt, ut quo doloribus.</p>
                </motion.div>
            }

        </motion.div>
    )
}