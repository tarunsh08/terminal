
// Update this page (the content is just a fallback if you fail to update the page)

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Full Stack Developer Portfolio. Built with React, Three.js & Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
