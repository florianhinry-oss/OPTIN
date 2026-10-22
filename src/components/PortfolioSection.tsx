import React, { useState } from 'react';
import { Language, ProjectCase } from '../types';
import { PROJECTS } from '../data/optinData';
import { ArrowUpRight, X, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';

interface PortfolioSectionProps {
  lang: Language;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectCase | null>(null);

  const categories = [
    { id: 'all', label: lang === 'fr' ? 'Toutes les réalisations' : 'All Projects' },
    { id: 'sports', label: lang === 'fr' ? 'Festivals & Cyclisme' : 'Festivals & Cycling' },
    { id: 'corporate', label: lang === 'fr' ? 'Corporate & Prestige' : 'Corporate & Prestige' },
    { id: 'timing', label: lang === 'fr' ? 'Chronométrage RFID' : 'RFID Timing' },
    { id: 'broadcast', label: lang === 'fr' ? 'Broadcast & Streaming' : 'Broadcast & Streaming' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="realisations" className="py-20 bg-[#0B0D14] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF3B30] mb-2">
              <span>{lang === 'fr' ? 'Études de Cas & Impact' : 'Case Studies & Proof'}</span>
              <span aria-hidden="true" className="text-white/30">/</span>
              <span className="text-slate-400">Grand-Duché de Luxembourg</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              {lang === 'fr' ? 'Des Événements qui Marquent les Mémoires' : 'Events that Leave a Lasting Mark'}
            </h2>
          </div>

          {/* Interactive filter segmented bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121622] rounded-md border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30] ${
                  activeCategory === cat.id
                    ? 'bg-[#FF3B30] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredProjects.map((project, idx) => {
            // Asymmetric Bento span: first card larger or alternating
            const isLarge = idx === 0 || idx === 3;
            const colSpan = isLarge ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`${colSpan} group cursor-pointer bg-[#111420] border border-white/10 hover:border-[#FF3B30]/50 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60`}
              >
                {/* Media Container */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111420] via-black/20 to-transparent" />
                  
                  {/* Clean unboxed kicker on card (No pill sandwich) */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-[11px] font-mono text-white/90 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    <span>{project.categoryLabel[lang]}</span>
                    <span className="text-white/40">·</span>
                    <span className="text-[#FF3B30]">{project.year}</span>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 rounded bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/15 text-white group-hover:bg-[#FF3B30] group-hover:border-[#FF3B30] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#FF3B30]" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-white transition-colors leading-snug mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      {project.summary[lang]}
                    </p>
                  </div>

                  {/* Quantitative proof metrics strip */}
                  <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="text-sm sm:text-base font-extrabold text-white font-mono tabular-nums">
                          {metric.value}
                        </span>
                        <span className="text-[11px] text-slate-400 truncate">
                          {metric.label[lang]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111420] border border-white/20 rounded-xl shadow-2xl text-slate-100"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 text-slate-300 hover:text-white bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full border border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30]"
              aria-label="Fermer la modale"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero Banner */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111420] via-black/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF3B30] uppercase mb-2">
                  <span>{selectedProject.categoryLabel[lang]}</span>
                  <span className="text-white/40">·</span>
                  <span className="text-white">{selectedProject.year}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Context Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-lg bg-black/40 border border-white/10 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Building2 className="w-4 h-4 text-[#FF3B30]" />
                  <div>
                    <span className="block text-slate-400 font-mono text-[10px] uppercase">{lang === 'fr' ? 'Client / Commanditaire' : 'Client'}</span>
                    <span className="font-semibold text-white">{selectedProject.client}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-[#FF3B30]" />
                  <div>
                    <span className="block text-slate-400 font-mono text-[10px] uppercase">{lang === 'fr' ? 'Localisation' : 'Location'}</span>
                    <span className="font-semibold text-white">{selectedProject.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-4 h-4 text-[#FF3B30]" />
                  <div>
                    <span className="block text-slate-400 font-mono text-[10px] uppercase">{lang === 'fr' ? 'Période' : 'Date'}</span>
                    <span className="font-semibold text-white">{selectedProject.year}</span>
                  </div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-lg bg-[#161B26] border border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF3B30] mb-2 font-bold">
                    {lang === 'fr' ? '01. Le Défi Stratégique' : '01. The Challenge'}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.challenge[lang]}
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-[#161B26] border border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF3B30] mb-2 font-bold">
                    {lang === 'fr' ? '02. La Solution Déployée par OPTIN' : '02. The OPTIN Solution'}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.solution[lang]}
                  </p>
                </div>
              </div>

              {/* Quantified Results */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-bold">
                  {lang === 'fr' ? 'Résultats Chiffrés & Mesurables' : 'Quantified Results & Metrics'}
                </h4>
                <div className="grid grid-cols-3 gap-4 p-5 rounded-lg bg-black/50 border border-white/10">
                  {selectedProject.metrics.map((m, i) => (
                    <div key={i} className="text-center sm:text-left">
                      <div className="text-xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {m.label[lang]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">{lang === 'fr' ? 'Périmètre :' : 'Tags:'}</span>
                {selectedProject.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]">
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
