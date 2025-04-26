'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
const Navigation = () => {
    return (
        <div className='fixed top-0 z-50
        w-full flex items-center justify-center
        text-white'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='font-light text-[12px]
            text-sm bg-[#2a3439]
            flex gap-3 md:gap-16 p-2 mt-2
            rounded-[100px] md:text-xl w-[85%]
            md:w-[700px]
            items-center justify-between backdrop-blur-xs'>
                <Link href={'/'}
                    className='w-[40px] h-[40px]
                    rounded-full md:w-[60px] md:h-[60px]
                    flex items-center justify-center
                    bg-[#000625] overflow-hidden
                    duration-300 border border-[#000625]
                    hover:border hover:border-green-400'>
                    <Image src={'/logo.png'}
                        width={70} height={70} alt='logo'>
                    </Image>
                </Link>
                <Link href={'https://kartikeymishra1.vercel.app/insights'}
                    className='hover:text-green-400
                duration-300 '>
                    Insights
                </Link>
                <Link href={'https://kartikeymishra1.vercel.app/projects'}
                    className='hover:text-green-400
                duration-300'>
                    Projects
                </Link>
                <Link
                    className='bg-[rgb(98,85,154)] px-3 py-1 
                    rounded-full
                  hover:text-green-400
                  hover:bg-[rgb(78,65,134)]
                    duration-300'
                    href={'https://kartikeymishra1.vercel.app/contact'}>
                    Get in touch
                </Link>
            </motion.div>
        </div>
    )
}

export default Navigation