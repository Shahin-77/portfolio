/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import FadeIn from './FadeIn';
import { achievements } from '../data';
import { Trophy, Award, Medal } from 'lucide-react';

export default function Achievements() {
  const iconMap: Record<string, any> = {
    Trophy: Trophy,
    Award: Award,
    Medal: Medal,
  };

  return (
    <section className="py-32 bg-white dark:bg-[#0D0D0D] transition-colors duration-500 relative overflow-hidden" id="achievements">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <FadeIn className="text-center mb-24">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-4 block">06 / MILESTONES</span>
          <h2 className="text-5xl md:text-6xl font-black text-on-surface tracking-tighter font-display">Key <span className="accent-underline text-primary">Achievements</span></h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((ach, i) => {
            const Icon = iconMap[ach.icon];
            return (
              <FadeIn key={ach.id} delay={i * 0.1}>
                <div className="bg-surface-container p-10 rounded-[2.5rem] border border-on-surface/5 hover:border-primary/30 hover:bg-surface hover:shadow-2xl transition-all duration-500 group flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-primary/20">
                    <Icon className="text-primary group-hover:text-white w-10 h-10 transition-colors" />
                  </div>
                  <h3 className="text-xl font-black text-on-surface tracking-tight font-display group-hover:text-primary transition-colors">
                    {ach.title}
                  </h3>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
