'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Task Forge',
    description: `- A full-stack web application to create, update, and track tasks.
- Includes features like sign-up/login, forgot password, and task filters (by status, priority, due date).
- Real-time notifications and email alerts using NodeMailer.
- Built with Next.js, MongoDB, REST APIs, and secured with NextAuth.
- Showcases full-stack architecture, clean UI design, and teamwork readiness.`,
    liveLink: 'https://taskforge2nd.vercel.app/',
    githubLink: 'https://github.com/kartikeycsjm/task-management-system',
    tools: ['Next.js', 'MongoDB', 'TailwindCSS', 'REST API', 'NextAuth', 'NodeMailer'],
  },
  {
    title: 'PortfolioGen',
    description: `- A no-code portfolio generator that builds and deploys personal sites instantly.
- Users fill in personal/professional info and get a live preview of their site.
- Built with Next.js and MongoDB, styled with TailwindCSS.
- Helps non-tech users create professional online presence easily.
- Demonstrates form handling, real-time rendering, and data-driven UI.`,
    liveLink: 'https://getyourprofile.vercel.app/',
    githubLink: 'https://github.com/kartikeycsjm/PortfolioGen',
    tools: ['Next.js', 'MongoDB', 'NextAuth', 'NodeMailer', 'TailwindCSS', 'REST API'],
  },
  {
    title: 'Library API',
    description: `- Backend API for managing books in a library.
- Supports create, update, delete, and advanced search (fuzzy search).
- Built with NestJS and MongoDB, documented using Swagger for developer ease.
- Secure API with proper validation and auth practices.
- Highlights backend proficiency, API design, and advanced query handling.`,
    liveLink: 'https://library-api-edvn.onrender.com/api',
    githubLink: 'https://github.com/kartikeycsjm/library-api',
    tools: ['NestJS', 'MongoDB', 'Swagger', 'Fuzzy Search'],
  },
  {
    title: 'Plant Disease Detection Web App',
    description: `- AI-based tool to detect diseases from plant leaf images.
- Uses a pre-trained MobileNet model via TensorFlow.js directly in the browser.
- No server-side processing, making it fast and private.
- Offers real-time predictions and simple UI.
- Demonstrates machine learning integration into web apps.`,
    liveLink: 'https://greenguardiank.vercel.app/',
    githubLink: 'https://greenguardiank.vercel.app/',
    tools: ['TensorFlow.js', 'TensorFlow', 'Next.js'],
  },
  {
    title: 'Form Builder',
    description: `- A no-code tool to create and share custom forms.
- Users can generate forms, share links, and get email notifications on responses.
- Built with Next.js and MongoDB, email powered by NodeMailer.
- Allows businesses and individuals to collect structured data easily.
- Covers dynamic form rendering, validation, and backend communication.`,
    liveLink: 'https://realformgenerator.vercel.app/',
    githubLink: 'https://github.com/kartikeycsjm/form-generator',
    tools: ['Next.js', 'MongoDB', 'NodeMailer', 'TailwindCSS', 'REST API'],
  },
  {
    title: 'Diary Application',
    description: `- Simple online diary app to write and save daily notes.
- Entries are saved on the client side, no server required.
- Built using Next.js and TailwindCSS for a clean, distraction-free interface.
- Meant to simulate a real notebook with a modern web feel.
- Strengthens client-side storage, routing, and UI styling.`,
    liveLink: 'https://diary1.vercel.app/',
    githubLink: 'https://github.com/kartikeycsjm/diary',
    tools: ['Next.js', 'TailwindCSS'],
  },
  {
    title: 'Kishore Da Radio',
    description: `- A music player app dedicated to Kishore Kumar’s songs.
- Built with HTML, CSS, and JavaScript for basic media controls.
- Offers play/pause/next/prev for a curated song list.
- A light nostalgic project to practice DOM manipulation.
- Ideal for exploring basic web interactivity.`,
    liveLink: 'https://kishoreda.netlify.app/',
    githubLink: 'https://kishoreda.netlify.app/',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full py-12">
      <div className="w-[90%] mx-auto">
        <h1 className="text-3xl md:text-5xl
         text-center font-bold text-white my-10 md:my-16">
          My Projects
        </h1>
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="bg-[#0f172a] 
              hover:bg-[#334155] transition-colors duration-300 rounded-2xl p-6 
              shadow-lg group border border-[#334155]"
            >
              <h2 className="text-2xl 
              font-semibold text-white 
              group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h2>
              <p className="text-gray-300 font-extralight mt-4 text-sm leading-relaxed md:text-lg whitespace-pre-line">
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
              <div className="flex md:gap-5 md:justify-start justify-between items-center mt-6">
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
  );
}
