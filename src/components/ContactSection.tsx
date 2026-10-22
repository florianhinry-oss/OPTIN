import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Send, CheckCircle2, MapPin, Mail, Phone, Clock, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  prefilledNotes?: string;
  prefilledBudget?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  lang, 
  prefilledNotes = '', 
  prefilledBudget = '' 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    eventType: 'Festival / Sport',
    dateEstimate: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledNotes || prefilledBudget) {
      setFormData(prev => ({
        ...prev,
        budget: prefilledBudget || prev.budget,
        message: prefilledNotes 
          ? `${prev.message ? prev.message + '\n\n' : ''}[Configuration issue du Simulateur]\n${prefilledNotes}`
          : prev.message
      }));
    }
  }, [prefilledNotes, prefilledBudget]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = lang === 'fr' ? 'Le nom est obligatoire' : 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = lang === 'fr' ? 'L’email est obligatoire' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = lang === 'fr' ? 'Adresse email invalide' : 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = lang === 'fr' ? 'Le téléphone est obligatoire' : 'Phone is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = lang === 'fr' ? 'Veuillez préciser votre projet' : 'Please specify your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-[#0B0D14] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF3B30] mb-2">
              <Mail className="w-4 h-4 text-[#FF3B30]" />
              <span>{lang === 'fr' ? 'Échangeons sur votre projet' : 'Start a Conversation'}</span>
              <span aria-hidden="true" className="text-white/30">/</span>
              <span className="text-slate-400">Réponse sous 24h ouvrées</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              {lang === 'fr' ? 'Donnons Vie à Votre Prochain Événement' : 'Bring Your Next Event to Life'}
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-normal">
            {lang === 'fr'
              ? 'Besoin d’un devis précis, d’une régie de chronométrage ou d’un conseil stratégique ? Nos experts luxembourgeois vous répondent sans délai.'
              : 'Need a customized proposal, official race timing setup, or turnkey production? Our Luxembourg team responds promptly.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Agency Coordinates (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-lg bg-[#111420] border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3 flex items-center justify-between">
                <span>OPTIN Sàrl Luxembourg</span>
                <span className="text-xs font-mono text-[#FF3B30]">B120349</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF3B30] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Siège & Bureaux :</span>
                    <span className="text-slate-300">202B, Rue de Hamm</span>
                    <span className="block text-slate-400">L-1713 Luxembourg</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#FF3B30] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Courriel direct :</span>
                    <a href="mailto:optin@optin.lu" className="text-slate-300 hover:text-white transition-colors">
                      optin@optin.lu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FF3B30] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Téléphone agence :</span>
                    <a href="tel:+35226431111" className="text-slate-300 hover:text-white transition-colors font-mono">
                      (+352) 26 43 11 11
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FF3B30] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">{lang === 'fr' ? 'Horaires d’accueil :' : 'Working hours:'}</span>
                    <span className="text-slate-400">Lundi au Vendredi : 08h30 – 18h30</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality guarantee block */}
            <div className="p-5 rounded-lg bg-[#141824] border border-white/10 text-xs text-slate-300 space-y-2">
              <span className="font-mono text-[#FF3B30] font-bold uppercase tracking-wider block">
                {lang === 'fr' ? 'Engagement Qualité OPTIN :' : 'OPTIN Quality Pledge:'}
              </span>
              <p className="leading-relaxed">
                {lang === 'fr' 
                  ? 'Toutes nos prestations événementielles et de chronométrage bénéficient d’une assurance responsabilité civile professionnelle dédiée aux grands rassemblements publics et d’un encadrement habilité.' 
                  : 'All our event and timing services are covered by dedicated professional liability insurance for mass public gatherings with certified safety managers.'}
              </p>
            </div>

          </div>

          {/* Form Card (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#111420] border border-white/10 rounded-lg p-6 sm:p-8 shadow-xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {lang === 'fr' ? 'Demande transmise avec succès !' : 'Request Successfully Received!'}
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {lang === 'fr'
                    ? 'Merci d’avoir contacté OPTIN. Louis Haas et notre équipe de direction événementielle analyseront votre cahier des charges et reviendront vers vous sous 24h ouvrées.'
                    : 'Thank you for reaching out to OPTIN. Our event management team will review your specifications and follow up within 24 business hours.'}
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      eventType: 'Festival / Sport',
                      dateEstimate: '',
                      budget: '',
                      message: ''
                    });
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors"
                >
                  {lang === 'fr' ? 'Envoyer une autre demande' : 'Submit another request'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {lang === 'fr' ? 'Nom complet *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jean Dupont"
                      className={`w-full bg-[#161B28] border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-md px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF3B30]`}
                    />
                    {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {lang === 'fr' ? 'Entreprise / Club / Fédération' : 'Company / Organization'}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="BGL BNP Paribas, Ville de..., Club..."
                      className="w-full bg-[#161B28] border border-white/10 rounded-md px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF3B30]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {lang === 'fr' ? 'Courriel professionnel *' : 'Business Email *'}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean.dupont@entreprise.lu"
                      className={`w-full bg-[#161B28] border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-md px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF3B30]`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {lang === 'fr' ? 'Numéro de téléphone *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+352 691 00 00 00"
                      className={`w-full bg-[#161B28] border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-md px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF3B30]`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Event Type */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {lang === 'fr' ? 'Type d’événement' : 'Event Type'}
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#161B28] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF3B30]"
                    >
                      <option value="Festival / Sport">{lang === 'fr' ? 'Festival / Sport Grand Public' : 'Public Sports Festival'}</option>
                      <option value="Corporate / Gala">{lang === 'fr' ? 'Gala / Cérémonie d’Entreprise' : 'Corporate Gala'}</option>
                      <option value="Timing / Course">{lang === 'fr' ? 'Chronométrage Course / Trail' : 'Race Timing System'}</option>
                      <option value="Team Building">{lang === 'fr' ? 'Team Building Sportif' : 'Sports Team Building'}</option>
                      <option value="Broadcast / Streaming">{lang === 'fr' ? 'Production Audiovisuelle 4K' : '4K Broadcast Production'}</option>
                    </select>
                  </div>

                  {/* Date Estimate */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {lang === 'fr' ? 'Date prévisionnelle' : 'Target Date'}
                    </label>
                    <input
                      type="text"
                      value={formData.dateEstimate}
                      onChange={(e) => setFormData({ ...formData, dateEstimate: e.target.value })}
                      placeholder="Ex: Septembre 2026"
                      className="w-full bg-[#161B28] border border-white/10 rounded-md px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#FF3B30]"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {lang === 'fr' ? 'Enveloppe budgétaire' : 'Target Budget'}
                    </label>
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="Ex: 15 000 € HT"
                      className="w-full bg-[#161B28] border border-white/10 rounded-md px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#FF3B30] font-mono"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {lang === 'fr' ? 'Cahier des charges & objectifs *' : 'Project description & goals *'}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'fr' ? "Décrivez brièvement votre projet, le lieu envisagé et les besoins prioritaires..." : "Describe your project, venue, and primary requirements..."}
                    className={`w-full bg-[#161B28] border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF3B30]`}
                  />
                  {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider text-white bg-[#FF3B30] hover:bg-[#E0352B] active:scale-[0.98] rounded-md transition-all duration-150 shadow-md shadow-[#FF3B30]/30 disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B30]"
                  >
                    {isSubmitting ? (
                      <span>{lang === 'fr' ? 'Transmission en cours...' : 'Sending...'}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{lang === 'fr' ? 'Envoyer ma demande de proposition' : 'Submit Project Brief'}</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2 font-mono">
                    {lang === 'fr' ? 'Données confidentielles traitées conformément au RGPD.' : 'Confidential data processed in accordance with GDPR.'}
                  </p>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
