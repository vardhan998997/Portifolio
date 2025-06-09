import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Cloud, Smartphone, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Ejs', level: 90 },
        { name: 'Next.js', level: 35 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 95 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Spring', level: 40 },
      ]
    },
  ];

  const technologies = [
    'React', 'Node.js', 'Next.js', 'Express.js', 'MongoDB', 'Ejs', 'Html', 'CSS', 'JavaScript',
    'PostgreSQL', 'MySQL', 'Tailwind CSS', 'Git', 'Linux', 'Vercel', 'Firebase'
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-700 rounded-full text-blue-700 dark:text-blue-300 font-medium hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-200 dark:border-blue-700">
            <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Full-Stack Development
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              End-to-end application development from concept to deployment
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-200 dark:border-purple-700">
            <Smartphone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Responsive Design
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Creating beautiful experiences across all devices and screen sizes
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-2xl border border-green-200 dark:border-green-700">
            <Cloud className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Cloud Integration
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Scalable solutions using modern cloud platforms and services
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;