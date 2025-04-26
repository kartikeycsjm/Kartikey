'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {

    return (
        <div id='about' className='w-full m-auto mt-5 min-h-[85vh] 
            flex flex-col md:flex-row 
            md:justify-center md:items-center
            md:min-h-[70vh]
            '>
            <section className="
            w-[85%] text-white mx-[7.5%] my-5
            md:mx-20 md:h-[400px]">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className="text-3xl font-bold mb-4">
                    About Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className="text-base leading-relaxed 
                    md:text-xl text-justify">
                    Hey! I’m Kartikey — I bring ideas to life on
                    the web and love sharing what I learn along
                    the way. Whether it’s crafting an app or
                    explaining a tough concept, I enjoy making
                    things that help and inspire others.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className="text-base leading-relaxed mt-2
                    md:text-xl text-justify">
                    Outside the screen, you’ll find me on a
                    cricket field, vibing to music, or deep in
                    conversation about random ideas. I care about
                    building cool things, growing every day,
                    and helping others do the same — as a developer,
                    a mentor, and a lifelong learner.
                </motion.p>
            </section>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className='w-[85%] mx-[7.5%] my-5 
                md:w-[50%]
                md:m-20'
            >
                <div className="relative w-[300px] h-[300px]
                md:w-[400px] md:h-[400px]"> {/* Set your desired size */}
                    <Image
                        className='rounded-xl'
                        src='/dp.jpg'
                        alt='dp'
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
            </motion.div>
        </div >
    )
}


export default About