'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div
            id="about"
            className="w-full mx-auto mt-5 min-h-[85vh] 
      flex flex-col md:flex-row 
      md:justify-center md:items-center
      md:min-h-[70vh]
      px-4 sm:px-6 lg:px-8"
        >
            <section
                className="w-full sm:w-[90%] md:w-[45%] 
        text-white my-5
        flex flex-col p-4"
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className="text-2xl md:text-3xl font-bold mb-4"
                >
                    About Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className="text-base md:text-lg leading-relaxed text-justify font-extralight"
                >
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
                    className="text-base md:text-lg leading-relaxed mt-4 text-justify font-extralight"
                >
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
                className="w-full sm:w-[90%] md:w-[45%] 
        my-5 flex justify-center rounded-md p-4"
            >
                <div className="relative w-[250px] h-[250px] 
        sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] 
        lg:w-[400px] lg:h-[400px]">
                    <Image
                        className="rounded-md object-cover"
                        src="/dp.jpg"
                        alt="dp"
                        fill
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default About
