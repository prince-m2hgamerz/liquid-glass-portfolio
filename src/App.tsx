import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingSocial from './components/FloatingSocial';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-all duration-1000">
        {/* Enhanced Animated background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Primary floating orbs */}
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-teal-400/30 dark:from-blue-500/20 dark:to-teal-500/20 rounded-full blur-3xl"
          />
          
          <motion.div 
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/30 to-blue-400/30 dark:from-teal-500/20 dark:to-blue-500/20 rounded-full blur-3xl"
          />
          
          {/* Secondary floating elements */}
          <motion.div 
            animate={{ 
              x: [0, -60, 0],
              y: [0, 40, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-2xl"
          />
          
          <motion.div 
            animate={{ 
              x: [0, 40, 0],
              y: [0, -30, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-2xl"
          />
        </div>

        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingSocial />
      </div>
    </ThemeProvider>
  );
}

export default App;