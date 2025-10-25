export const SkillsContent = () => (
  <div className="space-y-8">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Frontend */}
      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
        <h3 className="text-green-400 font-semibold mb-3 flex items-center">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
          Frontend
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            React & Next.js
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            TypeScript & JavaScript
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Tailwind CSS & Bootstrap
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            GSAP & Framer Motion
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Redux & State Management
          </li>
        </ul>
      </div>

      {/* Backend */}
      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
        <h3 className="text-purple-400 font-semibold mb-3 flex items-center">
          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
          Backend
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Node.js & Express.js
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Next.js API Routes
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            REST APIs
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Authentication & JWT
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            WebSockets & Socket.io
          </li>
        </ul>
      </div>

      {/* Databases */}
      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
        <h3 className="text-blue-400 font-semibold mb-3 flex items-center">
          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
          Databases
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            MongoDB(Mongoose)
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            PostgreSQL(Prisma)
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Firebase & Firestore
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Redis & Caching
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Supabase
          </li>
        </ul>
      </div>

      {/* AI & ML */}
      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
        <h3 className="text-yellow-400 font-semibold mb-3 flex items-center">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
          GenAI
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            LangChain & LLM Integration
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            OpenAI & Gemini APIs
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Vector Databases
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            RAG Systems
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            AI Agent Development
          </li>
        </ul>
      </div>

      {/* DevOps & Cloud */}
      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
        <h3 className="text-red-400 font-semibold mb-3 flex items-center">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
          DevOps & Cloud
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Docker & Containerization
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            AWS & Vercel Deployment
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            CI/CD Pipelines
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Nginx & Load Balancing
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Monitoring & Logging
          </li>
        </ul>
      </div>

      {/* Tools & Others */}
      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
        <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
          Tools & Others
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Git & GitHub
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Postman & API Testing
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Webpack & Vite
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Jest & Testing
          </li>
          <li className="flex items-center">
            <span className="text-cyan-400 mr-2">›</span>
            Linux & Bash
          </li>
        </ul>
      </div>
    </div>

    {/* Learning Section */}
    <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-600">
      <h3 className="text-white font-semibold mb-2 flex items-center">
        <span className="text-green-400 mr-2">⟳</span>
        Currently Learning & Exploring
      </h3>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">System Design</span>
        <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">Microservices</span>
        <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">Kubernetes</span>
        <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">AWS Advanced</span>
      </div>
    </div>
  </div>
);