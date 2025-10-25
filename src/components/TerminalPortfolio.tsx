// components/TerminalPortfolio.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from './Terminal';
import { HomeContent } from '@/pages/Home';
import { Header } from './Header';
import { SectionContent } from './SectionContent';
import { AboutContent } from './content/AboutContent';
import { SkillsContent } from './content/SkillsContent';
import { ProjectsContent } from './content/ProjectsContent';
import { ContactContent } from './content/ContactContent';
import { Code, User, Briefcase, Mail, Home, Terminal as TerminalIcon } from 'lucide-react';
import { Section } from '../types';

const sections: Section[] = [
  { id: 'home', name: 'Home', icon: Home, color: 'text-cyan-400' },
  { id: 'terminal', name: 'Terminal', icon: TerminalIcon, color: 'text-green-400' },
  { id: 'about', name: 'About', icon: User, color: 'text-blue-400' },
  { id: 'skills', name: 'Skills', icon: Code, color: 'text-green-400' },
  { id: 'projects', name: 'Projects', icon: Briefcase, color: 'text-purple-400' },
  { id: 'contact', name: 'Contact', icon: Mail, color: 'text-red-400' },
];

export const TerminalPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const handleMobileNavToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeContent onNavigate={handleSectionChange} />;
      
      case 'terminal':
        return <Terminal onNavigate={handleSectionChange} sections={sections} />;
      
      case 'about':
        return (
          <SectionContent 
            section={sections.find(s => s.id === 'about')!} 
            content={<AboutContent />} 
          />
        );
      
      case 'skills':
        return (
          <SectionContent 
            section={sections.find(s => s.id === 'skills')!} 
            content={<SkillsContent />} 
          />
        );
      
      case 'projects':
        return (
          <SectionContent 
            section={sections.find(s => s.id === 'projects')!} 
            content={<ProjectsContent />} 
          />
        );
      
      case 'contact':
        return (
          <SectionContent 
            section={sections.find(s => s.id === 'contact')!} 
            content={<ContactContent />} 
          />
        );
      
      default:
        return <HomeContent onNavigate={handleSectionChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-green-400 font-mono">
      <Header
        sections={sections}
        activeSection={activeSection}
        mobileNavOpen={mobileNavOpen}
        onSectionChange={handleSectionChange}
        onMobileNavToggle={handleMobileNavToggle}
        onHomeNavigate={() => handleSectionChange('home')}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {renderContent()}
      </div>
    </div>
  );
};