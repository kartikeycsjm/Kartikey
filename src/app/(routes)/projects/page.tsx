'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    id: 'taskforge',
    title: 'Task Forge',
    description: `- A robust full-stack task management system that enables users to create, assign, filter, and track tasks.
- Includes full authentication flow with sign-up, login, and password recovery via secure email links.
- Features advanced task filters (by status, priority, and due date), enabling seamless productivity tracking.
- Real-time notifications powered by WebSocket and email alerts via NodeMailer to ensure team collaboration.
- Built using Next.js (App Router), MongoDB, RESTful APIs, and secured with NextAuth for session handling.
- UI crafted with TailwindCSS for a clean, responsive design across devices.
- Demonstrates real-world use of full-stack architecture, scalable backend design, and real-time interactivity.`,
    liveLink: 'https://taskforge2nd.vercel.app/',
    githubLink: 'https://github.com/kartikeycsjm/task-management-system',
    tools: ['Next.js', 'MongoDB', 'TailwindCSS', 'REST API', 'NextAuth', 'NodeMailer'],
  },
  {
    id: 'portfoliogen',
    title: 'PortfolioGen',
    description: `- A no-code portfolio generator for users to create and deploy personal websites instantly.
- Users input personal and professional details, preview their portfolio live, and deploy it with one click.
- Dynamic form handling, data persistence with MongoDB, and real-time preview using state syncing.
- Authenticated user access and form-based design flow with optional email integration for updates.
- Built using Next.js, secured with NextAuth, styled using TailwindCSS, and data handled via REST API.
- Greatly simplifies online presence creation for non-tech-savvy users.
- Highlights skills in user-focused design, full-stack integration, and live content rendering.`,
    liveLink: 'https://getyourprofile.vercel.app/',
    githubLink: 'https://github.com/kartikeycsjm/PortfolioGen',
    tools: ['Next.js', 'MongoDB', 'NextAuth', 'NodeMailer', 'TailwindCSS', 'REST API'],
  },
  {
    id: 'libraryapi',
    title: 'Library API',
    description: `- A fully functional backend API system for managing library operations including books CRUD and advanced search.
- Developed using NestJS with MongoDB as the primary database and Swagger for API documentation.
- Incorporates fuzzy search to help users find books even with partial titles/authors.
- Features robust authentication, DTO validation, and modular architecture adhering to SOLID principles.
- Secure and scalable, intended for integration with library frontends or admin dashboards.
- Demonstrates backend expertise, API-first design, and advanced search handling with clean documentation.`,
    liveLink: 'https://library-api-edvn.onrender.com/api',
    githubLink: 'https://github.com/kartikeycsjm/library-api',
    tools: ['NestJS', 'MongoDB', 'Swagger', 'Fuzzy Search'],
  },
  {
    id: 'greenguardiank',
    title: 'Plant Disease Detection Web App',
    description: `- A browser-based AI tool that detects diseases in plants from leaf images using deep learning.
- Utilizes a pre-trained MobileNet model deployed with TensorFlow.js for real-time, client-side inference.
- Completely serverless design—ensures fast predictions and privacy since images never leave the user's device.
- Simple drag-and-drop UI, optimized for mobile and desktop with no setup required.
- Showcases machine learning integration directly in web applications without server resources.`,
    liveLink: 'https://greenguardiank.vercel.app/',
    githubLink: 'https://greenguardiank.vercel.app/',
    tools: ['TensorFlow.js', 'TensorFlow', 'Next.js'],
  },
  {
    id: 'formbuilder',
    title: 'Form Builder',
    description: `- A powerful no-code tool that allows users to design, publish, and share custom forms.
- Users can generate forms dynamically, share public links, and receive responses with email notifications.
- Backend built using REST API architecture with MongoDB for storage and NodeMailer for alerts.
- Fully responsive UI with validation and dynamic form rendering based on user input.
- Designed to help individuals and businesses collect structured data efficiently without coding.
- Demonstrates deep understanding of dynamic data-driven UI, server-side integration, and user-friendly design.`,
    liveLink: 'https://realformgenerator.vercel.app/',
    githubLink: 'https://github.com/kartikeycsjm/form-generator',
    tools: ['Next.js', 'MongoDB', 'NodeMailer', 'TailwindCSS', 'REST API'],
  },
  {
    id: 'diaryapp',
    title: 'Diary Application',
    description: `- A minimalist digital diary designed for personal journaling and note-taking.
- Stores entries on the client side using localStorage—no server interaction needed.
- Focuses on simplicity and usability with distraction-free design and smooth transitions.
- Built with Next.js and TailwindCSS to deliver a clean, fast, and intuitive writing experience.
- Demonstrates client-side state management, static routing, and effective UX with modern styling.`,
    liveLink: 'https://diary1.vercel.app/',
    githubLink: 'https://github.com/kartikeycsjm/diary',
    tools: ['Next.js', 'TailwindCSS'],
  },
  {
    id: 'kishoredaradio',
    title: 'Kishore Da Radio',
    description: `- A nostalgic music player web app dedicated to classic Kishore Kumar songs.
- Built using vanilla HTML, CSS, and JavaScript to demonstrate DOM manipulation and media control.
- Features audio playlist, play/pause/skip functionality, and a retro-inspired UI.
- Lightweight and accessible, intended as a tribute project and frontend practice exercise.
- Highlights core frontend skills, interactive UI components, and creative web development.`,
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
        <div className="grid grid-cols-1 gap-10 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              id={project.id}
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="bg-[#0f172a] scroll-mt-44
              hover:bg-[#334155] transition-colors duration-300 rounded-2xl p-6 
              shadow-lg group border border-[#334155]"
            >
              <h2 className="text-2xl 
              font-semibold text-white 
              group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h2>
              <p className="text-gray-300 font-extralight mt-4 md:text-xl text-sm leading-relaxed whitespace-pre-line">
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
