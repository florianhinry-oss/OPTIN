import React, { useState } from 'react';
import { Language } from '../types';
import { Calculator, Check, ArrowRight, Sparkles, Shield, Cpu, Video, Globe } from 'lucide-react';

interface EventSimulatorSectionProps {
  lang: Language;
  onApplyConfigToContact: (configSummary: string, estimatedBudget: string) => void;
}

export const EventSimulatorSection: React.FC<EventSimulatorSectionProps> = ({ 
  lang, 
  onApplyConfigToContact 
}) => {
  const [eventType, setEventType] = useState<'festival' | 'corporate' | 'competition' | 'teambuilding'>('festival');
  const [scale, setScale] = useState<'small' | 'medium' | 'large' | 'mass'>('medium');
  const [modules, setModules] = useState<{ [key: string]: boolean }>({
    timing: true,
    broadcast: true,
    staging: true,
    web: true,
    security: true,
    vipLounge: false,
  });

  const toggleModule = (key: string) => {
    setModules(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const eventTypeLabels = {
    festival: { fr: "Festival Grand Public & Urbain", en: "Mass Public & Urban Festival", baseCost: 12000 },
    corporate: { fr: "Gala Corporate & Anniversaire", en: "Corporate Gala & Anniversary", baseCost: 9500 },
    competition: { fr: "Course Cycliste / Marathon / Trail", en: "Cycling / Marathon / Trail Race", baseCost: 8000 },
    teambuilding: { fr: "Team Building Sportif & Olympiades", en: "Sports Team Building Challenge", baseCost: 4500 },
  };

  const scaleMultipliers = {
    small: { fr: "50 à 250 participants", en: "50 to 250 attendees", mult: 1.0 },
    medium: { fr: "250 à 1 000 participants", en: "250 to 1,000 attendees", mult: 1.6 },
    large: { fr: "1 000 à 5 000 participants", en: "1,000 to 5,000 attendees", mult: 2.5 },
    mass: { fr: "5 000+ foule & spectateurs", en: "5,000+ mass crowd", mult: 4.2 },
  };

  const modulePricing = [
    { 
      key: 'timing', 
      label: { fr: "Chronométrage RFID & Résultats Live Web", en: "RFID Timing & Live Online Results" }, 
      cost: 2800,
      icon: <Cpu className="w-4 h-4" /> 
    },
    { 
      key: 'broadcast', 
      label: { fr: "Régie Multicaméra 4K & Live Streaming", en: "4K Multi-Camera & Live Streaming" }, 
      cost: 4200,
      icon: <Video className="w-4 h-4" /> 
    },
    { 
      key: 'staging', 
      label: { fr: "Scénographie, Ponts Éclairage & Sonorisation", en: "Staging, Lighting Truss & Pro Sound" }, 
      cost: 5500,
      icon: <Sparkles className="w-4 h-4" /> 
    },
    { 
      key: 'web', 
      label: { fr: "Site Web Dédié & Module d’Inscriptions / Billetterie", en: "Dedicated Event Web & Registration Portal" }, 
      cost: 1900,
      icon: <Globe className="w-4 h-4" /> 
    },
    { 
      key: 'security', 
      label: { fr: "Plan de Sécurité, Barriérage & Autorisations Ville", en: "Safety Plan, Race Barriers & City Permits" }, 
      cost: 3100,
      icon: <Shield className="w-4 h-4" /> 
    },
  ];

  // Calculate pricing range
  const base = eventTypeLabels[eventType].baseCost;
  const mult = scaleMultipliers[scale].mult;
  
  let modulesTotal = 0;
  modulePricing.forEach(m => {
    if (modules[m.key]) {
      modulesTotal += m.cost;
    }
  });

  const totalMin = Math.round((base + modulesTotal) * mult * 0.9 / 100) * 100;
  const totalMax = Math.round((base + modulesTotal) * mult * 1.15 / 100) * 100;

  const handleApply = () => {
    const selectedMods = modulePricing
      .filter(m => modules[m.key])
      .map(m => m.label[lang])
      .join(', ');

    const summary = `${eventTypeLabels[eventType][lang]} | ${scaleMultipliers[scale][lang]} | Modules: ${selectedMods}`;
    const budgetStr = `${totalMin.toLocaleString()} € - ${totalMax.toLocaleString()} € HT`;
    
    onApplyConfigToContact(summary, budgetStr);
  };

  return (
    <section id="simulateur" className="py-20 bg-[#0B0D14] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF3B30] mb-2">
              <Calculator className="w-4 h-4 text-[#FF3B30]" />
              <span>{lang === 'fr' ? 'Transparence & Cadrage Budgétaire' : 'Budget & Project Scoping'}</span>
              <span aria-hidden="true" className="text-white/30">/</span>
              <span className="text-slate-400">Simulation instantanée</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              {lang === 'fr' ? 'Simulateur de Projet Événementiel' : 'Event Budget & Resource Estimator'}
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-normal">
            {lang === 'fr'
              ? 'Sélectionnez votre typologie d’événement, la jauge attendue et les briques techniques souhaitées pour obtenir une première fourchette estimative personnalisée.'
              : 'Select your event format, projected attendee scale, and required technical modules to calculate an accurate estimation.'}
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Configurator Controls (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-8 bg-[#111420] border border-white/10 rounded-lg p-6 sm:p-8 shadow-xl">
            
            {/* Step 1: Event Type */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF3B30] block mb-3">
                {lang === 'fr' ? '01. Typologie d’événement' : '01. Event Format'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(Object.keys(eventTypeLabels) as Array<keyof typeof eventTypeLabels>).map((typeKey) => (
                  <button
                    key={typeKey}
                    onClick={() => setEventType(typeKey)}
                    className={`p-3.5 text-left rounded-md border text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30] ${
                      eventType === typeKey
                        ? 'bg-[#181D2C] border-[#FF3B30] text-white shadow-sm'
                        : 'bg-[#0E111A] border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span>{eventTypeLabels[typeKey][lang]}</span>
                    {eventType === typeKey && <Check className="w-4 h-4 text-[#FF3B30] shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scale */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF3B30] block mb-3">
                {lang === 'fr' ? '02. Jauge & Nombre de Participants' : '02. Scale & Attendance'}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(Object.keys(scaleMultipliers) as Array<keyof typeof scaleMultipliers>).map((scaleKey) => (
                  <button
                    key={scaleKey}
                    onClick={() => setScale(scaleKey)}
                    className={`p-3 text-center rounded-md border text-xs font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30] ${
                      scale === scaleKey
                        ? 'bg-[#181D2C] border-[#FF3B30] text-white'
                        : 'bg-[#0E111A] border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span className="block leading-snug">{scaleMultipliers[scaleKey][lang]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Modules */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF3B30] block mb-3">
                {lang === 'fr' ? '03. Modules Techniques & Équipements' : '03. Technical Modules'}
              </span>
              <div className="space-y-2.5">
                {modulePricing.map((item) => {
                  const isChecked = !!modules[item.key];
                  return (
                    <div
                      key={item.key}
                      onClick={() => toggleModule(item.key)}
                      className={`p-3.5 rounded-md border text-xs sm:text-sm cursor-pointer transition-all duration-150 flex items-center justify-between select-none ${
                        isChecked
                          ? 'bg-[#161B28] border-white/20 text-white'
                          : 'bg-[#0E111A] border-white/5 text-slate-400 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`${isChecked ? 'text-[#FF3B30]' : 'text-slate-400'}`}>
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.label[lang]}</span>
                      </div>
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                        isChecked 
                          ? 'bg-[#FF3B30] border-[#FF3B30] text-white' 
                          : 'border-white/20 bg-black/40'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Live Calculation & Direct Quote Conversion (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-[#111420] border border-white/15 rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative sticky top-28">
            
            {/* Top summary badge */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-4 border-b border-white/10 mb-6">
                <span>ESTIMATION BUDGÉTAIRE</span>
                <span className="text-[#FF3B30] font-bold">LUXEMBOURG</span>
              </div>

              <div className="mb-6">
                <span className="text-xs text-slate-400 block mb-1 font-mono uppercase">
                  {lang === 'fr' ? 'Fourchette estimative clé en main :' : 'Turnkey estimated range:'}
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono tabular-nums tracking-tight">
                  {totalMin.toLocaleString()} €
                  <span className="text-xl sm:text-2xl text-slate-400 font-normal"> – {totalMax.toLocaleString()} €</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono mt-1 block">
                  {lang === 'fr' ? 'Prix indicatif Hors Taxes (TVA 17% Lux)' : 'Indicative net range (excl. 17% Lux VAT)'}
                </span>
              </div>

              {/* What's included checklist */}
              <div className="space-y-3 pt-6 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                  <span>
                    <strong>Direction de projet :</strong> {lang === 'fr' ? 'Coordinateur dédié OPTIN' : 'Dedicated OPTIN manager'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                  <span>
                    <strong>Matériel homologué :</strong> {lang === 'fr' ? 'Parc régie 4K & Race Result' : '4K broadcast & Race Result gear'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                  <span>
                    <strong>Assurance & conformité :</strong> {lang === 'fr' ? 'Garantie RC pro événementielle' : 'Professional event liability'}
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-8 mt-8 border-t border-white/10">
              <button
                onClick={handleApply}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-wide text-white bg-[#FF3B30] hover:bg-[#E0352B] active:scale-[0.98] rounded-md transition-all duration-150 shadow-md shadow-[#FF3B30]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30]"
              >
                <span>{lang === 'fr' ? 'Transférer vers ma demande de devis' : 'Transfer to Quote Request'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2.5 font-mono">
                {lang === 'fr' ? 'Pré-remplit automatiquement le formulaire ci-dessous' : 'Automatically fills the contact form below'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
