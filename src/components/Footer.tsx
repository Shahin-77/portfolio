/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, Trophy, FileText } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: personalInfo.github, icon: Github },
    { name: 'LinkedIn', href: personalInfo.linkedin, icon: Linkedin },
    { name: 'LeetCode', href: personalInfo.leetcode, icon: Trophy },
  ];

  return (
    <footer className="bg-[#0D0D0D] py-24 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-white font-black text-4xl tracking-tighter mb-4 font-display">MOHAMMED SHAHIN</h2>
            <p className="text-white/30 text-xs font-bold uppercase tracking-[0.3em] max-w-xs leading-relaxed">
              Engineering high-performance digital solutions with precision and modern architecture.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-8">
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-500 group" 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
              <a 
                className="px-8 h-14 rounded-2xl bg-white text-black border border-white flex items-center justify-center gap-3 hover:bg-primary hover:border-primary hover:text-white transition-all duration-500 group font-black text-xs uppercase tracking-widest" 
                href={personalInfo.resumeUrl}
                download="A_Mohammed_Shahin_Resume.pdf"
              >
                <FileText className="w-5 h-5" />
                Resume
              </a>
            </div>
            <div className="w-24 h-1 bg-primary rounded-full shadow-[0_0_10px_#E63946]" />
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/20 text-[10px] font-black tracking-[0.4em] uppercase">
            © 2026 {personalInfo.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            <a className="text-white/20 hover:text-white text-[10px] font-black tracking-[0.4em] uppercase transition-colors" href="#">Privacy</a>
            <a className="text-white/20 hover:text-white text-[10px] font-black tracking-[0.4em] uppercase transition-colors" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
