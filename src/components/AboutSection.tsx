import React from 'react';
import { Language } from '../types';
import { TRUST_PARTNERS } from '../data/optinData';
import { ShieldCheck, Award, Flag, MapPin, Building, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section id="agence" className="py-20 bg-[#090A0F] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF3B30]">
              <Flag className="w-4 h-4 text-[#FF3B30]" />
              <span>{lang === 'fr' ? 'ADN & Histoire de l’Agence' : 'Agency DNA & Story'}</span>
              <span aria-hidden="true" className="text-white/30">/</span>
              <span className="text-slate-400">Fondée en 2006</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {lang === 'fr' ? (
                <>
                  Une exigence d'ingénieur alliée à la ferveur des grands rassemblements sportifs.
                </>
              ) : (
                <>
                  Engineering discipline powered by the raw emotion of premier sports gatherings.
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {lang === 'fr' ? (
                <>
                  Fondée en 2006 par <strong className="text-white font-semibold">Louis Haas</strong>, OPTIN s'est imposée comme le partenaire incontournable au Grand-Duché pour transformer des défis logistiques et sportifs complexes en événements fluides, mémorables et sécurisés.
                </>
              ) : (
                <>
                  Founded in 2006 by <strong className="text-white font-semibold">Louis Haas</strong>, OPTIN has become the benchmark agency in the Grand Duchy for transforming demanding logistical and athletic challenges into seamless, unforgettable celebrations.
                </>
              )}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {lang === 'fr' ? (
                <>
                  Installés à <strong className="text-white font-semibold">Hamm (Luxembourg)</strong>, nous combinons la réactivité d'un ancrage local avec un parc d'équipements technologiques ultra-moderne : régie 4K, chronométrage actif transpondeur, et plateformes digitales sur-mesure.
                </>
              ) : (
                <>
                  Headquartered in <strong className="text-white font-semibold">Hamm (Luxembourg)</strong>, we combine the intimacy of deep local institutional knowledge with our own cutting-edge hardware fleet: 4K mobile OB rigs, active transponders, and bespoke digital event portals.
                </>
              )}
            </p>

            {/* Accreditations Trust Markers */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#111420] border border-white/10 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#FF3B30] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wide">
                    {lang === 'fr' ? 'Membre Certifié LEA' : 'LEA Certified Member'}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Luxembourg Event Association
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#111420] border border-white/10 flex items-start gap-3">
                <Award className="w-5 h-5 text-[#FF3B30] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wide">
                    {lang === 'fr' ? 'Partenaire Référencé LCB' : 'LCB Referenced Partner'}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Luxembourg Convention Bureau
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Values / Pillars */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Pillar 1 */}
            <div className="p-6 rounded-lg bg-[#111420] border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold text-[#FF3B30] px-2 py-0.5 rounded bg-[#FF3B30]/10 border border-[#FF3B30]/20">
                  PILIER 01
                </span>
                <h4 className="text-base font-bold text-white">
                  {lang === 'fr' ? 'Zéro Improvisation Logistique' : 'Zero Logistical Improvisation'}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'fr'
                  ? 'Plans d’évacuation homologués, circuits balisés au centimètre près, redondance totale des chronomètres et des liaisons satellite.'
                  : 'Certified evacuation blueprints, precision route signage, dual-redundant timing loops and resilient satellite uplinks.'}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-lg bg-[#111420] border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold text-[#FF3B30] px-2 py-0.5 rounded bg-[#FF3B30]/10 border border-[#FF3B30]/20">
                  PILIER 02
                </span>
                <h4 className="text-base font-bold text-white">
                  {lang === 'fr' ? 'Émotion & Valorisation Sponsors' : 'Emotion & High Sponsor Return'}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'fr'
                  ? 'Mise en scène scénographique spectaculaire, visibilité maximale des partenaires sur les arches, écrans LED et flux de streaming.'
                  : 'Spectacular stage scenography, prime partner visibility across finish arches, LED arena screens and live broadcast streams.'}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-lg bg-[#111420] border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold text-[#FF3B30] px-2 py-0.5 rounded bg-[#FF3B30]/10 border border-[#FF3B30]/20">
                  PILIER 03
                </span>
                <h4 className="text-base font-bold text-white">
                  {lang === 'fr' ? 'Engagement Éco-Responsable' : 'Eco-Responsible Event Standards'}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'fr'
                  ? 'Tri des déchets systématique sur nos courses, élimination du plastique à usage unique et circuits courts avec les traiteurs locaux.'
                  : 'Systematic waste sorting on all courses, zero single-use plastics, and short-circuit local catering partnerships.'}
              </p>
            </div>

          </div>

        </div>

        {/* Partners & Institutions Ribbon */}
        <div className="pt-10 border-t border-white/10">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              {lang === 'fr' 
                ? 'Ils nous accordent leur confiance au Luxembourg' 
                : 'Trusted by Leaders & Institutions in Luxembourg'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {TRUST_PARTNERS.map((partner, pIdx) => (
              <div 
                key={pIdx}
                className="p-3 rounded-md bg-[#111420] border border-white/5 flex flex-col items-center justify-center text-center hover:border-white/20 transition-colors"
              >
                <span className="text-xs font-bold text-slate-200">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5 truncate max-w-full">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
