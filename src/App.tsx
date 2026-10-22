import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { LiveTimingSection } from './components/LiveTimingSection';
import { EventSimulatorSection } from './components/EventSimulatorSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');
  const [prefilledBudget, setPrefilledBudget] = useState<string>('');

  const toggleLanguage = () => {
    setLang(prev => (prev === 'fr' ? 'en' : 'fr'));
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('simulateur');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('realisations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyConfigToContact = (configSummary: string, estimatedBudget: string) => {
    setPrefilledNotes(configSummary);
    setPrefilledBudget(estimatedBudget);
    scrollToContact();
  };

  const handleSelectServiceForEstimate = (serviceId: string) => {
    scrollToSimulator();
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 flex flex-col font-sans selection:bg-[#FF3B30] selection:text-white">
      {/* Top Bar */}
      <Header 
        lang={lang} 
        onToggleLang={toggleLanguage} 
        onOpenContact={scrollToContact} 
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          lang={lang}
          onExploreSimulator={scrollToSimulator}
          onExploreProjects={scrollToProjects}
        />

        {/* Core Capabilities / Services Section */}
        <ServicesSection 
          lang={lang}
          onSelectServiceForEstimate={handleSelectServiceForEstimate}
        />

        {/* Flagship Projects & Case Studies */}
        <PortfolioSection 
          lang={lang}
        />

        {/* Interactive Race Timing & Results Portal */}
        <LiveTimingSection 
          lang={lang}
        />

        {/* Turnkey Event Simulator & Budget Calculator */}
        <EventSimulatorSection 
          lang={lang}
          onApplyConfigToContact={handleApplyConfigToContact}
        />

        {/* Agency Story, Founder, Accreditations & Partners */}
        <AboutSection 
          lang={lang}
        />

        {/* Validated Contact & RFP Section */}
        <ContactSection 
          lang={lang}
          prefilledNotes={prefilledNotes}
          prefilledBudget={prefilledBudget}
        />
      </main>

      {/* Quiet Footer */}
      <Footer lang={lang} />
    </div>
  );
}
