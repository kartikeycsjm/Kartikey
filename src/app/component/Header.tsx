'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion"
const Header = () => {
    return (
        <div className="w-full h-screen relative
        flex items-center 
        justify-center bg-[rgb(2,5,48)] rounded-b-[50px]
        ">
            {
            /* <video
                src="/myvid.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover
                absolute top-0 left-0 z-0"
            /> */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className='text-white absolute'>
                <h1
                    className="mb-3 
                    text-3xl font-bold 
                    tracking-tighter sm:text-7xl 
                    lg:text-8xl text-center"
                >
                    Kartikey Mishra
                </h1>
                <p
                    className="max-w-[600px] 
                    text-lg text-[rgb(100,86,156)] 
                    sm:text-xl text-center"
                >
                    Engineer by degree,
                    creator by nature,
                    passionate teacher,
                    and sports lover at heart.
                </p>
                <div className='w-full mt-5
                flex items-center justify-center'>
                    <Link href={'./#about'}
                        className='text-center 
                        px-7 py-2 rounded-md
                        bg-[rgb(98,85,154)]
                        hover:bg-[rgb(78,65,134)]
                        duration-300'>
                        About Me
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};
export default Header;
