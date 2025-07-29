'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
                <span className="text-cyan-400">$</span> ./txrun_.sh
              </h1>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => setActiveSection('terminal')}
                className={`px-3 py-1 rounded transition-colors ${activeSection === 'terminal'
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
                  className={`flex items-center space-x-1 px-3 py-1 rounded transition-colors ${activeSection === section.id
                      ? `bg-${section.color.split('-')[1]}-400/20 ${section.color}`
                      : 'text-slate-400 hover:text-green-400'
                    }`}
                >
                  <section.icon size={16} />
                  <span>{section.name}</span>
                </button>
              ))}
            </nav>

            {/* Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="text-green-400 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {mobileNavOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileNavOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-2"
            >
              <button
                onClick={() => {
                  setActiveSection('terminal');
                  setMobileNavOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded ${activeSection === 'terminal'
                    ? 'bg-green-400/20 text-green-400'
                    : 'text-slate-400 hover:text-green-400'
                  }`}
              >
                Terminal
              </button>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setMobileNavOpen(false);
                  }}
                  className={`flex items-center space-x-2 w-full text-left px-3 py-2 rounded ${activeSection === section.id
                      ? `bg-${section.color.split('-')[1]}-400/20 ${section.color}`
                      : 'text-slate-400 hover:text-green-400'
                    }`}
                >
                  <section.icon size={16} />
                  <span>{section.name}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
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
                <span className="text-cyan-400">Not just a Portfolio</span>{' '}
                <span className="text-green-400">Its my playground</span>
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
                    I'm a passionate full-stack developer
                    building scalable web applications. I love turning complex problems
                    into simple, beautiful designs.
                  </p>
                  <div className="space-y-2">
                    <p><span className="text-cyan-400">Location:</span> Uttar Pradesh</p>
                    <p><span className="text-cyan-400">Focus:</span> Full Stack Development</p>
                  </div>
                </div>
              )}

              {activeSection === 'skills' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-green-400 font-semibold mb-3">Frontend</h3>
                    <ul className="space-y-1">
                      <li>React & Next.js</li>
                      <li>Typescript & Javascript</li>
                      <li>Tailwind CSS & Bootstrap</li>
                      <li>GSAP & Framer Motion</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-purple-400 font-semibold mb-3">Backend</h3>
                    <ul className="space-y-1">
                      <li>Node.js & Express.js</li>
                      <li>Firebase & MongoDB</li>
                      <li>REST APIs & Supabase</li>
                      <li>Docker & Socket.io</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === 'projects' && (
                <div className="space-y-6">
                  {/* Project 1 */}
                  <div className="border border-slate-700 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">AI Code Collaborator</h3>
                    <p className="text-slate-400 mb-2">
                      A project management platform with integrated AI coding assistant. Users can collaborate in real-time, tag AI to generate code snippets, and debug in a Node.js environment using WebContainers. Features include live chat, built-in IDE, and terminal access.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3 sm:gap-x-3 md:gap-x-4">
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">React</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">Node.js</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">Socket.io</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">WebContainers</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">MongoDB</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">Redis</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">Langchain</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">Tailwind CSS</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">GSAP</span>
                    </div>
                    <div className="flex space-x-4">
                      <a href="https://github.com/tarunsh08/RoboDev" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                      <a href="https://robodev-frontend.onrender.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="border border-slate-700 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">UI Components Library</h3>
                    <p className="text-slate-400 mb-2">
                    Engineered Eatech with 50+ reusable modern UI components. Enabled easy integration by allowing users to install components via CLI. Integrated a Next.js documentation bot to assist users with technical queries. Created clear, beginner-friendly documentation to support adoption.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3 sm:gap-x-3 md:gap-x-4">
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">Next.js</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">Tailwind CSS</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">Shadcn</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">MDX</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">Botpress</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">Fumadocs</span>
                    </div>
                    <div className="flex space-x-4">
                      <a href="https://github.com/tarunsh08/AI-Lib" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                      <a href="https://ai-lib-rust.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="border border-slate-700 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">Fitness Platform</h3>
                    <p className="text-slate-400 mb-2">
                    Built a fitness platform to support users in their fitness journey. Enabled users to purchase customized plans or access beginner-friendly content for free. Provided personalized diet and workout plans based on selected goals. Built a social dashboard where users post updates, fostering motivation and discipline.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3 sm:gap-x-3 md:gap-x-4">
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">Next.js</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">Supabase</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">Razorpay</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">MongoDB</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded">Tailwind CSS</span>
                    </div>
                    <div className="flex space-x-4">
                      <a href="https://github.com/tarunsh08/ProjectFitness" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                      <a href="https://project-fitness-azure.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>

                  <a href="https://github.com/tarunsh08" target="_blank" rel="noopener noreferrer" className="mx-auto text-sm bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded-md flex items-center transition-colors w-20">
                    See more on GitHub
                  </a>
                </div>
              )}

              {activeSection === 'contact' && (
                <div className="space-y-2">
                  <p>
                    <span className="text-cyan-400">Email:</span>
                    <a href="mailto:tarunsharma08.com@gmail.com" className="hover:underline">
                      tarunsharma08.com@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="text-cyan-400">GitHub:</span>
                    <a href="https://github.com/tarunsh08" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      github.com/tarunsh08
                    </a>
                  </p>
                  <p>
                    <span className="text-cyan-400">LinkedIn:</span>
                    <a href="https://linkedin.com/in/tarun-sharma-a0a5552b4" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      linkedin.com/in/tarun-sharma-a0a5552b4
                    </a>
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
