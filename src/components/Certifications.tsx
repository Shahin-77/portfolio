/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import FadeIn from './FadeIn';
import { certifications } from '../data';
import { ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

export default function Certifications() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-[#0D0D0D] relative overflow-hidden" id="certifications">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <FadeIn>
            <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-4 block">VALIDATION</span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter font-display">My <span className="accent-underline text-primary">Credentials</span></h2>
          </FadeIn>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all active:scale-90"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all active:scale-90"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-white/10 -translate-y-1/2 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 relative"
          >
            {certifications.map((cert, i) => (
              <FadeIn key={cert.id} delay={i * 0.1} className="flex-shrink-0 w-full sm:w-[450px] snap-start">
                <div className="glass-card bg-white/5 border-white/10 rounded-[2.5rem] p-10 hover:border-primary/50 transition-all duration-500 group relative">
                  <a
                    href={cert.link || cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View full ${cert.title} certificate`}
                    className="relative aspect-video rounded-3xl overflow-hidden mb-8 block cursor-pointer"
                  >
                    <img 
                      alt={cert.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100" 
                      src={cert.image} 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    <div className="absolute top-4 right-4 p-3 bg-black/50 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                  
                  <div className="relative">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-3 block">{cert.issuer}</span>
                    <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-primary transition-colors font-display">{cert.title}</h3>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed">
                      Issued: {cert.date}
                    </p>
                  </div>
                  
                  {/* Dot indicator on line */}
                  <div className="absolute top-1/2 -right-4 w-3 h-3 rounded-full bg-white/20 -translate-y-1/2 border-4 border-[#0D0D0D]" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
