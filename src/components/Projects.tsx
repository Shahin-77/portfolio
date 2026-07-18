/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink, Github, Terminal } from 'lucide-react';
import FadeIn from './FadeIn';
import { projects } from '../data';

export default function Projects() {
  return (
    <section className="py-32 bg-[#0D0D0D] relative overflow-hidden" id="projects">
      {/* Watermark */}
      <div className="absolute top-20 left-0 text-white/[0.02] text-[20vw] font-black leading-none select-none pointer-events-none tracking-tighter font-display">
        PROJECTS
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <FadeIn className="mb-24">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-4 block">03 / CASE STUDIES</span>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter font-display">Selected <span className="accent-underline text-primary">Works</span></h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <div className="glass-card group rounded-[2.5rem] overflow-hidden flex flex-col h-full bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-500">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" 
                    src={project.image} 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-6 left-8">
                    <span className="px-3 py-1 bg-primary text-white rounded-md text-[10px] font-black uppercase tracking-widest mb-2 inline-block">
                      {project.tags[0]}
                    </span>
                    <h3 className="text-2xl font-black text-white tracking-tight font-display group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <p className="text-primary/80 text-xs font-black uppercase tracking-widest mb-4">
                    {project.tagline}
                  </p>
                  <p className="text-white/50 mb-8 line-clamp-3 leading-relaxed font-medium text-sm">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    {project.highlights.map((bullet, idx) => (
                      <div key={idx} className="flex gap-3 text-xs text-white/40 font-medium leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        <p>{bullet}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/5 text-white/30 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-8">
                    <div className="flex gap-4">
                      {project.liveUrl !== '#' && (
                        <a 
                          className="flex items-center gap-2 text-white text-xs font-black hover:text-primary transition-all uppercase tracking-widest group/btn" 
                          href={project.liveUrl}
                        >
                          Live Demo 
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </a>
                      )}
                      {project.githubUrl !== '#' && (
                        <a 
                          className="flex items-center gap-2 text-white/40 text-xs font-black hover:text-white transition-all uppercase tracking-widest" 
                          href={project.githubUrl}
                        >
                          GitHub
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <Terminal className="w-5 h-5 text-white/10" />
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
