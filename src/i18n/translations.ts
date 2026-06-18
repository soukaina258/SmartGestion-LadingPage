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
          "Devis, factures, bons de commande et de livraison s'enchaînent automatiquement—moins de saisie manuelle, zéro oubli.",
      },
      {
        title: "Stock & multi-activités",
        description:
          "Gestion FIFO par catégorie, alertes de péremption et de rupture, multi-langue—conçu pour s'étendre à de nouveaux métiers.",
      },
    ],
    items: {
      calculator: {
        title: "Calculateur de prix automatique",
        description:
          "Saisissez le prix TTC, la TVA et la remise—le prix HT est calculé instantanément. Zéro calcul manuel, zéro erreur.",
      },
      margin: {
        title: "Marge commerciale en temps réel",
        description:
          "CA, coût des ventes et avoirs combinés pour afficher votre marge nette exacte, détaillée et traçable.",
      },
      vat: {
        title: "Récapitulatif fiscal (TVA)",
        description:
          "TVA collectée, déductible et solde calculés automatiquement—prêt pour votre déclaration.",
      },
      alerts: {
        title: "Alertes de stock intelligentes",
        description:
          "Soyez prévenu avant la rupture : seuils bas et stock négatif signalés en temps réel.",
      },
      dashboard: {
        title: "Tableau de bord financier",
        description:
          "Tous vos indicateurs clés—CA, bénéfice net, créances—réunis dans une vue claire et vivante.",
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
        "Gérez ventes, stock, fournisseurs et finances depuis une seule plateforme—pensée pour le quotidien d'une pharmacie marocaine. Accessible partout, sur ordinateur comme sur mobile.",
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
      "Rejoignez les parapharmacies qui pilotent leur activité avec ParaGestion. Démarrez aujourd'hui—configuration en quelques minutes.",
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
    mailSubject: "Demande de démo — SmartGestion",
    infoTitle: "Parlons de votre projet",
    infoBody:
      "Une question, un projet de digitalisation ou simplement envie d'une démo ? Écrivez-nous, nous sommes là pour vous aider.",
    emailLabel: "Écrivez-nous directement",
    responseTime: "Réponse sous 24h ouvrées",
  },
  footer: {
    tagline:
      "SmartGestion construit des solutions ERP intelligentes pour de nombreux métiers afin de digitaliser et piloter votre activité au quotidien.",
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
          { label: "Contact", href: "#contact" },
          { label: "Blog", href: "#" },
        ],
      },
      {
        title: "Ressources",
        links: [
          { label: "Témoignages", href: "#testimonials" },
          { label: "FAQ", href: "#faq" },
          { label: "Guides", href: "#" },
          { label: "Support", href: "#contact" },
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
      { label: "Email", href: "#contact" },
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
          "Quotes, invoices, purchase and delivery orders flow automatically—less manual entry, nothing forgotten.",
      },
      {
        title: "Inventory & multi-business",
        description:
          "FIFO stock by category, expiry and low-stock alerts, multi-language—built to scale to new industries.",
      },
    ],
    items: {
      calculator: {
        title: "Automatic price calculator",
        description:
          "Enter the tax-incl. price, VAT and discount—the tax-excl. price is computed instantly. No manual math, no errors.",
      },
      margin: {
        title: "Real-time commercial margin",
        description:
          "Revenue, cost of sales and credits combined to show your exact net margin—detailed and traceable.",
      },
      vat: {
        title: "Tax summary (VAT)",
        description:
          "Collected, deductible and balance VAT computed automatically—ready for your filing.",
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
  footer: {
    tagline:
      "SmartGestion builds intelligent ERP solutions for many industries to digitize and run your business every day.",
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
          { label: "Contact", href: "#contact" },
          { label: "Blog", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Testimonials", href: "#testimonials" },
          { label: "FAQ", href: "#faq" },
          { label: "Guides", href: "#" },
          { label: "Support", href: "#contact" },
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
      { label: "Email", href: "#contact" },
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
  footer: {
    tagline:
      "SmartGestion كتبني حلول ERP ذكية لبزاف ديال المهن باش ترقمن وتسيّر النشاط ديالك كل يوم.",
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
          { label: "تواصل معنا", href: "#contact" },
          { label: "المدونة", href: "#" },
        ],
      },
      {
        title: "موارد",
        links: [
          { label: "آراء العملاء", href: "#testimonials" },
          { label: "الأسئلة المتداولة", href: "#faq" },
          { label: "أدلة", href: "#" },
          { label: "الدعم", href: "#contact" },
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
      { label: "البريد", href: "#contact" },
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
