// components/SectionContent.tsx
import { motion } from 'framer-motion';
import { Section } from '../types';

interface SectionContentProps {
  section: Section;
  content: React.ReactNode;
}

export const SectionContent = ({ section, content }: SectionContentProps) => (
  <motion.div
    key={section.id}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="bg-slate-900 border border-slate-700 rounded-lg p-8"
  >
    <div className="flex items-center space-x-3 mb-6">
      <section.icon className={`w-6 h-6 ${section.color}`} />
      <h2 className="text-2xl font-bold text-white capitalize">
        {section.id}
      </h2>
    </div>
    <div className="space-y-4 text-slate-300">
      {content}
    </div>
  </motion.div>
);