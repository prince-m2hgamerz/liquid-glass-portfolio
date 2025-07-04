import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Sparkles, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/25 dark:bg-slate-900/25 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border-b border-white/30 dark:border-slate-700/30'
          : 'bg-white/15 dark:bg-slate-900/15 backdrop-blur-2xl border-b border-white/20 dark:border-slate-700/20'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 sm:space-x-3"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg relative overflow-hidden"
              >
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 opacity-50"
                />
              </motion.div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 blur-lg opacity-50 -z-10" />
              
              {/* Floating particles */}
              <motion.div
                animate={{ 
                  y: [-2, 2, -2],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full blur-sm"
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                Prince Kumar
              </span>
              <div className="flex items-center space-x-1 mt-1">
                <Code className="w-3 h-3 text-blue-500" />
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Web Developer</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="relative text-sm lg:text-base text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium group"
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.a>
            ))}
            
            {/* Enhanced Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="relative p-3 rounded-2xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-2xl border border-white/40 dark:border-slate-700/40 hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 shadow-[0_4px_16px_0_rgba(31,38,135,0.2)] dark:shadow-[0_4px_16px_0_rgba(0,0,0,0.3)] group"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {theme === 'light' ? 
                  <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" /> : 
                  <Sun className="w-5 h-5 text-yellow-400" />
                }
              </motion.div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-2xl border border-white/40 dark:border-slate-700/40 shadow-[0_4px_16px_0_rgba(31,38,135,0.2)] dark:shadow-[0_4px_16px_0_rgba(0,0,0,0.3)]"
            >
              {theme === 'light' ? 
                <Moon className="w-4 h-4 text-slate-700 dark:text-slate-300" /> : 
                <Sun className="w-4 h-4 text-yellow-400" />
              }
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-2xl border border-white/40 dark:border-slate-700/40 shadow-[0_4px_16px_0_rgba(31,38,135,0.2)] dark:shadow-[0_4px_16px_0_rgba(0,0,0,0.3)]"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </motion.button>
          </div>
        </nav>

        {/* Enhanced Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="mt-4 p-6 rounded-3xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-3xl border border-white/50 dark:border-slate-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.05 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative text-base text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-white/30 dark:hover:bg-slate-700/30"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{item.name}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;