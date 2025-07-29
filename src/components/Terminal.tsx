
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minimize2, Maximize2 } from 'lucide-react';

interface TerminalLine {
  id: string;
  type: 'command' | 'output' | 'error';
  content: string;
  timestamp?: Date;
}

const commands = {
  help: {
    description: 'Show available commands',
    output: [
      'Available commands:',
      '  about     - Show information about me',
      '  skills    - List my technical skills',
      '  projects  - Display my projects',
      '  contact   - Get my contact information',
      '  clear     - Clear the terminal',
      '  whoami    - Display current user info',
      '  ls        - List available sections',
      '  cat       - Read file contents (e.g., cat resume.txt)',
    ]
  },
  about: {
    description: 'Show about information',
    output: [
      'Full Stack Developer',
      '----------------------------------------',
      'Passionate about creating scalable web applications',
      'and turning complex problems into elegant solutions.',
      '',
      'I specialize in modern JavaScript frameworks,',
      'backend systems, and cloud architecture.',
    ]
  },
  skills: {
    description: 'List technical skills',
    output: [
      'Technical Skills:',
      '================',
      'Frontend: React, TypeScript, Next.js',
      'Backend:  Node.js, Express.js,Firebase,Supabase,Redis, MongoDB',
      'Tools:    Docker, Git,Github, Socket.io, WebContainer',
      'Design:   Tailwind CSS, Bootstrap,GSAP, Framer Motion',
    ]
  },
  projects: {
    description: 'Show projects',
    output: [
      'Recent Projects:',
      '===============',
      '1. RoboDev IDE+Chat - React, Node.js,Express.js,Redis,Langchain, MongoDB, Socket.io,WebContainer, GSAP, Tailwind CSS',
      '2. UI Component Library - Next.js, TypeScript,MDX,Botpress,Fumadocs,Shadcn, Tailwind CSS',
      '3. Fitness Platform - Next.js, TypeScript,MongoDB,Supabase,Razorpay, Tailwind CSS',
      '4. Remix Gallery - Next.js, TypeScript, Replicate, Tailwind CSS',
    ]
  },
  contact: {
    description: 'Get contact information',
    output: [
      'Contact Information:',
      '==================',
      'Email: tarunsharma08.com@gmail.com',
      'GitHub: github.com/tarunsh08',
      'LinkedIn: https://www.linkedin.com/in/tarun-sharma-a0a5552b4',
    ]
  },
  whoami: {
    description: 'Current user info',
    output: ['tarun@portfolio:~$ Full Stack Developer']
  },
  ls: {
    description: 'List sections',
    output: ['about', 'skills', 'projects', 'contact', 'resume']
  },
  resume: {
    description: 'Provide Resume',
    output: [
      <object
        key="resume"
        data="/TarunFullStack%20(1).pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      >
        <p>
          Your web browser doesn't have a PDF plugin. Instead you can{' '}
          <a href="/TarunFullStack%20(1).pdf">download the PDF</a>.
        </p>
      </object>
    ]
  },
  clear: {
    description: 'Clear terminal',
    output: []
  }
};

export const Terminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: '1',
      type: 'output',
      content: "Welcome to Tarun's Portfolio Terminal v1.0.0",
    },
    {
      id: '2',
      type: 'output',
      content: 'Type "help" to see available commands.',
    }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = async (command: string) => {
    const trimmedCommand = command.trim().toLowerCase();
    const newLine: TerminalLine = {
      id: Date.now().toString(),
      type: 'command',
      content: `tarun@portfolio:~$ ${command}`,
      timestamp: new Date()
    };

    setLines(prev => [...prev, newLine]);
    setCurrentInput('');
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    if (trimmedCommand === 'clear') {
      setLines([]);
      setIsTyping(false);
      return;
    }

    const cmd = commands[trimmedCommand as keyof typeof commands];
    if (cmd) {
      const outputLines = cmd.output.map((line, index) => ({
        id: `${Date.now()}-${index}`,
        type: 'output' as const,
        content: line
      }));
      setLines(prev => [...prev, ...outputLines]);
    } else {
      setLines(prev => [...prev, {
        id: Date.now().toString(),
        type: 'error',
        content: `Command not found: ${trimmedCommand}. Type "help" for available commands.`
      }]);
    }
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentInput.trim()) {
      handleCommand(currentInput);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`bg-slate-900 border border-slate-700 rounded-lg shadow-2xl font-mono text-sm ${
        isMinimized ? 'h-12' : 'h-[calc(100vh-200px)]'
      } transition-all duration-300`}
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-slate-800 px-4 py-2 rounded-t-lg border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-slate-300 text-xs">tarun@portfolio:~</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col flex-grow"
            style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div
              ref={terminalRef}
              className="flex-1 p-4 space-y-1 text-green-400 overflow-y-auto custom-scrollbar"
            >
              {lines.map((line) => (
                <motion.div
                  key={line.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${
                    line.type === 'command'
                      ? 'text-cyan-400'
                      : line.type === 'error'
                      ? 'text-red-400'
                      : 'text-green-400'
                  }`}
                >
                  {line.content}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-green-400"
                >
                  _
                </motion.div>
              )}
            </div>

            {/* Input Line */}
            <div className="flex items-center px-4 py-2 border-t border-slate-700">
              <span className="text-cyan-400 mr-2">tarun@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-transparent text-green-400 outline-none caret-green-400"
                placeholder="Type a command..."
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
