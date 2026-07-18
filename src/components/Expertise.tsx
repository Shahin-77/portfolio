/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Code2, Library, Database, Cloud, BrainCircuit } from 'lucide-react';
import FadeIn from './FadeIn';
import { skillCategories } from '../data';

export default function Expertise() {
  const iconMap: Record<string, any> = {
    Code2: Code2,
    Library: Library,
    Database: Database,
    Cloud: Cloud,
    BrainCircuit: BrainCircuit,
  };

  return (
    <section className="py-32 bg-surface-container relative overflow-hidden" id="expertise">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <FadeIn className="text-center mb-24">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-4 block">02 / TECHNICAL STACK</span>
          <h2 className="text-5xl md:text-6xl font-black text-on-surface tracking-tighter font-display">My <span className="accent-underline text-primary">Expertise</span></h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-32">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon];
            return (
              <FadeIn key={category.title} delay={i * 0.1}>
                <div className="bg-surface p-10 rounded-[2.5rem] h-full shadow-sm hover:shadow-2xl transition-all duration-500 group border border-on-surface/5">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                    <Icon className="text-primary group-hover:text-white w-8 h-8 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-on-surface mb-4 tracking-tight group-hover:text-primary transition-colors font-display">{category.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8 font-medium text-sm">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => (
                      <span key={skill.name} className="px-4 py-1.5 bg-on-surface/5 rounded-full text-[10px] font-black uppercase tracking-widest text-on-surface/60 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
