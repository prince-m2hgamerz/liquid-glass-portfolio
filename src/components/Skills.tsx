import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Server, 
  Database, 
  Globe, 
  Smartphone, 
  Zap, 
  Award,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Layers,
  Monitor,
  Cloud,
  Shield,
  Cpu,
  Workflow
} from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: [
        { name: 'HTML5', level: 95, experience: '3+ years', projects: 25 },
        { name: 'CSS3', level: 92, experience: '3+ years', projects: 25 },
        { name: 'JavaScript', level: 88, experience: '2+ years', projects: 20 },
        { name: 'React.js', level: 85, experience: '2+ years', projects: 15 },
        { name: 'Tailwind CSS', level: 90, experience: '2+ years', projects: 18 },
        { name: 'TypeScript', level: 75, experience: '1+ year', projects: 8 }
      ],
      color: 'from-blue-500 to-cyan-500',
      description: 'Creating beautiful, responsive user interfaces'
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: [
        { name: 'Node.js', level: 75, experience: '1+ year', projects: 10 },
        { name: 'PHP', level: 70, experience: '2+ years', projects: 12 },
        { name: 'Express.js', level: 72, experience: '1+ year', projects: 8 },
        { name: 'Firebase', level: 80, experience: '1+ year', projects: 10 }
      ],
      color: 'from-green-500 to-emerald-500',
      description: 'Building robust server-side applications'
    },
    {
      id: 'database',
      title: 'Database Management',
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: [
        { name: 'Firebase', level: 82, experience: '1+ year', projects: 10 },
        { name: 'MySQL', level: 78, experience: '2+ years', projects: 12 },
        { name: 'MongoDB', level: 70, experience: '1+ year', projects: 6 },
        { name: 'PostgreSQL', level: 65, experience: '6 months', projects: 3 }
      ],
      color: 'from-purple-500 to-pink-500',
      description: 'Designing efficient data storage solutions'
    },
    {
      id: 'cms',
      title: 'CMS & Frameworks',
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: [
        { name: 'WordPress', level: 90, experience: '2+ years', projects: 15 },
        { name: 'Next.js', level: 75, experience: '1+ year', projects: 6 },
        { name: 'Vite', level: 85, experience: '1+ year', projects: 12 },
        { name: 'Custom CMS', level: 70, experience: '1+ year', projects: 5 }
      ],
      color: 'from-orange-500 to-red-500',
      description: 'Content management and modern frameworks'
    },
    {
      id: 'design',
      title: 'Design & UI/UX',
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: [
        { name: 'Figma', level: 85, experience: '2+ years', projects: 20 },
        { name: 'Canva', level: 90, experience: '2+ years', projects: 25 },
        { name: 'UI/UX Design', level: 80, experience: '2+ years', projects: 18 },
        { name: 'Responsive Design', level: 92, experience: '2+ years', projects: 25 },
        { name: 'Framer Motion', level: 78, experience: '1+ year', projects: 10 }
      ],
      color: 'from-pink-500 to-rose-500',
      description: 'Creating engaging user experiences'
    },
    {
      id: 'tools',
      title: 'Tools & DevOps',
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: [
        { name: 'Git/GitHub', level: 88, experience: '2+ years', projects: 25 },
        { name: 'VS Code', level: 95, experience: '3+ years', projects: 25 },
        { name: 'Chrome DevTools', level: 85, experience: '2+ years', projects: 25 },
        { name: 'Netlify', level: 80, experience: '1+ year', projects: 15 },
        { name: 'Vercel', level: 75, experience: '1+ year', projects: 10 }
      ],
      color: 'from-teal-500 to-cyan-500',
      description: 'Development tools and deployment platforms'
    }
  ];

  const certifications = [
    { 
      name: 'Web Development Diploma', 
      issuer: 'Tech Institute Delhi', 
      year: '2023',
      level: 'Advanced',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    { 
      name: 'React.js Certification', 
      issuer: 'Online Academy', 
      year: '2023',
      level: 'Professional',
      skills: ['React', 'Redux', 'Hooks']
    },
    { 
      name: 'WordPress Developer', 
      issuer: 'WP Institute', 
      year: '2022',
      level: 'Expert',
      skills: ['WordPress', 'PHP', 'Custom Themes']
    },
    { 
      name: 'UI/UX Design Fundamentals', 
      issuer: 'Design Academy', 
      year: '2023',
      level: 'Intermediate',
      skills: ['Figma', 'User Research', 'Prototyping']
    }
  ];

  const learningGoals = [
    { skill: 'Next.js Advanced', progress: 60, target: 'Q2 2024' },
    { skill: 'Python & Django', progress: 30, target: 'Q3 2024' },
    { skill: 'AWS Cloud Services', progress: 20, target: 'Q4 2024' },
    { skill: 'Mobile Development', progress: 15, target: '2025' }
  ];

  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/5 w-72 h-72 bg-gradient-to-br from-blue-400/8 to-teal-400/8 dark:from-blue-500/4 dark:to-teal-500/4 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            y: [0, 80, 0]
          }}
          transition={{ 
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/5 w-56 h-56 bg-gradient-to-br from-purple-400/8 to-pink-400/8 dark:from-purple-500/4 dark:to-pink-500/4 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/20 dark:bg-slate-900/20 backdrop-blur-3xl border border-white/30 dark:border-slate-700/30 mb-6"
          >
            <Zap className="w-5 h-5 text-yellow-500" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">Technical Expertise</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 dark:from-blue-400 dark:via-teal-400 dark:to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The tools and technologies I use to bring innovative ideas to life
          </p>
        </motion.div>

        {/* Enhanced Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-6 py-4 rounded-2xl font-medium transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/20 dark:bg-slate-800/20 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 hover:bg-white/30 dark:hover:bg-slate-800/30'
              }`}
            >
              <div className="flex items-center space-x-2">
                {category.icon}
                <span>{category.title}</span>
              </div>
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-xl"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="p-8 rounded-3xl bg-white/20 dark:bg-slate-900/20 backdrop-blur-3xl border border-white/40 dark:border-slate-700/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                {skillCategories.find(cat => cat.id === activeCategory)?.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {skillCategories.find(cat => cat.id === activeCategory)?.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {activeSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group p-6 bg-white/30 dark:bg-slate-800/30 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        {skill.name}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
                        <span>{skill.experience}</span>
                        <span>•</span>
                        <span>{skill.projects} projects</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                        {skill.level}%
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(skill.level / 20)
                                ? 'text-yellow-400 fill-current'
                                : 'text-slate-300 dark:text-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Proficiency</span>
                      <span className="text-slate-800 dark:text-slate-200 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                        className={`bg-gradient-to-r ${skillCategories.find(cat => cat.id === activeCategory)?.color} h-full rounded-full relative overflow-hidden`}
                      >
                        <motion.div
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Learning Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 rounded-3xl bg-white/20 dark:bg-slate-900/20 backdrop-blur-3xl border border-white/40 dark:border-slate-700/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <TrendingUp className="w-7 h-7 text-green-500" />
            <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200">
              Currently Learning
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningGoals.map((goal, index) => (
              <motion.div
                key={goal.skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-white/30 dark:bg-slate-800/30 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-2xl text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {goal.skill}
                </h4>
                <div className="space-y-2">
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${goal.progress}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">{goal.progress}%</span>
                    <span className="text-slate-600 dark:text-slate-400">{goal.target}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-8 rounded-3xl bg-white/20 dark:bg-slate-900/20 backdrop-blur-3xl border border-white/40 dark:border-slate-700/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8_32px_0_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Award className="w-7 h-7 text-yellow-500" />
            <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200">
              Certifications & Education
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 rounded-2xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                        {cert.name}
                      </h4>
                      <span className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">
                        {cert.level}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      {cert.issuer} • {cert.year}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-white/40 dark:bg-slate-700/40 text-slate-700 dark:text-slate-300 rounded-lg text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;