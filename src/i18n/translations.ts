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
    collaboration: { title: string; description: string };
    cards: { title: string; description: string }[];
    items: {
      calculator: { title: string; description: string };
      margin: { title: string; description: string };
      vat: { title: string; description: string };
      alerts: { title: string; description: string };
      dashboard: { title: string; description: string };
    };
    ui: {
      calcTitle: string;
      priceTTC: string;
      tva: string;
      remise: string;
      priceHT: string;
      autoCalc: string;
      marginTitle: string;
      revenue: string;
      costOfSales: string;
      customerCredit: string;
      netCost: string;
      grossMargin: string;
      vatTitle: string;
      vatCollected: string;
      vatDeductible: string;
      vatBalance: string;
      credit: string;
      alertsTitle: string;
      lowStock: string;
      units: string;
      currency: string;
      receivables: string;
      expenses: string;
      netProfit: string;
      revenueTTC: string;
    };
  };
  modules: {
    badge: string;
    title1: string;
    titleHighlight: string;
    intro: string;
    pharmacy: {
      eyebrow: string;
      title: string;
      description: string;
      features: { title: string; description: string }[];
      desktop: { label: string; caption: string };
      mobile: { label: string; caption: string };
      cta: string;
      liveBadge: string;
    };
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
    valuePanelTitle: string;
    valuePanelSubtitle: string;
    valueStats: { value: string; label: string }[];
    valueModulesTitle: string;
    valueModules: string[];
    valueFootnote: string;
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
  contact: {
    badge: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    fields: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      message: string;
      messagePlaceholder: string;
    };
    optional: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    errorRequired: string;
    errorEmail: string;
    mailSubject: string;
    infoTitle: string;
    infoBody: string;
    emailLabel: string;
    responseTime: string;
  };
  newsletter: {
    badge: string;
    title: string;
    brand: string;
    subtitle: string;
    placeholder: string;
    button: string;
    note: string;
    successMessage: string;
    alreadyMessage: string;
    errorMessage: string;
  };
  legal: {
    badge: string;
    back: string;
    updated: string;
    terms: {
      meta: string;
      title: string;
      intro: string;
      refundNoticeTitle: string;
      refundNoticeBody: string;
      sections: { title: string; body: string }[];
    };
    privacy: {
      meta: string;
      title: string;
      intro: string;
      highlights: { emoji: string; title: string; desc: string }[];
      sections: { title: string; body: string }[];
    };
  };
  notFound: {
    meta: string;
    title: string;
    subtitle: string;
    home: string;
    contact: string;
    back: string;
    copyright: string;
  };
  footer: {
    tagline: string;
    colProduct: string;
    colCompany: string;
    colLegal: string;
    colSocial: string;
    linkFeatures: string;
    linkPricing: string;
    linkTestimonials: string;
    linkFaq: string;
    linkContact: string;
    linkAbout: string;
    linkSolutions: string;
    linkTerms: string;
    link404: string;
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
      "Transformez la façon de piloter vos ventes, votre stock, vos achats et vos finances avec des solutions ERP intelligentes, pensées pour chaque métier.",
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
      "Chaque module est connecté et s'adapte à votre façon de travailler, pas l'inverse. Conçu pour évoluer avec votre activité.",
    learnMore: "En savoir plus",
    collaboration: {
      title: "Collaboration d'équipe",
      description:
        "Tâches, agenda et activités partagés en temps réel pour garder toute l'équipe alignée.",
    },
    cards: [
      {
        title: "Tableaux de bord intelligents",
        description:
          "Chiffre d'affaires, marges et valeur du stock en temps réel, en dirhams (DH). Tous vos indicateurs clés en un coup d'œil.",
      },
      {
        title: "Automatisation des flux",
        description:
          "Devis, factures, bons de commande et de livraison s'enchaînent automatiquement. Moins de saisie manuelle, zéro oubli.",
      },
      {
        title: "Stock & multi-activités",
        description:
          "Gestion FIFO par catégorie, alertes de péremption et de rupture, multi-langue. Conçu pour s'étendre à de nouveaux métiers.",
      },
    ],
    items: {
      calculator: {
        title: "Calculateur de prix automatique",
        description:
          "Saisissez le prix TTC, la TVA et la remise. Le prix HT est calculé instantanément. Zéro calcul manuel, zéro erreur.",
      },
      margin: {
        title: "Marge commerciale en temps réel",
        description:
          "CA, coût des ventes et avoirs combinés pour afficher votre marge nette exacte, détaillée et traçable.",
      },
      vat: {
        title: "Récapitulatif fiscal (TVA)",
        description:
          "TVA collectée, déductible et solde calculés automatiquement. Prêt pour votre déclaration.",
      },
      alerts: {
        title: "Alertes de stock intelligentes",
        description:
          "Soyez prévenu avant la rupture : seuils bas et stock négatif signalés en temps réel.",
      },
      dashboard: {
        title: "Tableau de bord financier",
        description:
          "Tous vos indicateurs clés : CA, bénéfice net, créances, réunis dans une vue claire et vivante.",
      },
    },
    ui: {
      calcTitle: "Calculateur de prix",
      priceTTC: "Prix Vendre TTC",
      tva: "TVA (%)",
      remise: "Remise (%)",
      priceHT: "Prix HT",
      autoCalc: "Calcul automatique",
      marginTitle: "Marge commerciale (TTC)",
      revenue: "Chiffre d'affaires",
      costOfSales: "Coût des ventes",
      customerCredit: "Avoirs client (coût)",
      netCost: "Coût net des ventes",
      grossMargin: "Marge commerciale",
      vatTitle: "Récapitulatif fiscal (TVA)",
      vatCollected: "TVA collectée",
      vatDeductible: "TVA déductible",
      vatBalance: "Solde TVA",
      credit: "Crédit",
      alertsTitle: "Alertes stock",
      lowStock: "Stock bas",
      units: "unité",
      currency: "DH",
      receivables: "Créances",
      expenses: "Dépenses",
      netProfit: "Bénéfice net",
      revenueTTC: "Chiffre d'affaires (TTC)",
    },
  },
  modules: {
    badge: "Solutions",
    title1: "Des solutions conçues",
    titleHighlight: "pour votre métier",
    intro:
      "Nous concevons des solutions de gestion sur mesure, métier par métier. Voici notre première : une solution complète pour les pharmacies et parapharmacies.",
    pharmacy: {
      eyebrow: "Notre solution phare",
      title: "Une solution complète pour votre pharmacie",
      description:
        "Gérez ventes, stock, fournisseurs et finances depuis une seule plateforme, pensée pour le quotidien d'une pharmacie marocaine. Accessible partout, sur ordinateur comme sur mobile.",
      features: [
        {
          title: "Gestion de stock & péremption",
          description:
            "Suivi FIFO par lot, alertes de rupture et de péremption en temps réel.",
        },
        {
          title: "Ventes & facturation rapides",
          description:
            "Encaissez et facturez en quelques secondes, calculs TVA automatiques.",
        },
        {
          title: "Tableaux de bord en temps réel",
          description:
            "CA, marges et trésorerie en dirhams, visibles d'un coup d'œil.",
        },
        {
          title: "Achats & fournisseurs",
          description:
            "Bons de commande et réapprovisionnement centralisés et automatisés.",
        },
      ],
      desktop: {
        label: "Ordinateur",
        caption: "Tableau de bord complet sur grand écran",
      },
      mobile: {
        label: "Mobile",
        caption: "Toute la gestion dans votre poche",
      },
      cta: "Découvrir la solution",
      liveBadge: "Disponible maintenant",
    },
  },
  testimonials: {
    badge: "Témoignages",
    title1: "Ce que disent nos",
    titleHighlight: "clients",
    intro:
      "Des dirigeants qui pilotent leur activité au quotidien avec SmartGestion.",
    items: [
      {
        quote:
          "Depuis SmartGestion, le suivi du stock et le réassort se font tout seuls. On a réduit nos ruptures de 40 %.",
        name: "Yasmine El Amrani",
        role: "Gérante, Parapharmacie Azur",
      },
      {
        quote:
          "Le tableau de bord en temps réel nous donne une visibilité totale sur notre CA et nos marges. Indispensable.",
        name: "Karim Benali",
        role: "Directeur, RestoPro Casablanca",
      },
      {
        quote:
          "La gestion des fournisseurs et des commandes nous a fait gagner des heures chaque semaine.",
        name: "Salma Tazi",
        role: "Directrice, Boutique Lumière",
      },
      {
        quote:
          "Enfin un ERP pensé pour les PME marocaines. La prise en main est rapide et l'équipe très réactive.",
        name: "Omar Cherkaoui",
        role: "Gérant, Espace Commerce",
      },
      {
        quote:
          "SmartGestion a centralisé toute notre activité : ventes, achats, stock. On gagne un temps fou.",
        name: "Nadia Berrada",
        role: "PDG, Atlas Distribution",
      },
      {
        quote:
          "Configuration en quelques jours, support disponible. On a digitalisé toute notre gestion sans stress.",
        name: "Hicham Idrissi",
        role: "Propriétaire, IdrissiStore",
      },
      {
        quote:
          "Les rapports automatiques nous permettent de prendre de meilleures décisions chaque mois.",
        name: "Fatima Zahra Alaoui",
        role: "Directrice financière, GroupAlaoui",
      },
      {
        quote:
          "Excellent rapport qualité-prix. SmartGestion remplace trois outils qu'on utilisait avant.",
        name: "Youssef Mansouri",
        role: "Gérant, TechShop Rabat",
      },
    ],
  },
  faq: {
    badge: "FAQ",
    title1: "Questions",
    titleHighlight: "fréquentes",
    intro: "Tout ce qu'il faut savoir avant de démarrer avec SmartGestion.",
    items: [
      {
        question: "SmartGestion est-il adapté à mon secteur d'activité ?",
        answer:
          "SmartGestion est conçu pour s'adapter à de nombreux métiers : pharmacies, parapharmacies, commerce de détail, restauration, distribution et bien d'autres. Notre architecture modulaire vous permet de n'activer que les fonctionnalités dont vous avez besoin.",
      },
      {
        question: "Puis-je l'utiliser hors-ligne ?",
        answer:
          "Oui. La version Desktop fonctionne entièrement hors-ligne avec une licence valable 3 ans. La version En ligne inclut toutes les mises à jour automatiquement.",
      },
      {
        question: "Gère-t-il plusieurs points de vente ?",
        answer:
          "Oui, vous pouvez piloter plusieurs points de vente et entrepôts depuis une seule interface, avec un stock et des analyses centralisés en temps réel.",
      },
      {
        question: "Mes données sont-elles en sécurité ?",
        answer:
          "Vos données sont chiffrées, sauvegardées automatiquement et protégées selon les standards de sécurité les plus élevés. Vous restez propriétaire de vos données à tout moment.",
      },
      {
        question: "Combien de temps pour démarrer ?",
        answer:
          "La configuration initiale prend quelques minutes. Notre équipe vous accompagne pour l'import de vos produits, clients et données existantes, sans interruption de votre activité.",
      },
      {
        question: "Quels modes de facturation proposez-vous ?",
        answer:
          "Nous proposons une licence Desktop (paiement unique, 3 ans) et un abonnement En ligne (mensuel ou annuel). Aucun frais caché, pas d'engagement minimum pour la version en ligne.",
      },
      {
        question: "Comment sont sauvegardées mes données ?",
        answer:
          "Pour la version En ligne, vos données sont sauvegardées automatiquement toutes les 24 heures sur des serveurs sécurisés, avec une rétention de 30 jours. Vous pouvez également déclencher une sauvegarde manuelle à tout moment et exporter vos données en CSV ou JSON.",
      },
      {
        question: "Qui peut accéder à mes données ?",
        answer:
          "Seuls vous et les membres de votre équipe que vous autorisez peuvent accéder à vos données. SmartGestion ne partage ni ne vend vos données à des tiers. Nos équipes internes n'y accèdent que sur votre demande explicite pour vous assister.",
      },
    ],
  },
  about: {
    badge: "À propos",
    titleLead: "À propos de",
    intro:
      "SmartGestion conçoit des solutions ERP intelligentes pour de nombreux secteurs et métiers. Notre premier produit, ParaGestion, est dédié aux parapharmacies. D'autres solutions arrivent bientôt.",
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
      "SmartGestion réunit ventes, stock, achats, clients et finances dans une plateforme unique, claire et rapide. Conçue pour s'adapter à chaque métier, pour que vous pilotiez votre activité, pas votre logiciel.",
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
    valuePanelTitle: "Une plateforme, toute votre activité",
    valuePanelSubtitle: "Des résultats concrets pour votre entreprise",
    valueStats: [
      { value: "+30%", label: "de temps gagné sur la gestion quotidienne" },
      { value: "−40%", label: "d'erreurs de saisie et de doublons" },
      { value: "100%", label: "de vos données centralisées et sécurisées" },
      { value: "24/7", label: "accès en temps réel à votre activité" },
    ],
    valueModulesTitle: "Tout connecté en un seul flux",
    valueModules: ["Ventes", "Stock", "Achats", "Clients", "Finances"],
    valueFootnote: "Une seule source de vérité, mise à jour en temps réel.",
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
      "Rejoignez les parapharmacies qui pilotent leur activité avec ParaGestion. Démarrez aujourd'hui, configuration en quelques minutes.",
    placeholder: "votre@email.com",
    button: "Planifier une démo en direct",
    note: "Essai sans engagement · Aucune carte bancaire requise",
  },
  contact: {
    badge: "Contact",
    title1: "Demandez votre",
    titleHighlight: "démo gratuite",
    subtitle:
      "Remplissez le formulaire et notre équipe vous recontacte rapidement pour planifier une démonstration personnalisée de SmartGestion.",
    fields: {
      name: "Nom complet",
      namePlaceholder: "Votre nom et prénom",
      email: "Adresse e-mail",
      emailPlaceholder: "votre@email.com",
      phone: "Téléphone",
      phonePlaceholder: "+212 6 00 00 00 00",
      company: "Entreprise / Parapharmacie",
      companyPlaceholder: "Nom de votre établissement",
      message: "Message",
      messagePlaceholder: "Parlez-nous de vos besoins…",
    },
    optional: "facultatif",
    submit: "Demander une démo",
    submitting: "Ouverture de votre messagerie…",
    successTitle: "Votre messagerie va s'ouvrir",
    successBody:
      "Vérifiez votre application e-mail et envoyez le message déjà rédigé. Nous vous répondrons dans les plus brefs délais.",
    errorRequired: "Merci de remplir tous les champs obligatoires.",
    errorEmail: "Veuillez saisir une adresse e-mail valide.",
    mailSubject: "Demande de démo - SmartGestion",
    infoTitle: "Parlons de votre projet",
    infoBody:
      "Une question, un projet de digitalisation ou simplement envie d'une démo ? Écrivez-nous, nous sommes là pour vous aider.",
    emailLabel: "Écrivez-nous directement",
    responseTime: "Réponse sous 24h ouvrées",
  },
  newsletter: {
    badge:          "Restez informé",
    title:          "Recevez les mises à jour",
    brand:          "SmartGestion",
    subtitle:       "Nouvelles fonctionnalités, améliorations produit et offres exclusives — directement dans votre boîte mail. Aucun spam, jamais.",
    placeholder:    "votre@email.com",
    button:         "S'inscrire",
    note:           "Aucun spam. Désabonnement en un clic à tout moment.",
    successMessage: "Merci ! Vous recevrez nos mises à jour bientôt.",
    alreadyMessage: "Vous êtes déjà inscrit. Merci !",
    errorMessage:   "Une erreur est survenue. Réessayez dans un instant.",
  },
  legal: {
    badge:   "Légal",
    back:    "Retour",
    updated: "Dernière mise à jour : juin 2026",
    terms: {
      meta:  "Conditions d'utilisation — SmartGestion",
      title: "Conditions d'utilisation",
      intro: "Veuillez lire attentivement ces conditions avant d'utiliser SmartGestion. En utilisant notre service, vous acceptez d'être lié par ces conditions.",
      refundNoticeTitle: "⚠ Politique de remboursement importante",
      refundNoticeBody:  "SmartGestion applique une politique de zéro remboursement. Toutes les ventes sont définitives. Nous vous encourageons à utiliser la période d'essai gratuite avant tout achat.",
      sections: [
        { title: "1. Acceptation des conditions",         body: "En accédant à SmartGestion ou en l'utilisant, vous acceptez d'être lié par les présentes Conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service." },
        { title: "2. Description du service",             body: "SmartGestion est une solution ERP en ligne et hors-ligne destinée aux entreprises de divers secteurs. Elle comprend des modules de gestion des ventes, du stock, des achats, de la facturation et des finances." },
        { title: "3. Politique de remboursement — Aucun remboursement", body: "Toutes les ventes sont définitives. SmartGestion n'offre pas de remboursements, de crédits ou d'échanges pour les licences Desktop ou les abonnements En ligne. Nous vous encourageons à profiter de la période d'essai gratuite avant tout achat." },
        { title: "4. Licences et abonnements",            body: "La licence Desktop est valable 3 ans à compter de la date d'achat. L'abonnement En ligne est renouvelé automatiquement selon la période choisie. Vous pouvez résilier à tout moment ; la résiliation prend effet à la fin de la période en cours." },
        { title: "5. Propriété intellectuelle",           body: "Tous les contenus, logiciels, marques et éléments graphiques présents sur SmartGestion sont la propriété exclusive de SmartGestion ou de ses partenaires. Toute reproduction non autorisée est strictement interdite." },
        { title: "6. Données et confidentialité",         body: "Vos données sont stockées de manière sécurisée et ne sont jamais partagées ni vendues à des tiers. Vous pouvez exporter ou supprimer vos données à tout moment via les paramètres de votre compte." },
        { title: "7. Limitation de responsabilité",       body: "SmartGestion est fourni « en l'état ». En aucun cas SmartGestion ne pourra être tenu responsable de pertes indirectes ou de manque à gagner résultant de l'utilisation ou de l'impossibilité d'utiliser le service." },
        { title: "8. Modifications des conditions",       body: "Nous nous réservons le droit de modifier les présentes conditions à tout moment. Les modifications entrent en vigueur dès leur publication. L'utilisation continue du service vaut acceptation des nouvelles conditions." },
        { title: "9. Loi applicable",                     body: "Les présentes conditions sont régies par le droit marocain. Tout litige sera soumis à la juridiction compétente de Casablanca, Maroc." },
        { title: "10. Contact",                           body: "Pour toute question relative aux présentes conditions, contactez-nous à : smartgestionmaroc@gmail.com" },
      ],
    },
    privacy: {
      meta:  "Politique de confidentialité — SmartGestion",
      title: "Politique de confidentialité",
      intro: "Chez SmartGestion, la protection de vos données personnelles est une priorité. Cette politique explique quelles données nous collectons, comment nous les utilisons et comment nous les protégeons.",
      highlights: [
        { emoji: "🔒", title: "Données chiffrées",    desc: "AES-256 au repos, TLS en transit" },
        { emoji: "🚫", title: "Zéro revente",         desc: "Vos données ne sont jamais vendues" },
        { emoji: "📤", title: "Export à tout moment", desc: "CSV ou JSON sur simple demande" },
      ],
      sections: [
        { title: "1. Responsable du traitement",    body: "SmartGestion est responsable du traitement de vos données personnelles. Contact : smartgestionmaroc@gmail.com" },
        { title: "2. Données collectées",           body: "Nous collectons uniquement les données nécessaires : nom, e-mail, téléphone (optionnel), nom de l'entreprise, et les données métier saisies dans l'application. Aucune donnée sensible n'est collectée." },
        { title: "3. Finalités du traitement",      body: "Vos données servent à fournir et améliorer le service, vous contacter en cas de besoin, vous informer de votre compte ou abonnement, et respecter nos obligations légales." },
        { title: "4. Partage des données",          body: "Nous ne vendons ni ne partageons jamais vos données personnelles à des fins commerciales. Elles peuvent être partagées avec des sous-traitants techniques uniquement sous contrat de confidentialité." },
        { title: "5. Sécurité des données",         body: "Toutes les données sont chiffrées en transit (TLS) et au repos (AES-256). Nos serveurs sont hébergés dans des centres de données sécurisés en Europe. Des sauvegardes automatiques sont effectuées toutes les 24 heures." },
        { title: "6. Conservation des données",     body: "Vos données sont conservées pendant toute la durée de votre relation contractuelle, plus 12 mois après résiliation. Passé ce délai, toutes vos données sont définitivement supprimées." },
        { title: "7. Vos droits",                   body: "Conformément à la loi 09-08 (Maroc) et au RGPD, vous disposez des droits d'accès, rectification, effacement, portabilité, opposition et limitation. Contact : smartgestionmaroc@gmail.com" },
        { title: "8. Cookies",                      body: "SmartGestion utilise uniquement des cookies strictement nécessaires (session, préférences). Aucun cookie publicitaire ou de tracking tiers n'est utilisé." },
        { title: "9. Transferts internationaux",    body: "Vos données sont hébergées en Europe et ne sont pas transférées hors de l'EEE, sauf nécessité de service avec garanties appropriées." },
        { title: "10. Modifications",               body: "Nous pouvons modifier cette politique à tout moment. Les modifications importantes vous seront notifiées par e-mail ou via l'application." },
        { title: "11. Contact",                     body: "Pour toute question, contactez notre responsable de la protection des données : smartgestionmaroc@gmail.com. Réponse sous 30 jours." },
      ],
    },
  },
  notFound: {
    meta:      "Page introuvable — SmartGestion",
    title:     "Page introuvable",
    subtitle:  "La page que vous recherchez n'existe pas ou a été déplacée. Revenez à l'accueil pour retrouver votre chemin.",
    home:      "Retour à l'accueil",
    contact:   "Nous contacter",
    back:      "Retour",
    copyright: "Tous droits réservés.",
  },
  footer: {
    tagline:
      "SmartGestion construit des solutions ERP intelligentes pour de nombreux métiers afin de digitaliser et piloter votre activité au quotidien.",
    colProduct:      "Produit",
    colCompany:      "Entreprise",
    colLegal:        "Légal",
    colSocial:       "Réseaux sociaux",
    linkFeatures:    "Fonctionnalités",
    linkPricing:     "Tarifs",
    linkTestimonials:"Témoignages",
    linkFaq:         "FAQ",
    linkContact:     "Contact",
    linkAbout:       "À propos",
    linkSolutions:   "Solutions",
    linkTerms:       "Conditions d'utilisation",
    link404:         "Page 404",
    rights:          "Tous droits réservés.",
    madeWith:        "Conçu avec soin pour les entreprises.",
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
      "Transform how you run your sales, inventory, purchasing and finances with intelligent ERP solutions, built for every industry.",
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
      "Every module is connected and adapts to the way you work, not the other way around. Built to grow with your business.",
    learnMore: "Learn more",
    collaboration: {
      title: "Team collaboration",
      description:
        "Shared tasks, calendar and activity in real time to keep the whole team aligned.",
    },
    cards: [
      {
        title: "Smart dashboards",
        description:
          "Revenue, margins and stock value in real time, in dirhams (DH). All your key metrics at a glance.",
      },
      {
        title: "Workflow automation",
        description:
          "Quotes, invoices, purchase and delivery orders flow automatically. Less manual entry, nothing forgotten.",
      },
      {
        title: "Inventory & multi-business",
        description:
          "FIFO stock by category, expiry and low-stock alerts, multi-language. Built to scale to new industries.",
      },
    ],
    items: {
      calculator: {
        title: "Automatic price calculator",
        description:
          "Enter the tax-incl. price, VAT and discount. The tax-excl. price is computed instantly. No manual math, no errors.",
      },
      margin: {
        title: "Real-time commercial margin",
        description:
          "Revenue, cost of sales and credits combined to show your exact net margin, detailed and traceable.",
      },
      vat: {
        title: "Tax summary (VAT)",
        description:
          "Collected, deductible and balance VAT computed automatically. Ready for your filing.",
      },
      alerts: {
        title: "Smart stock alerts",
        description:
          "Be warned before you run out: low thresholds and negative stock flagged in real time.",
      },
      dashboard: {
        title: "Financial dashboard",
        description:
          "All your key metrics—revenue, net profit, receivables—brought together in one clear, living view.",
      },
    },
    ui: {
      calcTitle: "Price calculator",
      priceTTC: "Selling price (incl. tax)",
      tva: "VAT (%)",
      remise: "Discount (%)",
      priceHT: "Price (excl. tax)",
      autoCalc: "Automatic calculation",
      marginTitle: "Commercial margin (incl. tax)",
      revenue: "Revenue",
      costOfSales: "Cost of sales",
      customerCredit: "Customer credits (cost)",
      netCost: "Net cost of sales",
      grossMargin: "Commercial margin",
      vatTitle: "Tax summary (VAT)",
      vatCollected: "VAT collected",
      vatDeductible: "VAT deductible",
      vatBalance: "VAT balance",
      credit: "Credit",
      alertsTitle: "Stock alerts",
      lowStock: "Low stock",
      units: "units",
      currency: "DH",
      receivables: "Receivables",
      expenses: "Expenses",
      netProfit: "Net profit",
      revenueTTC: "Revenue (incl. tax)",
    },
  },
  modules: {
    badge: "Solutions",
    title1: "Solutions built",
    titleHighlight: "for your industry",
    intro:
      "We design tailored management solutions, industry by industry. Here is our first: a complete solution for pharmacies and parapharmacies.",
    pharmacy: {
      eyebrow: "Our flagship solution",
      title: "A complete solution for your pharmacy",
      description:
        "Manage sales, stock, suppliers and finances from a single platform—built for the daily reality of a Moroccan pharmacy. Available everywhere, on desktop and mobile.",
      features: [
        {
          title: "Stock & expiry management",
          description:
            "FIFO tracking by batch, real-time low-stock and expiry alerts.",
        },
        {
          title: "Fast sales & billing",
          description:
            "Check out and invoice in seconds, with automatic VAT calculations.",
        },
        {
          title: "Real-time dashboards",
          description:
            "Revenue, margins and cash in dirhams, visible at a glance.",
        },
        {
          title: "Purchasing & suppliers",
          description:
            "Centralized, automated purchase orders and restocking.",
        },
      ],
      desktop: {
        label: "Desktop",
        caption: "Full dashboard on the big screen",
      },
      mobile: {
        label: "Mobile",
        caption: "Your whole business in your pocket",
      },
      cta: "Explore the solution",
      liveBadge: "Available now",
    },
  },
  testimonials: {
    badge: "Testimonials",
    title1: "What our",
    titleHighlight: "clients say",
    intro:
      "Business owners running their operations every day with SmartGestion.",
    items: [
      {
        quote:
          "Since SmartGestion, stock tracking and reordering run on their own. We cut stockouts by 40%.",
        name: "Yasmine El Amrani",
        role: "Owner, Parapharmacie Azur",
      },
      {
        quote:
          "Real-time dashboards give us full visibility on revenue and margins. Absolutely essential.",
        name: "Karim Benali",
        role: "Director, RestoPro Casablanca",
      },
      {
        quote:
          "Supplier and order management saved us hours every single week.",
        name: "Salma Tazi",
        role: "Director, Boutique Lumière",
      },
      {
        quote:
          "Finally an ERP built for Moroccan SMEs. Easy to get started and the team is very responsive.",
        name: "Omar Cherkaoui",
        role: "Owner, Espace Commerce",
      },
      {
        quote:
          "SmartGestion centralized everything: sales, purchasing, stock. We save so much time.",
        name: "Nadia Berrada",
        role: "CEO, Atlas Distribution",
      },
      {
        quote:
          "Set up in a few days, support always available. We digitized our entire operation stress-free.",
        name: "Hicham Idrissi",
        role: "Owner, IdrissiStore",
      },
      {
        quote:
          "Automated reports help us make better decisions every month.",
        name: "Fatima Zahra Alaoui",
        role: "CFO, GroupAlaoui",
      },
      {
        quote:
          "Excellent value. SmartGestion replaces three separate tools we used before.",
        name: "Youssef Mansouri",
        role: "Owner, TechShop Rabat",
      },
    ],
  },
  faq: {
    badge: "FAQ",
    title1: "Frequently asked",
    titleHighlight: "questions",
    intro: "Everything you need to know before getting started with SmartGestion.",
    items: [
      {
        question: "Is SmartGestion suitable for my industry?",
        answer:
          "SmartGestion is built to adapt to many business types: pharmacies, parapharmacies, retail, restaurants, distribution and more. Our modular architecture lets you activate only the features you need.",
      },
      {
        question: "Can I use it offline?",
        answer:
          "Yes. The Desktop version works fully offline with a license valid for 3 years. The Online version includes all updates automatically.",
      },
      {
        question: "Does it support multiple stores?",
        answer:
          "Yes, you can manage multiple points of sale and warehouses from a single interface, with centralized real-time stock and analytics.",
      },
      {
        question: "Is my data safe?",
        answer:
          "Your data is encrypted, automatically backed up and protected to the highest security standards. You remain the owner of your data at all times.",
      },
      {
        question: "How long does it take to get started?",
        answer:
          "Initial setup takes just a few minutes. Our team guides you through importing your existing products, customers and data — with no disruption to your operations.",
      },
      {
        question: "What pricing models do you offer?",
        answer:
          "We offer a Desktop license (one-time payment, 3 years) and an Online subscription (monthly or annual). No hidden fees, no minimum commitment for the online version.",
      },
      {
        question: "How is my data backed up?",
        answer:
          "For the Online version, your data is automatically backed up every 24 hours on secure servers with a 30-day retention period. You can also trigger a manual backup at any time and export your data as CSV or JSON.",
      },
      {
        question: "Who can access my data?",
        answer:
          "Only you and the team members you authorise can access your data. SmartGestion never shares or sells your data to third parties. Our internal teams only access it on your explicit request to assist you.",
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
    valuePanelTitle: "One platform, your entire business",
    valuePanelSubtitle: "Real, measurable results for your company",
    valueStats: [
      { value: "+30%", label: "time saved on daily operations" },
      { value: "−40%", label: "fewer data-entry errors and duplicates" },
      { value: "100%", label: "of your data centralized and secured" },
      { value: "24/7", label: "real-time access to your business" },
    ],
    valueModulesTitle: "Everything connected in one flow",
    valueModules: ["Sales", "Inventory", "Purchasing", "Clients", "Finances"],
    valueFootnote: "A single source of truth, updated in real time.",
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
  contact: {
    badge: "Contact",
    title1: "Request your",
    titleHighlight: "free demo",
    subtitle:
      "Fill in the form and our team will get back to you shortly to schedule a personalized SmartGestion demo.",
    fields: {
      name: "Full name",
      namePlaceholder: "Your first and last name",
      email: "Email address",
      emailPlaceholder: "your@email.com",
      phone: "Phone",
      phonePlaceholder: "+212 6 00 00 00 00",
      company: "Company / Parapharmacy",
      companyPlaceholder: "Your business name",
      message: "Message",
      messagePlaceholder: "Tell us about your needs…",
    },
    optional: "optional",
    submit: "Request a demo",
    submitting: "Opening your email app…",
    successTitle: "Your email app is opening",
    successBody:
      "Check your email client and send the pre-filled message. We'll get back to you as soon as possible.",
    errorRequired: "Please fill in all required fields.",
    errorEmail: "Please enter a valid email address.",
    mailSubject: "Demo request — SmartGestion",
    infoTitle: "Let's talk about your project",
    infoBody:
      "A question, a digitalization project, or simply want a demo? Write to us—we're here to help.",
    emailLabel: "Email us directly",
    responseTime: "Reply within 24 business hours",
  },
  newsletter: {
    badge:          "Stay informed",
    title:          "Get SmartGestion",
    brand:          "updates",
    subtitle:       "New features, product improvements and exclusive offers — straight to your inbox. No spam, ever.",
    placeholder:    "your@email.com",
    button:         "Subscribe",
    note:           "No spam. Unsubscribe in one click at any time.",
    successMessage: "Thank you! You'll receive our updates soon.",
    alreadyMessage: "You're already subscribed. Thank you!",
    errorMessage:   "Something went wrong. Please try again in a moment.",
  },
  legal: {
    badge:   "Legal",
    back:    "Back",
    updated: "Last updated: June 2026",
    terms: {
      meta:  "Terms of use — SmartGestion",
      title: "Terms of use",
      intro: "Please read these terms carefully before using SmartGestion. By using our service, you agree to be bound by these terms.",
      refundNoticeTitle: "⚠ Important refund policy",
      refundNoticeBody:  "SmartGestion enforces a zero-refund policy. All sales are final. We encourage you to use the free trial period before purchasing.",
      sections: [
        { title: "1. Acceptance of terms",         body: "By accessing or using SmartGestion, you agree to be bound by these Terms of use. If you do not accept these terms, please do not use our service." },
        { title: "2. Service description",         body: "SmartGestion is an online and offline ERP solution for businesses across various sectors, including modules for sales, inventory, purchasing, invoicing, and finance management." },
        { title: "3. Refund policy — No refunds",  body: "All sales are final. SmartGestion does not offer refunds, credits, or exchanges for Desktop licenses or Online subscriptions for any reason. We encourage you to use the free trial before purchasing." },
        { title: "4. Licenses and subscriptions",  body: "The Desktop license is valid for 3 years from the purchase date. The Online subscription renews automatically. You may cancel at any time; cancellation takes effect at the end of the current period." },
        { title: "5. Intellectual property",       body: "All content, software, trademarks, and graphics on SmartGestion are the exclusive property of SmartGestion or its partners. Any unauthorized reproduction is strictly prohibited." },
        { title: "6. Data and privacy",            body: "Your data is stored securely and is never shared or sold to third parties. You may export or delete your data at any time through your account settings." },
        { title: "7. Limitation of liability",     body: "SmartGestion is provided 'as is'. In no event shall SmartGestion be liable for indirect losses or loss of profit resulting from use of or inability to use the service." },
        { title: "8. Changes to terms",            body: "We reserve the right to modify these terms at any time. Changes take effect upon publication. Continued use of the service constitutes acceptance of the updated terms." },
        { title: "9. Governing law",               body: "These terms are governed by Moroccan law. Any disputes shall be subject to the jurisdiction of the courts of Casablanca, Morocco." },
        { title: "10. Contact",                    body: "For any questions regarding these terms, contact us at: smartgestionmaroc@gmail.com" },
      ],
    },
    privacy: {
      meta:  "Privacy policy — SmartGestion",
      title: "Privacy policy",
      intro: "At SmartGestion, protecting your personal data is a priority. This policy explains what data we collect, how we use it, and how we protect it.",
      highlights: [
        { emoji: "🔒", title: "Encrypted data",    desc: "AES-256 at rest, TLS in transit" },
        { emoji: "🚫", title: "Never sold",         desc: "Your data is never shared or sold" },
        { emoji: "📤", title: "Export anytime",     desc: "CSV or JSON on request" },
      ],
      sections: [
        { title: "1. Data controller",             body: "SmartGestion is responsible for processing your personal data. Contact: smartgestionmaroc@gmail.com" },
        { title: "2. Data collected",              body: "We only collect necessary data: name, email, phone (optional), company name, and the business data you enter in the application. No sensitive data is collected." },
        { title: "3. Purposes of processing",      body: "Your data is used to provide and improve the service, contact you when needed, inform you about your account or subscription, and fulfil our legal obligations." },
        { title: "4. Data sharing",                body: "We never sell or share your personal data for commercial purposes. Data may be shared with technical subcontractors only under confidentiality agreements." },
        { title: "5. Data security",               body: "All data is encrypted in transit (TLS) and at rest (AES-256). Our servers are hosted in secure European data centres. Automatic backups run every 24 hours with 30-day retention." },
        { title: "6. Data retention",              body: "Your data is retained for the duration of your contract plus 12 months after cancellation. After this period, all your data is permanently deleted." },
        { title: "7. Your rights",                 body: "Under Moroccan law 09-08 and GDPR, you have rights of access, rectification, erasure, portability, objection, and restriction. Contact: smartgestionmaroc@gmail.com" },
        { title: "8. Cookies",                     body: "SmartGestion only uses strictly necessary cookies (session, preferences). No advertising or third-party tracking cookies are used." },
        { title: "9. International transfers",     body: "Your data is hosted in Europe and is not transferred outside the EEA, except where necessary with appropriate safeguards." },
        { title: "10. Policy changes",             body: "We may update this policy at any time. Significant changes will be notified by email or via the application." },
        { title: "11. Contact",                    body: "For any data protection enquiries: smartgestionmaroc@gmail.com. We commit to responding within 30 days." },
      ],
    },
  },
  notFound: {
    meta:      "Page not found — SmartGestion",
    title:     "Page not found",
    subtitle:  "The page you are looking for does not exist or has been moved. Go back home to find your way.",
    home:      "Back to home",
    contact:   "Contact us",
    back:      "Back",
    copyright: "All rights reserved.",
  },
  footer: {
    tagline:
      "SmartGestion builds intelligent ERP solutions for many industries to digitize and run your business every day.",
    colProduct:      "Product",
    colCompany:      "Company",
    colLegal:        "Legal",
    colSocial:       "Social",
    linkFeatures:    "Features",
    linkPricing:     "Pricing",
    linkTestimonials:"Testimonials",
    linkFaq:         "FAQ",
    linkContact:     "Contact",
    linkAbout:       "About",
    linkSolutions:   "Solutions",
    linkTerms:       "Terms of use",
    link404:         "404 Page",
    rights:          "All rights reserved.",
    madeWith:        "Crafted with care for businesses.",
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
    collaboration: {
      title: "تعاون الفريق",
      description:
        "مهام، أجندة ونشاطات مشتركة فالوقت الحقيقي باش يبقى كامل الفريق متناسق.",
    },
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
    items: {
      calculator: {
        title: "حاسبة الأثمنة الأوتوماتيكية",
        description:
          "دخّل الثمن TTC، الـ TVA والتخفيض—الثمن HT كيتحسب فالحين. بلا حساب يدوي، بلا أخطاء.",
      },
      margin: {
        title: "الهامش التجاري فالوقت الحقيقي",
        description:
          "رقم المعاملات، تكلفة المبيعات والأفوارات مجموعين باش يبان ليك الهامش الصافي بالضبط، مفصّل وقابل للتتبع.",
      },
      vat: {
        title: "الملخص الجبائي (TVA)",
        description:
          "الـ TVA المحصّلة، القابلة للخصم والرصيد كيتحسبو أوتوماتيكياً—جاهزين للتصريح ديالك.",
      },
      alerts: {
        title: "تنبيهات المخزون الذكية",
        description:
          "تنبّه قبل ما ينفد المخزون: العتبات المنخفضة والمخزون السالب كيتشاورو فالوقت الحقيقي.",
      },
      dashboard: {
        title: "لوحة القيادة المالية",
        description:
          "كل المؤشرات المهمة—رقم المعاملات، الربح الصافي، الديون—مجموعة فعرض واضح وحي.",
      },
    },
    ui: {
      calcTitle: "حاسبة الأثمنة",
      priceTTC: "ثمن البيع TTC",
      tva: "TVA (%)",
      remise: "تخفيض (%)",
      priceHT: "الثمن HT",
      autoCalc: "حساب أوتوماتيكي",
      marginTitle: "الهامش التجاري (TTC)",
      revenue: "رقم المعاملات",
      costOfSales: "تكلفة المبيعات",
      customerCredit: "أفوارات العملاء (التكلفة)",
      netCost: "التكلفة الصافية للمبيعات",
      grossMargin: "الهامش التجاري",
      vatTitle: "الملخص الجبائي (TVA)",
      vatCollected: "TVA محصّلة",
      vatDeductible: "TVA قابلة للخصم",
      vatBalance: "رصيد TVA",
      credit: "دائن",
      alertsTitle: "تنبيهات المخزون",
      lowStock: "مخزون منخفض",
      units: "وحدة",
      currency: "درهم",
      receivables: "الديون",
      expenses: "المصاريف",
      netProfit: "الربح الصافي",
      revenueTTC: "رقم المعاملات (TTC)",
    },
  },
  modules: {
    badge: "الحلول",
    title1: "حلول مصممة",
    titleHighlight: "على قياس مجالك",
    intro:
      "كنصممو حلول تدبير على المقاس، مجال بمجال. ها أول وحدة ديالنا: حل كامل للصيدليات والبارافارماسيات.",
    pharmacy: {
      eyebrow: "الحل الرئيسي ديالنا",
      title: "حل كامل للصيدلية ديالك",
      description:
        "سيّر المبيعات، المخزون، الموردين والمالية من منصة وحدة—مصممة لليومي ديال صيدلية مغربية. متاحة فكل مكان، على الحاسوب وعلى الموبايل.",
      features: [
        {
          title: "تدبير المخزون والصلاحية",
          description: "تتبّع FIFO حسب اللوط، تنبيهات النفاد والصلاحية فالوقت الحقيقي.",
        },
        {
          title: "مبيعات وفوترة سريعة",
          description: "خلّص وفوتر فثواني، مع حساب TVA أوتوماتيكي.",
        },
        {
          title: "لوحات قيادة فالوقت الحقيقي",
          description: "رقم المعاملات، الهوامش والخزينة بالدرهم، بنظرة وحدة.",
        },
        {
          title: "الشراء والموردون",
          description: "أوامر الشراء وإعادة التموين مركزية وأوتوماتيكية.",
        },
      ],
      desktop: {
        label: "الحاسوب",
        caption: "لوحة قيادة كاملة على الشاشة الكبيرة",
      },
      mobile: {
        label: "الموبايل",
        caption: "كامل التدبير فجيبك",
      },
      cta: "اكتشف الحل",
      liveBadge: "متاح دابا",
    },
  },
  testimonials: {
    badge: "آراء",
    title1: "شنو كيقولو",
    titleHighlight: "عملاؤنا",
    intro: "أصحاب المشاريع اللي كيسيّرو نشاطهم كل يوم مع SmartGestion.",
    items: [
      {
        quote:
          "من بعد SmartGestion، تتبّع الستوك وإعادة الطلب وليو أوتوماتيكيين. نقصنا النفاد بـ 40%.",
        name: "ياسمين العمراني",
        role: "صاحبة، بارافارماسي أزور",
      },
      {
        quote:
          "لوحة القيادة فالوقت الحقيقي كتعطينا رؤية كاملة على رقم الأعمال والهامش. ضرورية بزاف.",
        name: "كريم بنعلي",
        role: "مدير، RestoPro الدار البيضاء",
      },
      {
        quote:
          "تدبير الموردين والطلبيات وفّرلنا ساعات كل أسبوع.",
        name: "سلمى التازي",
        role: "مديرة، بوتيك لوميير",
      },
      {
        quote:
          "أخيراً ERP مصمم للمقاولات المغربية الصغيرة. سهل التعلم والفريق متعاون بزاف.",
        name: "عمر الشرقاوي",
        role: "صاحب، إسباس كوميرس",
      },
      {
        quote:
          "SmartGestion جمّع كلشي: المبيعات، المشتريات، الستوك. ربحنا وقت كبير.",
        name: "نادية برادة",
        role: "رئيسة، أطلس ديستريبوسيون",
      },
      {
        quote:
          "تهييء فأيام، دعم دائماً موجود. رقّمنا كامل تدبيرنا بدون ضغط.",
        name: "هشام الإدريسي",
        role: "صاحب، إدريسي ستور",
      },
      {
        quote:
          "التقارير الأوتوماتيكية كتعاوننا نأخدو قرارات أحسن كل شهر.",
        name: "فاطمة الزهراء العلوي",
        role: "مديرة مالية، غروب العلوي",
      },
      {
        quote:
          "ثمن مناسب بزاف. SmartGestion عوّض تلاتة أدوات كنا كنستعملوهم من قبل.",
        name: "يوسف المنصوري",
        role: "صاحب، تيك شوب الرباط",
      },
    ],
  },
  faq: {
    badge: "أسئلة",
    title1: "الأسئلة",
    titleHighlight: "المتداولة",
    intro: "كلشي خاصك تعرفو قبل ما تبدا مع SmartGestion.",
    items: [
      {
        question: "واش SmartGestion مناسب لقطاعي؟",
        answer:
          "SmartGestion مصمم باش يتكيّف مع بزاف ديال أنواع المشاريع: صيدليات، بارافارماسيات، تجارة بالتفصيل، مطاعم، توزيع وغيرها. البنية المعيارية ديالنا كتخليك تفعّل غير الوظائف اللي محتاجها.",
      },
      {
        question: "واش نقدر نستعملو بلا أنترنيت؟",
        answer:
          "أيه. نسخة Desktop كتخدم بكاملها بلا أنترنيت برخصة صالحة 3 سنين. نسخة أونلاين فيها جميع التحديثات أوتوماتيكياً.",
      },
      {
        question: "واش كيدعم بزاف ديال نقط البيع؟",
        answer:
          "أيه، تقدر تسيّر بزاف ديال نقط البيع والمستودعات من واجهة وحدة، بمخزون وتحليلات مركزية فالوقت الحقيقي.",
      },
      {
        question: "واش البيانات ديالي فأمان؟",
        answer:
          "البيانات ديالك مشفّرة، فيها نسخ احتياطي أوتوماتيكي ومحمية بأعلى معايير الأمن. أنت دائماً صاحب البيانات ديالك.",
      },
      {
        question: "شحال كياخد باش نبدا؟",
        answer:
          "التهييء الأولي كياخد دقائق. الفريق ديالنا كيعاونك فاستيراد المنتجات والزبناء والبيانات الموجودة — بدون توقف النشاط ديالك.",
      },
      {
        question: "شنو هي أنماط التسعير اللي كتقدموها؟",
        answer:
          "كنقدمو رخصة Desktop (دفعة وحدة، 3 سنين) واشتراك أونلاين (شهري أو سنوي). ما كاينش مصاريف خفية، ما كاينش التزام أدنى لنسخة الأونلاين.",
      },
      {
        question: "كيفاش كتتسجّل البيانات ديالي احتياطياً؟",
        answer:
          "لنسخة الأونلاين، البيانات ديالك كتتسجّل أوتوماتيكياً كل 24 ساعة فسيرفرات آمنة مع احتفاظ 30 يوم. تقدر كذلك تفعّل نسخة احتياطية يدوية فأي وقت وتصدّر البيانات ديالك بـ CSV أو JSON.",
      },
      {
        question: "شكون يقدر يوصل للبيانات ديالي؟",
        answer:
          "غير أنت والأعضاء ديال فريقك اللي أنت سمحتيلهم يقدرو يوصلو للبيانات ديالك. SmartGestion ما كتشاركش ولا كتبيعش البيانات ديالك لأطراف ثالثة. الفرق الداخلية ديالنا غير كتوصل إليها بطلب صريح منك باش تعاونك.",
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
    valuePanelTitle: "منصة وحدة لكامل نشاطك",
    valuePanelSubtitle: "نتائج ملموسة لشركتك",
    valueStats: [
      { value: "+30%", label: "ربح فالوقت فالتدبير اليومي" },
      { value: "−40%", label: "تقليل الأخطاء والتكرار فالإدخال" },
      { value: "100%", label: "ديال بياناتك مجمعة وآمنة" },
      { value: "24/7", label: "ولوج فالوقت الحقيقي لنشاطك" },
    ],
    valueModulesTitle: "كلشي مربوط فسير واحد",
    valueModules: ["المبيعات", "المخزون", "المشتريات", "الزبناء", "المالية"],
    valueFootnote: "مصدر واحد للحقيقة، محيّن فالوقت الحقيقي.",
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
  contact: {
    badge: "تواصل معنا",
    title1: "اطلب",
    titleHighlight: "ديمو مجاني",
    subtitle:
      "عمّر الفورمولير والفريق ديالنا غادي يتواصل معاك بسرعة باش يبرمج ليك عرض شخصي ديال SmartGestion.",
    fields: {
      name: "الاسم الكامل",
      namePlaceholder: "السميّة والنسب ديالك",
      email: "البريد الإلكتروني",
      emailPlaceholder: "your@email.com",
      phone: "الهاتف",
      phonePlaceholder: "+212 6 00 00 00 00",
      company: "المقاولة / البارافارماسي",
      companyPlaceholder: "اسم المؤسسة ديالك",
      message: "الرسالة",
      messagePlaceholder: "هضر لينا على الحاجيات ديالك…",
    },
    optional: "اختياري",
    submit: "اطلب ديمو",
    submitting: "كنفتحو تطبيق البريد ديالك…",
    successTitle: "تطبيق البريد ديالك غادي يتفتح",
    successBody:
      "شوف تطبيق البريد ديالك وصيفط الرسالة اللي مكتوبة. غادي نجاوبوك بأسرع وقت ممكن.",
    errorRequired: "عافاك عمّر جميع الخانات الإجبارية.",
    errorEmail: "عافاك دخّل بريد إلكتروني صحيح.",
    mailSubject: "طلب ديمو — SmartGestion",
    infoTitle: "نهضرو على المشروع ديالك",
    infoBody:
      "عندك سؤال، مشروع ديال الرقمنة، ولا بغيتي غير ديمو؟ كتب لينا—حنا هنا باش نعاونوك.",
    emailLabel: "كتب لينا مباشرة",
    responseTime: "الرد فظرف 24 ساعة عمل",
  },
  newsletter: {
    badge:          "ابقى على اطلاع",
    title:          "تلقى آخر تحديثات",
    brand:          "SmartGestion",
    subtitle:       "ميزات جديدة، تحسينات للمنتج وعروض حصرية — مباشرة في بريدك الإلكتروني. بدون سبام أبدًا.",
    placeholder:    "بريدك@الإلكتروني.com",
    button:         "اشترك",
    note:           "بدون سبام. إلغاء الاشتراك بنقرة واحدة في أي وقت.",
    successMessage: "شكراً! ستتلقى تحديثاتنا قريباً.",
    alreadyMessage: "أنت مشترك بالفعل. شكراً!",
    errorMessage:   "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
  },
  legal: {
    badge:   "قانوني",
    back:    "رجوع",
    updated: "آخر تحديث: يونيو ٢٠٢٦",
    terms: {
      meta:  "شروط الاستخدام — SmartGestion",
      title: "شروط الاستخدام",
      intro: "يرجى قراءة هذه الشروط بعناية قبل استخدام SmartGestion. باستخدام خدمتنا، فإنك توافق على الالتزام بهذه الشروط.",
      refundNoticeTitle: "⚠ سياسة الاسترداد المهمة",
      refundNoticeBody:  "تطبّق SmartGestion سياسة عدم الاسترداد. جميع المبيعات نهائية. نشجعك على استخدام فترة التجربة المجانية قبل الشراء.",
      sections: [
        { title: "١. قبول الشروط",               body: "بالوصول إلى SmartGestion أو استخدامها، فإنك توافق على الالتزام بشروط الاستخدام هذه. إذا لم توافق على هذه الشروط، يرجى عدم استخدام خدمتنا." },
        { title: "٢. وصف الخدمة",                body: "SmartGestion هو حل ERP عبر الإنترنت وبدون اتصال للمؤسسات في مختلف القطاعات، ويشمل وحدات إدارة المبيعات والمخزون والمشتريات والفواتير والمالية." },
        { title: "٣. سياسة الاسترداد — لا استرداد", body: "جميع المبيعات نهائية. لا تقدم SmartGestion أي استرداد أو ائتمان أو استبدال لتراخيص سطح المكتب أو اشتراكات الإنترنت. نشجعك على تجربة المنتج مجاناً قبل الشراء." },
        { title: "٤. التراخيص والاشتراكات",       body: "ترخيص سطح المكتب صالح لمدة ٣ سنوات من تاريخ الشراء. يتجدد الاشتراك عبر الإنترنت تلقائياً. يمكنك الإلغاء في أي وقت ويسري في نهاية الفترة الحالية." },
        { title: "٥. الملكية الفكرية",            body: "جميع المحتويات والبرامج والعلامات التجارية والرسومات على SmartGestion هي ملكية حصرية لـ SmartGestion أو شركائها. يُحظر أي تكاثر غير مصرح به." },
        { title: "٦. البيانات والخصوصية",         body: "يتم تخزين بياناتك بأمان ولا تُشارك أو تُباع لأطراف ثالثة. يمكنك تصدير أو حذف بياناتك في أي وقت من خلال إعدادات حسابك." },
        { title: "٧. تحديد المسؤولية",            body: "يُقدَّم SmartGestion 'كما هو'. لن تكون SmartGestion مسؤولة عن أي خسائر غير مباشرة أو خسارة أرباح ناتجة عن استخدام الخدمة أو عدم القدرة على استخدامها." },
        { title: "٨. التعديلات على الشروط",       body: "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. تسري التعديلات عند نشرها. الاستمرار في استخدام الخدمة يعني قبول الشروط المحدّثة." },
        { title: "٩. القانون المطبّق",            body: "تخضع هذه الشروط للقانون المغربي. تختص المحاكم المختصة في الدار البيضاء، المغرب بالنظر في أي نزاع." },
        { title: "١٠. التواصل",                   body: "لأي أسئلة تتعلق بهذه الشروط، يرجى التواصل معنا على: smartgestionmaroc@gmail.com" },
      ],
    },
    privacy: {
      meta:  "سياسة الخصوصية — SmartGestion",
      title: "سياسة الخصوصية",
      intro: "في SmartGestion، حماية بياناتك الشخصية أولوية. تشرح هذه السياسة البيانات التي نجمعها وكيفية استخدامها وحمايتها.",
      highlights: [
        { emoji: "🔒", title: "بيانات مشفّرة",        desc: "AES-256 في حالة السكون، TLS في النقل" },
        { emoji: "🚫", title: "لا مبيع للبيانات",      desc: "بياناتك لا تُباع أبداً" },
        { emoji: "📤", title: "تصدير في أي وقت",      desc: "CSV أو JSON عند الطلب" },
      ],
      sections: [
        { title: "١. المسؤول عن المعالجة",        body: "SmartGestion مسؤولة عن معالجة بياناتك الشخصية. للتواصل: smartgestionmaroc@gmail.com" },
        { title: "٢. البيانات المُجمَّعة",         body: "نجمع فقط البيانات الضرورية: الاسم، البريد الإلكتروني، الهاتف (اختياري)، اسم الشركة، والبيانات المهنية المُدخلة في التطبيق. لا نجمع أي بيانات حساسة." },
        { title: "٣. أغراض المعالجة",             body: "تُستخدم بياناتك لتقديم الخدمة وتحسينها، والتواصل عند الحاجة، وإبلاغك بحسابك أو اشتراكك، والوفاء بالتزاماتنا القانونية." },
        { title: "٤. مشاركة البيانات",             body: "لا نبيع بياناتك الشخصية أو نشاركها لأغراض تجارية. يمكن مشاركتها مع مقاولين تقنيين فقط بموجب اتفاقيات سرية." },
        { title: "٥. أمان البيانات",              body: "جميع البيانات مشفّرة أثناء النقل (TLS) وفي حالة السكون (AES-256). خوادمنا مستضافة في مراكز بيانات آمنة في أوروبا. تتم النسخ الاحتياطية التلقائية كل ٢٤ ساعة." },
        { title: "٦. الاحتفاظ بالبيانات",         body: "يتم الاحتفاظ ببياناتك طوال فترة علاقتك التعاقدية مع SmartGestion، بالإضافة إلى ١٢ شهراً بعد الإلغاء. بعد ذلك، تُحذف جميع بياناتك نهائياً." },
        { title: "٧. حقوقك",                      body: "وفقاً للقانون المغربي 09-08 والناظم الأوروبي (GDPR)، لديك حقوق الوصول والتصحيح والحذف والنقل والاعتراض. تواصل: smartgestionmaroc@gmail.com" },
        { title: "٨. ملفات الارتباط",             body: "تستخدم SmartGestion فقط ملفات الارتباط الضرورية (الجلسة، التفضيلات). لا تُستخدم ملفات ارتباط إعلانية أو تتبع من طرف ثالث." },
        { title: "٩. النقل الدولي",               body: "بياناتك مستضافة في أوروبا ولا تُنقل خارج المنطقة الاقتصادية الأوروبية، إلا عند الضرورة مع الضمانات المناسبة." },
        { title: "١٠. التعديلات",                 body: "يمكننا تحديث هذه السياسة في أي وقت. ستُبلَّغ بالتغييرات المهمة عبر البريد الإلكتروني أو التطبيق." },
        { title: "١١. التواصل",                   body: "لأي استفسارات تتعلق بحماية بياناتك: smartgestionmaroc@gmail.com. نلتزم بالرد خلال ٣٠ يوماً." },
      ],
    },
  },
  notFound: {
    meta:      "الصفحة غير موجودة — SmartGestion",
    title:     "الصفحة غير موجودة",
    subtitle:  "الصفحة التي تبحث عنها غير موجودة أو تم نقلها. عد إلى الصفحة الرئيسية للعثور على طريقك.",
    home:      "العودة إلى الرئيسية",
    contact:   "تواصل معنا",
    back:      "رجوع",
    copyright: "جميع الحقوق محفوظة.",
  },
  footer: {
    tagline:
      "SmartGestion كتبني حلول ERP ذكية لبزاف ديال المهن باش ترقمن وتسيّر النشاط ديالك كل يوم.",
    colProduct:      "المنتج",
    colCompany:      "الشركة",
    colLegal:        "قانوني",
    colSocial:       "التواصل الاجتماعي",
    linkFeatures:    "الميزات",
    linkPricing:     "الأثمنة",
    linkTestimonials:"آراء العملاء",
    linkFaq:         "الأسئلة المتداولة",
    linkContact:     "تواصل معنا",
    linkAbout:       "حول",
    linkSolutions:   "الحلول",
    linkTerms:       "شروط الاستخدام",
    link404:         "صفحة 404",
    rights:          "جميع الحقوق محفوظة.",
    madeWith:        "مصمم بعناية للمشاريع.",
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
