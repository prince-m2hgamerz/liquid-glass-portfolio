import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  GraduationCap, 
  Code, 
  Heart, 
  Award, 
  Target, 
  Coffee, 
  Lightbulb,
  Calendar,
  Users,
  Zap,
  Star,
  BookOpen,
  Trophy,
  Rocket,
  Globe,
  Camera,
  Music,
  Gamepad2
} from 'lucide-react';

const About: React.FC = () => {
  const infoCards = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      subtitle: 'Delhi, India',
      description: 'Based in the vibrant capital of India',
      color: 'from-blue-500 to-cyan-500',
      stats: '28°C Today'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Education',
      subtitle: 'Diploma in Web Development',
      description: 'High School Graduate with Tech Focus',
      color: 'from-teal-500 to-green-500',
      stats: '2023 Graduate'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Experience',
      subtitle: 'Junior Web Developer',
      description: 'Freelancer & Continuous Learner',
      color: 'from-purple-500 to-pink-500',
      stats: '2+ Years'
    }
  ];

  const achievements = [
    { icon: <Trophy className="w-5 h-5" />, text: 'Top Rated Freelancer', count: '15+' },
    { icon: <Star className="w-5 h-5" />, text: '5-Star Reviews', count: '98%' },
    { icon: <Rocket className="w-5 h-5" />, text: 'Projects Delivered', count: '25+' },
    { icon: <Users className="w-5 h-5" />, text: 'Happy Clients', count: '20+' }
  ];

  const personalTraits = [
    { icon: <Target className="w-5 h-5" />, text: 'Problem Solver', description: 'Love tackling complex challenges' },
    { icon: <Award className="w-5 h-5" />, text: 'Creative Thinker', description: 'Innovative approach to design' },
    { icon: <Heart className="w-5 h-5" />, text: 'Team Player', description: 'Collaborative and supportive' },
    { icon: <Lightbulb className="w-5 h-5" />, text: 'Fast Learner', description: 'Always adapting to new tech' },
    { icon: <Zap className="w-5 h-5" />, text: 'Detail Oriented', description: 'Pixel-perfect execution' },
    { icon: <Globe className="w-5 h-5" />, text: 'Global Mindset', description: 'Understanding diverse markets' }
  ];

  const hobbies = [
    { icon: <Coffee className="w-4 h-4" />, text: 'Coffee Enthusiast', color: 'text-amber-500' },
    { icon: <BookOpen className="w-4 h-4" />, text: 'Tech Blogger', color: 'text-blue-500' },
    { icon: <Camera className="w-4 h-4" />, text: 'Photography', color: 'text-purple-500' },
    { icon: <Music className="w-4 h-4" />, text: 'Music Lover', color: 'text-green-500' },
    { icon: <Gamepad2 className="w-4 h-4" />, text: 'Gaming', color: 'text-red-500' },
    { icon: <Rocket className="w-4 h-4" />, text: 'Space Tech', color: 'text-indigo-500' }
  ];

  const timeline = [
    { year: '2021', event: 'Started Learning Web Development', icon: <BookOpen className="w-4 h-4" /> },
    { year: '2022', event: 'First Freelance Project', icon: <Rocket className="w-4 h-4" /> },
    { year: '2023', event: 'Completed Diploma', icon: <GraduationCap className="w-4 h-4" /> },
    { year: '2024', event: 'Growing Portfolio & Skills', icon: <Trophy className="w-4 h-4" /> }
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-teal-400/10 dark:from-blue-500/5 dark:to-teal-500/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            y: [0, 50, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-pink-400/10 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
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
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">Get to know me better</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 dark:from-blue-400 dark:via-teal-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Passionate web developer from Delhi, crafting digital experiences that make a difference
          </p>
        </motion.div>

        {/* Enhanced Info Cards with Stats */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative p-8 rounded-3xl bg-white/20 dark:bg-slate-900/20 backdrop-blur-3xl border border-white/40 dark:border-slate-700/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] dark:hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.7)] transition-all duration-500"
            >
              {/* Floating decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-500/30 to-teal-500/30 rounded-full blur-sm"
              />
              
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`p-4 rounded-2xl bg-gradient-to-r ${card.color} text-white shadow-lg relative`}
                >
                  {card.icon}
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-semibold">
                    {card.subtitle}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    {card.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl">
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      {card.stats}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Story & Timeline Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative p-8 rounded-3xl bg-white/20 dark:bg-slate-900/20 backdrop-blur-3xl border border-white/40 dark:border-slate-700/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 20 }}
                  className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl"
                >
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">My Journey</h3>
              </div>
              
              <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  I'm a passionate web developer based in Delhi, India, with a strong foundation in modern web technologies. 
                  My journey started with curiosity about how websites work and evolved into a deep love for creating 
                  beautiful, functional digital experiences.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Currently expanding my skills while working on exciting freelance projects, I specialize in React.js, 
                  WordPress development, and creating responsive designs that work seamlessly across all devices.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                  and staying updated with the latest design trends. I believe in continuous learning and 
                  pushing the boundaries of what's possible on the web.
                </motion.p>
              </div>

              {/* Achievement Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-3 p-4 bg-white/30 dark:bg-slate-800/30 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-2xl"
                  >
                    <div className="text-blue-600 dark:text-blue-400">
                      {achievement.icon}
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-800 dark:text-slate-200">
                        {achievement.count}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {achievement.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative p-8 rounded-3xl bg-white/20 dark:bg-slate-900/20 backdrop-blur-3xl border border-white/40 dark:border-slate-700/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 20 }}
                  className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl"
                >
                  <Calendar className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Timeline</h3>
              </div>

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-white/20 dark:bg-slate-800/20 backdrop-blur-xl border border-white/30 dark:border-slate-700/30"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {item.year}
                      </div>
                      <div className="text-slate-700 dark:text-slate-300 font-medium">
                        {item.event}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Traits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-8 rounded-3xl bg-white/20 dark:bg-slate-900/20 backdrop-blur-3xl border border-white/40 dark:border-slate-700/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Zap className="w-7 h-7 text-yellow-500" />
            <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200">
              What Makes Me Unique
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalTraits.map((trait, index) => (
              <motion.div
                key={trait.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-6 bg-white/30 dark:bg-slate-800/30 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    {trait.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                      {trait.text}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {trait.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Hobbies & Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-8 rounded-3xl bg-white/20 dark:bg-slate-900/20 backdrop-blur-3xl border border-white/40 dark:border-slate-700/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Coffee className="w-7 h-7 text-amber-500" />
            <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200">
              Beyond Coding
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group flex flex-col items-center p-4 bg-white/30 dark:bg-slate-800/30 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-2xl hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all duration-300"
              >
                <div className={`p-3 rounded-xl bg-white/40 dark:bg-slate-700/40 ${hobby.color} group-hover:scale-110 transition-transform duration-300 mb-2`}>
                  {hobby.icon}
                </div>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300 text-center">
                  {hobby.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;