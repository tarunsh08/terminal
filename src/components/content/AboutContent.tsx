export const AboutContent = () => (
  <div className="space-y-6">
    <div className="text-lg leading-relaxed space-y-4">
      <p>
        I'm a <span className="text-cyan-400">Full Stack Developer</span> passionate about building 
        scalable applications with modern technologies. My expertise spans across web development, 
        <span className="text-green-400"> Generative AI</span>, and I'm continuously expanding my 
        knowledge in <span className="text-purple-400">System Design</span> and 
        <span className="text-yellow-400"> DevOps</span>.
      </p>
      <p>
        I enjoy solving complex problems and creating efficient, user-friendly solutions 
        that make a difference. From concept to deployment, I love the entire process of 
        bringing ideas to life.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
          Technical Focus
        </h3>
        <ul className="space-y-2 text-slate-300">
          <li>• Full Stack Development</li>
          <li>• AI Integration</li>
          <li>• System Architecture</li>
          <li>• Cloud & DevOps</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
          Personal Details
        </h3>
        <div className="space-y-2 text-slate-300">
          <p><span className="text-cyan-400">Location:</span> Uttar Pradesh</p>
          <p><span className="text-cyan-400">Status:</span> Open for opportunities</p>
          <p><span className="text-cyan-400">Interests:</span> Tech, AI, System Design</p>
        </div>
      </div>
    </div>
  </div>
);