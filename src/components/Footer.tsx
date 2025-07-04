import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  Code,
  Sparkles,
  ArrowUp,
  Send,
  Star,
  Coffee,
  Zap,
  Award
} from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/princekumar',
      color: 'hover:bg-gray-600 dark:hover:bg-gray-500',
      followers: '1.2K'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/princekumar',
      color: 'hover:bg-blue-600',
      followers: '850'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com/princekumar',
      color: 'hover:bg-blue-400',
      followers: '650'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://instagram.com/princekumar',
      color: 'hover:bg-pink-500',
      followers: '920'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about', icon: <Heart className="w-4 h-4" /> },
    { name: 'Skills', href: '#skills', icon: <Zap className="w-4 h-4" /> },
    { name: 'Projects', href: '#projects', icon: <Code className="w-4 h-4" /> },
    { name: 'Experience', href: '#experience', icon: <Award className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <Send className="w-4 h-4" /> }
  ];

  const services = [
    { name: 'Web Development', description: 'Custom websites & web apps' },
    { name: 'WordPress Development', description: 'Custom themes & plugins' },
    { name: 'UI/UX Design', description: 'User-centered design solutions' },
    { name: 'Responsive Design', description: 'Mobile-first approach' },
    { name: 'SEO Optimization', description: 'Search engine optimization' },
    { name: 'Website Maintenance', description: 'Ongoing support & updates' }
  ];

  const achievements = [
    { number: '25+', label: 'Projects Completed', icon: <Code className="w-4 h-4" /> },
    { number: '20+', label: 'Happy Clients', icon: <Heart className="w-4 h-4" /> },
    { number: '2+', label: 'Years Experience', icon: <Star className="w-4 h-4" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Award className="w-4 h-4" /> }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-6 mt-20 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent dark:from-slate-900/50 dark:to-transparent" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-teal-400/5 dark:from-blue-500/3 dark:to-teal-500/3 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            y: [0, 50, 0]
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-400/5 to-pink-400/5 dark:from-purple-500/3 dark:to-pink-500/3 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="relative p-12 rounded-[3rem] bg-white/20 dark:bg-slate-900/20 backdrop-blur-3xl border border-white/30 dark:border-slate-700/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
          
          {/* Floating Decorative Elements */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl blur-sm"
          />
          
          <motion.div
            animate={{ 
              rotate: -360,
              y: [-5, 5, -5]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-sm"
          />

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            
            {/* Enhanced Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg relative overflow-hidden">
                    <Sparkles className="w-7 h-7 text-white relative z-10" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 opacity-50"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 blur-lg opacity-50 -z-10" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                    Prince Kumar
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Code className="w-4 h-4 text-blue-500" />
                    <span className="text-slate-600 dark:text-slate-400 font-medium">Web Developer</span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
                Passionate web developer from Delhi, India, creating beautiful and functional digital experiences. 
                Specializing in modern web technologies and user-centered design.
              </p>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="p-4 bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-2xl text-center"
                  >
                    <div className="flex items-center justify-center mb-2 text-blue-600 dark:text-blue-400">
                      {achievement.icon}
                    </div>
                    <div className="text-lg font-bold text-slate-800 dark:text-slate-200">
                      {achievement.number}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced Contact Info */}
              <div className="space-y-3">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 group"
                >
                  <div className="p-2 bg-blue-500/10 dark:bg-blue-500/5 rounded-xl group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>prince.kumar@email.com</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 group"
                >
                  <div className="p-2 bg-green-500/10 dark:bg-green-500/5 rounded-xl group-hover:bg-green-500/20 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span>+91 9876543210</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 group"
                >
                  <div className="p-2 bg-purple-500/10 dark:bg-purple-500/5 rounded-xl group-hover:bg-purple-500/20 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span>Delhi, India</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 flex items-center space-x-2">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Quick Links</span>
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="group flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-xl hover:bg-white/20 dark:hover:bg-slate-800/20"
                  >
                    <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span>Services</span>
              </h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="group p-3 rounded-xl hover:bg-white/20 dark:hover:bg-slate-800/20 transition-all duration-300"
                  >
                    <div className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {service.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                      {service.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/20 dark:border-slate-700/20"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              
              {/* Enhanced Social Icons */}
              <div className="space-y-4">
                <h5 className="text-center md:text-left text-slate-700 dark:text-slate-300 font-medium">
                  Connect with me
                </h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`group relative p-3 rounded-2xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 text-slate-600 dark:text-slate-300 hover:text-white transition-all duration-300 ${social.color}`}
                      title={`${social.name} - ${social.followers} followers`}
                    >
                      {social.icon}
                      <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs text-white font-bold">+</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Enhanced Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.div>
                <span>Back to Top</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="p-6 rounded-2xl bg-white/15 dark:bg-slate-900/15 backdrop-blur-2xl border border-white/25 dark:border-slate-700/25">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <span>© 2024 Prince Kumar. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>in Delhi, India</span>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Coffee className="w-4 h-4 text-amber-500" />
                  <span>Powered by coffee</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span>Built with React</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;