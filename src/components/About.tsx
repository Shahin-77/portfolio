/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import FadeIn from './FadeIn';
import { aboutMe } from '../data';

export default function About() {
  const highlights = [
    { title: '2+ Internships', desc: 'Hands-on production experience' },
    { title: '4+ Live Projects', desc: 'Real-world scalable solutions' },
    { title: 'LeetCode Knight Badge', desc: 'Top-tier problem solving skills' },
  ];

  return (
    <section className="py-32 bg-white dark:bg-[#0D0D0D] transition-colors duration-500" id="about">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <FadeIn className="lg:col-span-7">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-6 block">01 / OVERVIEW</span>
            <h2 className="text-5xl md:text-6xl font-black text-on-surface mb-10 leading-[1.1] tracking-tighter font-display">
              Bridging engineering excellence with <span className="accent-underline text-primary">intuitive design.</span>
            </h2>
            <div className="space-y-8 text-lg text-on-surface-variant leading-relaxed max-w-2xl font-medium">
              <p>{aboutMe}</p>
            </div>
          </FadeIn>

          <div className="lg:col-span-5 pt-12">
            <div className="grid grid-cols-1 gap-6">
              {highlights.map((item, i) => (
                <FadeIn key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-surface-container p-8 rounded-3xl border border-on-surface/5 hover:border-primary/30 hover:bg-surface hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    <h4 className="text-on-surface font-black mb-2 text-xl tracking-tight group-hover:text-primary transition-colors font-display">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
