
'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const LifeUpdate = () => {
  return (
    <div className='w-full my-5 md:my-10 min-h-screen 
            flex flex-col
            md:justify-center md:items-center
            md:min-h-[70vh]
            '>
      <section className="
            w-[85%] md:w-[90%] m-auto text-white
            md:h-[300px] md:m-20
            md:justify-center md:items-center
            my-5">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-2xl font-bold mb-4
          md:text-3xl">
          What's Going on in My Life
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-base leading-relaxed 
                    md:text-xl font-extralight text-justify">
          Lately, I've been diving deep into machine learning, especially working with TensorFlow.js
          for building web apps that help detect plant diseases. It's been a challenging yet
          rewarding experience, as I apply my web development skills to something more data-driven.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-base font-extralight leading-relaxed mt-2
                    md:text-xl text-justify">
          On a personal note, I’m also focusing on a major project for my college, which involves
          building a web app that helps with environmental conservation. It’s not just about coding,
          but also about making a real-world impact.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-base leading-relaxed mt-2
                    md:text-xl text-justify font-extralight">
          When I’m not coding, I’m usually either playing cricket, vibing to music, or just reflecting
          on my personal growth and the challenges ahead. I try to balance my time between learning
          new things and having fun along the way!
        </motion.p>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className='w-[85%] md:w-[80%]
                md:m-20
                mx-[7.5%] my-5
                flex items-center justify-center'
      >
        <div className="relative w-[400px] h-[250px]
          md:w-[1000px] md:h-[700px]">
          <Image
            className='rounded-sm'
            src='/c.jpg'
            alt='life update'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </motion.div>
    </div>
  )
}

export default LifeUpdate
