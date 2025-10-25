import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HomeContentProps {
  onNavigate: (section: string) => void;
}

const Scene3DBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create central sphere with animated materials
    const sphereGeometry = new THREE.SphereGeometry(1.5, 64, 64);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x06b6d4,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.5,
      shininess: 100,
      specular: 0x22d3ee,
      transparent: true,
      opacity: 0.8,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 3;
    scene.add(sphere);

    const rings: THREE.Mesh[] = [];
    const ringColors = [0x06b6d4, 0x0ea5e9, 0x22d3ee, 0x67e8f9];

    for (let i = 0; i < 4; i++) {
      const ringGeometry = new THREE.TorusGeometry(2.5 + i * 0.3, 0.03, 16, 100);
      const ringMaterial = new THREE.MeshPhongMaterial({
        color: ringColors[i],
        emissive: ringColors[i],
        emissiveIntensity: 0.8,
        transparent: true,
        opacity: 0.6,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 4 + (i * Math.PI / 8);
      ring.rotation.y = i * Math.PI / 6;
      ring.position.x = 3;
      rings.push(ring);
      scene.add(ring);
    }

    const icoGeometry = new THREE.IcosahedronGeometry(4, 0);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    icosahedron.position.x = 3;
    scene.add(icosahedron);

    const cubes: THREE.Mesh[] = [];
    for (let i = 0; i < 12; i++) {
      const cubeGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.15);
      const cubeMaterial = new THREE.MeshPhongMaterial({
        color: 0x22d3ee,
        emissive: 0x22d3ee,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.7,
      });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      const angle = (i / 12) * Math.PI * 2;
      cube.position.x = Math.cos(angle) * 6 + 3;
      cube.position.y = Math.sin(angle) * 3;
      cube.position.z = Math.sin(angle) * 6;
      cubes.push(cube);
      scene.add(cube);
    }

    // Enhanced particle system spread across the scene
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      const color = new THREE.Color(ringColors[Math.floor(Math.random() * ringColors.length)]);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 2, 50);
    pointLight1.position.set(8, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x22d3ee, 2, 50);
    pointLight2.position.set(-2, -5, 5);
    scene.add(pointLight2);

    camera.position.z = 12;
    camera.position.x = -2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      sphere.rotation.y += 0.005;
      sphere.scale.set(
        1 + Math.sin(time * 2) * 0.05,
        1 + Math.sin(time * 2) * 0.05,
        1 + Math.sin(time * 2) * 0.05
      );

      rings.forEach((ring, i) => {
        ring.rotation.z += 0.01 * (i + 1);
        ring.rotation.x += 0.005 * (i % 2 ? 1 : -1);
      });

      icosahedron.rotation.x += 0.002;
      icosahedron.rotation.y += 0.003;

      cubes.forEach((cube, i) => {
        const angle = time + (i / 12) * Math.PI * 2;
        cube.position.x = Math.cos(angle) * 6 + 3;
        cube.position.y = Math.sin(time * 2 + i) * 3;
        cube.position.z = Math.sin(angle) * 6;
        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
      });

      particles.rotation.y += 0.0003;
      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + i) * 0.001;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      pointLight1.position.x = Math.cos(time) * 5 + 3;
      pointLight1.position.z = Math.sin(time) * 5;
      pointLight2.position.x = Math.cos(time + Math.PI) * 5 + 3;
      pointLight2.position.z = Math.sin(time + Math.PI) * 5;

      // Subtle camera movement based on mouse
      camera.position.x += (mouseRef.current.x * 1 - 2 - camera.position.x) * 0.03;
      camera.position.y += (mouseRef.current.y * 1 - camera.position.y) * 0.03;
      camera.lookAt(3, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />
  );
};

export const HomeContent = ({ onNavigate }: HomeContentProps) => (
  <div className="relative min-h-[80vh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-lg overflow-hidden">
    <Scene3DBackground />

    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent" style={{ zIndex: 1 }} />

    <main className="relative container mx-auto px-6 py-12" style={{ zIndex: 2 }}>
      <div className="flex flex-col md:flex-row items-center justify-between min-h-[70vh]">
        <motion.div
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-cyan-400">Tarun Sharma</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-8">
            • Full Stack <br />• <span className="text-green-400">GenAI</span> <br />• DevOps <br />• <span className="text-purple-400">System Design</span>
          </h2>
          <p className="text-slate-300 mb-8 max-w-lg">
            <span className='text-xl text-cyan-400'>Not Just a <span className='text-white'>Portfolio</span></span>
            <br />
            <span className='text-xl text-green-400'>Its my Playground</span>
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => onNavigate('projects')}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center transition-colors shadow-lg shadow-cyan-500/30"
            >
              View My Work <FiArrowRight className="ml-2" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="border-2 border-slate-700 hover:border-green-400 text-slate-300 hover:text-white px-8 py-3 rounded-full font-medium flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              Contact Me
            </button>
          </div>
          <div className="flex mt-12 space-x-6">
            <a href="https://github.com/tarunsh08" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/tarun-sharma-a0a5552b4" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:tarunsharma08.com@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <FiMail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
        </motion.div>
      </div>
    </main>
  </div>
);