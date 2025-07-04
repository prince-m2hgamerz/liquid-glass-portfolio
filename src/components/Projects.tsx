import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Filter, 
  Star, 
  Calendar, 
  Users,
  Code,
  Zap,
  Eye,
  Heart,
  Award,
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with advanced shopping cart functionality, secure payment integration via Stripe, and a powerful admin dashboard for inventory management.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Express'],
      category: 'web-app',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 45, forks: 12, views: 1200, likes: 89 },
      timeline: '3 months',
      status: 'completed',
      highlights: ['Payment Integration', 'Admin Dashboard', 'Inventory Management', 'User Authentication']
    },
    {
      id: 2,
      title: 'Restaurant Management System',
      description: 'Complete restaurant solution with online menu display, table reservation system, customer review management, and integrated payment gateway for seamless online ordering.',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
      category: 'website',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 28, forks: 8, views: 850, likes: 64 },
      timeline: '2 months',
      status: 'completed',
      highlights: ['Online Reservations', 'Menu Management', 'Customer Reviews', 'Payment Gateway']
    },
    {
      id: 3,
      title: 'Creative Portfolio Website',
      description: 'Stunning portfolio website for a professional photographer featuring dynamic image gallery, integrated blog section, contact forms, and optimized for performance and SEO.',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'Framer Motion', 'Next.js'],
      category: 'portfolio',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 32, forks: 15, views: 950, likes: 78 },
      timeline: '1.5 months',
      status: 'completed',
      highlights: ['Image Gallery', 'Blog Integration', 'SEO Optimized', 'Performance Focused']
    },
    {
      id: 4,
      title: 'Travel Blog WordPress Theme',
      description: 'Custom WordPress theme designed for travel bloggers with advanced SEO optimization, social media integration, newsletter signup, and mobile-first responsive design.',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'PHP', 'CSS3', 'JavaScript', 'MySQL', 'SCSS'],
      category: 'wordpress',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 19, forks: 6, views: 620, likes: 45 },
      timeline: '1 month',
      status: 'completed',
      highlights: ['Custom Theme', 'SEO Optimized', 'Social Integration', 'Mobile First']
    },
    {
      id: 5,
      title: 'Task Management Application',
      description: 'Full-stack productivity app with real-time collaboration features, file attachment support, progress tracking, team management, and advanced notification system.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
      category: 'web-app',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 67, forks: 23, views: 1500, likes: 112 },
      timeline: '4 months',
      status: 'completed',
      highlights: ['Real-time Collaboration', 'File Attachments', 'Progress Tracking', 'Team Management']
    },
    {
      id: 6,
      title: 'Modern Landing Page Template',
      description: 'High-converting landing page template with smooth animations, optimized contact forms, A/B testing ready, and conversion optimization features for maximum impact.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Netlify', 'Webpack'],
      category: 'website',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 41, forks: 18, views: 780, likes: 67 },
      timeline: '3 weeks',
      status: 'completed',
      highlights: ['Conversion Optimized', 'Smooth Animations', 'A/B Testing Ready', 'Fast Loading']
    },
    {
      id: 7,
      title: 'Real Estate Platform',
      description: 'Comprehensive real estate platform with property listings, advanced search filters, virtual tours, agent profiles, and integrated mortgage calculator.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      category: 'web-app',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 38, forks: 14, views: 920, likes: 73 },
      timeline: '5 months',
      status: 'in-progress',
      highlights: ['Property Listings', 'Virtual Tours', 'Mortgage Calculator', 'Agent Profiles']
    },
    {
      id: 8,
      title: 'Fitness Tracker Dashboard',
      description: 'Personal fitness tracking application with workout planning, progress visualization, nutrition tracking, and social features for motivation and accountability.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Chart.js', 'Firebase', 'PWA', 'Material-UI'],
      category: 'web-app',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 25, forks: 9, views: 650, likes: 52 },
      timeline: '2 months',
      status: 'completed',
      highlights: ['Workout Planning', 'Progress Tracking', 'Nutrition Logs', 'Social Features']
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length, icon: <Code className="w-4 h-4" /> },
    { key: 'web-app', label: 'Web Apps', count: projects.filter(p => p.category === 'web-app').length, icon: <Zap className="w-4 h-4" /> },
    { key: 'website', label: 'Websites', count: projects.filter(p => p.category === 'website').length, icon: <Eye className="w-4 h-4" /> },
    { key: 'portfolio', label: 'Portfolios', count: projects.filter(p => p.category === 'portfolio').length, icon: <Star className="w-4 h-4" /> },
    { key: 'wordpress', label: 'WordPress', count: projects.filter(p => p.category === 'wordpress').length, icon: <Award className="w-4 h-4" /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  const projectStats = {
    total: projects.length,
    completed: projects.filter(p => p.status === 'completed').length,
    inProgress: projects.filter(p => p.status === 'in-progress').length,
    totalStars: projects.reduce((sum, p) => sum + p.stats.stars, 0)
  };

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/6 w-80 h-80 bg-gradient-to-br from-blue-400/6 to-teal-400/6 dark:from-blue-500/3 dark:to-teal-500/3 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            y: [0, 100, 0]
          }}
          transition={{ 
            duration: 50,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-purple-400/6 to-pink-400/6 dark:from-purple-500/3 dark:to-pink-500/3 rounded-full blur-3xl"
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
            <Code className="w-5 h-5 text-blue-500" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">Portfolio Showcase</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 dark:from-blue-400 dark:via-teal-400 dark:to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, creative solutions, and technical expertise
          </p>
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: 'Total Projects', value: projectStats.total, icon: <Code className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
            { label: 'Completed', value: projectStats.completed, icon: <CheckCircle className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
            { label: 'In Progress', value: projectStats.inProgress, icon: <Clock className="w-5 h-5" />, color: 'from-orange-500 to-red-500' },
            { label: 'Total Stars', value: projectStats.totalStars, icon: <Star className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white/20 dark:bg-slate-900/20 backdrop-blur-3xl border border-white/30 dark:border-slate-700/30 text-center"
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 text-sm sm:text-base ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                  : 'bg-white/20 dark:bg-slate-800/20 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 hover:bg-white/30 dark:hover:bg-slate-800/30'
              }`}
            >
              <div className="flex items-center space-x-2">
                {filter.icon}
                <span>{filter.label}</span>
                <span className="px-2 py-1 bg-white/20 dark:bg-slate-700/20 rounded-full text-xs">
                  {filter.count}
                </span>
              </div>
              {activeFilter === filter.key && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-xl"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative rounded-3xl bg-white/15 dark:bg-slate-900/15 backdrop-blur-3xl border border-white/25 dark:border-slate-700/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] transition-all duration-500"
            >
              {/* Project Status Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                  project.status === 'completed' 
                    ? 'bg-green-500/90 text-white' 
                    : 'bg-orange-500/90 text-white'
                }`}>
                  {project.status === 'completed' ? 'Completed' : 'In Progress'}
                </div>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-3 py-1 bg-yellow-500/90 backdrop-blur-sm rounded-full flex items-center space-x-1">
                    <Star className="w-3 h-3 text-white fill-current" />
                    <span className="text-xs text-white font-medium">Featured</span>
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.liveUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </motion.a>
                </div>

                {/* Project Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{project.stats.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{project.stats.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{project.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Project Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.slice(0, 2).map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 text-blue-600 dark:text-blue-400 rounded-lg text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                    {project.highlights.length > 2 && (
                      <span className="px-2 py-1 bg-slate-500/20 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-medium">
                        +{project.highlights.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/30 dark:bg-slate-700/30 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-500/20 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/20 dark:border-slate-700/20">
                  <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>2024</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg text-xs font-medium hover:shadow-lg transition-all duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="p-8 rounded-3xl bg-white/20 dark:bg-slate-900/20 backdrop-blur-3xl border border-white/30 dark:border-slate-700/30">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and bring innovative ideas to life. 
              Let's discuss how we can create something amazing together.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Let's Work Together</span>
              <TrendingUp className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;