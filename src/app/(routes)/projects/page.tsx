// 'use client'
// import React from 'react';
// import { motion } from "framer-motion"
// const projects = [
//     {
//         title: 'Task Management System',
//         description: 'A full-stack web application for organizing, creating, and tracking tasks efficiently. Users can add, update, delete, and mark tasks as completed. Features include user authentication, and task categorization. Built using Next.js for the frontend, MongoDB for the database, and integrated APIs for CRUD operations, this project strengthened my skills in full-stack development, state management, and clean component design.',
//         liveLink: 'https://taskpro1.vercel.app/',
//         githubLink: 'https://github.com/kartikeycsjm/task-manager',
//         tools: ['Next.js', 'MongoDB', 'TailwindCSS', 'REST API', 'Authentication'],
//     }
//     ,
//     {
//         title: 'Plant Disease Detection Web App',
//         description: 'An intelligent web application that allows users to upload images of plant leaves and instantly detect diseases using a trained deep learning model based on MobileNet and transfer learning techniques. Built with TensorFlow.js and Next.js, this project gave me exposure to machine learning workflows, model deployment, and handling heavy client-side computations in browsers.',
//         liveLink: 'https://greenguardiank.vercel.app/',
//         githubLink: 'https://greenguardiank.vercel.app/',
//         tools: ['TensorFlow.js', 'TensorFlow', 'Next.js'],
//     },
//     {
//         title: 'PortfolioGen',
//         description: 'A fully functional no-code portfolio generator that allows users to input their personal and professional information, preview it live, and deploy a customized portfolio website instantly. Built with a strong Next.js frontend and MongoDB backend, this tool showcases skills in dynamic form generation, data handling, and clean UI design with TailwindCSS.',
//         liveLink: 'https://getyourprofile.vercel.app/',
//         githubLink: 'https://github.com/kartikeycsjm/PortfolioGen',
//         tools: ['Next.js', 'MongoDB', 'NodeMailer', 'TailwindCSS', 'REST API'],
//     },
//     {
//         title: 'Form Builder',
//         description: 'A no-code form creation tool where users can design and deploy custom forms without any programming knowledge. Upon form submission, responses are instantly delivered via email using NodeMailer. Built using Next.js and MongoDB, this project challenged me to work with dynamic form rendering, email automation, and backend API integration.',
//         liveLink: 'https://realformgenerator.vercel.app/',
//         githubLink: 'https://github.com/kartikeycsjm/form-generator',
//         tools: ['Next.js', 'MongoDB', 'NodeMailer', 'TailwindCSS', 'REST API'],
//     },
//     {
//         title: 'Diary Application',
//         description: 'A simple and clean diary application where users can write, save, and manage their daily journal entries. Built with Next.js and TailwindCSS, it focuses on minimalist design, fast performance, and a seamless writing experience. It was a practice project to strengthen my Next.js fundamentals, client-side storage, and UI styling with TailwindCSS.',
//         liveLink: 'https://diary1.vercel.app/',
//         githubLink: 'https://github.com/kartikeycsjm/diary',
//         tools: ['Next.js', 'TailwindCSS'],
//     },
//     {
//         title: 'Kishore Da Radio',
//         description: 'A nostalgic music player project built using pure HTML, CSS, and JavaScript. It features a curated playlist of 19 evergreen songs sung by Kishore Kumar, with basic controls like play, pause, and next/previous. This project helped me strengthen my core JavaScript DOM manipulation and audio handling skills.',
//         liveLink: 'https://kishoreda.netlify.app/',
//         githubLink: 'https://github.com/myselfkartikey/kishoreda-radio',
//         tools: ['HTML', 'CSS', 'JavaScript'],
//     },
// ];


// export default function ProjectsPage() {
//     return (
//         <div className="min-h-screen w-full 
//         bg-[#1f262d] py-12">
//             <div className="w-[85%] md:w-[90%] m-auto">
//                 <h1 className="text-4xl font-bold 
//                   text-white my-8">
//                     My Projects
//                 </h1>
//                 <div
//                     className="grid grid-cols-1 sm:grid-cols-2 
//                     lg:grid-cols-2 gap-8">
//                     {projects.map((project, index) => (
//                         <div
//                             key={index} className="bg-[#1a2238] rounded-2xl 
//                             p-6 
//                             shadow-xl hover:scale-105 transition-transform
//                             duration-300">
//                             <motion.h2
//                                 initial={{ opacity: 0 }}
//                                 whileInView={{ opacity: 1 }}
//                                 transition={{ duration: 0.5 }}
//                                 viewport={{ once: false }}
//                                 className="text-2xl font-semibold text-white mb-4">{project.title}</motion.h2>
//                             <motion.p
//                                 initial={{ opacity: 0, y: 100 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5 }}
//                                 viewport={{ once: false }}
//                                 className="text-gray-300 mb-6">{project.description}</motion.p>
//                             <div className="flex gap-4">
//                                 <motion.a
//                                     initial={{ opacity: 0, y: 100 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5 }}
//                                     viewport={{ once: false }}
//                                     href={project.liveLink}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-blue-400 hover:underline"
//                                 >
//                                     Live Demo
//                                 </motion.a>
//                                 <motion.a
//                                     initial={{ opacity: 0, y: 100 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5 }}
//                                     viewport={{ once: false }}
//                                     href={project.githubLink}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-gray-400 hover:text-white"
//                                 >
//                                     GitHub
//                                 </motion.a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }


'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
    {
        title: 'Task Management System',
        description: 'A full-stack web application for organizing, creating, and tracking tasks efficiently.Users can add, update, delete, and mark tasks as completed.Features include user authentication, and task categorization.Built using Next.js for the frontend, MongoDB for the database, and integrated APIs for CRUD operations, this project strengthened my skills in full- stack development, state management, and clean component design.',
        liveLink: 'https://taskpro1.vercel.app/',
        githubLink: 'https://github.com/kartikeycsjm/task-manager',
        tools: ['Next.js', 'MongoDB', 'TailwindCSS', 'REST API', 'NextAuth', 'NodeMailer'],
    }
    ,
    {
        title: 'Plant Disease Detection Web App',
        description: 'An intelligent web application that allows users to upload images of plant leaves and instantly detect diseases using a trained deep learning model based on MobileNet and transfer learning techniques. Built with TensorFlow.js and Next.js, this project gave me exposure to machine learning workflows, model deployment, and handling heavy client-side computations in browsers.',
        liveLink: 'https://greenguardiank.vercel.app/',
        githubLink: 'https://greenguardiank.vercel.app/',
        tools: ['TensorFlow.js', 'TensorFlow', 'Next.js'],
    },
    {
        title: 'PortfolioGen',
        description: 'A fully functional no-code portfolio generator that allows users to input their personal and professional information, preview it live, and deploy a customized portfolio website instantly. Built with a strong Next.js frontend and MongoDB backend, this tool showcases skills in dynamic form generation, data handling, and clean UI design with TailwindCSS.',
        liveLink: 'https://getyourprofile.vercel.app/',
        githubLink: 'https://github.com/kartikeycsjm/PortfolioGen',
        tools: ['Next.js', 'MongoDB', 'NextAuth', 'NodeMailer', 'TailwindCSS', 'REST API'],
    },
    {
        title: 'Form Builder',
        description: 'A no-code form creation tool where users can design and deploy custom forms without any programming knowledge. Upon form submission, responses are instantly delivered via email using NodeMailer. Built using Next.js and MongoDB, this project challenged me to work with dynamic form rendering, email automation, and backend API integration.',
        liveLink: 'https://realformgenerator.vercel.app/',
        githubLink: 'https://github.com/kartikeycsjm/form-generator',
        tools: ['Next.js', 'MongoDB', 'NodeMailer', 'TailwindCSS', 'REST API'],
    },
    {
        title: 'Diary Application',
        description: 'A simple and clean diary application where users can write, save, and manage their daily journal entries. Built with Next.js and TailwindCSS, it focuses on minimalist design, fast performance, and a seamless writing experience. It was a practice project to strengthen my Next.js fundamentals, client-side storage, and UI styling with TailwindCSS.',
        liveLink: 'https://diary1.vercel.app/',
        githubLink: 'https://github.com/kartikeycsjm/diary',
        tools: ['Next.js', 'TailwindCSS'],
    },
    {
        title: 'Kishore Da Radio',
        description: 'A nostalgic music player project built using pure HTML, CSS, and JavaScript. It features a curated playlist of 19 evergreen songs sung by Kishore Kumar, with basic controls like play, pause, and next/previous. This project helped me strengthen my core JavaScript DOM manipulation and audio handling skills.',
        liveLink: 'https://kishoreda.netlify.app/',
        githubLink: 'https://github.com/myselfkartikey/kishoreda-radio',
        tools: ['HTML', 'CSS', 'JavaScript'],
    },
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen w-full bg-[#0f172a] py-12">
            <div className="w-[90%] mx-auto">
                <h1 className="text-4xl font-bold text-white my-10 md:my-16">
                    My Projects
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: false }}
                            className="bg-[#1e293b] 
                            hover:bg-[#334155] transition-colors duration-300 rounded-2xl p-6 shadow-lg group border border-[#334155]"
                        >
                            <h2 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                {project.title}
                            </h2>
                            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tools.map((tool, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-cyan-700 text-xs text-white px-3 py-1 rounded-full font-semibold"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center mt-6">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 text-sm font-medium hover:underline flex items-center gap-1"
                                >
                                    Live Demo <FaExternalLinkAlt size={12} />
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 text-sm hover:text-white flex items-center gap-1"
                                >
                                    GitHub <FaGithub />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
