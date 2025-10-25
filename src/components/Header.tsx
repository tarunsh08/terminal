// components/Header.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor } from 'lucide-react';

interface Section {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface HeaderProps {
  sections: Section[];
  activeSection: string;
  mobileNavOpen: boolean;
  onSectionChange: (section: string) => void;
  onMobileNavToggle: () => void;
  onHomeNavigate: () => void;
}

export const Header = ({
  sections,
  activeSection,
  mobileNavOpen,
  onSectionChange,
  onMobileNavToggle,
  onHomeNavigate
}: HeaderProps) => (
  <motion.header
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50"
  >
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <button 
          onClick={onHomeNavigate}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <Monitor className="w-6 h-6 text-green-400" />
          <h1 className="text-xl font-bold">
            <span className="text-cyan-400">$</span> ./txrun_.sh
          </h1>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
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

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={onMobileNavToggle}
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
    <MobileNav
      sections={sections}
      activeSection={activeSection}
      isOpen={mobileNavOpen}
      onSectionChange={onSectionChange}
      onClose={() => onMobileNavToggle()}
    />
  </motion.header>
);

// Mobile Navigation Sub-component
const MobileNav = ({
  sections,
  activeSection,
  isOpen,
  onSectionChange,
  onClose
}: {
  sections: Section[];
  activeSection: string;
  isOpen: boolean;
  onSectionChange: (section: string) => void;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-2"
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => {
              onSectionChange(section.id);
              onClose();
            }}
            className={`flex items-center space-x-2 w-full text-left px-3 py-2 rounded ${
              activeSection === section.id
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
);