import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, Sparkles, Code, Palette, Zap, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    // This would typically link to an actual resume file
    const link = document.createElement('a');
    link.href = '/path/to/resume.pdf';
    link.download = 'Prince_Kumar_Resume.pdf';
    link.click();
  };

  const stats = [
    { number: '20+', label: 'Projects', icon: <Code className="w-4 h-4" /> },
    { number: '15+', label: 'Clients', icon: <Star className="w-4 h-4" /> },
    { number: '2+', label: 'Years', icon: <Zap className="w-4 h-4" /> }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Enhanced Glass Container */}
          <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] bg-white/30 dark:bg-slate-900/30 backdrop-blur-3xl border border-white/50 dark:border-slate-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
            
            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-gradient-to-br from-blue-400/40 to-teal-400/40 dark:from-blue-400/30 dark:to-teal-400/30 rounded-xl sm:rounded-2xl blur-sm"
            />
            
            <motion.div
              animate={{ 
                y: [10, -10, 10],
                rotate: [0, -5, 0],
                scale: [1.1, 1, 1.1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 bg-gradient-to-br from-teal-400/40 to-blue-400/40 dark:from-teal-400/30 dark:to-blue-400/30 rounded-2xl sm:rounded-3xl blur-sm"
            />

            {/* Profile Section */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="mb-8 sm:mb-12"
            >
              <div className="relative w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 mx-auto mb-6 sm:mb-8">
                {/* Animated Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 p-1"
                >
                  <div className="w-full h-full rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-2xl" />
                </motion.div>
                
                {/* Profile Content */}
                <div className="absolute inset-2 rounded-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-3xl border border-white/60 dark:border-slate-700/60 flex items-center justify-center shadow-[0_4px_16px_0_rgba(31,38,135,0.2)] dark:shadow-[0_4px_16px_0_rgba(0,0,0,0.3)]">
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-1 sm:mb-2"
                    >
                      PK
                    </motion.div>
                    <div className="flex justify-center space-x-1">
                      <Code className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                      <Palette className="w-3 h-3 sm:w-4 sm:h-4 text-teal-500" />
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 p-1.5 sm:p-2 bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl rounded-full border border-white/60 dark:border-slate-700/60 shadow-[0_4px_16px_0_rgba(31,38,135,0.2)] dark:shadow-[0_4px_16px_0_rgba(0,0,0,0.3)]"
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Prince Kumar
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-3 sm:space-y-4 mb-6 sm:mb-8"
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 font-light">
                Web Developer & Digital Creator
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
                Passionate about crafting beautiful, functional websites and digital experiences. 
                Based in Delhi, India, with expertise in modern web technologies and creative design solutions.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-md mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/60 dark:border-slate-700/60 shadow-[0_4px_16px_0_rgba(31,38,135,0.2)] dark:shadow-[0_4px_16px_0_rgba(0,0,0,0.3)]"
                >
                  <div className="flex justify-center mb-1 sm:mb-2 text-blue-600 dark:text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl sm:rounded-3xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden text-sm sm:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center space-x-2 sm:space-x-3">
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </motion.div>
                  <span>Download Resume</span>
                </div>
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-600 to-teal-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/60 dark:border-slate-700/60 rounded-2xl sm:rounded-3xl font-semibold hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-500 shadow-[0_4px_16px_0_rgba(31,38,135,0.2)] dark:shadow-[0_4px_16px_0_rgba(0,0,0,0.3)] text-sm sm:text-base"
              >
                <span className="relative z-10">Let's Connect</span>
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500/20 to-teal-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 sm:space-y-3 text-slate-500 dark:text-slate-400"
          >
            <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
            <div className="p-1.5 sm:p-2 rounded-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/60 dark:border-slate-700/60 shadow-[0_4px_16px_0_rgba(31,38,135,0.2)] dark:shadow-[0_4px_16px_0_rgba(0,0,0,0.3)]">
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;