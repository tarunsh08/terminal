
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">hello@developer.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 bg-slate-700 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 bg-slate-700 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-6 h-6 text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
