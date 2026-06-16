export type Locale = "fr" | "en" | "ar";

export const LOCALES: Locale[] = ["fr", "en", "ar"];
export const DEFAULT_LOCALE: Locale = "fr";
export const RTL_LOCALES: Locale[] = ["ar"];

export type Dictionary = {
  nav: {
    home: string;
    platform: string;
    features: string;
    modules: string;
    solutions: string;
    pricing: string;
    about: string;
    contact: string;
    cta: string;
    language: string;
    theme: string;
    themeLight: string;
    themeDark: string;
    search: string;
    platformMenu: { label: string; description: string; href: string }[];
    modulesMenu: { label: string; description: string; href: string }[];
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    titleHighlight: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    integrationsLabel: string;
    integrations: string[];
  };
  heroMockup: {
    panelTitle: string;
    panelSubtitle: string;
    convert: string;
    totalBalance: string;
    netIncome: string;
    received: string;
    trustedUsers: string;
    running: string;
  };
  store: {
    desktopTop: string;
    desktopBottom: string;
    webTop: string;
    webBottom: string;
  };
  trust: {
    label: string;
    items: string[];
  };
  features: {
    badge: string;
    title1: string;
    titleHighlight: string;
    intro: string;
    learnMore: string;
    cards: { title: string; description: string }[];
  };
  modules: {
    badge: string;
    title1: string;
    titleHighlight: string;
    intro: string;
    cards: { title: string; description: string }[];
  };
  testimonials: {
    badge: string;
    title1: string;
    titleHighlight: string;
    intro: string;
    items: { quote: string; name: string; role: string }[];
  };
  faq: {
    badge: string;
    title1: string;
    titleHighlight: string;
    intro: string;
    items: { question: string; answer: string }[];
  };
  about: {
    badge: string;
    titleLead: string;
    intro: string;
    moreDetails: string;
    videoCaption: string;
    missionLead: string;
    missionBody: string;
    missionHighlight: string;
    whyEyebrow: string;
    whyTitle1: string;
    whyTitleHighlight: string;
    whyTitle2: string;
    whyBody: string;
    whyCta: string;
    points: { title: string; description: string }[];
  };
  pricing: {
    badge: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    modeDesktop: string;
    modeOnline: string;
    tagNoUpdates: string;
    tagUpdates: string;
    mostPopular: string;
    noteDesktop: string;
    noteOnline: string;
    footnote: string;
    periodPerYear: string;
    period3Years: string;
    periodTrial: string;
    free: string;
    onQuote: string;
    trialNote: string;
    desktopBackup: string;
    plans: {
      key: string;
      name: string;
      description: string;
      features: string[];
      cta: string;
    }[];
  };
  cta: {
    badge: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    placeholder: string;
    button: string;
    note: string;
  };
  footer: {
    tagline: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    socials: { label: string; href: string }[];
    rights: string;
    madeWith: string;
  };
  dashboard: {
    currency: string;
    solutionTag: string;
    role: string;
    systemActive: string;
    headerSubtitle: string;
    title: string;
    welcome: string;
    stockValue: string;
    logout: string;
    filters: { today: string; yesterday: string; week: string; month: string; year: string };
    kpis: {
      revenue: { label: string; sub: string };
      receivables: { label: string; sub: string };
      expenses: { label: string; sub: string };
      netProfit: { label: string; sub: string };
      margin: { label: string; sub: string };
      orders: { label: string; sub: string };
      clients: { label: string; sub: string };
      suppliers: { label: string; sub: string };
      products: { label: string; sub: string };
      invoices: { label: string; sub: string };
    };
    flux: { title: string; subtitle: string; revenue: string; expenses: string };
    recent: { title: string; seeAll: string };
    quickActions: {
      title: string;
      newInvoice: string;
      quickSale: string;
      newExpense: string;
      addClient: string;
    };
    stockAlerts: {
      title: string;
      products: string;
      unit: string;
      low: string;
    };
    fiscal: {
      title: string;
      subtitle: string;
      collected: string;
      deductible: string;
      balance: string;
    };
    statusPending: string;
    statusPaid: string;
    sidebar: {
      sectionDashboard: string;
      workspace: string;
      dashboard: string;
      sectionSales: string;
      invoices: string;
      quotes: string;
      passingSales: string;
      creditNotes: string;
      deliveryNotes: string;
      sectionPurchases: string;
      purchaseOrders: string;
      expenses: string;
      sectionContacts: string;
      clients: string;
      suppliers: string;
      sectionStock: string;
      products: string;
      sectionSystem: string;
      settings: string;
    };
  };
};

const fr: Dictionary = {
  nav: {
    home: "Accueil",
    platform: "Plateforme",
    features: "Fonctionnalités",
    modules: "Modules",
    solutions: "Solutions",
    about: "À propos",
    pricing: "Tarifs",
    contact: "Contact",
    cta: "Obtenir une démo",
    language: "Langue",
    theme: "Thème",
    themeLight: "Mode clair",
    themeDark: "Mode sombre",
    search: "Rechercher",
    platformMenu: [
      {
        label: "Vue d'ensemble",
        description: "Découvrez l'ERP tout-en-un pour parapharmacies.",
        href: "#features",
      },
      {
        label: "Tableau de bord",
        description: "Pilotez votre activité en temps réel.",
        href: "#features",
      },
      {
        label: "Sécurité & conformité",
        description: "Données protégées et reporting conforme.",
        href: "#about",
      },
    ],
    modulesMenu: [
      {
        label: "Contrôle intelligent du stock",
        description: "Dates de péremption, réassort automatique.",
        href: "#modules",
      },
      {
        label: "POS & ventes fluides",
        description: "Encaissements rapides et fidélité intégrée.",
        href: "#modules",
      },
      {
        label: "Fournisseurs & achats",
        description: "Automatisez vos achats et livraisons.",
        href: "#modules",
      },
      {
        label: "Analyses & reporting",
        description: "Rentabilité par catégorie et performance.",
        href: "#modules",
      },
    ],
  },
  hero: {
    badge: "Solutions ERP intégrées",
    title1: "La gestion",
    title2: "de votre entreprise, enfin",
    titleHighlight: "simplifiée",
    subtitle:
      "Transformez la façon de piloter vos ventes, votre stock, vos achats et vos finances avec des solutions ERP intelligentes—pensées pour chaque métier.",
    primaryCta: "Commencer",
    secondaryCta: "Réserver une démo",
    integrationsLabel: "Tout votre métier dans une seule solution",
    integrations: ["Facturation", "Stock", "Achats", "Clients", "Comptabilité"],
  },
  heroMockup: {
    panelTitle: "Finances en direct",
    panelSubtitle: "Suivez vos indicateurs clés en temps réel",
    convert: "Voir le tableau de bord",
    totalBalance: "Solde total",
    netIncome: "Bénéfice net",
    received: "Encaissé",
    trustedUsers: "Entreprises nous font confiance",
    running: "En cours",
  },
  store: {
    desktopTop: "Télécharger la",
    desktopBottom: "Version Desktop",
    webTop: "Accéder à la",
    webBottom: "Version en ligne",
  },
  trust: {
    label: "Une seule plateforme pour tout votre métier",
    items: [
      "Facturation",
      "Gestion de stock",
      "Bons de livraison",
      "Clients",
      "Tableaux de bord",
      "Comptabilité",
      "Fournisseurs",
      "Conformité",
    ],
  },
  features: {
    badge: "Fonctionnalités",
    title1: "Un ERP pensé",
    titleHighlight: "pour vous",
    intro:
      "Chaque module est connecté et s'adapte à votre façon de travailler—pas l'inverse. Conçu pour évoluer avec votre activité.",
    learnMore: "En savoir plus",
    cards: [
      {
        title: "Tableaux de bord intelligents",
        description:
          "Chiffre d'affaires, marges et valeur du stock en temps réel, en dirhams (DH). Tous vos indicateurs clés en un coup d'œil.",
      },
      {
        title: "Automatisation des flux",
        description:
          "Devis, factures, bons de commande et de livraison s'enchaînent automatiquement—moins de saisie manuelle, zéro oubli.",
      },
      {
        title: "Stock & multi-activités",
        description:
          "Gestion FIFO par catégorie, alertes de péremption et de rupture, multi-langue—conçu pour s'étendre à de nouveaux métiers.",
      },
    ],
  },
  modules: {
    badge: "Solutions",
    title1: "Tout ce qu'il faut pour",
    titleHighlight: "gérer sans effort",
    intro:
      "Des solutions concrètes qui vous font gagner du temps et éliminent les erreurs—pensées pour votre activité, prêtes à l'emploi.",
    cards: [
      {
        title: "Calculs 100% automatiques",
        description:
          "TVA, TTC, HT, marges et totaux calculés automatiquement. Zéro calcul manuel, zéro risque d'erreur.",
      },
      {
        title: "Factures prêtes en 1 clic",
        description:
          "Factures, devis, avoirs et bons de livraison générés instantanément—propres, conformes et prêts à imprimer ou envoyer.",
      },
      {
        title: "Remises & promotions",
        description:
          "Appliquez des remises par produit, par client ou sur la facture entière. Calcul automatique du net à payer.",
      },
      {
        title: "Stock intelligent (FIFO)",
        description:
          "Suivi du stock par catégorie, alertes de péremption et de rupture, réapprovisionnement automatique.",
      },
      {
        title: "Achats & fournisseurs",
        description:
          "Bons de commande, catalogues fournisseurs et suivi des livraisons—tout votre approvisionnement centralisé.",
      },
      {
        title: "Tableaux de bord & rapports",
        description:
          "Chiffre d'affaires, marges et rentabilité en temps réel, en dirhams. Décidez avec des chiffres clairs.",
      },
    ],
  },
  testimonials: {
    badge: "Témoignages",
    title1: "Ce que disent les",
    titleHighlight: "parapharmacies",
    intro:
      "Des gérants de parapharmacie qui pilotent leur activité au quotidien avec ParaGestion.",
    items: [
      {
        quote:
          "Depuis ParaGestion, le suivi des péremptions et le réassort se font tout seuls. On a réduit nos ruptures de 40 %.",
        name: "Yasmine El Amrani",
        role: "Gérante, Parapharmacie Azur",
      },
      {
        quote:
          "Le POS est ultra-rapide et la fidélité intégrée a vraiment fidélisé notre clientèle dermo-cosmétique.",
        name: "Karim Benali",
        role: "Propriétaire, ParaSanté Center",
      },
      {
        quote:
          "Les tableaux de bord par catégorie m'aident à décider quoi commander. Tout est clair, en un coup d'œil.",
        name: "Salma Tazi",
        role: "Directrice, Parapharmacie Lumière",
      },
      {
        quote:
          "La gestion des fournisseurs et des livraisons nous a fait gagner des heures chaque semaine.",
        name: "Omar Cherkaoui",
        role: "Gérant, Espace Parapharma",
      },
      {
        quote:
          "Enfin un ERP pensé pour notre métier. La conformité et le reporting sont devenus un jeu d'enfant.",
        name: "Nadia Berrada",
        role: "Pharmacienne, Parapharmacie Atlas",
      },
      {
        quote:
          "Configuration rapide, équipe à l'écoute. ParaGestion a digitalisé toute notre activité en quelques jours.",
        name: "Hicham Idrissi",
        role: "Propriétaire, ParaBeauté Store",
      },
    ],
  },
  faq: {
    badge: "FAQ",
    title1: "Questions",
    titleHighlight: "fréquentes",
    intro: "Tout ce qu'il faut savoir avant de démarrer avec ParaGestion.",
    items: [
      {
        question: "ParaGestion est-il conçu uniquement pour les parapharmacies ?",
        answer:
          "ParaGestion est optimisé pour les parapharmacies (stock, péremptions, dermo-cosmétiques), mais l'architecture modulaire est conçue pour s'étendre à d'autres métiers très prochainement.",
      },
      {
        question: "Puis-je l'utiliser hors-ligne ?",
        answer:
          "Oui. La version Desktop fonctionne entièrement hors-ligne avec une licence valable 3 ans. La version En ligne inclut toutes les mises à jour.",
      },
      {
        question: "Gère-t-il plusieurs points de vente ?",
        answer:
          "Oui, vous pouvez piloter plusieurs points de vente et entrepôts, avec un stock et des analyses centralisés.",
      },
      {
        question: "Mes données sont-elles en sécurité ?",
        answer:
          "Vos données sont chiffrées, sauvegardées et protégées. Le reporting respecte les exigences réglementaires de votre activité.",
      },
      {
        question: "Combien de temps pour démarrer ?",
        answer:
          "La configuration se fait en quelques minutes et notre équipe vous accompagne pour l'import de vos produits et de vos données.",
      },
    ],
  },
  about: {
    badge: "À propos",
    titleLead: "À propos de",
    intro:
      "SmartGestion conçoit des solutions ERP intelligentes pour de nombreux secteurs et métiers. Notre premier produit, ParaGestion, est dédié aux parapharmacies—et d'autres solutions arrivent bientôt.",
    moreDetails: "En savoir plus",
    videoCaption:
      "Découvrez comment SmartGestion rend la gestion de votre activité simple et intuitive.",
    missionLead: "Notre mission ?",
    missionBody:
      "Bâtir des solutions ERP simples, accessibles et transparentes pour les",
    missionHighlight: "métiers en croissance",
    whyEyebrow: "Pourquoi nous choisir",
    whyTitle1: "Des solutions ERP",
    whyTitleHighlight: "intelligentes",
    whyTitle2: "pour faire grandir votre entreprise",
    whyBody:
      "SmartGestion réunit ventes, stock, achats, clients et finances dans une plateforme unique, claire et rapide. Conçue pour s'adapter à chaque métier—pour que vous pilotiez votre activité, pas votre logiciel.",
    whyCta: "Découvrir nos solutions",
    points: [
      {
        title: "Tout-en-un",
        description:
          "Une seule plateforme pour toute votre activité, fini les outils éparpillés.",
      },
      {
        title: "Pensé pour votre métier",
        description:
          "Des modules spécialisés, adaptés à votre secteur et à votre façon de travailler.",
      },
      {
        title: "Simple & rapide",
        description:
          "Configuration en quelques minutes et accompagnement par notre équipe.",
      },
      {
        title: "Données sécurisées",
        description:
          "Chiffrement, sauvegardes et reporting conforme à votre réglementation.",
      },
    ],
  },
  pricing: {
    badge: "Tarifs",
    title1: "Une tarification",
    titleHighlight: "simple et transparente",
    subtitle:
      "Choisissez votre version : Desktop hors-ligne (licence 3 ans, sans mises à jour) ou En ligne (abonnement annuel avec mises à jour incluses).",
    modeDesktop: "Desktop (hors-ligne)",
    modeOnline: "En ligne",
    tagNoUpdates: "Sans mises à jour",
    tagUpdates: "Mises à jour incluses",
    mostPopular: "Le plus populaire",
    noteDesktop: "Licence hors-ligne · sans mises à jour",
    noteOnline: "Abonnement en ligne · mises à jour incluses",
    footnote:
      "Version Desktop : licence unique valable 3 ans, fonctionne hors-ligne, sans mises à jour. Version En ligne : abonnement annuel incluant toutes les mises à jour et nouveautés.",
    periodPerYear: "/ an",
    period3Years: "/ 3 ans",
    periodTrial: "essai accompagné",
    free: "Démo",
    onQuote: "Sur devis",
    trialNote: "Accompagnement par notre équipe · sans remboursement",
    desktopBackup: "Sauvegarde des données",
    plans: [
      {
        key: "demo",
        name: "Démo",
        description:
          "Découvrez ParaGestion lors d'un essai complet accompagné par notre équipe.",
        features: [
          "Essai complet de 2 jours avec le support",
          "Démonstration guidée de A à Z",
          "Tableau de bord & analyses",
          "Facturation & devis",
          "Configuration assistée",
          "Sans remboursement",
        ],
        cta: "Réserver ma démo",
      },
      {
        key: "premium",
        name: "Premium",
        description:
          "Toute la puissance des calculs avancés et de l'automatisation.",
        features: [
          "Tout le plan Standard, plus :",
          "Calculs avancés & automatiques",
          "Calcul automatique TVA & TTC",
          "Remise produit & vente automatisées",
          "Remises sur produits & factures",
          "Marges et rentabilité en temps réel",
          "Support prioritaire",
        ],
        cta: "Choisir Premium",
      },
      {
        key: "standard",
        name: "Standard",
        description:
          "L'essentiel pour digitaliser la gestion de votre parapharmacie.",
        features: [
          "Tableau de bord & analyses",
          "Facturation, devis & avoirs",
          "Gestion de stock (FIFO)",
          "Bons de commande & livraison",
          "Clients & fournisseurs",
          "Comptabilité (HT / TTC)",
          "Support inclus",
        ],
        cta: "Choisir Standard",
      },
    ],
  },
  cta: {
    badge: "Rejoignez SmartGestion",
    title1: "Prêt à optimiser",
    titleHighlight: "votre parapharmacie ?",
    subtitle:
      "Rejoignez les parapharmacies qui pilotent leur activité avec ParaGestion. Démarrez aujourd'hui—configuration en quelques minutes.",
    placeholder: "votre@email.com",
    button: "Planifier une démo en direct",
    note: "Essai sans engagement · Aucune carte bancaire requise",
  },
  footer: {
    tagline:
      "SmartGestion construit des solutions ERP intelligentes pour de nombreux métiers. ParaGestion, dédié aux parapharmacies, n'est que le début.",
    columns: [
      {
        title: "Produit",
        links: [
          { label: "Fonctionnalités", href: "#features" },
          { label: "Tarifs", href: "#pricing" },
          { label: "Tableau de bord", href: "#features" },
          { label: "Sécurité", href: "#about" },
        ],
      },
      {
        title: "Entreprise",
        links: [
          { label: "À propos", href: "#about" },
          { label: "Métiers à venir", href: "#about" },
          { label: "Contact", href: "#cta" },
          { label: "Blog", href: "#" },
        ],
      },
      {
        title: "Ressources",
        links: [
          { label: "Témoignages", href: "#testimonials" },
          { label: "FAQ", href: "#faq" },
          { label: "Guides", href: "#" },
          { label: "Support", href: "#cta" },
        ],
      },
      {
        title: "Légal",
        links: [
          { label: "Conditions d'utilisation", href: "#" },
          { label: "Politique de confidentialité", href: "#" },
          { label: "Mentions légales", href: "#" },
          { label: "Cookies", href: "#" },
        ],
      },
    ],
    socials: [
      { label: "Site web", href: "#" },
      { label: "Email", href: "#cta" },
      { label: "Telegram", href: "#" },
      { label: "WhatsApp", href: "#" },
    ],
    rights: "Tous droits réservés.",
    madeWith: "Conçu avec soin pour les parapharmacies.",
  },
  dashboard: {
    currency: "DH",
    solutionTag: "SOLUTION DE GESTION",
    role: "ADMINISTRATEUR",
    systemActive: "Système actif",
    headerSubtitle: "Analyse et rapports financiers",
    title: "Tableau de Bord",
    welcome: "Bienvenue sur ParaGestion",
    stockValue: "Valeur du Stock (HT)",
    logout: "Déconnexion",
    filters: {
      today: "Aujourd'hui",
      yesterday: "Hier",
      week: "Cette semaine",
      month: "Ce mois-ci",
      year: "Cette année",
    },
    kpis: {
      revenue: { label: "CHIFFRE D'AFFAIRES (TTC)", sub: "Revenus totaux" },
      receivables: { label: "CRÉANCES CLIENTS", sub: "Factures en attente" },
      expenses: { label: "DÉPENSES TOTALES (TTC)", sub: "Sorties mensuelles" },
      netProfit: { label: "BÉNÉFICE NET (TTC)", sub: "Marge bénéficiaire" },
      margin: { label: "MARGE COMMERCIALE", sub: "CA - Coût des ventes" },
      orders: { label: "BONS DE COMMANDE", sub: "Confirmés / Livrés" },
      clients: { label: "CLIENTS", sub: "Total clients" },
      suppliers: { label: "FOURNISSEURS", sub: "Total fournisseurs" },
      products: { label: "PRODUITS", sub: "Articles en stock" },
      invoices: { label: "FACTURES", sub: "Payées + Attente" },
    },
    flux: {
      title: "Analyse des Flux",
      subtitle: "Évolution mensuelle des recettes et dépenses (TTC)",
      revenue: "Recettes",
      expenses: "Dépenses",
    },
    recent: { title: "Factures Récentes", seeAll: "Tout voir" },
    quickActions: {
      title: "Actions Rapides",
      newInvoice: "Nouvelle Facture",
      quickSale: "Vente Rapide",
      newExpense: "Nouvelle Dépense",
      addClient: "Ajouter Client",
    },
    stockAlerts: {
      title: "Alertes Stock",
      products: "produits",
      unit: "unité",
      low: "STOCK BAS",
    },
    fiscal: {
      title: "Récapitulatif Fiscal (TVA)",
      subtitle: "TVA collectée, déductible et solde",
      collected: "TVA Collectée",
      deductible: "TVA Déductible",
      balance: "Solde TVA",
    },
    statusPending: "En attente",
    statusPaid: "Payée",
    sidebar: {
      sectionDashboard: "TABLEAU DE BORD",
      workspace: "Espace de Travail",
      dashboard: "Tableau de Bord",
      sectionSales: "VENTES",
      invoices: "Factures",
      quotes: "Devis",
      passingSales: "Ventes Passagers",
      creditNotes: "Avoirs",
      deliveryNotes: "Bons de Livraison",
      sectionPurchases: "ACHATS",
      purchaseOrders: "Bons de Commande",
      expenses: "Dépenses",
      sectionContacts: "CONTACTS",
      clients: "Clients",
      suppliers: "Fournisseurs",
      sectionStock: "STOCK",
      products: "Produits",
      sectionSystem: "SYSTÈME",
      settings: "Paramètres",
    },
  },
};

const en: Dictionary = {
  nav: {
    home: "Home",
    platform: "Platform",
    features: "Features",
    modules: "Modules",
    solutions: "Solutions",
    about: "About",
    pricing: "Pricing",
    contact: "Contact",
    cta: "Get a Demo",
    language: "Language",
    theme: "Theme",
    themeLight: "Light mode",
    themeDark: "Dark mode",
    search: "Search",
    platformMenu: [
      {
        label: "Overview",
        description: "Discover the all-in-one ERP for parapharmacies.",
        href: "#features",
      },
      {
        label: "Dashboard",
        description: "Run your business in real time.",
        href: "#features",
      },
      {
        label: "Security & compliance",
        description: "Protected data and compliant reporting.",
        href: "#about",
      },
    ],
    modulesMenu: [
      {
        label: "Intelligent Inventory Control",
        description: "Expiry dates and automatic reordering.",
        href: "#modules",
      },
      {
        label: "Seamless POS & Sales",
        description: "Fast checkouts and built-in loyalty.",
        href: "#modules",
      },
      {
        label: "Supplier & Procurement",
        description: "Automate purchasing and deliveries.",
        href: "#modules",
      },
      {
        label: "Advanced Analytics & Reporting",
        description: "Profitability by category and performance.",
        href: "#modules",
      },
    ],
  },
  hero: {
    badge: "Integrated ERP Solutions",
    title1: "Smart business",
    title2: "management, made",
    titleHighlight: "effortless",
    subtitle:
      "Transform how you run your sales, inventory, purchasing and finances with intelligent ERP solutions—built for every industry.",
    primaryCta: "Get Started",
    secondaryCta: "Book a Demo",
    integrationsLabel: "Your entire business in a single solution",
    integrations: ["Invoicing", "Inventory", "Purchasing", "Clients", "Accounting"],
  },
  heroMockup: {
    panelTitle: "Live Finances",
    panelSubtitle: "Track your key metrics in real time",
    convert: "View Dashboard",
    totalBalance: "Total balance",
    netIncome: "Net Income",
    received: "Received",
    trustedUsers: "Trusted businesses",
    running: "Running",
  },
  store: {
    desktopTop: "Download the",
    desktopBottom: "Desktop version",
    webTop: "Access the",
    webBottom: "Online version",
  },
  trust: {
    label: "One platform for your entire business",
    items: [
      "Invoicing",
      "Inventory",
      "Delivery notes",
      "Clients",
      "Dashboards",
      "Accounting",
      "Suppliers",
      "Compliance",
    ],
  },
  features: {
    badge: "Features",
    title1: "An ERP built",
    titleHighlight: "around you",
    intro:
      "Every module is connected and adapts to the way you work—not the other way around. Built to grow with your business.",
    learnMore: "Learn more",
    cards: [
      {
        title: "Smart dashboards",
        description:
          "Revenue, margins and stock value in real time, in dirhams (DH). All your key metrics at a glance.",
      },
      {
        title: "Workflow automation",
        description:
          "Quotes, invoices, purchase and delivery orders flow automatically—less manual entry, nothing forgotten.",
      },
      {
        title: "Inventory & multi-business",
        description:
          "FIFO stock by category, expiry and low-stock alerts, multi-language—built to scale to new industries.",
      },
    ],
  },
  modules: {
    badge: "Solutions",
    title1: "Everything you need to",
    titleHighlight: "manage effortlessly",
    intro:
      "Concrete solutions that save you time and eliminate mistakes—built for your business and ready to use.",
    cards: [
      {
        title: "100% automatic calculations",
        description:
          "VAT, incl./excl. tax, margins and totals computed automatically. No manual math, no risk of error.",
      },
      {
        title: "Invoices ready in 1 click",
        description:
          "Invoices, quotes, credit notes and delivery slips generated instantly—clean, compliant and ready to print or send.",
      },
      {
        title: "Discounts & promotions",
        description:
          "Apply discounts per product, per client or on the whole invoice. Net amount calculated automatically.",
      },
      {
        title: "Smart inventory (FIFO)",
        description:
          "Track stock by category, get expiry and low-stock alerts, and auto-reorder with ease.",
      },
      {
        title: "Purchasing & suppliers",
        description:
          "Purchase orders, supplier catalogs and delivery tracking—your whole procurement, centralized.",
      },
      {
        title: "Dashboards & reports",
        description:
          "Revenue, margins and profitability in real time, in dirhams. Decide with clear numbers.",
      },
    ],
  },
  testimonials: {
    badge: "Testimonials",
    title1: "What parapharmacy",
    titleHighlight: "owners say",
    intro:
      "Parapharmacy owners running their business every day with ParaGestion.",
    items: [
      {
        quote:
          "Since ParaGestion, expiry tracking and reordering run on their own. We cut stockouts by 40%.",
        name: "Yasmine El Amrani",
        role: "Owner, Parapharmacie Azur",
      },
      {
        quote:
          "The POS is lightning fast, and built-in loyalty really retained our dermo-cosmetics customers.",
        name: "Karim Benali",
        role: "Owner, ParaSanté Center",
      },
      {
        quote:
          "Category dashboards help me decide what to order. Everything is clear, at a glance.",
        name: "Salma Tazi",
        role: "Director, Parapharmacie Lumière",
      },
      {
        quote:
          "Supplier and delivery management saved us hours every single week.",
        name: "Omar Cherkaoui",
        role: "Owner, Espace Parapharma",
      },
      {
        quote:
          "Finally an ERP built for our trade. Compliance and reporting became effortless.",
        name: "Nadia Berrada",
        role: "Pharmacist, Parapharmacie Atlas",
      },
      {
        quote:
          "Quick setup and a supportive team. ParaGestion digitized our whole business in days.",
        name: "Hicham Idrissi",
        role: "Owner, ParaBeauté Store",
      },
    ],
  },
  faq: {
    badge: "FAQ",
    title1: "Frequently asked",
    titleHighlight: "questions",
    intro: "Everything you need to know before getting started with ParaGestion.",
    items: [
      {
        question: "Is ParaGestion only for parapharmacies?",
        answer:
          "ParaGestion is optimized for parapharmacies (stock, expiry, dermo-cosmetics), but its modular architecture is designed to expand to other businesses very soon.",
      },
      {
        question: "Can I use it offline?",
        answer:
          "Yes. The Desktop version works fully offline with a license valid for 3 years. The Online version includes all updates.",
      },
      {
        question: "Does it support multiple stores?",
        answer:
          "Yes, you can run multiple points of sale and warehouses, with centralized stock and analytics.",
      },
      {
        question: "Is my data safe?",
        answer:
          "Your data is encrypted, backed up and protected. Reporting meets the regulatory requirements of your business.",
      },
      {
        question: "How long does it take to get started?",
        answer:
          "Setup takes only minutes, and our team helps you import your products and data.",
      },
    ],
  },
  about: {
    badge: "About",
    titleLead: "About",
    intro:
      "SmartGestion builds intelligent ERP solutions for many industries and businesses. Our first product, ParaGestion, is dedicated to parapharmacies—and more solutions are coming soon.",
    moreDetails: "Learn more",
    videoCaption:
      "See how SmartGestion makes managing your business simple and intuitive.",
    missionLead: "Our mission?",
    missionBody:
      "To build ERP solutions that are simple, accessible and transparent for",
    missionHighlight: "growing businesses",
    whyEyebrow: "Why Choose Us",
    whyTitle1: "Intelligent ERP solutions",
    whyTitleHighlight: "to grow",
    whyTitle2: "your business faster",
    whyBody:
      "SmartGestion brings sales, inventory, purchasing, clients and finances together in one fast, clear platform—built to fit every industry, so you run your business, not your software.",
    whyCta: "Discover our solutions",
    points: [
      {
        title: "All-in-one",
        description:
          "One platform for your entire business—no more scattered tools.",
      },
      {
        title: "Built for your industry",
        description:
          "Specialized modules tailored to your sector and the way you work.",
      },
      {
        title: "Simple & fast",
        description: "Set up in minutes with guidance from our team.",
      },
      {
        title: "Secure data",
        description:
          "Encryption, backups and reporting compliant with your regulations.",
      },
    ],
  },
  pricing: {
    badge: "Pricing",
    title1: "Simple and",
    titleHighlight: "transparent pricing",
    subtitle:
      "Choose your version: Desktop offline (3-year license, no updates) or Online (annual subscription with updates included).",
    modeDesktop: "Desktop (offline)",
    modeOnline: "Online",
    tagNoUpdates: "No updates",
    tagUpdates: "Updates included",
    mostPopular: "Most popular",
    noteDesktop: "Offline license · no updates",
    noteOnline: "Online subscription · updates included",
    footnote:
      "Desktop version: a one-time license valid for 3 years, works offline, with no updates. Online version: an annual subscription including all updates and new features.",
    periodPerYear: "/ year",
    period3Years: "/ 3 years",
    periodTrial: "guided trial",
    free: "Demo",
    onQuote: "On quote",
    trialNote: "Guided by our team · no refund",
    desktopBackup: "Data backup",
    plans: [
      {
        key: "demo",
        name: "Demo",
        description:
          "Discover ParaGestion through a full trial guided by our support team.",
        features: [
          "Full 2-day trial with support",
          "End-to-end guided walkthrough",
          "Dashboard & analytics",
          "Invoicing & quotes",
          "Assisted setup",
          "No refund",
        ],
        cta: "Book my demo",
      },
      {
        key: "premium",
        name: "Premium",
        description: "All the power of advanced calculations and automation.",
        features: [
          "Everything in Standard, plus:",
          "Advanced & automatic calculations",
          "Automatic VAT & incl. tax calculation",
          "Automated product & sale discounts",
          "Discounts on products & invoices",
          "Real-time margins and profitability",
          "Priority support",
        ],
        cta: "Choose Premium",
      },
      {
        key: "standard",
        name: "Standard",
        description: "The essentials to digitize your parapharmacy management.",
        features: [
          "Dashboard & analytics",
          "Invoicing, quotes & credit notes",
          "Inventory management (FIFO)",
          "Purchase & delivery orders",
          "Clients & suppliers",
          "Accounting (excl./incl. tax)",
          "Support included",
        ],
        cta: "Choose Standard",
      },
    ],
  },
  cta: {
    badge: "Join SmartGestion",
    title1: "Ready to Optimize",
    titleHighlight: "Your Parapharmacy?",
    subtitle:
      "Join the parapharmacies running their business with ParaGestion. Get started today—set up in minutes.",
    placeholder: "your@email.com",
    button: "Schedule a Live Demo",
    note: "No-commitment trial · No credit card required",
  },
  footer: {
    tagline:
      "SmartGestion builds intelligent ERP solutions for many industries. ParaGestion, dedicated to parapharmacies, is just the beginning.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Dashboard", href: "#features" },
          { label: "Security", href: "#about" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Upcoming businesses", href: "#about" },
          { label: "Contact", href: "#cta" },
          { label: "Blog", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Testimonials", href: "#testimonials" },
          { label: "FAQ", href: "#faq" },
          { label: "Guides", href: "#" },
          { label: "Support", href: "#cta" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Terms of use", href: "#" },
          { label: "Privacy policy", href: "#" },
          { label: "Legal notice", href: "#" },
          { label: "Cookies", href: "#" },
        ],
      },
    ],
    socials: [
      { label: "Website", href: "#" },
      { label: "Email", href: "#cta" },
      { label: "Telegram", href: "#" },
      { label: "WhatsApp", href: "#" },
    ],
    rights: "All rights reserved.",
    madeWith: "Crafted with care for parapharmacies.",
  },
  dashboard: {
    currency: "DH",
    solutionTag: "MANAGEMENT SOLUTION",
    role: "ADMINISTRATOR",
    systemActive: "System active",
    headerSubtitle: "Financial analysis & reports",
    title: "Dashboard",
    welcome: "Welcome to ParaGestion",
    stockValue: "Stock Value (excl. tax)",
    logout: "Log out",
    filters: {
      today: "Today",
      yesterday: "Yesterday",
      week: "This week",
      month: "This month",
      year: "This year",
    },
    kpis: {
      revenue: { label: "REVENUE (INCL. TAX)", sub: "Total revenue" },
      receivables: { label: "ACCOUNTS RECEIVABLE", sub: "Pending invoices" },
      expenses: { label: "TOTAL EXPENSES (INCL. TAX)", sub: "Monthly outflows" },
      netProfit: { label: "NET PROFIT (INCL. TAX)", sub: "Profit margin" },
      margin: { label: "GROSS MARGIN", sub: "Revenue - Cost of sales" },
      orders: { label: "PURCHASE ORDERS", sub: "Confirmed / Delivered" },
      clients: { label: "CLIENTS", sub: "Total clients" },
      suppliers: { label: "SUPPLIERS", sub: "Total suppliers" },
      products: { label: "PRODUCTS", sub: "Items in stock" },
      invoices: { label: "INVOICES", sub: "Paid + Pending" },
    },
    flux: {
      title: "Cash Flow Analysis",
      subtitle: "Monthly trend of income and expenses (incl. tax)",
      revenue: "Income",
      expenses: "Expenses",
    },
    recent: { title: "Recent Invoices", seeAll: "See all" },
    quickActions: {
      title: "Quick Actions",
      newInvoice: "New Invoice",
      quickSale: "Quick Sale",
      newExpense: "New Expense",
      addClient: "Add Client",
    },
    stockAlerts: {
      title: "Stock Alerts",
      products: "products",
      unit: "units",
      low: "LOW STOCK",
    },
    fiscal: {
      title: "Fiscal Summary (VAT)",
      subtitle: "VAT collected, deductible and balance",
      collected: "VAT Collected",
      deductible: "VAT Deductible",
      balance: "VAT Balance",
    },
    statusPending: "Pending",
    statusPaid: "Paid",
    sidebar: {
      sectionDashboard: "DASHBOARD",
      workspace: "Workspace",
      dashboard: "Dashboard",
      sectionSales: "SALES",
      invoices: "Invoices",
      quotes: "Quotes",
      passingSales: "Walk-in Sales",
      creditNotes: "Credit Notes",
      deliveryNotes: "Delivery Notes",
      sectionPurchases: "PURCHASES",
      purchaseOrders: "Purchase Orders",
      expenses: "Expenses",
      sectionContacts: "CONTACTS",
      clients: "Clients",
      suppliers: "Suppliers",
      sectionStock: "STOCK",
      products: "Products",
      sectionSystem: "SYSTEM",
      settings: "Settings",
    },
  },
};

const ar: Dictionary = {
  nav: {
    home: "الرئيسية",
    platform: "المنصة",
    features: "الميزات",
    modules: "الوحدات",
    solutions: "الحلول",
    about: "من نحن",
    pricing: "الأثمنة",
    contact: "تواصل معنا",
    cta: "اطلب عرضاً",
    language: "اللغة",
    theme: "السمة",
    themeLight: "الوضع الفاتح",
    themeDark: "الوضع الداكن",
    search: "بحث",
    platformMenu: [
      {
        label: "نظرة عامة",
        description: "اكتشف البرنامج المتكامل لتدبير البارافارماسي.",
        href: "#features",
      },
      {
        label: "لوحة القيادة",
        description: "سيّر نشاطك فالوقت الحقيقي.",
        href: "#features",
      },
      {
        label: "الأمان والمطابقة",
        description: "بيانات محمية وتقارير مطابقة.",
        href: "#about",
      },
    ],
    modulesMenu: [
      {
        label: "تدبير ذكي للمخزون",
        description: "تواريخ الصلاحية وإعادة الطلب الأوتوماتيكية.",
        href: "#modules",
      },
      {
        label: "نقطة بيع ومبيعات سلسة",
        description: "أداء سريع وبرنامج وفاء مدمج.",
        href: "#modules",
      },
      {
        label: "الموردون والمشتريات",
        description: "أتمتة الشراء والتسليمات.",
        href: "#modules",
      },
      {
        label: "التحليلات والتقارير",
        description: "الربحية حسب الفئة والأداء.",
        href: "#modules",
      },
    ],
  },
  hero: {
    badge: "حلول ERP متكاملة",
    title1: "تدبير نشاطك",
    titleHighlight: "بكل ساهولة",
    title2: "بطريقة ذكية، وأخيراً",
    subtitle:
      "بدّل طريقة تسيير المبيعات والمخزون والشراء والمالية مع حلول ERP ذكية—مصممة لكل مهنة.",
    primaryCta: "ابدأ الآن",
    secondaryCta: "احجز عرضاً",
    integrationsLabel: "كامل النشاط ديالك فحل واحد",
    integrations: ["الفوترة", "المخزون", "الشراء", "الزبناء", "المحاسبة"],
  },
  heroMockup: {
    panelTitle: "مالية مباشرة",
    panelSubtitle: "تبّع مؤشراتك المهمة فالوقت الحقيقي",
    convert: "عرض لوحة القيادة",
    totalBalance: "الرصيد الإجمالي",
    netIncome: "صافي الربح",
    received: "المحصّل",
    trustedUsers: "مقاولات كتثق فينا",
    running: "قيد التشغيل",
  },
  store: {
    desktopTop: "حمّل",
    desktopBottom: "نسخة سطح المكتب",
    webTop: "ادخل إلى",
    webBottom: "النسخة عبر الإنترنت",
  },
  trust: {
    label: "منصة وحدة لكامل النشاط ديالك",
    items: [
      "الفوترة",
      "تدبير المخزون",
      "وصولات التسليم",
      "الزبناء",
      "لوحات القيادة",
      "المحاسبة",
      "الموردون",
      "المطابقة",
    ],
  },
  features: {
    badge: "الميزات",
    title1: "برنامج ERP مصمم",
    titleHighlight: "على قياسك",
    intro:
      "كل وحدة مربوطة وكتتأقلم مع طريقة الخدمة ديالك، ماشي العكس. مصممة باش تكبر مع نشاطك.",
    learnMore: "اعرف أكثر",
    cards: [
      {
        title: "لوحات قيادة ذكية",
        description:
          "رقم المعاملات، الهوامش وقيمة المخزون فالوقت الحقيقي، بالدرهم (DH). كل المؤشرات المهمة بنظرة وحدة.",
      },
      {
        title: "أتمتة المسارات",
        description:
          "العروض، الفواتير، وصولات الطلب والتسليم كيتسلسلو أوتوماتيكياً، إدخال يدوي أقل وبلا نسيان.",
      },
      {
        title: "المخزون وتعدد الأنشطة",
        description:
          "تدبير المخزون بنظام FIFO حسب الفئة، تنبيهات الصلاحية والنفاد، متعدد اللغات—مصمم للتوسع لمهن جديدة.",
      },
    ],
  },
  modules: {
    badge: "الحلول",
    title1: "كلشي اللي خاصك",
    titleHighlight: "باش تسيّر بلا تعب",
    intro:
      "حلول ملموسة كتربّح ليك الوقت وكتقضي على الأخطاء—مصممة لنشاطك وجاهزة للاستعمال.",
    cards: [
      {
        title: "حسابات أوتوماتيكية 100%",
        description:
          "الـ TVA، TTC، HT، الهوامش والمجاميع كيتحسبو أوتوماتيكياً. بلا حساب يدوي، بلا خطر ديال الغلط.",
      },
      {
        title: "فواتير جاهزة بضغطة وحدة",
        description:
          "فواتير، عروض، إشعارات دائنة ووصولات تسليم كيتولدو فالحين—نظيفة، مطابقة وجاهزة للطباعة ولا الإرسال.",
      },
      {
        title: "تخفيضات وعروض",
        description:
          "طبّق تخفيضات حسب المنتج، حسب الزبون ولا على الفاتورة كاملة. حساب أوتوماتيكي للصافي.",
      },
      {
        title: "مخزون ذكي (FIFO)",
        description:
          "تتبّع المخزون حسب الفئة، تنبيهات الصلاحية والنفاد، وإعادة طلب أوتوماتيكية بسهولة.",
      },
      {
        title: "الشراء والموردون",
        description:
          "أوامر شراء، كتالوغات الموردين وتتبّع التسليمات—كامل التموين ديالك فبلاصة وحدة.",
      },
      {
        title: "لوحات قيادة وتقارير",
        description:
          "رقم المعاملات، الهوامش والربحية فالوقت الحقيقي، بالدرهم. قرّر بأرقام واضحة.",
      },
    ],
  },
  testimonials: {
    badge: "آراء",
    title1: "شنو كيقولو أصحاب",
    titleHighlight: "البارافارماسيات",
    intro: "أصحاب بارافارماسيات كيسيّرو النشاط ديالهم كل يوم مع ParaGestion.",
    items: [
      {
        quote:
          "من بعد ParaGestion، تتبّع الصلاحيات وإعادة الطلب وليو أوتوماتيكيين. نقصنا النفاد بـ 40%.",
        name: "ياسمين العمراني",
        role: "صاحبة، بارافارماسي أزور",
      },
      {
        quote:
          "نقطة البيع سريعة بزاف، وبرنامج الوفاء المدمج خلّى الزبناء ديال الديرمو-كوزمتيك أوفياء.",
        name: "كريم بنعلي",
        role: "صاحب، بارا-سانتي سونتر",
      },
      {
        quote:
          "لوحات القيادة حسب الفئة كتعاوني نقرر شنو نطلب. كلشي واضح بنظرة وحدة.",
        name: "سلمى التازي",
        role: "مديرة، بارافارماسي لوميير",
      },
      {
        quote: "تدبير الموردين والتسليمات وفّرلنا ساعات كل أسبوع.",
        name: "عمر الشرقاوي",
        role: "صاحب، إسباس بارافارما",
      },
      {
        quote:
          "أخيراً برنامج ERP مصمم لمهنتنا. المطابقة والتقارير وليو ساهلين بزاف.",
        name: "نادية برادة",
        role: "صيدلانية، بارافارماسي أطلس",
      },
      {
        quote:
          "تهييء سريع وفريق متعاون. ParaGestion رقمن كامل النشاط ديالنا فأيام.",
        name: "هشام الإدريسي",
        role: "صاحب، بارا-بوتي ستور",
      },
    ],
  },
  faq: {
    badge: "أسئلة",
    title1: "الأسئلة",
    titleHighlight: "المتداولة",
    intro: "كلشي خاصك تعرفو قبل ما تبدا مع ParaGestion.",
    items: [
      {
        question: "واش ParaGestion خاص فقط بالبارافارماسيات؟",
        answer:
          "ParaGestion محسّن للبارافارماسيات (المخزون، الصلاحيات، الديرمو-كوزمتيك)، ولكن البنية المعيارية مصممة باش تتوسع لمهن أخرى قريباً.",
      },
      {
        question: "واش نقدر نستعملو بلا أنترنيت؟",
        answer:
          "أيه. نسخة Desktop كتخدم بكاملها بلا أنترنيت برخصة صالحة 3 سنين. نسخة أونلاين فيها جميع التحديثات.",
      },
      {
        question: "واش كيدعم بزاف ديال نقط البيع؟",
        answer:
          "أيه، تقدر تسيّر بزاف ديال نقط البيع والمستودعات، بمخزون وتحليلات مركزية.",
      },
      {
        question: "واش البيانات ديالي فأمان؟",
        answer:
          "البيانات ديالك مشفّرة، فيها نسخ احتياطي ومحمية. التقارير كتحترم المتطلبات التنظيمية ديال نشاطك.",
      },
      {
        question: "شحال كياخد باش نبدا؟",
        answer:
          "التهييء كياخد دقائق، والفريق ديالنا كيعاونك فاستيراد المنتجات والبيانات ديالك.",
      },
    ],
  },
  about: {
    badge: "حول",
    titleLead: "حول",
    intro:
      "SmartGestion كتصمم حلول ERP ذكية لبزاف ديال القطاعات والمهن. المنتج الأول ديالنا، بارا-جيستيون، مخصص للبارافارماسيات—وحلول أخرى غادي تجي قريباً.",
    moreDetails: "اعرف أكثر",
    videoCaption:
      "شوف كيفاش SmartGestion كيخلي تدبير النشاط ديالك ساهل وبديهي.",
    missionLead: "الرسالة ديالنا؟",
    missionBody:
      "نبنيو حلول ERP ساهلة، فمتناول الجميع وشفّافة بالنسبة لـ",
    missionHighlight: "المهن اللي كتنمى",
    whyEyebrow: "علاش تختارنا",
    whyTitle1: "حلول ERP",
    whyTitleHighlight: "ذكية",
    whyTitle2: "باش تكبّر نشاطك بسرعة",
    whyBody:
      "SmartGestion كتجمع المبيعات والمخزون والشراء والزبناء والمالية فمنصة وحدة سريعة وواضحة—مصممة باش تتأقلم مع كل مهنة، باش تسيّر نشاطك ماشي البرنامج ديالك.",
    whyCta: "اكتشف حلولنا",
    points: [
      {
        title: "كلشي فمنصة وحدة",
        description: "منصة وحدة لكامل نشاطك—سالينا مع الأدوات المبعثرة.",
      },
      {
        title: "مصمم لمهنتك",
        description: "وحدات متخصصة متأقلمة مع قطاعك وطريقة خدمتك.",
      },
      {
        title: "ساهل وسريع",
        description: "تهييء فدقائق مع مرافقة من الفريق ديالنا.",
      },
      {
        title: "بيانات آمنة",
        description: "تشفير ونسخ احتياطي وتقارير مطابقة للتنظيمات ديالك.",
      },
    ],
  },
  pricing: {
    badge: "الأثمنة",
    title1: "تسعير",
    titleHighlight: "بسيط وشفّاف",
    subtitle:
      "اختار النسخة ديالك: Desktop بلا أنترنيت (رخصة 3 سنين، بلا تحديثات) ولا أونلاين (اشتراك سنوي مع التحديثات).",
    modeDesktop: "Desktop (بلا أنترنيت)",
    modeOnline: "أونلاين",
    tagNoUpdates: "بلا تحديثات",
    tagUpdates: "التحديثات مشمولة",
    mostPopular: "الأكثر شعبية",
    noteDesktop: "رخصة بلا أنترنيت · بلا تحديثات",
    noteOnline: "اشتراك أونلاين · التحديثات مشمولة",
    footnote:
      "نسخة Desktop: رخصة وحدة صالحة 3 سنين، كتخدم بلا أنترنيت، بلا تحديثات. نسخة أونلاين: اشتراك سنوي فيه جميع التحديثات والجديد.",
    periodPerYear: "/ سنة",
    period3Years: "/ 3 سنين",
    periodTrial: "تجربة مرافقة",
    free: "ديمو",
    onQuote: "حسب الطلب",
    trialNote: "مرافقة من طرف فريقنا · بلا استرجاع",
    desktopBackup: "نسخة احتياطية للبيانات",
    plans: [
      {
        key: "demo",
        name: "ديمو",
        description: "اكتشف بارا-جيستيون فتجربة كاملة مع مرافقة من فريق الدعم.",
        features: [
          "تجربة كاملة ديال يومين مع الدعم",
          "عرض موجّه من الأول للأخير",
          "لوحة القيادة والتحليلات",
          "الفوترة والعروض",
          "تهييء مرافق",
          "بلا استرجاع",
        ],
        cta: "احجز الديمو ديالي",
      },
      {
        key: "premium",
        name: "بريميوم",
        description: "كامل قوة الحسابات المتقدمة والأتمتة.",
        features: [
          "كلشي فالباقة Standard، وزيادة:",
          "حسابات متقدمة وأوتوماتيكية",
          "حساب أوتوماتيكي للـ TVA و TTC",
          "تخفيضات أوتوماتيكية على المنتج والبيع",
          "تخفيضات على المنتجات والفواتير",
          "الهوامش والربحية فالوقت الحقيقي",
          "دعم ذو أولوية",
        ],
        cta: "اختر بريميوم",
      },
      {
        key: "standard",
        name: "ستاندارد",
        description: "الأساسيات باش ترقمن تدبير البارافارماسي ديالك.",
        features: [
          "لوحة القيادة والتحليلات",
          "الفوترة، العروض والإشعارات الدائنة",
          "تدبير المخزون (FIFO)",
          "وصولات الطلب والتسليم",
          "الزبناء والموردون",
          "المحاسبة (بلا/مع الضريبة)",
          "الدعم مشمول",
        ],
        cta: "اختر ستاندارد",
      },
    ],
  },
  cta: {
    badge: "انضم لـ SmartGestion",
    title1: "واجد باش تحسّن",
    titleHighlight: "البارافارماسي ديالك؟",
    subtitle:
      "انضم للبارافارماسيات اللي كتسيّر النشاط ديالها مع بارا-جيستيون. ابدا اليوم، التهييء فدقائق.",
    placeholder: "your@email.com",
    button: "حجز عرض مباشر",
    note: "تجربة بلا التزام · بلا بطاقة بنكية",
  },
  footer: {
    tagline:
      "SmartGestion كتبني حلول ERP ذكية لبزاف ديال المهن. بارا-جيستيون، المخصص للبارافارماسيات، ماشي غير البداية.",
    columns: [
      {
        title: "المنتج",
        links: [
          { label: "الميزات", href: "#features" },
          { label: "الأثمنة", href: "#pricing" },
          { label: "لوحة القيادة", href: "#features" },
          { label: "الأمان", href: "#about" },
        ],
      },
      {
        title: "الشركة",
        links: [
          { label: "حول", href: "#about" },
          { label: "مهن قادمة", href: "#about" },
          { label: "تواصل معنا", href: "#cta" },
          { label: "المدونة", href: "#" },
        ],
      },
      {
        title: "موارد",
        links: [
          { label: "آراء العملاء", href: "#testimonials" },
          { label: "الأسئلة المتداولة", href: "#faq" },
          { label: "أدلة", href: "#" },
          { label: "الدعم", href: "#cta" },
        ],
      },
      {
        title: "قانوني",
        links: [
          { label: "شروط الاستخدام", href: "#" },
          { label: "سياسة الخصوصية", href: "#" },
          { label: "الإشعار القانوني", href: "#" },
          { label: "ملفات الارتباط", href: "#" },
        ],
      },
    ],
    socials: [
      { label: "الموقع", href: "#" },
      { label: "البريد", href: "#cta" },
      { label: "تيليغرام", href: "#" },
      { label: "واتساب", href: "#" },
    ],
    rights: "جميع الحقوق محفوظة.",
    madeWith: "مصمم بعناية للبارافارماسيات.",
  },
  dashboard: {
    currency: "درهم",
    solutionTag: "حل التدبير",
    role: "مدير",
    systemActive: "النظام نشط",
    headerSubtitle: "التحليل المالي والتقارير",
    title: "لوحة التحكم",
    welcome: "مرحباً بك في ParaGestion",
    stockValue: "قيمة المخزون (خ.ض)",
    logout: "تسجيل الخروج",
    filters: {
      today: "اليوم",
      yesterday: "أمس",
      week: "هذا الأسبوع",
      month: "هذا الشهر",
      year: "هذه السنة",
    },
    kpis: {
      revenue: { label: "رقم الأعمال (شامل الضريبة)", sub: "إجمالي الإيرادات" },
      receivables: { label: "مديونيات العملاء", sub: "الفواتير المعلقة" },
      expenses: { label: "إجمالي المصروفات (شامل الضريبة)", sub: "المصاريف الشهرية" },
      netProfit: { label: "صافي الربح (شامل الضريبة)", sub: "هامش الربح" },
      margin: { label: "الهامش التجاري", sub: "الإيرادات - تكلفة البضاعة" },
      orders: { label: "أوامر الشراء", sub: "مؤكدة / مسلَّمة" },
      clients: { label: "العملاء", sub: "إجمالي العملاء" },
      suppliers: { label: "الموردون", sub: "إجمالي الموردين" },
      products: { label: "المنتجات", sub: "العناصر في المخزون" },
      invoices: { label: "الفواتير", sub: "مدفوعة + معلقة" },
    },
    flux: {
      title: "تحليل التدفق النقدي",
      subtitle: "التطور الشهري للإيرادات والمصروفات (شامل الضريبة)",
      revenue: "الإيرادات",
      expenses: "المصروفات",
    },
    recent: { title: "الفواتير الأخيرة", seeAll: "عرض الكل" },
    quickActions: {
      title: "إجراءات سريعة",
      newInvoice: "فاتورة جديدة",
      quickSale: "بيع سريع",
      newExpense: "مصروف جديد",
      addClient: "إضافة عميل",
    },
    stockAlerts: {
      title: "تنبيهات المخزون",
      products: "منتجات",
      unit: "وحدة",
      low: "مخزون منخفض",
    },
    fiscal: {
      title: "ملخص ضريبي (TVA)",
      subtitle: "الضريبة المحصلة والقابلة للخصم والرصيد",
      collected: "الضريبة المحصلة",
      deductible: "الضريبة القابلة للخصم",
      balance: "رصيد الضريبة",
    },
    statusPending: "معلقة",
    statusPaid: "مدفوعة",
    sidebar: {
      sectionDashboard: "لوحة التحكم",
      workspace: "مساحة العمل",
      dashboard: "لوحة التحكم",
      sectionSales: "المبيعات",
      invoices: "الفواتير",
      quotes: "العروض التجارية",
      passingSales: "مبيعات الشباك",
      creditNotes: "إشعارات الدائن",
      deliveryNotes: "إيصالات التسليم",
      sectionPurchases: "المشتريات",
      purchaseOrders: "أوامر الشراء",
      expenses: "المصروفات",
      sectionContacts: "جهات الاتصال",
      clients: "العملاء",
      suppliers: "الموردون",
      sectionStock: "المخزون",
      products: "المنتجات",
      sectionSystem: "النظام",
      settings: "الإعدادات",
    },
  },
};

export const dictionaries: Record<Locale, Dictionary> = { fr, en, ar };
