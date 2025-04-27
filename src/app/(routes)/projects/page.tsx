'use client'
import React from 'react';
import { motion } from "framer-motion"
const projects = [
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
        tools: ['Next.js', 'MongoDB', 'NodeMailer', 'TailwindCSS', 'REST API'],
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
        <div className="min-h-screen w-full 
        bg-[#1f262d] py-12">
            <div className="w-[85%] md:w-[90%] m-auto">
                <h1 className="text-4xl font-bold 
                  text-white my-8">
                    My Projects
                </h1>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 
                    lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index} className="bg-[#1a2238] rounded-2xl 
                            p-6 
                            shadow-xl hover:scale-105 transition-transform
                            duration-300">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false }}
                                className="text-2xl font-semibold text-white mb-4">{project.title}</motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false }}
                                className="text-gray-300 mb-6">{project.description}</motion.p>
                            <div className="flex gap-4">
                                <motion.a
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: false }}
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline"
                                >
                                    Live Demo
                                </motion.a>
                                <motion.a
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: false }}
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                >
                                    GitHub
                                </motion.a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
