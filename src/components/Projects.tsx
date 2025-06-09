import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'WanderLust',
      description: 'Wanderlust is a full-stack travel booking platform inspired by Airbnb, allowing users to explore stays and book accommodations through a smooth, responsive interface.',
      image: 'https://etimg.etb2bimg.com/thumb/msid-99990806,imgsize-287108,width-1200,height=765,overlay-ettravel/hospitality/airbnb-launches-new-rooms-category-as-night-stays-in-india-grow-by-over-80.jpg',
      technologies: ['Ejs','JavaScript', 'Node.js', 'Express.js', 'Mongodb'],
      liveUrl: 'https://wandernest-el6k.onrender.com/listings',
      githubUrl: 'https://github.com/vardhan998997/Wanderlust.git',
      featured: false,
      status: 'Live'
    },
    {
      title: 'Travel Agency',
      description: 'WoyTrip.com is a travel agency that offers personalized trip planning and booking for hotels and tours, making travel easy and enjoyable.',
      image: 'https://img.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg?semt=ais_hybrid&w=740',
      technologies: ['React.js', 'Node.js', 'Mongodb', 'Cloudinary', 'Tailwind CSS'],
      liveUrl: 'https://Woytrip.com',
      githubUrl: 'https://github.com/vardhan998997/Woytrip',
      featured: false,
      status: 'Live'
    },
    {
      title: 'RealEstate Dashboard',
      description: 'A clean and responsive real estate front-end UI that enables users to easily browse and filter property listings, view detailed information, and connect with agents smoothly on any device.',
      image: 'https://thumbs.dreamstime.com/b/residential-real-estate-buying-selling-renting-homes-apartments-condos-townhouses-investment-shelter-expert-guidance-318813833.jpg',
      technologies: ['React', 'tailwind.css', 'Cloudinary' , 'W3Forms' , 'CSS'],
      liveUrl: 'https://real-estate-five-eta-49.vercel.app/',
      githubUrl: 'https://github.com/vardhan998997/Real-Estate',
      featured: false,
      status: 'Live'
    },
    {
      title: 'E-Commerce Front-end Platform',
      description: 'Designed for a smooth and responsive shopping experience.Users can browse, filter, and view product details with ease. Includes cart handling and a streamlined checkout flow.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://react-e-mark.vercel.app/fridge',
      githubUrl: 'https://github.com/vardhan998997/React-E-Mark.git',
      featured: false,
      status: 'Live'
    },
    {
      title: 'ShopLoom ',
      description: 'A complete platform for browsing, cart management, and secure checkout. Includes user login, admin controls, and a responsive design for all devices.',
      image: 'https://deerdesigner.com/wp-content/uploads/2024/05/Article-34-ecommerce-design-01.png',
      technologies: ['React', 'TailwindCss', 'Node', 'Express', 'FastAPI', 'Cloudinary', 'JwtTokens', 'Mongodb'],
      liveUrl: 'https://ai-image-gen.com',
      githubUrl: 'https://github.com/vardhan998997/-ShopLoom.git',
      featured: false,
      status: 'Coming Soon'
    },
    {
      title: 'SkillCircle && StudyCircle',
      description: 'A collaborative platform connecting learners to share educational resources and find study partners and learning with tools for resource sharing and partner matching.',
      image: 'https://img.freepik.com/free-vector/side-view-boys-using-laptop-communicate-video-conference-with-teacher-friends-white_1308-52324.jpg?semt=ais_hybrid&w=740',
      technologies: ['React', 'Express', 'Node.js', 'MongoDB', 'Sockets', 'JwtTokens','TailwindCSS'],
      liveUrl: '',
      githubUrl: 'https://github.com/vardhan998997/SkillCircle.git',
      featured: false,
      status: 'Coming Soon'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                    
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : project.status === 'Beta'
                        ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                </div>

                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xs font-medium text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-700 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
           <a href="https://github.com/vardhan998997"> View More on GitHub </a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
