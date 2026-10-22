import React, { useState } from 'react';
import { Language } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#expertises', label: lang === 'fr' ? 'Expertises' : 'Capabilities' },
    { href: '#realisations', label: lang === 'fr' ? 'Réalisations' : 'Case Studies' },
    { href: '#timing', label: lang === 'fr' ? 'Live Timing' : 'Live Timing' },
    { href: '#simulateur', label: lang === 'fr' ? 'Simulateur' : 'Estimator' },
    { href: '#agence', label: lang === 'fr' ? "L'Agence" : 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#090A0F]/90 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element in display face, no subtext clutter) */}
          <a 
            href="#" 
            className="flex items-baseline text-2xl font-black tracking-tight text-white select-none whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30] rounded-sm"
          >
            <span>OPTIN</span>
            <span className="text-[#FF3B30] text-3xl font-black leading-none group-hover:scale-125 transition-transform duration-200">.</span>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-medium ml-2 hidden sm:inline">
              Luxembourg
            </span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-white transition-colors duration-150 relative py-1 focus:outline-none focus-visible:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF3B30] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Lang Switch */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleLang}
              className="px-2.5 py-1.5 text-xs font-mono font-medium tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30]"
              title={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
              aria-label="Toggle language"
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>

            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#FF3B30] hover:bg-[#E0352B] active:scale-[0.98] rounded-md transition-all duration-150 shadow-sm shadow-[#FF3B30]/30 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090A0F]"
            >
              <span>{lang === 'fr' ? 'Lancer un projet' : 'Start a Project'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white bg-white/5 rounded border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30]"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#090A0F] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#FF3B30] hover:bg-[#E0352B] rounded-md transition-colors shadow-sm"
            >
              <span>{lang === 'fr' ? 'Lancer un projet' : 'Start a Project'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
