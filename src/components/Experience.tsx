/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import FadeIn from './FadeIn';
import { experiences } from '../data';

export default function Experience() {
  return (
    <section className="py-32 bg-white dark:bg-[#0D0D0D] transition-colors duration-500 relative overflow-hidden" id="experience">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <FadeIn className="text-center mb-32">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-4 block">04 / HISTORY</span>
          <h2 className="text-5xl md:text-6xl font-black text-on-surface tracking-tighter font-display">Professional <span className="accent-underline text-primary">Journey</span></h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-on-surface/10" />

          {experiences.map((exp, i) => (
            <div key={exp.id} className="relative mb-32 pl-8 md:pl-0">
              {/* Dot */}
              <div 
                className={`absolute left-[-4.5px] md:left-1/2 md:-translate-x-1/2 top-0 w-2.5 h-2.5 rounded-full z-10 transition-all duration-500 ${
                  exp.current 
                  ? 'bg-primary shadow-[0_0_20px_#E63946] scale-125' 
                  : 'bg-on-surface/20'
                }`} 
              />
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-20">
                <FadeIn 
                  direction={i % 2 === 0 ? 'right' : 'left'}
                  className={`md:pr-10 mb-6 md:mb-0 ${i % 2 === 0 ? 'md:text-right' : 'md:order-2 md:pl-10 md:text-left'}`}
                >
                  <span className={`font-black text-xs tracking-[0.2em] uppercase ${exp.current ? 'text-primary' : 'text-on-surface/30'}`}>
                    {exp.period}
                  </span>
                  <h3 className="text-3xl font-black text-on-surface mt-4 tracking-tight font-display">{exp.role}</h3>
                  <p className="text-primary font-black uppercase text-xs tracking-[0.2em] mt-2">{exp.company}</p>
                </FadeIn>

                <FadeIn 
                  direction={i % 2 === 0 ? 'left' : 'right'}
                  className={`${i % 2 === 0 ? 'md:pl-10' : 'md:order-1 md:pr-10 md:text-right'}`}
                >
                  <ul className={`space-y-6 text-on-surface-variant leading-relaxed font-medium text-sm ${i % 2 !== 0 ? 'flex flex-col items-end' : ''}`}>
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="flex gap-4">
                        {i % 2 === 0 ? <span className="text-primary mt-1.5 flex-shrink-0">•</span> : null}
                        <span className={i % 2 !== 0 ? 'text-right' : ''}>{desc}</span>
                        {i % 2 !== 0 ? <span className="text-primary mt-1.5 flex-shrink-0">•</span> : null}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
