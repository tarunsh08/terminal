
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from './Terminal';
import { Code, User, Briefcase, Mail, Monitor } from 'lucide-react';

const sections = [
  { id: 'about', name: 'About', icon: User, color: 'text-blue-400' },
  { id: 'skills', name: 'Skills', icon: Code, color: 'text-green-400' },
  { id: 'projects', name: 'Projects', icon: Briefcase, color: 'text-purple-400' },
  { id: 'contact', name: 'Contact', icon: Mail, color: 'text-red-400' },
];

export const TerminalPortfolio = () => {
  const [activeSection, setActiveSection] = useState('terminal');

  return (
    <div className="min-h-screen bg-slate-950 text-green-400 font-mono">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Monitor className="w-6 h-6 text-green-400" />
              <h1 className="text-xl font-bold">
                <span className="text-cyan-400">$</span> ./portfolio.sh
              </h1>
            </div>
            
            <nav className="flex space-x-6">
              <button
                onClick={() => setActiveSection('terminal')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeSection === 'terminal'
                    ? 'bg-green-400/20 text-green-400'
                    : 'text-slate-400 hover:text-green-400'
                }`}
              >
                Terminal
              </button>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-1 px-3 py-1 rounded transition-colors ${
                    activeSection === section.id
                      ? `bg-${section.color.split('-')[1]}-400/20 ${section.color}`
                      : 'text-slate-400 hover:text-green-400'
                  }`}
                >
                  <section.icon size={16} />
                  <span>{section.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {activeSection === 'terminal' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold"
              >
                <span className="text-cyan-400">Welcome to my</span>{' '}
                <span className="text-green-400">Interactive Portfolio</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-slate-400 text-lg"
              >
                Navigate through my portfolio using terminal commands or the menu above
              </motion.p>
            </div>
            
            <Terminal />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveSection(section.id)}
                  className="bg-slate-900 border border-slate-700 rounded-lg p-6 cursor-pointer hover:border-green-400/50 transition-all"
                >
                  <section.icon className={`w-8 h-8 ${section.color} mb-4`} />
                  <h3 className="text-white font-semibold mb-2">{section.name}</h3>
                  <p className="text-slate-400 text-sm">
                    Click to explore or type "{section.id}" in terminal
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Content Sections */}
        {activeSection !== 'terminal' && (
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-slate-900 border border-slate-700 rounded-lg p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              {(() => {
                const section = sections.find(s => s.id === activeSection)!
                return section.icon && <section.icon className={`w-6 h-6 ${section.color}`} />
              })()}
              <h2 className="text-2xl font-bold text-white capitalize">
                {activeSection}
              </h2>
            </div>
            
            {/* Dynamic content based on active section */}
            <div className="space-y-4 text-slate-300">
              {activeSection === 'about' && (
                <div>
                  <p className="mb-4">
                    I'm a passionate full-stack developer with 5+ years of experience 
                    building scalable web applications. I love turning complex problems 
                    into simple, beautiful designs.
                  </p>
                  <div className="space-y-2">
                    <p><span className="text-cyan-400">Location:</span> Remote</p>
                    <p><span className="text-cyan-400">Experience:</span> 5+ Years</p>
                    <p><span className="text-cyan-400">Focus:</span> Full Stack Development</p>
                  </div>
                </div>
              )}

              {activeSection === 'skills' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-green-400 font-semibold mb-3">Frontend</h3>
                    <ul className="space-y-1">
                      <li>React & TypeScript</li>
                      <li>Next.js & Vue.js</li>
                      <li>Tailwind CSS</li>
                      <li>Three.js & Animations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-purple-400 font-semibold mb-3">Backend</h3>
                    <ul className="space-y-1">
                      <li>Node.js & Python</li>
                      <li>PostgreSQL & MongoDB</li>
                      <li>REST APIs & GraphQL</li>
                      <li>Docker & AWS</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === 'projects' && (
                <div className="space-y-6">
                  {[1, 2, 3].map((project) => (
                    <div key={project} className="border border-slate-700 rounded-lg p-4">
                      <h3 className="text-white font-semibold mb-2">Project {project}</h3>
                      <p className="text-slate-400 mb-2">
                        Description of the project and technologies used.
                      </p>
                      <div className="flex space-x-2">
                        <span className="text-xs bg-slate-800 px-2 py-1 rounded">React</span>
                        <span className="text-xs bg-slate-800 px-2 py-1 rounded">Node.js</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === 'contact' && (
                <div className="space-y-4">
                  <p>Let's connect and discuss opportunities!</p>
                  <div className="space-y-2">
                    <p><span className="text-cyan-400">Email:</span> developer@example.com</p>
                    <p><span className="text-cyan-400">GitHub:</span> github.com/developer</p>
                    <p><span className="text-cyan-400">LinkedIn:</span> linkedin.com/in/developer</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
