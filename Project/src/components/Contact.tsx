import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:kranjcevicdamir72@gmail.com"
              className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">kranjcevicdamir72@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:+381607017227"
              className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+381607017227</p>
              </div>
            </a>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: true })}
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-purple-500"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-purple-500"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Valid email is required</span>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message', { required: true })}
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-purple-500"
              />
              {errors.message && (
                <span className="text-red-500 text-sm">Message is required</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;