import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Damir Kranjcevic
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 dark:text-gray-300">
            Full Stack Developer
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Building modern, scalable web applications with cutting-edge technologies.
            Passionate about creating exceptional user experiences and robust backend solutions.
          </p>
          <div className="flex justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-purple-600 dark:text-purple-400"
            >
              <Code2 className="w-6 h-6" />
              <span>Frontend</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-pink-600 dark:text-pink-400"
            >
              <Terminal className="w-6 h-6" />
              <span>Backend</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400"
            >
              <Globe className="w-6 h-6" />
              <span>Web</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;