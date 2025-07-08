
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Vue.js, Tailwind CSS"
  },
  {
    icon: Zap,
    title: "Backend Development", 
    description: "Node.js, Python, PostgreSQL, MongoDB, REST APIs"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Responsive Design, User Experience"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Git, Agile, Team Leadership, Code Reviews"
  }
];

export const About = () => {
  return (
    <section className="py-20 bg-slate-900" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience building 
            scalable web applications. I love turning complex problems into simple, 
            beautiful designs and bringing ideas to life through code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <skill.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
