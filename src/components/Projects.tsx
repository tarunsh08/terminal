
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, user authentication, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration features, and advanced filtering options.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["Vue.js", "Express", "Socket.io", "MongoDB"],
    github: "#",
    live: "#"
  },
  {
    title: "AI-Powered Analytics",
    description: "Data visualization dashboard with machine learning insights, predictive analytics, and customizable reporting features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    github: "#",
    live: "#"
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    tech: ["React Native", "Firebase", "Plaid API"],
    github: "#",
    live: "#"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
