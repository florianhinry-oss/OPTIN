import { ServiceItem, ProjectCase, TimingRace } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_optin_event_1792687485949.jpg';
export const URBAN_BIKE_IMAGE = '/src/assets/images/project_urban_bike_1792687498561.jpg';
export const STADE_LUX_IMAGE = '/src/assets/images/project_stade_luxembourg_1792687498719.jpg';
export const BROADCAST_IMAGE = '/src/assets/images/service_broadcast_video_1792687500161.jpg';
export const TIMING_IMAGE = '/src/assets/images/service_timing_sports_1792687514445.jpg';

export const SERVICES: ServiceItem[] = [
  {
    id: 'events',
    number: '01',
    title: {
      fr: "Organisation d'Événements & Grands Festivals",
      en: "Event Management & Major Public Festivals",
    },
    shortDesc: {
      fr: "Production exécutive clé en main, direction technique et scénographie pour rassemblements sportifs et institutionnels.",
      en: "Turnkey executive production, technical direction and staging for sporting and institutional gatherings.",
    },
    fullDesc: {
      fr: "Depuis 2006, OPTIN conçoit et pilote des événements d'envergure nationale et internationale au Grand-Duché : festivals urbains de vélo, inaugurations prestigieuses, manifestations populaires et galas d'entreprise. Nous orchestrons l'intégralité de la chaîne logistique, des autorisations administratives jusqu'à la régie scénique.",
      en: "Since 2006, OPTIN designs and steers national and international scale events in Luxembourg: urban bike festivals, prestigious inaugurations, mass participation challenges and corporate galas.",
    },
    image: HERO_IMAGE,
    features: {
      fr: [
        "Coordination générale & gestion des autorisations (Ville, Police, Ministères)",
        "Scénographie, structures scéniques, ponts d'éclairage & sonorisation",
        "Gestion des flux de spectateurs, sécurité et plans de secours",
        "Village exposants, food courts et zones partenaires VIP"
      ],
      en: [
        "General coordination & permits (City, Police, Ministries)",
        "Scenography, stage trussing, lighting & acoustics",
        "Crowd flow management, safety protocols & evacuation plans",
        "Exhibitor village, food courts & VIP partner lounges"
      ]
    },
    stats: {
      label: { fr: "Événements majeurs coordonnés", en: "Major events coordinated" },
      value: "450+"
    },
    deliverables: {
      fr: ["Plan de sécurité homologué", "Direction de course & régie live", "Clé en main garanti"],
      en: ["Certified safety plan", "Race direction & live operations", "Guaranteed turnkey"]
    }
  },
  {
    id: 'timing',
    number: '02',
    title: {
      fr: "Chronométrage Officiel & Solutions Live Timing",
      en: "Official Race Timing & Live Data Solutions",
    },
    shortDesc: {
      fr: "Systèmes de chronométrage RFID et photo-finish homologués avec résultats en temps réel sur le web et les écrans.",
      en: "Certified RFID chip and photo-finish timing systems with real-time web results and live stadium displays.",
    },
    fullDesc: {
      fr: "Partenaire de référence pour le chronométrage sportif au Luxembourg, OPTIN déploie des systèmes RFID de pointe (Race Result) pour marathons, courses cyclistes, trails et triathlons. De la puce dossard au portail de résultats instantanés avec diplômes et alertes SMS aux intermédiaires.",
      en: "Reference partner for sports timing in Luxembourg, OPTIN deploys state-of-the-art RFID transponder networks (Race Result) for marathons, cycling crits, trails and triathlons with instant online rankings.",
    },
    image: TIMING_IMAGE,
    features: {
      fr: [
        "Puces RFID jetables dossard & transpondeurs actifs pro pour vélos",
        "Arches de départ/arrivée avec tapis de détection redondants",
        "Affichage temps réel sur chronos géants et régie broadcast",
        "Portail de résultats live avec temps intermédiaires et diplômes PDF"
      ],
      en: [
        "Disposable bib RFID tags & pro active transponders for cycling",
        "Start/finish gantries with dual redundant detection ground loops",
        "Real-time scoreboard sync for LED stadium screens & broadcast",
        "Live web portal with split times and instant finisher diplomas"
      ]
    },
    stats: {
      label: { fr: "Athlètes et coureurs chronométrés", en: "Athletes timed & tracked" },
      value: "180k+"
    },
    deliverables: {
      fr: ["Précision au 1/100e de seconde", "Export officiel UCI / FLAC", "Tracking SMS en direct"],
      en: ["1/100th second precision", "Official UCI / FLAC export", "Live SMS notifications"]
    }
  },
  {
    id: 'broadcast',
    number: '03',
    title: {
      fr: "Production Audiovisuelle & Live Streaming 4K",
      en: "Audiovisual Production & 4K Live Broadcast",
    },
    shortDesc: {
      fr: "Régie multicaméra professionnelle, transmission fibre/satellite, diffusion sur réseaux sociaux et écrans géants.",
      en: "Professional multi-camera control, fiber/satellite link, multi-platform streaming and giant arena LED walls.",
    },
    fullDesc: {
      fr: "Captez l'intensité de chaque instant. OPTIN dispose d'équipements de broadcast mobile ultra-performants pour diffuser vos compétitions et conférences en direct. Caméras HF sans fil, drones homologués, incrustation graphique des chronos en temps réel et retransmission sur les chaînes de télévision et plateformes digitales.",
      en: "Capture every heartbeat. OPTIN deploys high-end mobile OB equipment to broadcast your competitions and summits live. Wireless RF cameras, licensed drones, live timing graphics overlay and multi-screen distribution.",
    },
    image: BROADCAST_IMAGE,
    features: {
      fr: [
        "Régie mobile 4K jusqu'à 12 caméras avec ralentis instantanés",
        "Liaisons HF sans fil sur circuits et drones cinématiques",
        "Incrustation en direct des graphiques de course et classements",
        "Diffusion simultanée YouTube, Facebook, Twitch et flux TV pro"
      ],
      en: [
        "Mobile 4K OB truck up to 12 cameras with instant replay",
        "Wireless RF links along circuits and licensed cinema drones",
        "Real-time on-screen graphic overlays of race ranks & splits",
        "Simultaneous live distribution to YouTube, Twitch and TV broadcast feeds"
      ]
    },
    stats: {
      label: { fr: "Heures de direct diffusées", en: "Hours of live broadcast" },
      value: "1,200h"
    },
    deliverables: {
      fr: ["Flux streaming sans latence", "Teasers & Aftermovie 4K", "Archives vidéo intégrales"],
      en: ["Low-latency stream", "4K Teaser & Aftermovie", "Complete raw archives"]
    }
  },
  {
    id: 'teambuilding',
    number: '04',
    title: {
      fr: "Team Building Sportif & Corporate Challenges",
      en: "Sports Team Building & Corporate Challenges",
    },
    shortDesc: {
      fr: "Expériences immersives et challenges sportifs créés sur-mesure pour fédérer vos équipes d'entreprise.",
      en: "Immersive experiences and tailored athletic challenges designed to unite corporate teams.",
    },
    fullDesc: {
      fr: "Inspirés des valeurs fondamentales du sport de haut niveau – cohésion, résilience, esprit d'équipe et fair-play –, nos programmes de team building sont taillés sur mesure pour les entreprises de la place financière, technologique et institutionnelle luxembourgeoise.",
      en: "Rooted in competitive sports values – cohesion, resilience, team spirit and fair play –, our team building programs are tailored specifically for corporate teams in Luxembourg.",
    },
    image: URBAN_BIKE_IMAGE,
    features: {
      fr: [
        "Olympiades d'entreprise multi-disciplines (vélos, relais, énigmes)",
        "Challenges outdoor en pleine nature luxembourgeoise (Mullerthal, Moselle)",
        "Coaching par d'anciens athlètes de haut niveau luxembourgeois",
        "Logistique réceptive complète, remise de trophées et cocktail"
      ],
      en: [
        "Multi-sport corporate olympics (bikes, relay, navigation puzzles)",
        "Outdoor challenges across Luxembourg's scenic landscapes",
        "Keynote talks and coaching by top Luxembourg athletes",
        "Full hospitality logistics, awards ceremony and networking banquet"
      ]
    },
    stats: {
      label: { fr: "Collaborateurs fédérés", en: "Corporate participants" },
      value: "35 000+"
    },
    deliverables: {
      fr: ["Scénario 100% sur-mesure", "Encadrement sécurisé diplômé", "Pack photo/vidéo souvenir"],
      en: ["100% bespoke format", "Certified professional instructors", "Memory photo/video pack"]
    }
  },
  {
    id: 'digital',
    number: '05',
    title: {
      fr: "Solutions Web & Inscriptions en Ligne",
      en: "Digital Platforms & Online Registrations",
    },
    shortDesc: {
      fr: "Plateformes web personnalisées pour événements, gestion sécurisée des inscriptions coureurs et billetterie.",
      en: "Custom event websites, secure participant registration systems and automated ticketing.",
    },
    fullDesc: {
      fr: "Un événement réussi démarre dès la première interaction en ligne. Nous concevons le site web vitrine dédié à votre manifestation, gérons les formulaires d'inscription avec paiement sécurisé multidevises, la collecte des certificats médicaux et la communication ciblée auprès des participants.",
      en: "A successful event begins with a seamless digital touchpoint. We craft high-converting event landing pages, handle racer registration workflows with multi-currency payment, medical certificate verification and attendee newsletters.",
    },
    image: STADE_LUX_IMAGE,
    features: {
      fr: [
        "Module d'inscription coureurs rapide avec sélection de vagues",
        "Passerelle de paiement sécurisée conforme RGPD / DSP2",
        "Attribution automatique des numéros de dossard et QR code retrait",
        "Communication email automatisée (convocations, consignes, résultats)"
      ],
      en: [
        "Fast participant registration module with start-wave selection",
        "GDPR-compliant secure payment processing gateway",
        "Automated bib number assignment with check-in QR codes",
        "Automated transactional emails (confirmations, bib pickup, results)"
      ]
    },
    stats: {
      label: { fr: "Inscriptions gérées en ligne", en: "Online entries processed" },
      value: "99.98%"
    },
    deliverables: {
      fr: ["Tableau de bord organisateur", "Support coureurs multilingue", "Export base de données instantané"],
      en: ["Organizer live dashboard", "Multilingual participant support", "Instant database export"]
    }
  }
];

export const PROJECTS: ProjectCase[] = [
  {
    id: 'stade-luxembourg',
    title: "Inauguration Officielle du Stade de Luxembourg",
    category: 'corporate',
    categoryLabel: { fr: "Gala & Cérémonie Officielle", en: "Gala & Official Opening" },
    location: "Kockelscheuer, Luxembourg",
    year: "2021",
    client: "Ville de Luxembourg / Ministère des Sports",
    image: STADE_LUX_IMAGE,
    summary: {
      fr: "Conception exécutive et pilotage complet de la soirée inaugurale de la nouvelle enceinte sportive nationale du Grand-Duché de Luxembourg.",
      en: "Executive design and comprehensive coordination of the opening celebration for Luxembourg's national stadium.",
    },
    challenge: {
      fr: "Orchestrer un événement protocolaire d'État accueillant plus de 9 500 invités, personnalités gouvernementales, fédérations sportives et grand public, dans un site neuf aux contraintes sécuritaires et scénographiques maximales.",
      en: "Deliver a high-security state event hosting over 9,500 guests, cabinet ministers, sporting federations and spectators in a newly completed stadium complex.",
    },
    solution: {
      fr: "Mise en place d'une régie générale globale : protocole VIP sur tapis rouge, spectacle son et lumière immersif sur la pelouse, coordination des écrans géants LED et diffusion télévisuelle nationale en direct.",
      en: "End-to-end event operations: red-carpet VIP protocol, light and sound show on the pitch, synced giant LED scoreboard displays and live national television broadcast.",
    },
    metrics: [
      { value: "9 500+", label: { fr: "Invités et spectateurs", en: "Guests & spectators" } },
      { value: "100%", label: { fr: "Conformité protocolaire", en: "Protocol compliance" } },
      { value: "4K Live", label: { fr: "Diffusion télévisuelle", en: "National TV broadcast" } }
    ],
    tags: ["Stade National", "Cérémonie", "Ville de Luxembourg", "Régie Scénique"]
  },
  {
    id: 'urban-bike',
    title: "LALUX Urban Bike Festival Luxembourg",
    category: 'sports',
    categoryLabel: { fr: "Festival Sportif Grand Public", en: "Mass Public Bike Festival" },
    location: "Luxembourg-Ville (Place de la Constitution & Grund)",
    year: "2024",
    client: "LALUX Assurances & OPTIN Production",
    image: URBAN_BIKE_IMAGE,
    summary: {
      fr: "Le plus grand festival dédié au cyclisme urbain et à la micro-mobilité au Luxembourg avec criterium élite et parcours découvertes.",
      en: "The biggest urban cycling and micro-mobility festival in Luxembourg with an elite criterium race and public test tracks.",
    },
    challenge: {
      fr: "Fermer et sécuriser un circuit technique de 2,4 km en plein cœur historique de Luxembourg-Ville (pavés, montées, virages serrés) tout en animant un village festival de 30 exposants sur 3 jours.",
      en: "Secure a 2.4km technical race loop in the historic heart of Luxembourg City while operating a vibrant 30-exhibitor festival village over 3 consecutive days.",
    },
    solution: {
      fr: "Installation de 1 800 mètres linéaires de barrières de sécurité, double chronométrage actif transpondeur haute vitesse, village de tests vélos électriques, shows acrobatiques et concerts en plein air.",
      en: "Deployed 1,800m of certified race barriers, active high-speed transponder timing loops, e-bike demo hub, stunt shows and outdoor stage concerts.",
    },
    metrics: [
      { value: "16 000+", label: { fr: "Visiteurs sur 3 jours", en: "Visitors across 3 days" } },
      { value: "650", label: { fr: "Coureurs engagés", en: "Competing athletes" } },
      { value: "0 incident", label: { fr: "Sécurité certifiée", en: "Safety score" } }
    ],
    tags: ["Cyclisme", "LALUX", "Grand Public", "Chronométrage Actif"]
  },
  {
    id: 'gravel-festival',
    title: "Gravel Festival Remich - Moselle Valley",
    category: 'timing',
    categoryLabel: { fr: "Compétition & Randonnée Gravier", en: "Gravel Race & Touring" },
    location: "Remich, Vallée de la Moselle",
    year: "2024",
    client: "Commune de Remich & Fédérations Cyclistes",
    image: TIMING_IMAGE,
    summary: {
      fr: "Événement de gravel phare à travers les vignobles escarpés de la Moselle luxembourgeoise avec chronométrage par segments.",
      en: "Premier gravel cycling challenge through the steep Moselle wine terraces featuring chip segment timing.",
    },
    challenge: {
      fr: "Assurer le chronométrage en direct et le suivi de 1 200 participants répartis sur trois parcours sauvages (50km, 85km, 120km) avec zones à faible couverture 4G.",
      en: "Ensure live timing and safety tracking for 1,200 participants across three wilderness courses (50km, 85km, 120km) across mixed 4G coverage.",
    },
    solution: {
      fr: "Déploiement de stations de chronométrage autonomes à liaison satellite Starlink aux points de contrôle stratégiques et publication instantanée des classements avec diplômes numériques personnalisés.",
      en: "Autonomous solar & Starlink-linked timing stations at critical gravel junctions, publishing split times and instant personal finisher certificates.",
    },
    metrics: [
      { value: "1 200", label: { fr: "Cyclistes internationaux", en: "International riders" } },
      { value: "3 Circuits", label: { fr: "50km, 85km & 120km", en: "50km, 85km & 120km" } },
      { value: "4 Sat-Stations", label: { fr: "Points intermédiaires", en: "Satellite split points" } }
    ],
    tags: ["Gravel", "Starlink Timing", "Remich", "Outdoor"]
  },
  {
    id: 'broadcast-live',
    title: "Championnats & Galas Sportifs Télévisés",
    category: 'broadcast',
    categoryLabel: { fr: "Régie Multicaméra & Streaming", en: "Multi-Camera Broadcast & Stream" },
    location: "d'Coque & Luxembourg Arena",
    year: "2023 - 2024",
    client: "Fédérations Sportives & Diffuseurs Européens",
    image: BROADCAST_IMAGE,
    summary: {
      fr: "Production audiovisuelle multicaméra de compétitions d'arts martiaux, tennis de table et marathons avec incrustations graphiques live.",
      en: "Multi-camera broadcast production for combat sports championships, table tennis and road marathons with live on-screen graphics.",
    },
    challenge: {
      fr: "Fournir un signal international de niveau télédiffuseur européen (clean feed + dirty feed) avec une latence ultra-faible et synchronisation immédiate des chronomètres et scores.",
      en: "Deliver an international broadcast-standard feed (clean feed + dirty feed) with sub-second latency and direct integration with official match scoring systems.",
    },
    solution: {
      fr: "Car-régie mobile 4K UHD, caméras ralenti super slow-motion 200fps, habillage graphique aux normes internationales et diffusion sur 4 réseaux mondiaux simultanés.",
      en: "Mobile 4K UHD production desk, 200fps slow-motion cameras, international-spec motion graphics and concurrent multi-network global streaming.",
    },
    metrics: [
      { value: "140 000+", label: { fr: "Téléspectateurs en direct", en: "Live global viewers" } },
      { value: "8 Caméras", label: { fr: "Setup UHD & Super-Slow", en: "UHD & Super-Slow setup" } },
      { value: "0,8s", label: { fr: "Latence du flux live", en: "Live stream latency" } }
    ],
    tags: ["Live Stream 4K", "Télédiffusion", "d'Coque", "Scoreboard Sync"]
  }
];

export const TIMING_RACES_DATA: TimingRace[] = [
  {
    id: 'race-urban-bike-2024',
    name: "LALUX Urban Bike Festival - Elite Men Criterium",
    date: "14 Septembre 2024",
    distance: "48.0 km (20 Tours)",
    elevation: "320 m D+",
    location: "Luxembourg-Ville",
    participantsCount: 68,
    categories: ["Tous", "Elite Hommes", "U23 Espoirs", "Masters"],
    results: [
      { rank: 1, bib: 12, name: "Bob Jungels", country: "LUX", category: "Elite Hommes", gender: 'M', team: "Team Red Bull BORA", split1: "00:31:14", finishTime: "01:04:22", gap: "-", avgSpeed: "44.7 km/h", status: 'Finished' },
      { rank: 2, bib: 4, name: "Arthur Kluckers", country: "LUX", category: "Elite Hommes", gender: 'M', team: "Tudor Pro Cycling", split1: "00:31:18", finishTime: "01:04:26", gap: "+00:04", avgSpeed: "44.6 km/h", status: 'Finished' },
      { rank: 3, bib: 28, name: "Mathieu van der Poel", country: "NED", category: "Elite Hommes", gender: 'M', team: "Alpecin-Deceuninck", split1: "00:31:15", finishTime: "01:04:31", gap: "+00:09", avgSpeed: "44.5 km/h", status: 'Finished' },
      { rank: 4, bib: 19, name: "Kevin Geniets", country: "LUX", category: "Elite Hommes", gender: 'M', team: "Groupama-FDJ", split1: "00:31:30", finishTime: "01:04:48", gap: "+00:26", avgSpeed: "44.3 km/h", status: 'Finished' },
      { rank: 5, bib: 45, name: "Mats Wenzel", country: "LUX", category: "U23 Espoirs", gender: 'M', team: "Lidl-Trek Future", split1: "00:31:42", finishTime: "01:05:02", gap: "+00:40", avgSpeed: "44.1 km/h", status: 'Finished' },
      { rank: 6, bib: 33, name: "Loïc Bettendorff", country: "LUX", category: "U23 Espoirs", gender: 'M', team: "Global6 Cycling", split1: "00:31:55", finishTime: "01:05:19", gap: "+00:57", avgSpeed: "43.9 km/h", status: 'Finished' },
      { rank: 7, bib: 52, name: "Frank Schleck", country: "LUX", category: "Masters", gender: 'M', team: "Schleck Gran Fondo", split1: "00:32:10", finishTime: "01:06:05", gap: "+01:43", avgSpeed: "43.4 km/h", status: 'Finished' },
      { rank: 8, bib: 8, name: "Alex Kirsch", country: "LUX", category: "Elite Hommes", gender: 'M', team: "Lidl-Trek", split1: "00:32:05", finishTime: "01:06:18", gap: "+01:56", avgSpeed: "43.3 km/h", status: 'Finished' },
      { rank: 9, bib: 71, name: "Gilles Miny", country: "LUX", category: "Masters", gender: 'M', team: "UC Dippach", split1: "00:32:45", finishTime: "01:07:30", gap: "+03:08", avgSpeed: "42.5 km/h", status: 'Finished' },
      { rank: 10, bib: 64, name: "Niels Michotte", country: "BEL", category: "U23 Espoirs", gender: 'M', team: "Cycling Wallonie", split1: "00:33:12", finishTime: "01:08:14", gap: "+03:52", avgSpeed: "42.1 km/h", status: 'Finished' },
    ]
  },
  {
    id: 'race-remich-gravel-2024',
    name: "Remich Moselle Gravel Challenge 85km",
    date: "28 Mai 2024",
    distance: "85.2 km",
    elevation: "1 450 m D+",
    location: "Remich Esplanade",
    participantsCount: 420,
    categories: ["Tous", "Scratch", "Femmes", "Hommes", "Masters 40+"],
    results: [
      { rank: 1, bib: 104, name: "Christine Majerus", country: "LUX", category: "Femmes", gender: 'F', team: "Team SD Worx-Protime", split1: "01:12:40", finishTime: "02:38:15", gap: "-", avgSpeed: "32.3 km/h", status: 'Finished' },
      { rank: 2, bib: 215, name: "Marc Leyder", country: "LUX", category: "Hommes", gender: 'M', team: "Leopard Gravel Squad", split1: "01:13:05", finishTime: "02:39:02", gap: "+00:47", avgSpeed: "32.1 km/h", status: 'Finished' },
      { rank: 3, bib: 188, name: "Julien Schmit", country: "LUX", category: "Hommes", gender: 'M', team: "Saarfels Racing", split1: "01:14:20", finishTime: "02:41:22", gap: "+03:07", avgSpeed: "31.7 km/h", status: 'Finished' },
      { rank: 4, bib: 302, name: "Marie Schreiber", country: "LUX", category: "Femmes", gender: 'F', team: "Team SD Worx", split1: "01:14:45", finishTime: "02:42:10", gap: "+03:55", avgSpeed: "31.5 km/h", status: 'Finished' },
      { rank: 5, bib: 142, name: "Claude Wolter", country: "LUX", category: "Masters 40+", gender: 'M', team: "CT Kayldall", split1: "01:16:10", finishTime: "02:45:34", gap: "+07:19", avgSpeed: "30.9 km/h", status: 'Finished' },
      { rank: 6, bib: 279, name: "Laurent Bintz", country: "LUX", category: "Masters 40+", gender: 'M', team: "Velo Woolz", split1: "01:17:30", finishTime: "02:47:50", gap: "+09:35", avgSpeed: "30.5 km/h", status: 'Finished' },
    ]
  },
  {
    id: 'race-lux-urban-trail-2024',
    name: "Luxembourg Night Urban Trail 10K",
    date: "19 Octobre 2024",
    distance: "10.0 km",
    elevation: "280 m D+",
    location: "Rives de Clausen",
    participantsCount: 1540,
    categories: ["Tous", "Scratch", "Femmes", "Hommes", "Entreprises"],
    results: [
      { rank: 1, bib: 501, name: "Pol Mellina", country: "LUX", category: "Hommes", gender: 'M', team: "Celtic Diekirch", split1: "00:15:20", finishTime: "00:32:14", gap: "-", avgSpeed: "18.6 km/h (3:13/km)", status: 'Finished' },
      { rank: 2, bib: 512, name: "Yonas Kinde", country: "LUX", category: "Hommes", gender: 'M', team: "CAB Luxembourg", split1: "00:15:35", finishTime: "00:32:48", gap: "+00:34", avgSpeed: "18.3 km/h (3:16/km)", status: 'Finished' },
      { rank: 3, bib: 740, name: "Jenny Gloden", country: "LUX", category: "Femmes", gender: 'F', team: "Fola Esch", split1: "00:17:10", finishTime: "00:36:05", gap: "+03:51", avgSpeed: "16.6 km/h (3:36/km)", status: 'Finished' },
      { rank: 4, bib: 889, name: "BGL BNP Paribas Relay 1", country: "LUX", category: "Entreprises", gender: 'M', team: "BGL Corporate Runners", split1: "00:17:40", finishTime: "00:37:12", gap: "+04:58", avgSpeed: "16.1 km/h (3:43/km)", status: 'Finished' },
      { rank: 5, bib: 620, name: "Tania Fransissi", country: "LUX", category: "Femmes", gender: 'F', team: "CA Dudelange", split1: "00:18:02", finishTime: "00:38:20", gap: "+06:06", avgSpeed: "15.7 km/h (3:50/km)", status: 'Finished' },
    ]
  }
];

export const TRUST_PARTNERS = [
  { name: "Ville de Luxembourg", category: "Institutionnel" },
  { name: "LALUX Assurances", category: "Finance & Assurance" },
  { name: "POST Luxembourg", category: "Télécom & Postal" },
  { name: "BGL BNP Paribas", category: "Banque & Finance" },
  { name: "Ministère des Sports", category: "Gouvernemental" },
  { name: "FLAC / FSCL", category: "Fédérations Sportives" },
  { name: "Luxembourg Convention Bureau", category: "Partenaire Référencé" },
  { name: "LEA (Luxembourg Event Association)", category: "Membre Actif" }
];

export const AGENCY_KEY_NUMBERS = [
  { value: "2006", label: { fr: "Année de fondation", en: "Founded in" }, sub: "20 ans d'histoire" },
  { value: "450+", label: { fr: "Événements majeurs produits", en: "Major events delivered" }, sub: "Clé en main" },
  { value: "180 000+", label: { fr: "Temps & dossards chronométrés", en: "Athletes timed & tracked" }, sub: "Précision RFID UCI" },
  { value: "100%", label: { fr: "Ancrage luxembourgeois", en: "Luxembourg based" }, sub: "Hamm, L-1713" },
];
