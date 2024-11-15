import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Real-time Chat Application',
    description: 'A modern chat application built with Node.js and Socket.io, featuring real-time messaging, user presence, and message history.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop&q=60',
    tech: ['Node.js', 'Socket.io', 'React', 'MongoDB'],
    demo: 'https://chat-app-demo.com',
    github: 'https://github.com/username/chat-app'
  },
  {
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for managing e-commerce operations, built with TypeScript and React.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    tech: ['TypeScript', 'React', 'Redux', 'Material-UI'],
    demo: 'https://ecommerce-dashboard-demo.com',
    github: 'https://github.com/username/ecommerce-dashboard'
  },
  {
    title: 'Weather Application',
    description: 'A beautiful weather app using the OpenWeather API with detailed forecasts and location-based weather data.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=60',
    tech: ['JavaScript', 'OpenWeather API', 'React', 'TailwindCSS'],
    demo: 'https://weather-app-demo.com',
    github: 'https://github.com/username/weather-app'
  },
  {
    title: 'Task Management System',
    description: 'A full-featured task management system built with the MERN stack, including user authentication and real-time updates.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    demo: 'https://task-management-demo.com',
    github: 'https://github.com/username/task-management'
  },
  {
    title: 'Portfolio Website Builder',
    description: 'A Next.js-based portfolio website builder with customizable themes and components.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=60',
    tech: ['Next.js', 'TailwindCSS', 'TypeScript', 'Prisma'],
    demo: 'https://portfolio-builder-demo.com',
    github: 'https://github.com/username/portfolio-builder'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;