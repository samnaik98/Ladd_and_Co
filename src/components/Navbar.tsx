import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full bg-primary/90 backdrop-blur-md z-50 border-b border-dark/5"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <Logo variant="header" className="w-9 h-9 transition-transform duration-500 group-hover:scale-105" />
          <span className="font-serif font-medium text-[22px] tracking-wide text-dark group-hover:opacity-80 transition-opacity duration-300">Ladd & Co.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Services', 'Clients', 'Industries', 'Presence'].map((item, i) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              className="font-mono text-[13px] uppercase tracking-widest text-muted hover:text-accent-orange transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Login & Mobile Menu Toggle */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center gap-6"
        >
          <button className="hidden md:block font-mono text-[13px] uppercase tracking-widest font-medium hover:text-accent-orange transition-colors duration-300">
            Client Login
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark hover:text-accent-orange transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-20 left-0 w-full bg-primary border-b border-dark/10 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {['About', 'Services', 'Clients', 'Industries', 'Presence'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)} 
                  className="font-mono text-[13px] uppercase tracking-widest text-dark hover:text-accent-orange transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="w-full h-[1px] bg-dark/10 my-2" />
              <button className="font-mono text-[13px] uppercase tracking-widest font-medium text-left text-dark hover:text-accent-orange transition-colors">
                Client Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
