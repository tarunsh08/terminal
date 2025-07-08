
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingGeometry({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
      
      <FloatingGeometry position={[-3, 2, 0]} color="#6366f1" />
      <FloatingGeometry position={[3, -1, -2]} color="#ec4899" />
      <FloatingGeometry position={[0, 3, -3]} color="#10b981" />
      <FloatingGeometry position={[-2, -2, 1]} color="#f59e0b" />
      
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Three.js Canvas Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack
            <br />
            Developer
          </motion.h1>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Crafting digital experiences with modern technologies
          <br />
          Passionate about clean code and innovative solutions
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transform transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          
          <motion.button 
            className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transform transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/70" />
      </motion.div>
    </section>
  );
};
