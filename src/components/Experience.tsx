import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2023 - Present',
      location: 'Delhi, India',
      description: 'Creating custom websites and web applications for small businesses and individuals. Specializing in responsive design and modern web technologies.',
      achievements: [
        'Developed 10+ websites for local businesses',
        'Improved client website performance by 40%',
        'Implemented SEO best practices for better visibility'
      ]
    },
    {
      title: 'Web Development Student',
      company: 'Diploma Program',
      period: '2022 - 2023',
      location: 'Delhi, India',
      description: 'Intensive web development program focusing on modern technologies and industry best practices.',
      achievements: [
        'Completed comprehensive web development curriculum',
        'Built multiple projects using React and Node.js',
        'Graduated with distinction'
      ]
    },
    {
      title: 'WordPress Developer',
      company: 'Freelance Projects',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Developing custom WordPress themes and plugins for various clients.',
      achievements: [
        'Created 5+ custom WordPress themes',
        'Integrated payment systems and contact forms',
        'Optimized websites for speed and SEO'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My journey in web development and the projects I've worked on
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-white/20 dark:bg-slate-800/20 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 hover:bg-white/30 dark:hover:bg-slate-800/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-lg font-semibold text-slate-600 dark:text-slate-300">
                        {exp.company}
                      </span>
                      <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <Award className="w-4 h-4 text-teal-500 flex-shrink-0" />
                          <span className="text-sm text-slate-600 dark:text-slate-300">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;