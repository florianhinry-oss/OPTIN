import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { SERVICES } from '../data/optinData';
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu, Radio, Users2, Globe } from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onSelectServiceForEstimate: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectServiceForEstimate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const activeService: ServiceItem = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'events':
        return <ShieldCheck className="w-5 h-5" />;
      case 'timing':
        return <Cpu className="w-5 h-5" />;
      case 'broadcast':
        return <Radio className="w-5 h-5" />;
      case 'teambuilding':
        return <Users2 className="w-5 h-5" />;
      case 'digital':
        return <Globe className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="expertises" className="py-20 bg-[#090A0F] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Natural Editorial Lead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF3B30] mb-2">
              <span>{lang === 'fr' ? 'Savoir-Faire & Métiers' : 'Core Capabilities'}</span>
              <span aria-hidden="true" className="text-white/30">/</span>
              <span className="text-slate-400">01 — 05</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              {lang === 'fr' ? 'Nos Pôles d’Excellence Opérationnelle' : 'Our Specialized Service Divisions'}
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-normal">
            {lang === 'fr' 
              ? 'Une synergie unique entre régie générale événementielle, chronométrage électronique homologué et diffusion audiovisuelle.' 
              : 'A unique synergy uniting general event production, certified electronic sports timing, and broadcast streaming.'}
          </p>
        </div>

        {/* Interactive Service Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Service Nav List */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {SERVICES.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`text-left p-4 sm:p-5 rounded-lg border transition-all duration-200 flex items-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30] ${
                    isSelected
                      ? 'bg-[#151926] border-[#FF3B30]/50 shadow-lg shadow-black/40'
                      : 'bg-[#0E111A] border-white/5 hover:border-white/15 hover:bg-[#121622] text-slate-300'
                  }`}
                >
                  <span className={`text-xs font-mono font-bold mt-1 ${isSelected ? 'text-[#FF3B30]' : 'text-slate-400'}`}>
                    {service.number}.
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`${isSelected ? 'text-[#FF3B30]' : 'text-slate-400'}`}>
                        {getServiceIcon(service.id)}
                      </span>
                      <h3 className={`text-base font-bold truncate ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                        {service.title[lang]}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {service.shortDesc[lang]}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Capability Card */}
          <div className="lg:col-span-7 bg-[#111420] border border-white/10 rounded-lg overflow-hidden flex flex-col shadow-xl">
            
            {/* Visual media banner */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900 border-b border-white/10">
              <img
                src={activeService.image}
                alt={activeService.title[lang]}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111420] via-black/30 to-transparent" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-white">
                <span className="text-[#FF3B30] font-bold">{activeService.number}</span>
                <span className="text-slate-400">/</span>
                <span>OPTIN LUXEMBOURG</span>
              </div>

              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-xs font-mono text-[#FF3B30] uppercase tracking-wider">
                    {lang === 'fr' ? 'Spécification technique' : 'Technical Specification'}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                    {activeService.title[lang]}
                  </h4>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-2xl font-mono font-bold text-white tabular-nums">
                    {activeService.stats.value}
                  </span>
                  <p className="text-[11px] text-slate-400">
                    {activeService.stats.label[lang]}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              
              <div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                  {activeService.fullDesc[lang]}
                </p>

                <h5 className="text-xs font-bold tracking-wider uppercase text-slate-300 mb-3">
                  {lang === 'fr' ? 'Protocoles & Moyens Déployés :' : 'Protocols & Deployed Resources:'}
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {activeService.features[lang].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom deliverable footer & action */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">
                    {lang === 'fr' ? 'Livrables clés :' : 'Deliverables:'}
                  </span>
                  {activeService.deliverables[lang].map((d, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      {i > 0 && <span aria-hidden="true" className="text-white/20">·</span>}
                      <span>{d}</span>
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectServiceForEstimate(activeService.id)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#FF3B30] hover:bg-[#E0352B] active:scale-[0.98] rounded-md transition-all duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30]"
                >
                  <span>{lang === 'fr' ? 'Intégrer à mon estimation' : 'Add to Estimate'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
