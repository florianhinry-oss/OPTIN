export type Language = 'fr' | 'en';

export interface ServiceItem {
  id: string;
  number: string;
  title: { fr: string; en: string };
  shortDesc: { fr: string; en: string };
  fullDesc: { fr: string; en: string };
  image: string;
  features: { fr: string[]; en: string[] };
  stats: { label: { fr: string; en: string }; value: string };
  deliverables: { fr: string[]; en: string[] };
}

export interface ProjectCase {
  id: string;
  title: string;
  category: 'sports' | 'corporate' | 'timing' | 'broadcast';
  categoryLabel: { fr: string; en: string };
  location: string;
  year: string;
  client: string;
  image: string;
  summary: { fr: string; en: string };
  challenge: { fr: string; en: string };
  solution: { fr: string; en: string };
  metrics: { value: string; label: { fr: string; en: string } }[];
  tags: string[];
}

export interface TimingAthlete {
  rank: number;
  bib: number;
  name: string;
  country: string;
  category: string;
  gender: 'M' | 'F';
  team: string;
  split1: string;
  finishTime: string;
  gap: string;
  avgSpeed: string;
  status: 'Finished' | 'Running' | 'DNF';
}

export interface TimingRace {
  id: string;
  name: string;
  date: string;
  distance: string;
  elevation: string;
  location: string;
  participantsCount: number;
  categories: string[];
  results: TimingAthlete[];
}

export interface SimulatorOptions {
  eventType: 'sports' | 'corporate' | 'festival' | 'teambuilding' | 'broadcast';
  scale: 'small' | 'medium' | 'large' | 'mass';
  timingSystem: boolean;
  videoBroadcast: boolean;
  stageAndLights: boolean;
  webPlatform: boolean;
  safetyLogistics: boolean;
  cateringPartner: boolean;
}
