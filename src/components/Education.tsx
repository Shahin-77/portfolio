/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import FadeIn from './FadeIn';
import { education } from '../data';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-32 bg-surface-container relative overflow-hidden" id="education">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <FadeIn className="text-center mb-24">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-4 block">05 / ACADEMICS</span>
          <h2 className="text-5xl md:text-6xl font-black text-on-surface tracking-tighter font-display">Educational <span className="accent-underline text-primary">Background</span></h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <FadeIn key={edu.id} delay={i * 0.1}>
              <div className="bg-surface p-10 md:p-12 rounded-[3rem] border border-on-surface/5 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group flex gap-8 items-start">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-500">
                  <GraduationCap className="text-primary group-hover:text-white w-8 h-8 transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4 block">
                    {edu.period}
                  </span>
                  <h3 className="text-2xl font-black text-on-surface mb-3 tracking-tight font-display">
                    {edu.degree}
                  </h3>
                  <p className="text-on-surface-variant font-bold text-sm uppercase tracking-widest mb-6">
                    {edu.institution}
                  </p>
                  <div className="inline-block px-6 py-2 bg-on-surface/5 rounded-full text-xs font-black text-on-surface/60 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {edu.score}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
