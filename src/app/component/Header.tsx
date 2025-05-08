// 'use client'
// import React from 'react';
// import Link from 'next/link';
// import { motion } from "framer-motion"
// // import AnimatedHeader from './Animated'
// import {
//     FaExternalLinkAlt,
//     FaGithub,
//     FaInstagram,
//     FaTwitterSquare,
// } from 'react-icons/fa'
// import { FaXTwitter } from "react-icons/fa6";
// const Header = () => {
//     return (
//         <div className="w-full h-screen 
//         relative
//         flex items-center 
//         justify-center bg-[#1a2238] 
//         rounded-b-[50px] shadow-2xl
//         ">
//             {
//             /* <video
//                 src="/myvid.mp4"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-full object-cover
//                 absolute top-0 left-0 z-0"
//             /> */}
//             {/* <AnimatedHeader/> */}
//             <motion.div
//                 initial={{ opacity: 0, y: 100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: false }}
//                 className='text-white absolute'>
//                 <h1
//                     className="mb-3 
//                     text-4xl font-bold 
//                     tracking-tighter sm:text-7xl 
//                     lg:text-8xl text-center"
//                 >
//                     Kartikey Mishra
//                 </h1>
//                 <p
//                     className="max-w-[600px] 
//                     text-lg text-[white] 
//                     md:text-xl text-center font-extralight
//                     px-3"
//                 >
//                     Engineer by degree,
//                     creator by nature,
//                     passionate teacher,
//                     and sports lover at heart.
//                 </p>
//                 <div className='w-full mt-5
//                 flex items-center justify-center flex-col gap-5'>
//                     <Link href={'./#about'}
//                         className='bg-[#14b8a6]
//                       hover:bg-[#0d9488]
//                         block text-center text-white
//                         text-[18px] w-[50%] p-2 md:w-[200px]
//                         rounded-lg duration-300 shadow-2xl'>
//                         About Me
//                     </Link>
//                     <FaExternalLinkAlt />
//                     <FaXTwitter/>

//                 </div>
//             </motion.div>
//         </div>
//     );
// };
// export default Header;


'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import {
    FaExternalLinkAlt,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
    return (
        <div className="w-full h-screen 
        relative
        flex items-center 
        justify-center bg-[#1a2238] 
        rounded-b-[50px] shadow-2xl
        ">
            {/* Optional video background */}
            {/* <video
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
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className='text-white absolute text-center'
            >
                <h1 className="mb-3 text-4xl font-bold tracking-tighter sm:text-7xl lg:text-8xl">
                    Kartikey Mishra
                </h1>

                <p className="max-w-[600px] text-lg md:text-xl font-extralight 
                px-3 mx-auto">
                    Engineer by degree, creator by nature, passionate teacher, and sports lover at heart.
                </p>

                <div className='w-full mt-5 flex items-center justify-center flex-col gap-5'>
                    <Link href={'./#about'}
                        className='bg-[#14b8a6] hover:bg-[#0d9488]
                        text-white text-[18px] w-[50%] p-2 md:w-[200px]
                        rounded-lg duration-300 shadow-2xl'>
                        About Me
                    </Link>

                    {/* Social Icons */}
                    <div className="flex gap-6 justify-center mt-2 text-2xl">
                        <a href="https://github.com/kartikeycsjm"
                            target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://x.com/myself_kartik_"
                            target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </a>
                        <a href="https://www.instagram.com/myselfkartikey"
                            target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/myselfkartikey"
                            target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://taskpro1.vercel.app/"
                            target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Header;
