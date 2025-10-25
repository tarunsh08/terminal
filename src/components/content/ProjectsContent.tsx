import { Star } from "lucide-react";

export const ProjectsContent = () => (
  <div className="space-y-8">
    <div className="grid gap-8">
      <ProjectItem
        title="RoboDev: AI Code Collaborator"
        description="A project management platform with integrated AI coding assistant. Users can collaborate in real-time, tag AI to generate code snippets, and debug in a Node.js environment using WebContainers. Features include live chat, built-in IDE, and terminal access."
        technologies={["React", "Node.js", "Socket.io", "WebContainers", "MongoDB", "Redis", "Langchain", "Tailwind CSS", "GSAP"]}
        githubUrl="https://github.com/tarunsh08/RoboDev"
        demoUrl="https://robodev-frontend.onrender.com"
        featured={true}
        imageUrl="/robodev-demo.png" 
        imageAlt="RoboDev AI Code Collaborator Interface"
      />
      
      <ProjectItem
        title="Eatech: UI Components Library"
        description="Engineered Eatech with 50+ reusable modern UI components. Enabled easy integration by allowing users to install components via CLI. Integrated a Next.js documentation bot to assist users with technical queries. Created clear, beginner-friendly documentation to support adoption."
        technologies={["Next.js", "Tailwind CSS", "Shadcn", "MDX", "Botpress", "Fumadocs"]}
        githubUrl="https://github.com/tarunsh08/AI-Lib"
        demoUrl="https://ai-lib-rust.vercel.app"
        featured={true}
        imageUrl="/eatech-demo.png"
        imageAlt="Eatech UI Components Library"
      />

      <ProjectItem
        title="Shelter: Rent or Sell Properties"
        description="A comprehensive real estate platform for renting and selling properties. Features advanced search filters, property comparisons, virtual tours, and secure payment integration. Built with modern web technologies for optimal performance and user experience."
        technologies={["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth", "Stripe"]}
        githubUrl="https://github.com/tarunsh08/Shelter"
        demoUrl="https://real-estate-ac5w.vercel.app"
        imageUrl="/shelter-demo.png"
        imageAlt="Shelter Real Estate Platform"
      />

      <ProjectItem
        title="Fitness Platform"
        description="Built a fitness platform to support users in their fitness journey. Enabled users to purchase customized plans or access beginner-friendly content for free. Provided personalized diet and workout plans based on selected goals. Built a social dashboard where users post updates, fostering motivation and discipline."
        technologies={["Next.js", "Supabase", "Razorpay", "MongoDB", "Tailwind CSS"]}
        githubUrl="https://github.com/tarunsh08/ProjectFitness"
        demoUrl="https://project-fitness-azure.vercel.app"
        imageUrl="/fitness-demo.png"
        imageAlt="Fitness Platform Dashboard"
      />
    </div>

    <div className="text-center pt-4">
      <a 
        href="https://github.com/tarunsh08" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors text-cyan-400 hover:text-cyan-300"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
        Explore More on GitHub
      </a>
    </div>
  </div>
);

// Project Item Sub-component
const ProjectItem = ({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  featured = false,
  imageUrl,
  imageAlt
}: {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
  imageUrl: string;
  imageAlt: string;
}) => (
  <div className={`group border border-slate-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-800/30 ${
    featured ? 'bg-slate-800/50 border-cyan-400/30' : 'bg-slate-900/50'
  }`}>
    <div className="flex flex-col lg:flex-row">
      {/* Project Image */}
      <div className="lg:w-2/5">
        <div className="relative h-64 lg:h-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300" />
          {featured && (
            <span className="absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-full text-xs bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 backdrop-blur-sm">
              <Star className="mr-1" size={10}/> Featured
            </span>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="lg:w-3/5 p-6 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
            {title}
          </h3>
          
          <p className="text-slate-300 mb-4 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300 hover:bg-slate-700 hover:border-slate-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-3 pt-4 border-t border-slate-700">
          <ProjectLink href={githubUrl} icon="github" text="Code" />
          <ProjectLink href={demoUrl} icon="external" text="Live Demo" />
        </div>
      </div>
    </div>
  </div>
);

// Alternative compact layout (if you prefer side-by-side images)
const ProjectItemCompact = ({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  featured = false,
  imageUrl,
  imageAlt
}: {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
  imageUrl: string;
  imageAlt: string;
}) => (
  <div className={`group border border-slate-700 rounded-lg p-6 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-800/30 ${
    featured ? 'bg-slate-800/50 border-cyan-400/30' : 'bg-slate-900/50'
  }`}>
    <div className="flex flex-col md:flex-row gap-6">
      {/* Project Image - Compact */}
      <div className="md:w-2/5">
        <div className="relative h-48 rounded-lg overflow-hidden">
          <img 
            src={imageUrl} 
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300" />
        </div>
      </div>

      {/* Project Content */}
      <div className="md:w-3/5 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          {featured && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-cyan-400/20 text-cyan-400 border border-cyan-400/30">
              ⭐ Featured
            </span>
          )}
        </div>
        
        <p className="text-slate-300 mb-4 leading-relaxed flex-1">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300 hover:bg-slate-700 hover:border-slate-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <ProjectLink href={githubUrl} icon="github" text="Code" />
          <ProjectLink href={demoUrl} icon="external" text="Live Demo" />
        </div>
      </div>
    </div>
  </div>
);

// Project Link Sub-component (unchanged)
const ProjectLink = ({ href, icon, text }: { href: string; icon: 'github' | 'external'; text: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-md transition-all duration-200 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:scale-105"
  >
    {icon === 'github' ? (
      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ) : (
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    )}
    {text}
  </a>
);