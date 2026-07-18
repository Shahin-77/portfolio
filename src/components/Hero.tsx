/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Github, Linkedin, Trophy, FileText, Mail } from 'lucide-react';
import FadeIn from './FadeIn';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient pt-20">
      {/* Light streaks/glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] left-[10%] w-24 h-24 border border-white/20 rounded-2xl"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, 20, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[60%] right-[15%] w-32 h-32 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[15%] right-[30%] w-16 h-16 bg-white/5 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] left-[20%] w-40 h-40 border-t border-l border-white/10 rounded-tl-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 items-center w-full gap-12 max-w-7xl relative z-10">
        <div className="py-12 lg:py-24 text-white">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] bg-white/10 px-4 py-2 rounded mb-8">
              Crafting Scalable Digital Solutions
            </span>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-[0.9] tracking-tighter drop-shadow-2xl font-display">
              HI, I'M<br />
              <span className="text-white">{personalInfo.name.toUpperCase()}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-2xl md:text-3xl font-bold text-white/90 mb-8 tracking-tight uppercase flex overflow-hidden">
              {personalInfo.role.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.5 + index * 0.05,
                    ease: "easeIn"
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5 + personalInfo.role.length * 0.05
                }}
                className="inline-block w-1 h-8 md:h-9 bg-white ml-1"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-xl leading-relaxed font-medium">
              {personalInfo.subtext}
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-wrap gap-4 items-center">
            <a 
              className="px-10 py-5 bg-white text-primary-dark rounded-full font-extrabold hover:scale-105 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] active:scale-95 flex items-center gap-2" 
              href="#projects"
            >
              VIEW PROJECTS
            </a>
            <a 
              className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-extrabold hover:bg-white/10 transition-all active:scale-95 flex items-center gap-2" 
              href="#contact"
            >
              CONTACT ME
            </a>
            <a 
              className="p-5 border-2 border-white/30 text-white rounded-full font-extrabold hover:bg-white/10 transition-all active:scale-95 group" 
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View Resume"
            >
              <FileText className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </FadeIn>

          <FadeIn delay={0.5} className="mt-16 flex gap-6">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10">
              <Github className="w-6 h-6" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10">
              <Trophy className="w-6 h-6" />
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.6} direction="up" className="relative flex h-full items-center justify-center self-center order-first lg:order-last">
          <div className="relative w-full max-w-[320px] md:max-w-[420px] lg:max-w-[480px]">
            {/* Elegant Background Glow */}
            <div className="absolute -inset-10 bg-white/5 rounded-full blur-[100px] -z-20 animate-pulse" />
            
            <div className="relative z-10 p-1.5 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-md border border-white/20 rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img 
                alt={personalInfo.name} 
                className="w-full aspect-[4/5] object-cover rounded-[34px] grayscale-[0.2] hover:grayscale-0 transition-all duration-700 brightness-[1.02]" 
                src={personalInfo.photo} 
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle glass overlay at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating decorative elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 border border-white/10 rounded-2xl rotate-12 backdrop-blur-sm -z-10" 
            />
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/5 rounded-full blur-xl -z-10" 
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
