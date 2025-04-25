'use client'
import React from 'react';
import { motion } from "framer-motion"
const Header = () => {
    return (
        <div className="w-full h-screen relative
        flex items-center 
        justify-center">
            <video
                src="/myvid.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover
                absolute top-0 left-0 z-0"
            />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className='text-white absolute'>
                <h1
                    className="mb-3 
                    text-6xl font-bold 
                    tracking-tighter sm:text-7xl 
                    lg:text-8xl text-center"
                >
                    Kartikey Mishra
                </h1>
                <p
                    className="max-w-[600px] 
                    text-lg text-gray-200 
                    sm:text-xl text-center"
                >
                    Engineer by degree,
                    creator by nature,
                    passionate teacher,
                    and sports lover at heart.
                </p>
            </motion.div>
        </div>
    );
};
export default Header;
