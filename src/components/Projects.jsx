import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'LED POV with Arduino',
      description: 'Persistence of Vision display using Arduino, creating floating text and patterns in mid-air using LED array',
      tech: ['Arduino', 'Xylinx', 'Electronics'],
    },
    {
      title: 'Java Employee Payroll',
      description: 'A comprehensive employee payroll management system built with Java, featuring salary calculation and report generation',
      tech: ['Java', 'OOPs'],
      github: 'https://github.com/RupanshuDutta/java-payroll'
    },
    {
      title: 'React Dice Game',
      description: 'An interactive dice rolling game built with React, featuring animations and score tracking',
      tech: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/RupanshuDutta/dice-game',
      live: 'https://rupanshu-dice-game.netlify.app/'
    },
    {
      title: 'React Movie App',
      description: 'A movie browsing application that fetches data from an API, with search and filtering capabilities',
      tech: ['React', 'API Integration', 'Tailwind CSS'],
      github: 'https://github.com/RupanshuDutta/react-movie-app'
    },
    {
      title: 'Draggable Note App',
      description: 'A dynamic note-taking application with draggable interface built using Framer Motion',
      tech: ['React', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/RupanshuDutta/react-docs',
      live: 'https://react-docs-mu.vercel.app/'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Github size={20} />
                <span>Code</span>
              </a>
              {project.live && (
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;