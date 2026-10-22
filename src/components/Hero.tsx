import React, { useState } from 'react';
import { Language } from '../types';
import { HERO_IMAGE, AGENCY_KEY_NUMBERS } from '../data/optinData';
import { ArrowRight, Calculator, Trophy, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onExploreSimulator: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExploreSimulator, onExploreProjects }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-white/10">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF3B30]/10 blur-[140px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean unboxed editorial kicker (No pills, no fake comment tags) */}
        <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-[#FF3B30] mb-5">
          <span>{lang === 'fr' ? 'Événementiel Majeur' : 'Premier Events'}</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>{lang === 'fr' ? 'Marketing Sportif' : 'Sports Marketing'}</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="text-slate-400">{lang === 'fr' ? 'Luxembourg depuis 2006' : 'Luxembourg since 2006'}</span>
        </div>

        {/* Hero 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-16">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] font-extrabold tracking-tight text-white mb-6 [text-wrap:balance]">
              {lang === 'fr' ? (
                <>
                  L'ingénierie événementielle & la passion sportive <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">à leur plus haut niveau d'exigence.</span>
                </>
              ) : (
                <>
                  Precision event engineering & athletic energy <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">at the highest European standard.</span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              {lang === 'fr' ? (
                <>
                  De l'inauguration du <strong className="text-white font-semibold">Stade de Luxembourg</strong> aux festivals urbains et galas institutionnels, OPTIN conçoit, produit et chronomètre vos rassemblements avec une maîtrise technique absolue.
                </>
              ) : (
                <>
                  From the official inauguration of <strong className="text-white font-semibold">Stade de Luxembourg</strong> to mass city cycling festivals and corporate summits, OPTIN architects, directs and times premier events with uncompromising rigor.
                </>
              )}
            </p>

            {/* Primary Action Row */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreSimulator}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#FF3B30] hover:bg-[#E0352B] active:scale-[0.98] rounded-md transition-all duration-150 shadow-md shadow-[#FF3B30]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30] whitespace-nowrap"
              >
                <Calculator className="w-4 h-4" />
                <span>{lang === 'fr' ? 'Estimer mon projet d’événement' : 'Calculate Event Budget'}</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-md transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
              >
                <Trophy className="w-4 h-4 text-[#FF3B30]" />
                <span>{lang === 'fr' ? 'Découvrir nos réalisations' : 'View Flagship Projects'}</span>
              </button>
            </div>

            {/* Reassurance text */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B30]" />
                {lang === 'fr' ? 'Membre actif LEA (Luxembourg Event Association)' : 'Active Member of LEA'}
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B30]" />
                {lang === 'fr' ? 'Partenaire Luxembourg Convention Bureau' : 'Luxembourg Convention Bureau Partner'}
              </span>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-full min-h-[380px] sm:min-h-[440px] rounded-lg overflow-hidden border border-white/15 bg-[#111420] shadow-2xl group">
              {!imageError ? (
                <img
                  src={HERO_IMAGE}
                  alt="OPTIN Luxembourg - Grand rassemblement sportif et festival corporate"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              ) : (
                /* Resilient CSS/SVG Fallback Container */
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#161B26] to-[#0A0C12] text-center">
                  <div className="w-16 h-16 rounded-full bg-[#FF3B30]/10 border border-[#FF3B30]/30 flex items-center justify-center mb-4">
                    <Trophy className="w-8 h-8 text-[#FF3B30]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">OPTIN Luxembourg</h3>
                  <p className="text-sm text-slate-400">Production événementielle & sports marketing</p>
                </div>
              )}

              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-black/20 pointer-events-none" />

              {/* Subtle metadata overlay on image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-md bg-[#090A0F]/85 backdrop-blur-md border border-white/15">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="text-white font-semibold">
                      {lang === 'fr' ? 'Production Scénique & Gestion de Foule' : 'Stage Production & Crowd Control'}
                    </p>
                    <p className="text-slate-400 text-[11px] font-mono">
                      Luxembourg-Ville · 15 000+ spectateurs
                    </p>
                  </div>
                  <span className="text-[#FF3B30] font-mono font-bold text-xs">
                    4K LIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-metric strip below hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-lg bg-[#111420]/80 border border-white/10 backdrop-blur-sm">
          {AGENCY_KEY_NUMBERS.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l-0 first:border-l-0 md:border-l md:first:border-l-0 border-white/10 pl-0 md:pl-6 first:pl-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                {stat.label[lang]}
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5 font-mono">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
