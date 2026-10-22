import React from 'react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-[#06070B] border-t border-white/10 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <a href="#" className="flex items-baseline text-2xl font-black tracking-tight text-white select-none">
              <span>OPTIN</span>
              <span className="text-[#FF3B30] text-3xl font-black leading-none">.</span>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {lang === 'fr'
                ? "Agence d'événementiel, marketing sportif, chronométrage officiel et production audiovisuelle au Grand-Duché de Luxembourg depuis 2006."
                : "Premier event management, sports marketing, official timing and audiovisual broadcast agency in Luxembourg since 2006."}
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-400 space-y-0.5">
              <p>OPTIN Sàrl · 202B, Rue de Hamm, L-1713 Luxembourg</p>
              <p>RCS Luxembourg : B120349 · TVA : LU21509421</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-300 font-bold block mb-3">
              {lang === 'fr' ? 'Navigation' : 'Explore'}
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#expertises" className="hover:text-white transition-colors">
                  {lang === 'fr' ? 'Pôles d’Expertise' : 'Service Divisions'}
                </a>
              </li>
              <li>
                <a href="#realisations" className="hover:text-white transition-colors">
                  {lang === 'fr' ? 'Réalisations & Projets' : 'Case Studies'}
                </a>
              </li>
              <li>
                <a href="#timing" className="hover:text-white transition-colors">
                  {lang === 'fr' ? 'Chronométrage & Résultats Live' : 'Live Timing Portal'}
                </a>
              </li>
              <li>
                <a href="#simulateur" className="hover:text-white transition-colors">
                  {lang === 'fr' ? 'Simulateur de Budget' : 'Project Estimator'}
                </a>
              </li>
              <li>
                <a href="#agence" className="hover:text-white transition-colors">
                  {lang === 'fr' ? 'Histoire de l’Agence' : 'About OPTIN'}
                </a>
              </li>
            </ul>
          </div>

          {/* Professional Affiliations */}
          <div className="md:col-span-4 space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-300 font-bold block mb-3">
              {lang === 'fr' ? 'Affiliations & Contacts' : 'Affiliations & Contact'}
            </span>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]"></span>
                <span>Membre Luxembourg Event Association (LEA)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]"></span>
                <span>Partenaire Luxembourg Convention Bureau (LCB)</span>
              </li>
              <li className="pt-2 text-slate-300 font-mono text-[11px]">
                Email : <a href="mailto:optin@optin.lu" className="hover:text-white underline">optin@optin.lu</a>
              </li>
              <li className="text-slate-300 font-mono text-[11px]">
                Tél : <a href="tel:+35226431111" className="hover:text-white underline">(+352) 26 43 11 11</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <p>© 2006 – {new Date().getFullYear()} OPTIN Sàrl. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Protection des Données (RGPD)</a>
            <span>·</span>
            <span className="text-[#FF3B30]">Grand-Duché de Luxembourg</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
