import React, { useState } from 'react';
import { Language, TimingAthlete, TimingRace } from '../types';
import { TIMING_RACES_DATA } from '../data/optinData';
import { Search, Trophy, Timer, Award, Download, X, Calendar, MapPin, Gauge, CheckCircle2 } from 'lucide-react';

interface LiveTimingSectionProps {
  lang: Language;
}

export const LiveTimingSection: React.FC<LiveTimingSectionProps> = ({ lang }) => {
  const [selectedRaceId, setSelectedRaceId] = useState<string>(TIMING_RACES_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [selectedAthlete, setSelectedAthlete] = useState<TimingAthlete | null>(null);

  const activeRace: TimingRace = TIMING_RACES_DATA.find(r => r.id === selectedRaceId) || TIMING_RACES_DATA[0];

  const filteredResults = activeRace.results.filter(athlete => {
    const matchesSearch = 
      athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.bib.toString().includes(searchQuery) ||
      athlete.team.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'Tous' || athlete.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="timing" className="py-20 bg-[#090A0F] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF3B30] mb-2">
              <Timer className="w-4 h-4 text-[#FF3B30]" />
              <span>{lang === 'fr' ? 'Portail Résultats Officiels' : 'Official Results Portal'}</span>
              <span aria-hidden="true" className="text-white/30">/</span>
              <span className="text-slate-400">Race Result RFID Homologué</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              {lang === 'fr' ? 'Chronométrage & Live Tracking en Direct' : 'Official Race Timing & Live Leaderboards'}
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-normal">
            {lang === 'fr' 
              ? 'Consultez les résultats officiels des épreuves chronométrées par OPTIN. Saisissez votre nom ou dossard pour générer votre diplôme de finisher.' 
              : 'Explore official results from OPTIN-timed competitions. Enter your bib number or name to generate your official finisher certificate.'}
          </p>
        </div>

        {/* Race Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {TIMING_RACES_DATA.map((race) => (
            <button
              key={race.id}
              onClick={() => {
                setSelectedRaceId(race.id);
                setSelectedCategory('Tous');
                setSearchQuery('');
              }}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-md border transition-all duration-150 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30] ${
                race.id === selectedRaceId
                  ? 'bg-[#FF3B30] border-[#FF3B30] text-white shadow-md shadow-[#FF3B30]/30'
                  : 'bg-[#121622] border-white/10 text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>{race.name}</span>
            </button>
          ))}
        </div>

        {/* Race Info Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-lg bg-[#111420] border border-white/10 mb-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#FF3B30]" />
            <div>
              <span className="text-[10px] uppercase text-slate-400 block font-mono">Date</span>
              <span className="font-semibold text-white">{activeRace.date}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#FF3B30]" />
            <div>
              <span className="text-[10px] uppercase text-slate-400 block font-mono">{lang === 'fr' ? 'Lieu' : 'Location'}</span>
              <span className="font-semibold text-white">{activeRace.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-[#FF3B30]" />
            <div>
              <span className="text-[10px] uppercase text-slate-400 block font-mono">{lang === 'fr' ? 'Distance / Dénivelé' : 'Distance / Elev'}</span>
              <span className="font-semibold text-white">{activeRace.distance} ({activeRace.elevation})</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#FF3B30]" />
            <div>
              <span className="text-[10px] uppercase text-slate-400 block font-mono">{lang === 'fr' ? 'Engagés' : 'Participants'}</span>
              <span className="font-semibold text-white font-mono tabular-nums">{activeRace.participantsCount} classés</span>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-4">
          
          {/* Search box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'fr' ? "Rechercher par nom, dossard ou équipe..." : "Search athlete name, bib #, or team..."}
              className="w-full bg-[#121622] border border-white/10 rounded-md pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FF3B30] focus:ring-1 focus:ring-[#FF3B30] transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Pills (Functional Buttons) */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
            {activeRace.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3B30] ${
                  selectedCategory === cat
                    ? 'bg-white/15 text-white font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Table (Tabular Numerals strict adherence) */}
        <div className="rounded-lg border border-white/10 overflow-hidden bg-[#111420] shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-[#161B26] text-slate-400 text-[11px] uppercase font-mono border-b border-white/10 tracking-wider">
                <tr>
                  <th scope="col" className="py-3 px-4 w-14 text-center">{lang === 'fr' ? 'Rang' : 'Rank'}</th>
                  <th scope="col" className="py-3 px-4 w-16">{lang === 'fr' ? 'Dossard' : 'Bib'}</th>
                  <th scope="col" className="py-3 px-4">{lang === 'fr' ? 'Athlète' : 'Athlete'}</th>
                  <th scope="col" className="py-3 px-4 hidden md:table-cell">{lang === 'fr' ? 'Équipe / Club' : 'Team / Club'}</th>
                  <th scope="col" className="py-3 px-4 hidden sm:table-cell">{lang === 'fr' ? 'Catégorie' : 'Category'}</th>
                  <th scope="col" className="py-3 px-4 font-mono">{lang === 'fr' ? 'Temps Final' : 'Finish Time'}</th>
                  <th scope="col" className="py-3 px-4 hidden lg:table-cell font-mono">{lang === 'fr' ? 'Écart' : 'Gap'}</th>
                  <th scope="col" className="py-3 px-4 hidden sm:table-cell font-mono">{lang === 'fr' ? 'Vitesse' : 'Speed'}</th>
                  <th scope="col" className="py-3 px-4 text-right">{lang === 'fr' ? 'Diplôme' : 'Certificate'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                {filteredResults.length > 0 ? (
                  filteredResults.map((athlete) => {
                    const isPodium = athlete.rank <= 3;
                    return (
                      <tr 
                        key={athlete.bib}
                        className="hover:bg-white/5 transition-colors group cursor-pointer"
                        onClick={() => setSelectedAthlete(athlete)}
                      >
                        {/* Rank */}
                        <td className="py-3.5 px-4 text-center font-mono font-bold tabular-nums">
                          {isPodium ? (
                            <span className={`inline-flex items-center justify-center w-6 h-6 rounded text-xs font-bold ${
                              athlete.rank === 1 ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40' :
                              athlete.rank === 2 ? 'bg-slate-300/20 text-slate-200 border border-slate-300/40' :
                              'bg-amber-700/20 text-amber-500 border border-amber-700/40'
                            }`}>
                              {athlete.rank}
                            </span>
                          ) : (
                            <span className="text-slate-400">{athlete.rank}</span>
                          )}
                        </td>

                        {/* Bib */}
                        <td className="py-3.5 px-4 font-mono font-bold text-white tabular-nums">
                          #{athlete.bib}
                        </td>

                        {/* Athlete Name & Flag */}
                        <td className="py-3.5 px-4 font-semibold text-white">
                          <div className="flex items-center gap-2">
                            <span>{athlete.name}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-slate-300">
                              {athlete.country}
                            </span>
                          </div>
                        </td>

                        {/* Team */}
                        <td className="py-3.5 px-4 text-slate-300 hidden md:table-cell">
                          {athlete.team}
                        </td>

                        {/* Category */}
                        <td className="py-3.5 px-4 text-slate-400 hidden sm:table-cell">
                          {athlete.category}
                        </td>

                        {/* Finish Time */}
                        <td className="py-3.5 px-4 font-mono font-bold text-[#FF3B30] tabular-nums">
                          {athlete.finishTime}
                        </td>

                        {/* Gap */}
                        <td className="py-3.5 px-4 font-mono text-slate-400 tabular-nums hidden lg:table-cell">
                          {athlete.gap}
                        </td>

                        {/* Avg Speed */}
                        <td className="py-3.5 px-4 font-mono text-slate-300 tabular-nums hidden sm:table-cell">
                          {athlete.avgSpeed}
                        </td>

                        {/* Certificate Trigger */}
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedAthlete(athlete);
                            }}
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-[#FF3B30] rounded border border-white/10 hover:border-[#FF3B30] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3B30]"
                          >
                            <Award className="w-3 h-3" />
                            <span>{lang === 'fr' ? 'Diplôme' : 'Diploma'}</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-slate-400 text-sm">
                      {lang === 'fr' ? 'Aucun résultat trouvé pour cette recherche.' : 'No participants found matching your query.'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer info */}
          <div className="p-3 bg-[#0E111A] border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>
              {lang === 'fr' ? 'Système certifié OPTIN Race Result · Transpondeurs UHF/Actif' : 'OPTIN Race Result Certified System · Active/UHF Transponders'}
            </span>
            <span className="text-slate-300">
              {filteredResults.length} / {activeRace.results.length} {lang === 'fr' ? 'affichés' : 'displayed'}
            </span>
          </div>
        </div>

      </div>

      {/* Finisher Certificate Modal */}
      {selectedAthlete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-2xl bg-[#0F121C] border border-white/20 rounded-xl shadow-2xl p-6 sm:p-8 text-slate-100"
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedAthlete(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-white/5 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Header */}
            <div className="text-center pb-6 border-b border-white/10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FF3B30]/15 border border-[#FF3B30]/30 mb-3 text-[#FF3B30]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                {lang === 'fr' ? 'Diplôme Officiel de Finisher' : 'Official Finisher Certificate'}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                {activeRace.name} · {activeRace.date}
              </p>
            </div>

            {/* Certificate Core details */}
            <div className="py-8 text-center space-y-4">
              <span className="text-xs font-mono text-[#FF3B30] uppercase tracking-widest block">
                {lang === 'fr' ? 'Félicitations à l’athlète' : 'Congratulations to'}
              </span>
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {selectedAthlete.name}
              </h4>
              <p className="text-sm text-slate-300 font-medium">
                {selectedAthlete.team} · Dossard #{selectedAthlete.bib}
              </p>

              {/* Stats Box */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-lg bg-black/40 border border-white/10 mt-6 max-w-lg mx-auto">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">{lang === 'fr' ? 'Temps Réel' : 'Official Time'}</span>
                  <span className="text-lg sm:text-xl font-extrabold font-mono text-[#FF3B30] tabular-nums">
                    {selectedAthlete.finishTime}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">{lang === 'fr' ? 'Classement' : 'Rank'}</span>
                  <span className="text-lg sm:text-xl font-extrabold font-mono text-white tabular-nums">
                    {selectedAthlete.rank} <span className="text-xs text-slate-400">/ {activeRace.results.length}</span>
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">{lang === 'fr' ? 'Moyenne' : 'Average Speed'}</span>
                  <span className="text-lg sm:text-xl font-extrabold font-mono text-white tabular-nums">
                    {selectedAthlete.avgSpeed}
                  </span>
                </div>
              </div>
            </div>

            {/* Certificate Signatures & Security */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-[11px] text-slate-300">
                  {lang === 'fr' ? 'Chronométrage certifié OPTIN Sàrl' : 'Certified Timing by OPTIN Sàrl'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-emerald-400 font-mono">
                  {lang === 'fr' ? 'Dossard vérifié' : 'Bib verified'}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    window.print?.();
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#FF3B30] hover:bg-[#E0352B] rounded transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{lang === 'fr' ? 'Imprimer / Enregistrer PDF' : 'Print / Save PDF'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
