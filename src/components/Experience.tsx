import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      company: 'Coding Club',
      position: 'Web Developer Intern',
      location: 'Gujarat, Vadodara',
      period: '2023',
      description: 'Contributed to collaborative tech projects in a team-based development environment, focusing on building and improving web application features.',
      achievements: [
        'Collaborated on full-stack projects with real-world use cases',
        'Improved UI components for better responsiveness and usability',
        'Strengthened development and problem-solving skills alongside peers'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node' , 'Express', 'Mongo','Git']
    },
        {
      type: 'work',
      company: 'Freelance',
      position: 'Full-Stack Developer',
      location: 'Remote',
      period: '2023 - 2025',
      description: 'Worked with clients to design, develop, and deploy custom web solutions tailored to their business needs across various domains.',
      achievements: [
        'Delivered 5+ full-stack web applications with modern UI/UX',
        'Improved client project performance and SEO scores',
        'Handled end-to-end development including hosting and maintenance'
      ],
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS']
    },
  ];


    const education = [
        {
          institution: 'Parul Institute of Engineering And Technology',
          degree: 'Bachelor of Science in Computer Science',
          location: 'Gujarat, Vadodara',
          period: '2022 - 2026',
          gpa: '8.5/10',
          achievements: [
            'Top contributor in Coding Club, actively participated in real-time projects',
            'Qualified for the final round in college-wide Hackathon competition'
          ]
        },
    {
      institution: 'Coding Club',
      degree: 'Full Stack Web Development Certification',
      location: 'Gujarat, Vadodara',
      period: '2023',
      achievements: [
        'Completed 300+ hours of coursework',
        'Built 5 full-stack applications',
        'Contributed to open-source projects'
      ]
    }
  ];

    const certifications = [
      {
      name: 'Computer Networks Certification',
      issuer: 'IIT',
      date: '2024',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Java Programming Certification',
      issuer: 'Oracle Academy',
      date: '2023',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Finalist - National Level Hackathon',
      issuer: 'Smart India Hackathon',
      date: '2024',
      color: 'from-purple-500 to-pink-500'
    }
  ];


  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
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
              Experience & Education
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and continuous learning path
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Work Experience
                </h3>
              </div>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative pl-16"
                    >
                      <div className="absolute left-3 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                      
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap items-start justify-between mb-3">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                              {exp.position}
                            </h4>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold">
                              {exp.company}
                            </p>
                          </div>
                          <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.period}
                            </div>
                            <div className="flex items-center mt-1">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {exp.description}
                        </p>

                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Key Achievements:
                          </h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-700 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {edu.location}
                      </div>
                      {edu.gpa && (
                        <div className="mt-1">
                          <strong>GPA: {edu.gpa}</strong>
                        </div>
                      )}
                    </div>
                    
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-gradient-to-r ${cert.color} p-0.5 rounded-xl`}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;