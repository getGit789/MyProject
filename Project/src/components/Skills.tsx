import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Globe,
  Server,
  Terminal,
  Tool,
  Cloud,
  GitBranch
} from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Code2 className="w-6 h-6" />,
    items: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Redux']
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6" />,
    items: ['Node.js', 'Express', 'NestJS', 'Python', 'Java']
  },
  {
    category: 'Database',
    icon: <Database className="w-6 h-6" />,
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL']
  },
  {
    category: 'DevOps',
    icon: <Cloud className="w-6 h-6" />,
    items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-purple-600 dark:text-purple-400">
                  {skill.icon}
                </span>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;