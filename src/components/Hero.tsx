import profilePic from '../assests/profile.jpg';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/vardhan998997',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/vishnu-vardhan-thota-b2b638266/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'vishnuvardhanthota80@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 125, delay: 0.1 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Available for opportunities
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Hello, I'm </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Vishnu Vardhan Thota
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Full-Stack Developer & Problem Solver
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                A creative problem-solver and full-stack developer with a strong CSE background, focused on delivering purposeful web applications that blend function, performance, and beauty.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a
                    href="https://drive.google.com/file/d/1tnyYbKA1Q_U-675WH0cvnPzymgiRmX5j/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </a>

              </motion.button>
              
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = 'mailto:vishnuvardhanthota80@gmail.com'}
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Get In Touch
                </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
                  variants={itemVariants}
                  className="flex justify-center lg:justify-end py-10 px-4"
                >
                  <div className="relative w-72 h-[350px] sm:w-80 sm:h-[400px]">
                    {/* Rotating colorful gradient ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1 shadow-2xl"
                    >
                      <div className="w-full h-full rounded-[1.8rem] bg-white dark:bg-gray-900"></div>
                    </motion.div>

                    {/* Actual photo (cropped to waist/pocket level) */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      // className="relative z-10 overflow-hidden rounded-[2rem] shadow-2xl"
                    >
                      <img
                        src={profilePic}
                        alt="Vishnu Vardhan"
                        className="w-full rounded-full h-[300px] object-cover object-top"
                      />
                    </motion.div>

                    {/* Floating ⚡ Element */}
                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute top-4 -left-6 w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl"
                    >
                      <span className="text-2xl">⚡</span>
                    </motion.div>

                    {/* Floating 🚀 Element */}
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl"
                    >
                      <span className="text-xl">🚀</span>
                    </motion.div>
                  </div>
                </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
