/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className={`flex items-center justify-between px-8 h-16 rounded-full transition-all duration-500 ${isScrolled ? 'bg-[#0D0D0D]/80 backdrop-blur-xl border border-white/5 shadow-2xl' : 'bg-transparent'}`}>
          <nav className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                className="nav-link text-white/70 hover:text-white uppercase tracking-[0.2em] text-[10px] font-bold" 
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <a 
              className="px-6 py-2.5 bg-white text-black font-extrabold rounded-full text-xs hover:bg-primary hover:text-white transition-all shadow-xl active:scale-95 uppercase tracking-widest" 
              href="#contact"
            >
              Hire Me
            </a>
            
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 bg-[#0D0D0D] border border-white/10 rounded-3xl p-8 md:hidden shadow-2xl z-[101]"
          >
            <nav className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  className="text-white/70 hover:text-white uppercase tracking-[0.2em] text-xs font-bold" 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
