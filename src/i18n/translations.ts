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
    reports: string;
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
      monthlyFlow: string;
    };
  };
  industries: {
    badge: string;
    title1: string;
    titleHighlight: string;
    intro: string;
    flagshipLabel: string;
    nicheName: string;
    nicheTagline: string;
    highlights: { title: string; description: string }[];
    stats: { value: string; label: string }[];
    cta: string;
    showcase: {
      eyebrow: string;
      title: string;
      description: string;
      platform: string;
      liveBadge: string;
      features: { title: string; description: string }[];
      cta: string;
      caLabel: string;
      caValue: string;
      caUp: string;
      stockLabel: string;
      stockValue: string;
      stockWarn: string;
      videoTitle: string;
      videoSubtitle: string;
    };
  };
  reports: {
    badge: string;
    title1: string;
    titleHighlight: string;
    intro: string;
    biEyebrow: string;
    biTitle: string;
    biDescription: string;
    tabs: { key: string; label: string; title: string; description: string; kpis: { label: string; value: string }[] }[];
    sales: {
      kpis: { label: string; value: string; accent?: "up" | "down" | "neutral" }[];
      evolutionTitle: string;
      trendTitle: string;
      productTableTitle: string;
      productCols: { product: string; qty: string; revenue: string; margin: string; stock: string };
      products: { name: string; qty: string; revenue: string; margin: string; stock: string; bar: number }[];
      topTitle: string;
      lowTitle: string;
      categoryTitle: string;
      categories: { name: string; percent: string; value: string; color: string; slice: number }[];
      clientTableTitle: string;
      clientCols: { client: string; orders: string; revenue: string; basket: string; last: string };
      clients: { name: string; orders: string; revenue: string; basket: string; last: string }[];
      hourTitle: string;
      dayTitle: string;
      days: string[];
      dayValues: number[];
    };
    products2: {
      tableTitle: string;
      cols: { product: string; category: string; bought: string; sold: string; revenue: string; margin: string; stock: string };
      rows: { name: string; category: string; bought: string; sold: string; revenue: string; margin: string; stock: string }[];
      topRevenueTitle: string;
      topProfitTitle: string;
      topQtyTitle: string;
      topRevenue: { name: string; bar: number }[];
      topProfit: { name: string; bar: number }[];
      topQty: { name: string; bar: number }[];
      fastTitle: string;
      slowTitle: string;
      fast: { name: string; bar: number }[];
      slow: { name: string; bar: number }[];
    };
    inventory2: {
      kpis: { label: string; value: string; accent?: "up" | "down" | "neutral" }[];
      movementsTitle: string;
      movementsSubtitle: string;
      movCols: { date: string; product: string; type: string; qty: string; ref: string };
      movements: { date: string; product: string; type: string; direction: "in" | "out"; qty: string; ref: string }[];
      lowTitle: string;
      lowCols: { product: string; stock: string; min: string; value: string };
      low: { name: string; stock: string; min: string; value: string }[];
      overTitle: string;
      overSubtitle: string;
      over: { name: string; stock: string; sold: string; value: string }[];
      unsoldTitle: string;
      unsoldSubtitle: string;
      unsoldCols: { product: string; stock: string; sold: string; days: string; value: string };
      unsold: { name: string; stock: string; sold: string; days: string; value: string }[];
    };
    purchases2: {
      kpis: { label: string; value: string }[];
      trendTitle: string;
      supplierTitle: string;
      supplierCols: { supplier: string; orders: string; products: string; amount: string; avg: string };
      suppliers: { name: string; orders: string; products: string; amount: string; avg: string }[];
      productTitle: string;
      productCols: { product: string; qty: string; cost: string; supplier: string; last: string };
      products: { name: string; qty: string; cost: string; supplier: string; last: string }[];
    };
    finance2: {
      plTitle: string;
      pl: { revenue: string; revenueVal: string; cogsLabel: string; cogsVal: string; grossLabel: string; grossVal: string; opexLabel: string; opexVal: string; netLabel: string; netVal: string; netNegative: boolean };
      expensesTitle: string;
      expensesCols: { category: string; amount: string; percent: string };
      expenses: { name: string; amount: string; percent: string; color: string; slice: number }[];
      marginTitle: string;
      marginByProduct: string;
      marginByCategory: string;
      marginCols: { name: string; revenue: string; cost: string; margin: string; marginPct: string };
      marginProducts: { name: string; revenue: string; cost: string; margin: string; marginPct: string }[];
      marginCategories: { name: string; revenue: string; cost: string; margin: string; marginPct: string }[];
      cashTitle: string;
      cashKpis: { label: string; value: string; accent: "up" | "down" | "neutral" }[];
      vatTitle: string;
      vatSubtitle: string;
      vat: { collectedLabel: string; collectedVal: string; deductibleLabel: string; deductibleVal: string; balanceLabel: string; balanceVal: string };
    };
    customers2: {
      topTitle: string;
      topCols: { client: string; invoices: string; revenue: string; profit: string; avg: string; due: string; last: string };
      top: { name: string; invoices: string; revenue: string; profit: string; avg: string; due: string; last: string }[];
      balanceTitle: string;
      balanceKpis: { label: string; value: string; accent: "up" | "down" | "neutral" }[];
      loyaltyTitle: string;
      loyaltyKpis: { label: string; value: string }[];
      newTitle: string;
      newValues: number[];
      inactiveTitle: string;
      inactiveSubtitle: string;
      inactiveCols: { client: string; revenue: string; last: string; days: string };
      inactive: { name: string; revenue: string; last: string; days: string }[];
    };
    performance2: {
      compareTitle: string;
      compareSubtitle: string;
      compare: { label: string; value: string; prev: string; change: string; direction: "up" | "down" | "flat" }[];
      growthTitle: string;
      growth: { label: string; value: string; direction: "up" | "down" | "flat" }[];
      profitTitle: string;
      profitSubtitle: string;
      profitCols: { product: string; qty: string; revenue: string; profit: string; margin: string };
      profit: { name: string; qty: string; revenue: string; profit: string; margin: string }[];
      alertsTitle: string;
      alerts: { text: string; level: "warning" | "info" | "success" }[];
    };
    exportNote: string;
    exportFormats: string[];
    modulesTitle: string;
    modulesSubtitle: string;
    modules: { name: string; description: string }[];
    cta: string;
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
    promoBadge: string;
    promoOriginalPrice: string;
    promoDiscount: string;
    promoUrgency: string;
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
    linkPrivacy: string;
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
    productAnalysis: {
      title: string;
      subtitle: string;
      period: string;
      category: string;
      allCategories: string;
      product: string;
      optional: string;
      searchProduct: string;
      tabOverview: string;
      tabBest: string;
      tabSlow: string;
      tabSmart: string;
      bestSeller: string;
      units: string;
      totalSold: string;
      revenueTTC: string;
      totalProfit: string;
      differentProducts: string;
      avgPerSale: string;
      top10: string;
      salesBreakdown: string;
    };
    salesEvolution: {
      title: string;
    };
    productFilter: {
      title: string;
      subtitle: string;
      qtySold: string;
      totalAmount: string;
      salesCount: string;
      avgPrice: string;
      differentProducts: string;
      searchResults: string;
      colDate: string;
      colProduct: string;
      colBarcode: string;
      colQty: string;
      colUnitPrice: string;
      colTotal: string;
      colSource: string;
      colDocument: string;
      colClient: string;
      sourcePassing: string;
      sourceInvoice: string;
      showing: string;
      print: string;
    };
    sidebar: {
      sectionDashboard: string;
      workspace: string;
      dashboard: string;
      reports: string;
      sectionSales: string;
      invoices: string;
      quotes: string;
      passingSales: string;
      creditNotes: string;
      deliveryNotes: string;
      sectionPurchases: string;
      purchaseOrders: string;
      discounts: string;
      expenses: string;
      supplierCreditNotes: string;
      sectionContacts: string;
      clients: string;
      suppliers: string;
      sectionStock: string;
      products: string;
      sectionPortfolio: string;
      portfolio: string;
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
    reports: "Rapports",
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
    titleHighlight: "pour votre parapharmacie",
    intro:
      "Chaque module — comptoir, lots, laboratoires, TVA — est connecté et s'adapte au quotidien de votre parapharmacie, pas l'inverse. Conçu pour évoluer avec votre officine.",
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
          "Saisissez le prix TTC, la TVA et la remise sur vos produits parapharma. Le prix HT est calculé instantanément. Zéro calcul manuel, zéro erreur au comptoir.",
      },
      margin: {
        title: "Marge commerciale en temps réel",
        description:
          "CA, coût d'achat laboratoire et avoirs combinés pour afficher votre marge nette exacte, par produit et par rayon.",
      },
      vat: {
        title: "Récapitulatif fiscal (TVA)",
        description:
          "TVA collectée, déductible et solde calculés automatiquement sur vos ventes et achats laboratoires. Prêt pour votre déclaration.",
      },
      alerts: {
        title: "Alertes stock, lots & péremptions",
        description:
          "Soyez prévenu avant la rupture ou la péremption : seuils bas, stock négatif et lots proches de la date signalés en temps réel.",
      },
      dashboard: {
        title: "Tableau de bord financier",
        description:
          "Tous vos indicateurs clés : CA, bénéfice net, créances et valeur du stock, réunis dans une vue claire et vivante.",
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
      monthlyFlow: "Flux mensuel",
    },
  },
  industries: {
    badge: "Solution parapharmacie",
    title1: "Le logiciel pensé pour",
    titleHighlight: "votre parapharmacie",
    intro:
      "SmartGestion est conçu de A à Z pour le quotidien d'une parapharmacie marocaine : gestion des lots, suivi des péremptions, ventes rapides et facturation conforme à la TVA.",
    flagshipLabel: "Notre solution phare",
    nicheName: "Parapharmacie",
    nicheTagline: "Une plateforme dédiée, pas un ERP générique",
    highlights: [
      {
        title: "Suivi des lots & péremptions",
        description:
          "Gestion FIFO par lot avec alertes automatiques de rupture et de péremption, pour ne plus jamais vendre un produit expiré.",
      },
      {
        title: "Ventes & facturation TVA",
        description:
          "Encaissez en quelques secondes, éditez des factures conformes et calculez la TVA automatiquement à chaque vente.",
      },
      {
        title: "Achats & fournisseurs",
        description:
          "Bons de commande, réapprovisionnement et suivi des fournisseurs centralisés dans une seule interface.",
      },
      {
        title: "Pilotage en temps réel",
        description:
          "CA, marges, trésorerie et alertes de stock en dirhams, visibles d'un coup d'œil sur votre tableau de bord.",
      },
    ],
    stats: [
      { value: "-40%", label: "de ruptures de stock" },
      { value: "2×", label: "plus rapide à l'encaissement" },
      { value: "100%", label: "conforme TVA Maroc" },
    ],
    cta: "Demander une démo",
    showcase: {
      eyebrow: "Disponible dès aujourd'hui",
      title: "Une plateforme complète pour votre parapharmacie",
      description:
        "SmartGestion réunit ventes, stock, fournisseurs et finances dans une seule plateforme — pensée pour la parapharmacie et disponible dès aujourd'hui sur ordinateur.",
      platform: "Ordinateur",
      liveBadge: "Disponible maintenant",
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
      cta: "Demander une démo",
      caLabel: "CA du jour",
      caValue: "12 840 DH",
      caUp: "↑ +8.4%",
      stockLabel: "Stock alertes",
      stockValue: "3 produits",
      stockWarn: "⚠ Péremption",
      videoTitle: "Découvrez SmartGestion en action",
      videoSubtitle: "Regardez notre tutoriel vidéo pour voir comment l'application fonctionne.",
    },
  },
  reports: {
    badge: "Business Intelligence",
    title1: "Pilotez chaque chiffre avec",
    titleHighlight: "des rapports avancés",
    intro:
      "Un centre d'analyse complet dédié à votre parapharmacie : ventes au comptoir, produits, stock & lots, achats laboratoires, TVA et clients — filtrés par période, produit, rayon, laboratoire ou date de péremption, avec export en un clic.",
    biEyebrow: "Business Intelligence Center",
    biTitle: "7 tableaux d'analyse, une seule vue à 360°",
    biDescription:
      "Basculez entre les modules d'analyse pour comprendre votre activité en profondeur. Chaque onglet réunit KPIs, graphiques et tableaux exportables.",
    tabs: [
      {
        key: "sales",
        label: "Ventes",
        title: "Analyse des ventes",
        description:
          "CA, marges, TVA collectée et évolution des ventes, avec le détail produit par produit et vos meilleures ventes.",
        kpis: [
          { label: "CA (TTC)", value: "400,00 DH" },
          { label: "TVA collectée", value: "66,67 DH" },
          { label: "Marge", value: "7,0%" },
        ],
      },
      {
        key: "products",
        label: "Produits",
        title: "Analyse produits",
        description:
          "Rotation, top revenus, top profits, produits à rotation rapide ou lente — pour optimiser vos assortiments.",
        kpis: [
          { label: "Achetés", value: "20" },
          { label: "Vendus", value: "4" },
          { label: "Valeur stock", value: "1 395 DH" },
        ],
      },
      {
        key: "inventory",
        label: "Stock",
        title: "Valorisation du stock",
        description:
          "Valeur d'achat, valeur de vente, profit attendu, mouvements de stock, ruptures et alertes de péremption.",
        kpis: [
          { label: "Valeur achat", value: "1 395 DH" },
          { label: "Valeur vente", value: "1 500 DH" },
          { label: "Profit attendu", value: "105 DH" },
        ],
      },
      {
        key: "purchases",
        label: "Achats",
        title: "Analyse des achats",
        description:
          "Total des achats, tendance, coût et achats par fournisseur — pour négocier et acheter au meilleur prix.",
        kpis: [
          { label: "Total achats", value: "1 860 DH" },
          { label: "Commandes", value: "1" },
          { label: "Fournisseurs", value: "1" },
        ],
      },
      {
        key: "finance",
        label: "Finances",
        title: "Compte de résultat",
        description:
          "Chiffre d'affaires, coût des marchandises, marge brute, charges et résultat net, avec répartition des dépenses.",
        kpis: [
          { label: "Marge brute", value: "28 DH" },
          { label: "Charges", value: "1 500 DH" },
          { label: "Résultat net", value: "-1 100 DH" },
        ],
      },
      {
        key: "customers",
        label: "Clients",
        title: "Analyse clients",
        description:
          "Top clients, encours, taux de fidélité, clients récurrents et clients inactifs à 30/60/90 jours.",
        kpis: [
          { label: "Encaissé", value: "300 DH" },
          { label: "Fidélité", value: "100%" },
          { label: "Récurrents", value: "1" },
        ],
      },
      {
        key: "performance",
        label: "Performance",
        title: "Comparaison de périodes",
        description:
          "Période actuelle vs précédente, croissance du CA, du profit et des clients, rentabilité par produit et alertes.",
        kpis: [
          { label: "Croissance CA", value: "+100%" },
          { label: "Croissance clients", value: "+100%" },
          { label: "Marge", value: "7%" },
        ],
      },
    ],
    sales: {
      kpis: [
        { label: "CA (TTC)", value: "400,00 DH" },
        { label: "CA (HT)", value: "333,33 DH" },
        { label: "TVA collectée", value: "66,67 DH" },
        { label: "Total ventes", value: "3" },
        { label: "Facture moyenne", value: "133,33 DH" },
        { label: "Bénéfice", value: "28,00 DH", accent: "up" },
        { label: "Marge %", value: "7,0%", accent: "up" },
      ],
      evolutionTitle: "Évolution du CA",
      trendTitle: "Tendance des ventes",
      productTableTitle: "Ventes par produit",
      productCols: { product: "Produit", qty: "Qté", revenue: "CA TTC", margin: "Marge %", stock: "Stock" },
      products: [
        { name: "Écran solaire SPF50", qty: "4", revenue: "400,00 DH", margin: "7,0%", stock: "15", bar: 100 },
        { name: "Crème Eucerin", qty: "3", revenue: "285,00 DH", margin: "12,5%", stock: "22", bar: 71 },
        { name: "Sérum vitamine C", qty: "2", revenue: "240,00 DH", margin: "18,0%", stock: "8", bar: 60 },
        { name: "Gel nettoyant", qty: "2", revenue: "120,00 DH", margin: "9,4%", stock: "31", bar: 30 },
      ],
      topTitle: "Meilleures ventes",
      lowTitle: "Ventes les plus faibles",
      categoryTitle: "Ventes par catégorie",
      categories: [
        { name: "Solaires", percent: "46%", value: "400 DH", color: "#3FB8C4", slice: 46 },
        { name: "Soins visage", percent: "34%", value: "285 DH", color: "#1D6FD6", slice: 34 },
        { name: "Hygiène", percent: "20%", value: "120 DH", color: "#7C9CF0", slice: 20 },
      ],
      clientTableTitle: "Ventes par client",
      clientCols: { client: "Client", orders: "Achats", revenue: "CA TTC", basket: "Panier moyen", last: "Dernier achat" },
      clients: [
        { name: "Ahmed Benani", orders: "2", revenue: "300,00 DH", basket: "150,00 DH", last: "22/07/2026" },
        { name: "Sofia Alami", orders: "1", revenue: "240,00 DH", basket: "240,00 DH", last: "21/07/2026" },
        { name: "Karim Idrissi", orders: "1", revenue: "120,00 DH", basket: "120,00 DH", last: "20/07/2026" },
      ],
      hourTitle: "Ventes par heure",
      dayTitle: "Ventes par jour de semaine",
      days: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
      dayValues: [45, 62, 100, 38, 71, 88, 24],
    },
    products2: {
      tableTitle: "Analyse des produits",
      cols: {
        product: "Produit",
        category: "Catégorie",
        bought: "Qté achetée",
        sold: "Qté vendue",
        revenue: "CA TTC",
        margin: "Marge %",
        stock: "Stock",
      },
      rows: [
        { name: "Écran solaire SPF50", category: "Solaires", bought: "20", sold: "4", revenue: "400,00 DH", margin: "7,0%", stock: "15" },
        { name: "Crème Eucerin", category: "Soins visage", bought: "30", sold: "3", revenue: "285,00 DH", margin: "12,5%", stock: "22" },
        { name: "Sérum vitamine C", category: "Soins visage", bought: "10", sold: "2", revenue: "240,00 DH", margin: "18,0%", stock: "8" },
        { name: "Gel nettoyant", category: "Hygiène", bought: "40", sold: "2", revenue: "120,00 DH", margin: "9,4%", stock: "31" },
      ],
      topRevenueTitle: "Top CA",
      topProfitTitle: "Top bénéfice",
      topQtyTitle: "Top quantité",
      topRevenue: [
        { name: "Écran solaire", bar: 100 },
        { name: "Crème Eucerin", bar: 71 },
        { name: "Sérum vit. C", bar: 60 },
        { name: "Gel nettoyant", bar: 30 },
      ],
      topProfit: [
        { name: "Sérum vit. C", bar: 100 },
        { name: "Crème Eucerin", bar: 78 },
        { name: "Écran solaire", bar: 52 },
        { name: "Gel nettoyant", bar: 34 },
      ],
      topQty: [
        { name: "Écran solaire", bar: 100 },
        { name: "Crème Eucerin", bar: 75 },
        { name: "Sérum vit. C", bar: 50 },
        { name: "Gel nettoyant", bar: 50 },
      ],
      fastTitle: "Produits à rotation rapide",
      slowTitle: "Produits à rotation lente",
      fast: [
        { name: "Écran solaire", bar: 100 },
        { name: "Crème Eucerin", bar: 82 },
        { name: "Sérum vit. C", bar: 64 },
      ],
      slow: [
        { name: "Gel nettoyant", bar: 90 },
        { name: "Baume lèvres", bar: 62 },
        { name: "Shampoing doux", bar: 40 },
      ],
    },
    inventory2: {
      kpis: [
        { label: "Valeur d'achat", value: "1 395,00 DH" },
        { label: "Valeur de vente", value: "1 500,00 DH" },
        { label: "Bénéfice attendu", value: "105,00 DH", accent: "up" },
        { label: "Valeur d'inventaire", value: "1 395,00 DH" },
      ],
      movementsTitle: "Mouvements de stock",
      movementsSubtitle: "Enregistrés lors des commandes/ajustements",
      movCols: { date: "Date", product: "Produit", type: "Type", qty: "Qté", ref: "Référence" },
      movements: [
        { date: "22/07/2026 18:34", product: "Écran solaire SPF50", type: "Entrée", direction: "in", qty: "+20", ref: "BC-2026-0001" },
        { date: "22/07/2026 15:10", product: "Écran solaire SPF50", type: "Sortie", direction: "out", qty: "-4", ref: "FAC-2026-0003" },
        { date: "21/07/2026 11:02", product: "Crème Eucerin", type: "Entrée", direction: "in", qty: "+30", ref: "BC-2026-0002" },
        { date: "20/07/2026 16:45", product: "Sérum vitamine C", type: "Sortie", direction: "out", qty: "-2", ref: "FAC-2026-0001" },
      ],
      lowTitle: "Stock faible",
      lowCols: { product: "Produit", stock: "Stock", min: "Stock min", value: "Valeur stock" },
      low: [
        { name: "Sérum vitamine C", stock: "8", min: "10", value: "560,00 DH" },
        { name: "Baume lèvres", stock: "3", min: "12", value: "90,00 DH" },
      ],
      overTitle: "Surstock",
      overSubtitle: "Stock élevé, ventes faibles",
      over: [
        { name: "Gel nettoyant", stock: "31", sold: "2", value: "930,00 DH" },
        { name: "Shampoing doux", stock: "48", sold: "1", value: "720,00 DH" },
      ],
      unsoldTitle: "Produits invendus",
      unsoldSubtitle: "Invendus depuis 30 / 60 / 90 jours",
      unsoldCols: { product: "Produit", stock: "Stock", sold: "Qté vendue", days: "Jours", value: "Valeur stock" },
      unsold: [
        { name: "Masque argile", stock: "18", sold: "0", days: "34", value: "540,00 DH" },
        { name: "Huile d'argan", stock: "9", sold: "0", days: "61", value: "810,00 DH" },
        { name: "Crème mains", stock: "24", sold: "0", days: "92", value: "480,00 DH" },
      ],
    },
    purchases2: {
      kpis: [
        { label: "Total achats", value: "1 860,00 DH" },
        { label: "Achat moyen", value: "1 860,00 DH" },
        { label: "Coût d'achat", value: "1 860,00 DH" },
        { label: "Nombre de commandes", value: "1" },
      ],
      trendTitle: "Tendance des achats",
      supplierTitle: "Achats par fournisseur",
      supplierCols: { supplier: "Fournisseur", orders: "Commandes", products: "Produits", amount: "Montant", avg: "Achat moyen" },
      suppliers: [
        { name: "Najib Distribution", orders: "1", products: "1", amount: "1 860,00 DH", avg: "1 860,00 DH" },
        { name: "Pharma Nord", orders: "2", products: "5", amount: "1 240,00 DH", avg: "620,00 DH" },
        { name: "CosmoMaroc", orders: "1", products: "3", amount: "780,00 DH", avg: "780,00 DH" },
      ],
      productTitle: "Achats par produit",
      productCols: { product: "Produit", qty: "Qté achetée", cost: "Coût moyen", supplier: "Fournisseur", last: "Dernier achat" },
      products: [
        { name: "Écran solaire SPF50", qty: "20", cost: "93,00 DH", supplier: "Najib Distribution", last: "22/07/2026" },
        { name: "Crème Eucerin", qty: "30", cost: "62,00 DH", supplier: "Pharma Nord", last: "21/07/2026" },
        { name: "Sérum vitamine C", qty: "10", cost: "98,00 DH", supplier: "CosmoMaroc", last: "20/07/2026" },
      ],
    },
    finance2: {
      plTitle: "Compte de résultat",
      pl: {
        revenue: "Chiffre d'affaires",
        revenueVal: "400,00 DH",
        cogsLabel: "Coût des marchandises vendues",
        cogsVal: "372,00 DH",
        grossLabel: "Bénéfice brut",
        grossVal: "28,00 DH",
        opexLabel: "Charges d'exploitation",
        opexVal: "1 500,00 DH",
        netLabel: "Bénéfice net",
        netVal: "-1 100,00 DH",
        netNegative: true,
      },
      expensesTitle: "Rapport des dépenses",
      expensesCols: { category: "Catégorie", amount: "Montant", percent: "Pourcentage" },
      expenses: [
        { name: "Loyer", amount: "1 500,00 DH", percent: "62,5%", color: "#3FB8C4", slice: 62.5 },
        { name: "Salaires", amount: "600,00 DH", percent: "25,0%", color: "#1D6FD6", slice: 25 },
        { name: "Électricité", amount: "300,00 DH", percent: "12,5%", color: "#7C9CF0", slice: 12.5 },
      ],
      marginTitle: "Marge commerciale",
      marginByProduct: "Par produit",
      marginByCategory: "Par catégorie",
      marginCols: { name: "Nom", revenue: "CA", cost: "Coût", margin: "Marge", marginPct: "Marge %" },
      marginProducts: [
        { name: "Écran solaire SPF50", revenue: "400,00 DH", cost: "372,00 DH", margin: "28,00 DH", marginPct: "7,0%" },
        { name: "Crème Eucerin", revenue: "285,00 DH", cost: "249,00 DH", margin: "36,00 DH", marginPct: "12,5%" },
      ],
      marginCategories: [
        { name: "Solaires", revenue: "400,00 DH", cost: "372,00 DH", margin: "28,00 DH", marginPct: "7,0%" },
        { name: "Soins visage", revenue: "525,00 DH", cost: "441,00 DH", margin: "84,00 DH", marginPct: "16,0%" },
      ],
      cashTitle: "Flux de trésorerie",
      cashKpis: [
        { label: "Entrées", value: "400,00 DH", accent: "up" },
        { label: "Sorties", value: "3 360,00 DH", accent: "down" },
        { label: "Solde", value: "-2 960,00 DH", accent: "down" },
      ],
      vatTitle: "Rapport TVA",
      vatSubtitle: "Prêt pour la déclaration fiscale",
      vat: {
        collectedLabel: "TVA collectée",
        collectedVal: "66,67 DH",
        deductibleLabel: "TVA déductible",
        deductibleVal: "560,00 DH",
        balanceLabel: "Solde TVA",
        balanceVal: "-493,33 DH",
      },
    },
    customers2: {
      topTitle: "Meilleurs clients",
      topCols: { client: "Client", invoices: "Factures", revenue: "CA TTC", profit: "Bénéfice", avg: "Facture moyenne", due: "Solde dû", last: "Dernier achat" },
      top: [
        { name: "Ahmed Benani", invoices: "2", revenue: "300,00 DH", profit: "21,00 DH", avg: "150,00 DH", due: "0,00 DH", last: "22/07/2026" },
        { name: "Sofia Alami", invoices: "1", revenue: "240,00 DH", profit: "43,00 DH", avg: "240,00 DH", due: "120,00 DH", last: "21/07/2026" },
        { name: "Karim Idrissi", invoices: "1", revenue: "120,00 DH", profit: "11,00 DH", avg: "120,00 DH", due: "0,00 DH", last: "20/07/2026" },
      ],
      balanceTitle: "Solde clients",
      balanceKpis: [
        { label: "Payé", value: "300,00 DH", accent: "up" },
        { label: "Restant", value: "120,00 DH", accent: "down" },
        { label: "Crédit", value: "0,00 DH", accent: "neutral" },
      ],
      loyaltyTitle: "Clients fidèles",
      loyaltyKpis: [
        { label: "Récurrents", value: "1" },
        { label: "Une seule fois", value: "2" },
        { label: "Taux de fidélité", value: "100%" },
      ],
      newTitle: "Nouveaux clients",
      newValues: [30, 55, 42, 70, 60, 88, 100],
      inactiveTitle: "Clients inactifs",
      inactiveSubtitle: "Sans achat depuis 30 / 60 / 90 jours",
      inactiveCols: { client: "Client", revenue: "CA TTC", last: "Dernier achat", days: "Jours" },
      inactive: [
        { name: "Yassine Fahim", revenue: "180,00 DH", last: "20/06/2026", days: "32" },
        { name: "Nadia Cherkaoui", revenue: "450,00 DH", last: "18/05/2026", days: "65" },
        { name: "Omar Tazi", revenue: "90,00 DH", last: "14/04/2026", days: "99" },
      ],
    },
    performance2: {
      compareTitle: "Comparaison de périodes",
      compareSubtitle: "Période actuelle vs période précédente",
      compare: [
        { label: "Chiffre d'affaires", value: "400,00 DH", prev: "Précédent : 0,00 DH", change: "100%", direction: "up" },
        { label: "Bénéfice", value: "-1 100,00 DH", prev: "Précédent : 0,00 DH", change: "—", direction: "flat" },
        { label: "Dépenses", value: "1 500,00 DH", prev: "Précédent : 0,00 DH", change: "100%", direction: "up" },
        { label: "Marge", value: "7%", prev: "Précédent : 0%", change: "100%", direction: "up" },
        { label: "Ventes", value: "3", prev: "Précédent : 0", change: "100%", direction: "up" },
        { label: "Achats", value: "1 860,00 DH", prev: "Précédent : 0,00 DH", change: "100%", direction: "up" },
      ],
      growthTitle: "Rapport de croissance",
      growth: [
        { label: "Croissance CA", value: "+100,0%", direction: "up" },
        { label: "Croissance bénéfice", value: "—", direction: "flat" },
        { label: "Croissance dépenses", value: "+100,0%", direction: "up" },
        { label: "Croissance clients", value: "+100,0%", direction: "up" },
      ],
      profitTitle: "Rentabilité des produits",
      profitSubtitle: "Triez par bénéfice, marge, CA ou quantité",
      profitCols: { product: "Produit", qty: "Qté vendue", revenue: "CA TTC", profit: "Bénéfice", margin: "Marge %" },
      profit: [
        { name: "Écran solaire SPF50", qty: "4", revenue: "400,00 DH", profit: "28,00 DH", margin: "7,0%" },
        { name: "Crème Eucerin", qty: "3", revenue: "285,00 DH", profit: "36,00 DH", margin: "12,5%" },
        { name: "Sérum vitamine C", qty: "2", revenue: "240,00 DH", profit: "43,00 DH", margin: "18,0%" },
      ],
      alertsTitle: "Alertes",
      alerts: [
        { text: "Bénéfice net négatif : les charges dépassent la marge brute.", level: "warning" },
        { text: "Solde TVA déductible en votre faveur : -493,33 DH.", level: "info" },
        { text: "CA en hausse de 100% par rapport à la période précédente.", level: "success" },
      ],
    },
    exportNote: "Exportez ou imprimez chaque tableau en un clic",
    exportFormats: ["CSV", "Excel", "PDF", "Impression"],
    modulesTitle: "Et bien plus encore",
    modulesSubtitle:
      "SmartGestion couvre tout le cycle de gestion de votre parapharmacie, du devis au bilan.",
    modules: [
      { name: "Ventes au comptoir", description: "Encaissement rapide au comptoir avec lecture code-barres." },
      { name: "Devis & factures", description: "Devis, factures et conversion en un clic, conformes TVA." },
      { name: "Bons de livraison", description: "Suivez chaque livraison et sa réception." },
      { name: "Avoirs clients & fournisseurs", description: "Gérez retours et avoirs des deux côtés." },
      { name: "Bons de commande & achats", description: "Commandes fournisseurs et réapprovisionnement." },
      { name: "Remises", description: "Remises définies sur les bons de commande, suivies automatiquement." },
      { name: "Dépenses", description: "Enregistrez et catégorisez toutes vos charges." },
      { name: "Portfolio documentaire", description: "Documents, dossiers et notes (chèques, contrats…) centralisés." },
      { name: "Multi-entrepôts", description: "Pilotez le stock sur plusieurs entrepôts." },
    ],
    cta: "Demander une démo",
  },
  modules: {
    badge: "Solutions",
    title1: "Des solutions conçues",
    titleHighlight: "pour votre métier",
    intro:
      "Nous concevons des solutions de gestion sur mesure, métier par métier. Voici notre première : une solution complète pour les pharmacies et parapharmacies.",
    pharmacy: {
      eyebrow: "Notre solution phare",
      title: "Une solution complète pour votre parapharmacie",
      description:
        "Gérez ventes, stock, fournisseurs et finances depuis une seule plateforme, pensée pour le quotidien d'une parapharmacie marocaine. Disponible sur ordinateur.",
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
    whyTitle1: "L'ERP",
    whyTitleHighlight: "intelligent",
    whyTitle2: "pensé pour votre parapharmacie",
    whyBody:
      "SmartGestion ParaPharmacie réunit ventes au comptoir, stock, lots & péremptions, achats laboratoires, clients et finances dans une plateforme unique, claire et rapide. Conçue pour le quotidien d'une parapharmacie, pour que vous vous occupiez de vos patients, pas de votre logiciel.",
    whyCta: "Découvrir nos solutions",
    points: [
      {
        title: "Tout-en-un pour la parapharmacie",
        description:
          "Comptoir, stock, lots, laboratoires et caisse dans une seule plateforme, fini les outils éparpillés.",
      },
      {
        title: "Pensé pour votre métier",
        description:
          "Gestion des lots et péremptions, fiches produits par DCI et marque, alertes de rupture adaptées à votre rayon.",
      },
      {
        title: "Simple & rapide au comptoir",
        description:
          "Vente par code-barres, encaissement fluide et prise en main en quelques minutes avec notre équipe.",
      },
      {
        title: "Conforme & sécurisé",
        description:
          "Traçabilité des lots, chiffrement, sauvegardes et reporting conforme à la réglementation pharmaceutique.",
      },
    ],
    valuePanelTitle: "Une plateforme, toute votre parapharmacie",
    valuePanelSubtitle: "Des résultats concrets pour votre officine",
    valueStats: [
      { value: "+30%", label: "de temps gagné au comptoir et sur la gestion" },
      { value: "−40%", label: "de pertes sur produits périmés et ruptures" },
      { value: "100%", label: "de vos lots tracés et vos données sécurisées" },
      { value: "24/7", label: "accès en temps réel à votre stock et vos ventes" },
    ],
    valueModulesTitle: "Tout connecté en un seul flux",
    valueModules: ["Comptoir", "Stock & Lots", "Laboratoires", "Clients", "Finances"],
    valueFootnote: "Une seule source de vérité, du comptoir au stock, en temps réel.",
  },
  pricing: {
    badge: "Tarifs",
    title1: "Une tarification",
    titleHighlight: "simple et transparente",
    subtitle:
      "Version Desktop hors-ligne : une licence annuelle qui fonctionne hors-ligne.",
    modeDesktop: "Desktop (hors-ligne)",
    modeOnline: "En ligne",
    tagNoUpdates: "Sans mises à jour",
    tagUpdates: "Mises à jour incluses",
    mostPopular: "Le plus populaire",
    noteDesktop: "Licence hors-ligne · par an",
    noteOnline: "Abonnement en ligne · mises à jour incluses",
    footnote:
      "Version Desktop : une licence annuelle qui fonctionne hors-ligne.",
    periodPerYear: "/ an",
    period3Years: "/ 3 ans",
    periodTrial: "essai accompagné",
    free: "Démo",
    onQuote: "Sur devis",
    trialNote: "Accompagnement par notre équipe · sans remboursement",
    desktopBackup: "Sauvegarde des données",
    promoBadge: "-80% · Offre de lancement",
    promoOriginalPrice: "1500 DH",
    promoDiscount: "Économisez 1200 DH",
    promoUrgency: "Offre limitée · Places restreintes",
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
        key: "standard",
        name: "Standard",
        description:
          "Tout ce qu'il faut pour gérer votre activité, entièrement équipé.",
        features: [
          "Calculs avancés & automatiques",
          "Facturation, devis & avoirs",
          "Calcul automatique TVA, HT & TTC",
          "Comptabilité & rapports financiers",
          "Gestion de stock (FIFO)",
          "Bons de commande & livraison",
          "Gestion des données clients & fournisseurs",
          "Tableaux de bord & analyses en temps réel",
          "Support inclus",
        ],
        cta: "Choisir Standard",
      },
      {
        key: "custom",
        name: "Sur mesure",
        description:
          "Construisez l'application autour de votre activité—ajoutez les fonctionnalités dont vous avez besoin.",
        features: [
          "Tout le plan Standard, plus :",
          "Adapté à vos processus",
          "Ajoutez les modules & fonctionnalités voulus",
          "Intégrations personnalisées sur demande",
          "Multi-sites & rôles avancés",
          "Accompagnement dédié",
          "Support prioritaire",
        ],
        cta: "Nous contacter",
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
    badge:          "Discutons",
    title:          "Prêt à démarrer avec",
    brand:          "SmartGestion",
    subtitle:       "Une question, une démo ou un devis ? Écrivez-nous directement sur WhatsApp. Réponse rapide, sans engagement.",
    placeholder:    "votre@email.com",
    button:         "Chatter sur WhatsApp",
    note:           "Réponse rapide pendant les heures ouvrables.",
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
    linkPrivacy:     "Politique de confidentialité",
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
    productAnalysis: {
      title: "Analyse des Ventes Produits",
      subtitle: "Performance des produits (Factures payées/reste à payer & Ventes Passagers)",
      period: "Période",
      category: "Catégorie (Marque)",
      allCategories: "Toutes les catégories",
      product: "Produit",
      optional: "(optionnel)",
      searchProduct: "Rechercher par nom, code-barres, référence...",
      tabOverview: "Vue d'ensemble",
      tabBest: "Meilleurs produits",
      tabSlow: "Ventes lentes",
      tabSmart: "Analyses intelligentes",
      bestSeller: "MEILLEURE VENTE",
      units: "unités",
      totalSold: "TOTAL PRODUITS VENDUS",
      revenueTTC: "CHIFFRE D'AFFAIRES (TTC)",
      totalProfit: "BÉNÉFICE TOTAL",
      differentProducts: "PRODUITS DIFFÉRENTS",
      avgPerSale: "VALEUR MOYENNE / VENTE",
      top10: "TOP 10 PRODUITS (CA TTC)",
      salesBreakdown: "RÉPARTITION DES VENTES",
    },
    salesEvolution: {
      title: "ÉVOLUTION DES VENTES",
    },
    productFilter: {
      title: "Filtre Produit",
      subtitle: "Historique des ventes par produit (Factures & Ventes Passagers)",
      qtySold: "QUANTITÉ VENDUE",
      totalAmount: "MONTANT TOTAL",
      salesCount: "NOMBRE DE VENTES",
      avgPrice: "PRIX MOYEN",
      differentProducts: "PRODUITS DIFFÉRENTS",
      searchResults: "Rechercher dans les résultats...",
      colDate: "Date de vente",
      colProduct: "Produit",
      colBarcode: "Code-barres",
      colQty: "Quantité",
      colUnitPrice: "Prix unitaire",
      colTotal: "Montant total",
      colSource: "Source",
      colDocument: "N° Document",
      colClient: "Client",
      sourcePassing: "Vente Passager",
      sourceInvoice: "Facture",
      showing: "Affichage de 1 à 3 sur 3 résultats",
      print: "Imprimer",
    },
    sidebar: {
      sectionDashboard: "TABLEAU DE BORD",
      workspace: "Espace de Travail",
      dashboard: "Tableau de Bord",
      reports: "Rapports",
      sectionSales: "VENTES",
      invoices: "Factures",
      quotes: "Devis",
      passingSales: "Ventes Passagers",
      creditNotes: "Avoirs",
      deliveryNotes: "Bons de Livraison",
      sectionPurchases: "ACHATS",
      purchaseOrders: "Bons de Commande",
      discounts: "Remises",
      expenses: "Dépenses",
      supplierCreditNotes: "Avoirs Fournisseur",
      sectionContacts: "CONTACTS",
      clients: "Clients",
      suppliers: "Fournisseurs",
      sectionStock: "STOCK",
      products: "Produits",
      sectionPortfolio: "PORTEFEUILLE",
      portfolio: "Portefeuille",
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
    reports: "Reports",
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
    titleHighlight: "for your parapharmacy",
    intro:
      "Every module—counter, batches, labs, VAT—is connected and adapts to the daily reality of your parapharmacy, not the other way around. Built to grow with your store.",
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
          "Enter the tax-incl. price, VAT and discount on your parapharma products. The tax-excl. price is computed instantly. No manual math, no counter errors.",
      },
      margin: {
        title: "Real-time commercial margin",
        description:
          "Revenue, lab purchase cost and credits combined to show your exact net margin, by product and by shelf.",
      },
      vat: {
        title: "Tax summary (VAT)",
        description:
          "Collected, deductible and balance VAT computed automatically on your sales and lab purchases. Ready for your filing.",
      },
      alerts: {
        title: "Stock, batch & expiry alerts",
        description:
          "Be warned before a stockout or expiry: low thresholds, negative stock and batches nearing their date flagged in real time.",
      },
      dashboard: {
        title: "Financial dashboard",
        description:
          "All your key metrics—revenue, net profit, receivables and stock value—brought together in one clear, living view.",
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
      monthlyFlow: "Monthly flow",
    },
  },
  industries: {
    badge: "Parapharmacy solution",
    title1: "The software built for",
    titleHighlight: "your parapharmacy",
    intro:
      "SmartGestion is designed from the ground up for the daily reality of a Moroccan parapharmacy: batch management, expiry tracking, fast sales and VAT-compliant billing.",
    flagshipLabel: "Our flagship solution",
    nicheName: "Parapharmacy",
    nicheTagline: "A dedicated platform, not a generic ERP",
    highlights: [
      {
        title: "Batch & expiry tracking",
        description:
          "FIFO management by batch with automatic low-stock and expiry alerts, so you never sell an expired product again.",
      },
      {
        title: "Sales & VAT billing",
        description:
          "Check out in seconds, issue compliant invoices and calculate VAT automatically on every sale.",
      },
      {
        title: "Purchasing & suppliers",
        description:
          "Purchase orders, restocking and supplier tracking centralized in a single interface.",
      },
      {
        title: "Real-time steering",
        description:
          "Revenue, margins, cash and stock alerts in dirhams, visible at a glance on your dashboard.",
      },
    ],
    stats: [
      { value: "-40%", label: "stock-outs" },
      { value: "2×", label: "faster checkout" },
      { value: "100%", label: "Morocco VAT compliant" },
    ],
    cta: "Request a demo",
    showcase: {
      eyebrow: "Available today",
      title: "A complete platform for your parapharmacy",
      description:
        "SmartGestion brings sales, stock, suppliers and finances into a single platform — built for parapharmacies and available today on desktop.",
      platform: "Desktop",
      liveBadge: "Available now",
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
      cta: "Request a demo",
      caLabel: "Today's revenue",
      caValue: "12 840 DH",
      caUp: "↑ +8.4%",
      stockLabel: "Stock alerts",
      stockValue: "3 products",
      stockWarn: "⚠ Expiry",
      videoTitle: "See SmartGestion in action",
      videoSubtitle: "Watch our video tutorial to see how the app works.",
    },
  },
  reports: {
    badge: "Business Intelligence",
    title1: "Steer every number with",
    titleHighlight: "advanced reports",
    intro:
      "A complete analytics center built for your parapharmacy: counter sales, products, stock & batches, lab purchases, VAT and customers — filtered by period, product, shelf, laboratory or expiry date, with one-click export.",
    biEyebrow: "Business Intelligence Center",
    biTitle: "7 analytics dashboards, one 360° view",
    biDescription:
      "Switch between analysis modules to understand your business in depth. Each tab combines KPIs, charts and exportable tables.",
    tabs: [
      {
        key: "sales",
        label: "Sales",
        title: "Sales analysis",
        description:
          "Revenue, margins, VAT collected and sales trends, with a product-by-product breakdown and your best sellers.",
        kpis: [
          { label: "Revenue (incl.)", value: "400.00 DH" },
          { label: "VAT collected", value: "66.67 DH" },
          { label: "Margin", value: "7.0%" },
        ],
      },
      {
        key: "products",
        label: "Products",
        title: "Product analytics",
        description:
          "Turnover, top revenue, top profit, fast- and slow-moving products — to optimize your assortment.",
        kpis: [
          { label: "Purchased", value: "20" },
          { label: "Sold", value: "4" },
          { label: "Stock value", value: "1,395 DH" },
        ],
      },
      {
        key: "inventory",
        label: "Inventory",
        title: "Stock valuation",
        description:
          "Purchase value, selling value, expected profit, stock movements, stock-outs and expiry alerts.",
        kpis: [
          { label: "Purchase value", value: "1,395 DH" },
          { label: "Selling value", value: "1,500 DH" },
          { label: "Expected profit", value: "105 DH" },
        ],
      },
      {
        key: "purchases",
        label: "Purchases",
        title: "Purchase analysis",
        description:
          "Total purchases, trend, cost and purchases by supplier — to negotiate and buy at the best price.",
        kpis: [
          { label: "Total purchases", value: "1,860 DH" },
          { label: "Orders", value: "1" },
          { label: "Suppliers", value: "1" },
        ],
      },
      {
        key: "finance",
        label: "Finance",
        title: "Profit & loss",
        description:
          "Revenue, cost of goods sold, gross profit, operating expenses and net profit, with expense distribution.",
        kpis: [
          { label: "Gross profit", value: "28 DH" },
          { label: "Expenses", value: "1,500 DH" },
          { label: "Net profit", value: "-1,100 DH" },
        ],
      },
      {
        key: "customers",
        label: "Customers",
        title: "Customer analytics",
        description:
          "Top customers, outstanding balances, loyalty rate, returning customers and inactive customers at 30/60/90 days.",
        kpis: [
          { label: "Paid", value: "300 DH" },
          { label: "Loyalty", value: "100%" },
          { label: "Returning", value: "1" },
        ],
      },
      {
        key: "performance",
        label: "Performance",
        title: "Period comparison",
        description:
          "Current vs previous period, revenue/profit/customer growth, per-product profitability and alerts.",
        kpis: [
          { label: "Revenue growth", value: "+100%" },
          { label: "Customer growth", value: "+100%" },
          { label: "Margin", value: "7%" },
        ],
      },
    ],
    sales: {
      kpis: [
        { label: "Revenue (incl.)", value: "400.00 DH" },
        { label: "Revenue (excl.)", value: "333.33 DH" },
        { label: "VAT collected", value: "66.67 DH" },
        { label: "Total sales", value: "3" },
        { label: "Avg. invoice", value: "133.33 DH" },
        { label: "Profit", value: "28.00 DH", accent: "up" },
        { label: "Margin %", value: "7.0%", accent: "up" },
      ],
      evolutionTitle: "Revenue evolution",
      trendTitle: "Sales trend",
      productTableTitle: "Sales by product",
      productCols: { product: "Product", qty: "Qty", revenue: "Revenue", margin: "Margin %", stock: "Stock" },
      products: [
        { name: "Sunscreen SPF50", qty: "4", revenue: "400.00 DH", margin: "7.0%", stock: "15", bar: 100 },
        { name: "Eucerin cream", qty: "3", revenue: "285.00 DH", margin: "12.5%", stock: "22", bar: 71 },
        { name: "Vitamin C serum", qty: "2", revenue: "240.00 DH", margin: "18.0%", stock: "8", bar: 60 },
        { name: "Cleansing gel", qty: "2", revenue: "120.00 DH", margin: "9.4%", stock: "31", bar: 30 },
      ],
      topTitle: "Best sellers",
      lowTitle: "Lowest sales",
      categoryTitle: "Sales by category",
      categories: [
        { name: "Sun care", percent: "46%", value: "400 DH", color: "#3FB8C4", slice: 46 },
        { name: "Face care", percent: "34%", value: "285 DH", color: "#1D6FD6", slice: 34 },
        { name: "Hygiene", percent: "20%", value: "120 DH", color: "#7C9CF0", slice: 20 },
      ],
      clientTableTitle: "Sales by customer",
      clientCols: { client: "Customer", orders: "Orders", revenue: "Revenue", basket: "Avg. basket", last: "Last order" },
      clients: [
        { name: "Ahmed Benani", orders: "2", revenue: "300.00 DH", basket: "150.00 DH", last: "07/22/2026" },
        { name: "Sofia Alami", orders: "1", revenue: "240.00 DH", basket: "240.00 DH", last: "07/21/2026" },
        { name: "Karim Idrissi", orders: "1", revenue: "120.00 DH", basket: "120.00 DH", last: "07/20/2026" },
      ],
      hourTitle: "Sales by hour",
      dayTitle: "Sales by day of week",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      dayValues: [45, 62, 100, 38, 71, 88, 24],
    },
    products2: {
      tableTitle: "Product analysis",
      cols: {
        product: "Product",
        category: "Category",
        bought: "Qty bought",
        sold: "Qty sold",
        revenue: "Revenue",
        margin: "Margin %",
        stock: "Stock",
      },
      rows: [
        { name: "Sunscreen SPF50", category: "Sun care", bought: "20", sold: "4", revenue: "400.00 DH", margin: "7.0%", stock: "15" },
        { name: "Eucerin cream", category: "Face care", bought: "30", sold: "3", revenue: "285.00 DH", margin: "12.5%", stock: "22" },
        { name: "Vitamin C serum", category: "Face care", bought: "10", sold: "2", revenue: "240.00 DH", margin: "18.0%", stock: "8" },
        { name: "Cleansing gel", category: "Hygiene", bought: "40", sold: "2", revenue: "120.00 DH", margin: "9.4%", stock: "31" },
      ],
      topRevenueTitle: "Top revenue",
      topProfitTitle: "Top profit",
      topQtyTitle: "Top quantity",
      topRevenue: [
        { name: "Sunscreen", bar: 100 },
        { name: "Eucerin cream", bar: 71 },
        { name: "Vit. C serum", bar: 60 },
        { name: "Cleansing gel", bar: 30 },
      ],
      topProfit: [
        { name: "Vit. C serum", bar: 100 },
        { name: "Eucerin cream", bar: 78 },
        { name: "Sunscreen", bar: 52 },
        { name: "Cleansing gel", bar: 34 },
      ],
      topQty: [
        { name: "Sunscreen", bar: 100 },
        { name: "Eucerin cream", bar: 75 },
        { name: "Vit. C serum", bar: 50 },
        { name: "Cleansing gel", bar: 50 },
      ],
      fastTitle: "Fast-moving products",
      slowTitle: "Slow-moving products",
      fast: [
        { name: "Sunscreen", bar: 100 },
        { name: "Eucerin cream", bar: 82 },
        { name: "Vit. C serum", bar: 64 },
      ],
      slow: [
        { name: "Cleansing gel", bar: 90 },
        { name: "Lip balm", bar: 62 },
        { name: "Gentle shampoo", bar: 40 },
      ],
    },
    inventory2: {
      kpis: [
        { label: "Purchase value", value: "1,395.00 DH" },
        { label: "Selling value", value: "1,500.00 DH" },
        { label: "Expected profit", value: "105.00 DH", accent: "up" },
        { label: "Inventory value", value: "1,395.00 DH" },
      ],
      movementsTitle: "Stock movements",
      movementsSubtitle: "Recorded on orders / adjustments",
      movCols: { date: "Date", product: "Product", type: "Type", qty: "Qty", ref: "Reference" },
      movements: [
        { date: "07/22/2026 18:34", product: "Sunscreen SPF50", type: "In", direction: "in", qty: "+20", ref: "PO-2026-0001" },
        { date: "07/22/2026 15:10", product: "Sunscreen SPF50", type: "Out", direction: "out", qty: "-4", ref: "INV-2026-0003" },
        { date: "07/21/2026 11:02", product: "Eucerin cream", type: "In", direction: "in", qty: "+30", ref: "PO-2026-0002" },
        { date: "07/20/2026 16:45", product: "Vitamin C serum", type: "Out", direction: "out", qty: "-2", ref: "INV-2026-0001" },
      ],
      lowTitle: "Low stock",
      lowCols: { product: "Product", stock: "Stock", min: "Min stock", value: "Stock value" },
      low: [
        { name: "Vitamin C serum", stock: "8", min: "10", value: "560.00 DH" },
        { name: "Lip balm", stock: "3", min: "12", value: "90.00 DH" },
      ],
      overTitle: "Overstock",
      overSubtitle: "High stock, low sales",
      over: [
        { name: "Cleansing gel", stock: "31", sold: "2", value: "930.00 DH" },
        { name: "Gentle shampoo", stock: "48", sold: "1", value: "720.00 DH" },
      ],
      unsoldTitle: "Unsold products",
      unsoldSubtitle: "Unsold for 30 / 60 / 90 days",
      unsoldCols: { product: "Product", stock: "Stock", sold: "Qty sold", days: "Days", value: "Stock value" },
      unsold: [
        { name: "Clay mask", stock: "18", sold: "0", days: "34", value: "540.00 DH" },
        { name: "Argan oil", stock: "9", sold: "0", days: "61", value: "810.00 DH" },
        { name: "Hand cream", stock: "24", sold: "0", days: "92", value: "480.00 DH" },
      ],
    },
    purchases2: {
      kpis: [
        { label: "Total purchases", value: "1,860.00 DH" },
        { label: "Avg. purchase", value: "1,860.00 DH" },
        { label: "Purchase cost", value: "1,860.00 DH" },
        { label: "Number of orders", value: "1" },
      ],
      trendTitle: "Purchase trend",
      supplierTitle: "Purchases by supplier",
      supplierCols: { supplier: "Supplier", orders: "Orders", products: "Products", amount: "Amount", avg: "Avg. purchase" },
      suppliers: [
        { name: "Najib Distribution", orders: "1", products: "1", amount: "1,860.00 DH", avg: "1,860.00 DH" },
        { name: "Pharma Nord", orders: "2", products: "5", amount: "1,240.00 DH", avg: "620.00 DH" },
        { name: "CosmoMaroc", orders: "1", products: "3", amount: "780.00 DH", avg: "780.00 DH" },
      ],
      productTitle: "Purchases by product",
      productCols: { product: "Product", qty: "Qty bought", cost: "Avg. cost", supplier: "Supplier", last: "Last purchase" },
      products: [
        { name: "Sunscreen SPF50", qty: "20", cost: "93.00 DH", supplier: "Najib Distribution", last: "07/22/2026" },
        { name: "Eucerin cream", qty: "30", cost: "62.00 DH", supplier: "Pharma Nord", last: "07/21/2026" },
        { name: "Vitamin C serum", qty: "10", cost: "98.00 DH", supplier: "CosmoMaroc", last: "07/20/2026" },
      ],
    },
    finance2: {
      plTitle: "Profit & loss",
      pl: {
        revenue: "Revenue",
        revenueVal: "400.00 DH",
        cogsLabel: "Cost of goods sold",
        cogsVal: "372.00 DH",
        grossLabel: "Gross profit",
        grossVal: "28.00 DH",
        opexLabel: "Operating expenses",
        opexVal: "1,500.00 DH",
        netLabel: "Net profit",
        netVal: "-1,100.00 DH",
        netNegative: true,
      },
      expensesTitle: "Expense report",
      expensesCols: { category: "Category", amount: "Amount", percent: "Percentage" },
      expenses: [
        { name: "Rent", amount: "1,500.00 DH", percent: "62.5%", color: "#3FB8C4", slice: 62.5 },
        { name: "Salaries", amount: "600.00 DH", percent: "25.0%", color: "#1D6FD6", slice: 25 },
        { name: "Electricity", amount: "300.00 DH", percent: "12.5%", color: "#7C9CF0", slice: 12.5 },
      ],
      marginTitle: "Commercial margin",
      marginByProduct: "By product",
      marginByCategory: "By category",
      marginCols: { name: "Name", revenue: "Revenue", cost: "Cost", margin: "Margin", marginPct: "Margin %" },
      marginProducts: [
        { name: "Sunscreen SPF50", revenue: "400.00 DH", cost: "372.00 DH", margin: "28.00 DH", marginPct: "7.0%" },
        { name: "Eucerin cream", revenue: "285.00 DH", cost: "249.00 DH", margin: "36.00 DH", marginPct: "12.5%" },
      ],
      marginCategories: [
        { name: "Sun care", revenue: "400.00 DH", cost: "372.00 DH", margin: "28.00 DH", marginPct: "7.0%" },
        { name: "Face care", revenue: "525.00 DH", cost: "441.00 DH", margin: "84.00 DH", marginPct: "16.0%" },
      ],
      cashTitle: "Cash flow",
      cashKpis: [
        { label: "Inflows", value: "400.00 DH", accent: "up" },
        { label: "Outflows", value: "3,360.00 DH", accent: "down" },
        { label: "Balance", value: "-2,960.00 DH", accent: "down" },
      ],
      vatTitle: "VAT report",
      vatSubtitle: "Ready for tax filing",
      vat: {
        collectedLabel: "VAT collected",
        collectedVal: "66.67 DH",
        deductibleLabel: "Deductible VAT",
        deductibleVal: "560.00 DH",
        balanceLabel: "VAT balance",
        balanceVal: "-493.33 DH",
      },
    },
    customers2: {
      topTitle: "Top customers",
      topCols: { client: "Customer", invoices: "Invoices", revenue: "Revenue", profit: "Profit", avg: "Avg. invoice", due: "Balance due", last: "Last order" },
      top: [
        { name: "Ahmed Benani", invoices: "2", revenue: "300.00 DH", profit: "21.00 DH", avg: "150.00 DH", due: "0.00 DH", last: "07/22/2026" },
        { name: "Sofia Alami", invoices: "1", revenue: "240.00 DH", profit: "43.00 DH", avg: "240.00 DH", due: "120.00 DH", last: "07/21/2026" },
        { name: "Karim Idrissi", invoices: "1", revenue: "120.00 DH", profit: "11.00 DH", avg: "120.00 DH", due: "0.00 DH", last: "07/20/2026" },
      ],
      balanceTitle: "Customer balance",
      balanceKpis: [
        { label: "Paid", value: "300.00 DH", accent: "up" },
        { label: "Outstanding", value: "120.00 DH", accent: "down" },
        { label: "Credit", value: "0.00 DH", accent: "neutral" },
      ],
      loyaltyTitle: "Loyal customers",
      loyaltyKpis: [
        { label: "Returning", value: "1" },
        { label: "One-time", value: "2" },
        { label: "Loyalty rate", value: "100%" },
      ],
      newTitle: "New customers",
      newValues: [30, 55, 42, 70, 60, 88, 100],
      inactiveTitle: "Inactive customers",
      inactiveSubtitle: "No purchase for 30 / 60 / 90 days",
      inactiveCols: { client: "Customer", revenue: "Revenue", last: "Last order", days: "Days" },
      inactive: [
        { name: "Yassine Fahim", revenue: "180.00 DH", last: "06/20/2026", days: "32" },
        { name: "Nadia Cherkaoui", revenue: "450.00 DH", last: "05/18/2026", days: "65" },
        { name: "Omar Tazi", revenue: "90.00 DH", last: "04/14/2026", days: "99" },
      ],
    },
    performance2: {
      compareTitle: "Period comparison",
      compareSubtitle: "Current period vs previous period",
      compare: [
        { label: "Revenue", value: "400.00 DH", prev: "Previous: 0.00 DH", change: "100%", direction: "up" },
        { label: "Profit", value: "-1,100.00 DH", prev: "Previous: 0.00 DH", change: "—", direction: "flat" },
        { label: "Expenses", value: "1,500.00 DH", prev: "Previous: 0.00 DH", change: "100%", direction: "up" },
        { label: "Margin", value: "7%", prev: "Previous: 0%", change: "100%", direction: "up" },
        { label: "Sales", value: "3", prev: "Previous: 0", change: "100%", direction: "up" },
        { label: "Purchases", value: "1,860.00 DH", prev: "Previous: 0.00 DH", change: "100%", direction: "up" },
      ],
      growthTitle: "Growth report",
      growth: [
        { label: "Revenue growth", value: "+100.0%", direction: "up" },
        { label: "Profit growth", value: "—", direction: "flat" },
        { label: "Expense growth", value: "+100.0%", direction: "up" },
        { label: "Customer growth", value: "+100.0%", direction: "up" },
      ],
      profitTitle: "Product profitability",
      profitSubtitle: "Sort by profit, margin, revenue or quantity",
      profitCols: { product: "Product", qty: "Qty sold", revenue: "Revenue", profit: "Profit", margin: "Margin %" },
      profit: [
        { name: "Sunscreen SPF50", qty: "4", revenue: "400.00 DH", profit: "28.00 DH", margin: "7.0%" },
        { name: "Eucerin cream", qty: "3", revenue: "285.00 DH", profit: "36.00 DH", margin: "12.5%" },
        { name: "Vitamin C serum", qty: "2", revenue: "240.00 DH", profit: "43.00 DH", margin: "18.0%" },
      ],
      alertsTitle: "Alerts",
      alerts: [
        { text: "Negative net profit: expenses exceed gross margin.", level: "warning" },
        { text: "Deductible VAT balance in your favor: -493.33 DH.", level: "info" },
        { text: "Revenue up 100% vs the previous period.", level: "success" },
      ],
    },
    exportNote: "Export or print any table in one click",
    exportFormats: ["CSV", "Excel", "PDF", "Print"],
    modulesTitle: "And much more",
    modulesSubtitle:
      "SmartGestion covers your entire parapharmacy management cycle, from quote to balance sheet.",
    modules: [
      { name: "Counter sales", description: "Fast point-of-sale checkout with barcode scanning." },
      { name: "Quotes & invoices", description: "Quotes, invoices and one-click conversion, VAT compliant." },
      { name: "Delivery notes", description: "Track every delivery and its reception." },
      { name: "Client & supplier credit notes", description: "Handle returns and credits on both sides." },
      { name: "Purchase orders & buying", description: "Supplier orders and restocking." },
      { name: "Discounts", description: "Discounts defined on purchase orders, tracked automatically." },
      { name: "Expenses", description: "Record and categorize all your operating costs." },
      { name: "Document portfolio", description: "Documents, folders and notes (cheques, contracts…) centralized." },
      { name: "Multi-warehouse", description: "Manage stock across several warehouses." },
    ],
    cta: "Request a demo",
  },
  modules: {
    badge: "Solutions",
    title1: "Solutions built",
    titleHighlight: "for your industry",
    intro:
      "We design tailored management solutions, industry by industry. Here is our first: a complete solution for pharmacies and parapharmacies.",
    pharmacy: {
      eyebrow: "Our flagship solution",
      title: "A complete solution for your parapharmacy",
      description:
        "Manage sales, stock, suppliers and finances from a single platform—built for the daily reality of a Moroccan parapharmacy. Available on desktop.",
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
    whyTitle1: "The intelligent ERP",
    whyTitleHighlight: "built",
    whyTitle2: "for your parapharmacy",
    whyBody:
      "SmartGestion ParaPharmacie brings counter sales, inventory, batches & expiry dates, lab purchasing, clients and finances together in one fast, clear platform—built for the daily reality of a parapharmacy, so you focus on your patients, not your software.",
    whyCta: "Discover our solutions",
    points: [
      {
        title: "All-in-one for parapharmacies",
        description:
          "Counter, inventory, batches, labs and checkout in one platform—no more scattered tools.",
      },
      {
        title: "Built for your trade",
        description:
          "Batch and expiry tracking, product records by INN and brand, and stockout alerts tailored to your shelves.",
      },
      {
        title: "Fast at the counter",
        description:
          "Barcode selling, smooth checkout and setup in minutes with guidance from our team.",
      },
      {
        title: "Compliant & secure",
        description:
          "Batch traceability, encryption, backups and reporting compliant with pharmaceutical regulations.",
      },
    ],
    valuePanelTitle: "One platform, your entire parapharmacy",
    valuePanelSubtitle: "Real, measurable results for your store",
    valueStats: [
      { value: "+30%", label: "time saved at the counter and on management" },
      { value: "−40%", label: "less loss from expired products and stockouts" },
      { value: "100%", label: "of your batches traced and data secured" },
      { value: "24/7", label: "real-time access to your stock and sales" },
    ],
    valueModulesTitle: "Everything connected in one flow",
    valueModules: ["Counter", "Stock & Batches", "Labs", "Clients", "Finances"],
    valueFootnote: "A single source of truth, from counter to stock, in real time.",
  },
  pricing: {
    badge: "Pricing",
    title1: "Simple and",
    titleHighlight: "transparent pricing",
    subtitle:
      "Desktop offline version: a yearly license that works offline.",
    modeDesktop: "Desktop (offline)",
    modeOnline: "Online",
    tagNoUpdates: "No updates",
    tagUpdates: "Updates included",
    mostPopular: "Most popular",
    noteDesktop: "Offline license · per year",
    noteOnline: "Online subscription · updates included",
    footnote:
      "Desktop version: a yearly license that works offline.",
    periodPerYear: "/ year",
    period3Years: "/ 3 years",
    periodTrial: "guided trial",
    free: "Demo",
    onQuote: "On quote",
    trialNote: "Guided by our team · no refund",
    desktopBackup: "Data backup",
    promoBadge: "-80% · Launch offer",
    promoOriginalPrice: "1500 DH",
    promoDiscount: "Save 1200 DH",
    promoUrgency: "Limited offer · Few spots left",
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
        key: "standard",
        name: "Standard",
        description: "Everything you need to run your business, fully equipped.",
        features: [
          "Advanced & automatic calculations",
          "Invoicing, quotes & credit notes",
          "Automatic VAT & incl./excl. tax calculation",
          "Accounting & financial reports",
          "Inventory management (FIFO)",
          "Purchase & delivery orders",
          "Clients & suppliers data management",
          "Real-time dashboards & analytics",
          "Support included",
        ],
        cta: "Choose Standard",
      },
      {
        key: "custom",
        name: "Custom",
        description:
          "Build the app around your business—add the features you need.",
        features: [
          "Everything in Standard, plus:",
          "Tailored to your workflows",
          "Add the modules & features you need",
          "Custom integrations on request",
          "Multi-branch & advanced roles",
          "Dedicated onboarding",
          "Priority support",
        ],
        cta: "Contact us",
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
    badge:          "Let's talk",
    title:          "Ready to get started with",
    brand:          "SmartGestion",
    subtitle:       "Got a question, want a demo or a quote? Message us directly on WhatsApp. Fast reply, no commitment.",
    placeholder:    "your@email.com",
    button:         "Chat on WhatsApp",
    note:           "Quick reply during business hours.",
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
    linkPrivacy:     "Privacy policy",
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
    productAnalysis: {
      title: "Product Sales Analysis",
      subtitle: "Product performance (Paid/unpaid invoices & Walk-in sales)",
      period: "Period",
      category: "Category (Brand)",
      allCategories: "All categories",
      product: "Product",
      optional: "(optional)",
      searchProduct: "Search by name, barcode, reference...",
      tabOverview: "Overview",
      tabBest: "Best products",
      tabSlow: "Slow sales",
      tabSmart: "Smart insights",
      bestSeller: "BEST SELLER",
      units: "units",
      totalSold: "TOTAL PRODUCTS SOLD",
      revenueTTC: "REVENUE (incl. tax)",
      totalProfit: "TOTAL PROFIT",
      differentProducts: "DIFFERENT PRODUCTS",
      avgPerSale: "AVERAGE VALUE / SALE",
      top10: "TOP 10 PRODUCTS (REVENUE)",
      salesBreakdown: "SALES BREAKDOWN",
    },
    salesEvolution: {
      title: "SALES EVOLUTION",
    },
    productFilter: {
      title: "Product Filter",
      subtitle: "Sales history by product (Invoices & Walk-in sales)",
      qtySold: "QUANTITY SOLD",
      totalAmount: "TOTAL AMOUNT",
      salesCount: "NUMBER OF SALES",
      avgPrice: "AVERAGE PRICE",
      differentProducts: "DIFFERENT PRODUCTS",
      searchResults: "Search in results...",
      colDate: "Sale date",
      colProduct: "Product",
      colBarcode: "Barcode",
      colQty: "Quantity",
      colUnitPrice: "Unit price",
      colTotal: "Total amount",
      colSource: "Source",
      colDocument: "Document No.",
      colClient: "Client",
      sourcePassing: "Walk-in Sale",
      sourceInvoice: "Invoice",
      showing: "Showing 1 to 3 of 3 results",
      print: "Print",
    },
    sidebar: {
      sectionDashboard: "DASHBOARD",
      workspace: "Workspace",
      dashboard: "Dashboard",
      reports: "Reports",
      sectionSales: "SALES",
      invoices: "Invoices",
      quotes: "Quotes",
      passingSales: "Walk-in Sales",
      creditNotes: "Credit Notes",
      deliveryNotes: "Delivery Notes",
      sectionPurchases: "PURCHASES",
      purchaseOrders: "Purchase Orders",
      discounts: "Discounts",
      expenses: "Expenses",
      supplierCreditNotes: "Supplier Credit Notes",
      sectionContacts: "CONTACTS",
      clients: "Clients",
      suppliers: "Suppliers",
      sectionStock: "STOCK",
      products: "Products",
      sectionPortfolio: "PORTFOLIO",
      portfolio: "Portfolio",
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
    reports: "التقارير",
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
    titleHighlight: "للبارافارماسي ديالك",
    intro:
      "كل وحدة—الكونتوار، اللوطات، المختبرات، الـTVA—مربوطة وكتتأقلم مع الخدمة اليومية ديال البارافارماسي، ماشي العكس. مصممة باش تكبر مع المحل ديالك.",
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
          "دخّل الثمن TTC، الـ TVA والتخفيض على منتجات البارافارما—الثمن HT كيتحسب فالحين. بلا حساب يدوي، بلا أخطاء فالكونتوار.",
      },
      margin: {
        title: "الهامش التجاري فالوقت الحقيقي",
        description:
          "رقم المعاملات، تكلفة الشراء من المختبر والأفوارات مجموعين باش يبان ليك الهامش الصافي بالضبط، حسب المنتج وحسب الرايون.",
      },
      vat: {
        title: "الملخص الجبائي (TVA)",
        description:
          "الـ TVA المحصّلة، القابلة للخصم والرصيد كيتحسبو أوتوماتيكياً على المبيعات وشراء المختبرات—جاهزين للتصريح ديالك.",
      },
      alerts: {
        title: "تنبيهات المخزون واللوطات والصلاحية",
        description:
          "تنبّه قبل ما ينفد المخزون أولا تفوت الصلاحية: العتبات المنخفضة، المخزون السالب واللوطات القريبة من التاريخ كيتشاورو فالوقت الحقيقي.",
      },
      dashboard: {
        title: "لوحة القيادة المالية",
        description:
          "كل المؤشرات المهمة—رقم المعاملات، الربح الصافي، الديون وقيمة المخزون—مجموعة فعرض واضح وحي.",
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
      monthlyFlow: "التدفق الشهري",
    },
  },
  industries: {
    badge: "حل البارافارماسي",
    title1: "البرنامج المصمم",
    titleHighlight: "للبارافارماسي ديالك",
    intro:
      "SmartGestion مصمم من الألف للياء لليومي ديال بارافارماسي مغربية: تدبير اللوطات، تتبّع الصلاحية، مبيعات سريعة وفوترة متوافقة مع TVA.",
    flagshipLabel: "الحل الرئيسي ديالنا",
    nicheName: "بارافارماسي",
    nicheTagline: "منصة مخصصة، ماشي ERP عام",
    highlights: [
      {
        title: "تتبّع اللوطات والصلاحية",
        description:
          "تدبير FIFO حسب اللوط مع تنبيهات أوتوماتيكية للنفاد والصلاحية، باش عمرك ما تبيع منتوج فايت الصلاحية.",
      },
      {
        title: "المبيعات وفوترة TVA",
        description:
          "خلّص فثواني، صيفط فواتير متوافقة وحسب TVA أوتوماتيكياً فكل عملية بيع.",
      },
      {
        title: "الشراء والموردون",
        description:
          "أوامر الشراء وإعادة التموين وتتبّع الموردين مركزية فواجهة وحدة.",
      },
      {
        title: "قيادة فالوقت الحقيقي",
        description:
          "رقم المعاملات، الهوامش، الخزينة وتنبيهات المخزون بالدرهم، بنظرة وحدة على لوحة القيادة ديالك.",
      },
    ],
    stats: [
      { value: "-40%", label: "من نفاد المخزون" },
      { value: "2×", label: "أسرع فالأداء" },
      { value: "100%", label: "متوافق مع TVA المغرب" },
    ],
    cta: "اطلب عرضاً تجريبياً",
    showcase: {
      eyebrow: "متاح دابا",
      title: "منصة كاملة للبارافارماسي ديالك",
      description:
        "SmartGestion كتجمع المبيعات، المخزون، الموردين والمالية فمنصة وحدة — مصممة للبارافارماسي ومتاحة دابا على الحاسوب.",
      platform: "الحاسوب",
      liveBadge: "متاح دابا",
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
      cta: "اطلب عرضاً تجريبياً",
      caLabel: "رقم الأعمال اليوم",
      caValue: "١٢ ٨٤٠ درهم",
      caUp: "↑ +٨٫٤٪",
      stockLabel: "تنبيه المخزون",
      stockValue: "٣ منتجات",
      stockWarn: "⚠ انتهاء الصلاحية",
      videoTitle: "شوف SmartGestion فالخدمة",
      videoSubtitle: "تفرج فالفيديو التعليمي ديالنا باش تشوف كيفاش خدام التطبيق.",
    },
  },
  reports: {
    badge: "Business Intelligence",
    title1: "دبّر كل رقم مع",
    titleHighlight: "تقارير متقدمة",
    intro:
      "مركز تحليل كامل مصمم للبارافارماسي ديالك: البيع فالكونتوار، المنتجات، المخزون واللوطات، شراء المختبرات، الـTVA والزبناء — مفلترة حسب الفترة، المنتج، الرايون، المختبر أو تاريخ الصلاحية، مع تصدير بضغطة وحدة.",
    biEyebrow: "Business Intelligence Center",
    biTitle: "7 لوحات تحليل، رؤية وحدة 360°",
    biDescription:
      "بدّل بين وحدات التحليل باش تفهم النشاط ديالك بعمق. كل تبويب كيجمع KPIs، رسوم بيانية وجداول قابلة للتصدير.",
    tabs: [
      {
        key: "sales",
        label: "المبيعات",
        title: "تحليل المبيعات",
        description:
          "رقم المعاملات، الهوامش، TVA المحصّلة وتطور المبيعات، مع التفصيل منتوج بمنتوج وأحسن مبيعاتك.",
        kpis: [
          { label: "المداخيل", value: "400٫00 درهم" },
          { label: "TVA محصّلة", value: "66٫67 درهم" },
          { label: "الهامش", value: "7٫0%" },
        ],
      },
      {
        key: "products",
        label: "المنتجات",
        title: "تحليل المنتجات",
        description:
          "الدوران، أعلى المداخيل، أعلى الأرباح، المنتجات سريعة وبطيئة الدوران — باش تحسّن التشكيلة ديالك.",
        kpis: [
          { label: "المشتراة", value: "20" },
          { label: "المباعة", value: "4" },
          { label: "قيمة المخزون", value: "1 395 درهم" },
        ],
      },
      {
        key: "inventory",
        label: "المخزون",
        title: "تقييم المخزون",
        description:
          "قيمة الشراء، قيمة البيع، الربح المتوقّع، حركات المخزون، النفاد وتنبيهات الصلاحية.",
        kpis: [
          { label: "قيمة الشراء", value: "1 395 درهم" },
          { label: "قيمة البيع", value: "1 500 درهم" },
          { label: "الربح المتوقّع", value: "105 درهم" },
        ],
      },
      {
        key: "purchases",
        label: "الشراء",
        title: "تحليل الشراء",
        description:
          "مجموع المشتريات، التوجّه، التكلفة والمشتريات حسب المورد — باش تفاوض وتشري بأحسن ثمن.",
        kpis: [
          { label: "مجموع الشراء", value: "1 860 درهم" },
          { label: "الطلبات", value: "1" },
          { label: "الموردون", value: "1" },
        ],
      },
      {
        key: "finance",
        label: "المالية",
        title: "حساب النتيجة",
        description:
          "رقم المعاملات، تكلفة البضاعة، الهامش الإجمالي، المصاريف والنتيجة الصافية، مع توزيع المصاريف.",
        kpis: [
          { label: "الهامش الإجمالي", value: "28 درهم" },
          { label: "المصاريف", value: "1 500 درهم" },
          { label: "النتيجة الصافية", value: "-1 100 درهم" },
        ],
      },
      {
        key: "customers",
        label: "العملاء",
        title: "تحليل العملاء",
        description:
          "أفضل العملاء، المستحقات، نسبة الوفاء، العملاء المتكررون والعملاء غير النشطين فـ 30/60/90 يوم.",
        kpis: [
          { label: "المحصّل", value: "300 درهم" },
          { label: "الوفاء", value: "100%" },
          { label: "متكررون", value: "1" },
        ],
      },
      {
        key: "performance",
        label: "الأداء",
        title: "مقارنة الفترات",
        description:
          "الفترة الحالية مقابل السابقة، نمو رقم المعاملات والربح والعملاء، الربحية حسب المنتج والتنبيهات.",
        kpis: [
          { label: "نمو المداخيل", value: "+100%" },
          { label: "نمو العملاء", value: "+100%" },
          { label: "الهامش", value: "7%" },
        ],
      },
    ],
    sales: {
      kpis: [
        { label: "المداخيل (بالضريبة)", value: "400٫00 درهم" },
        { label: "المداخيل (بلا ضريبة)", value: "333٫33 درهم" },
        { label: "TVA محصّلة", value: "66٫67 درهم" },
        { label: "مجموع المبيعات", value: "3" },
        { label: "متوسط الفاتورة", value: "133٫33 درهم" },
        { label: "الربح", value: "28٫00 درهم", accent: "up" },
        { label: "الهامش %", value: "7٫0%", accent: "up" },
      ],
      evolutionTitle: "تطور المداخيل",
      trendTitle: "توجّه المبيعات",
      productTableTitle: "المبيعات حسب المنتج",
      productCols: { product: "المنتج", qty: "الكمية", revenue: "المداخيل", margin: "الهامش %", stock: "المخزون" },
      products: [
        { name: "واقي شمس SPF50", qty: "4", revenue: "400٫00 درهم", margin: "7٫0%", stock: "15", bar: 100 },
        { name: "كريم Eucerin", qty: "3", revenue: "285٫00 درهم", margin: "12٫5%", stock: "22", bar: 71 },
        { name: "سيروم فيتامين C", qty: "2", revenue: "240٫00 درهم", margin: "18٫0%", stock: "8", bar: 60 },
        { name: "جل التنظيف", qty: "2", revenue: "120٫00 درهم", margin: "9٫4%", stock: "31", bar: 30 },
      ],
      topTitle: "أحسن المبيعات",
      lowTitle: "أضعف المبيعات",
      categoryTitle: "المبيعات حسب الصنف",
      categories: [
        { name: "واقيات الشمس", percent: "46%", value: "400 درهم", color: "#3FB8C4", slice: 46 },
        { name: "عناية بالوجه", percent: "34%", value: "285 درهم", color: "#1D6FD6", slice: 34 },
        { name: "النظافة", percent: "20%", value: "120 درهم", color: "#7C9CF0", slice: 20 },
      ],
      clientTableTitle: "المبيعات حسب العميل",
      clientCols: { client: "العميل", orders: "المشتريات", revenue: "المداخيل", basket: "متوسط السلة", last: "آخر شراء" },
      clients: [
        { name: "أحمد بناني", orders: "2", revenue: "300٫00 درهم", basket: "150٫00 درهم", last: "22/07/2026" },
        { name: "صوفيا علمي", orders: "1", revenue: "240٫00 درهم", basket: "240٫00 درهم", last: "21/07/2026" },
        { name: "كريم الإدريسي", orders: "1", revenue: "120٫00 درهم", basket: "120٫00 درهم", last: "20/07/2026" },
      ],
      hourTitle: "المبيعات حسب الساعة",
      dayTitle: "المبيعات حسب يوم الأسبوع",
      days: ["الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"],
      dayValues: [45, 62, 100, 38, 71, 88, 24],
    },
    products2: {
      tableTitle: "تحليل المنتجات",
      cols: {
        product: "المنتج",
        category: "الصنف",
        bought: "الكمية المشتراة",
        sold: "الكمية المباعة",
        revenue: "المداخيل",
        margin: "الهامش %",
        stock: "المخزون",
      },
      rows: [
        { name: "واقي شمس SPF50", category: "واقيات الشمس", bought: "20", sold: "4", revenue: "400٫00 درهم", margin: "7٫0%", stock: "15" },
        { name: "كريم Eucerin", category: "عناية بالوجه", bought: "30", sold: "3", revenue: "285٫00 درهم", margin: "12٫5%", stock: "22" },
        { name: "سيروم فيتامين C", category: "عناية بالوجه", bought: "10", sold: "2", revenue: "240٫00 درهم", margin: "18٫0%", stock: "8" },
        { name: "جل التنظيف", category: "النظافة", bought: "40", sold: "2", revenue: "120٫00 درهم", margin: "9٫4%", stock: "31" },
      ],
      topRevenueTitle: "أعلى مداخيل",
      topProfitTitle: "أعلى ربح",
      topQtyTitle: "أعلى كمية",
      topRevenue: [
        { name: "واقي الشمس", bar: 100 },
        { name: "كريم Eucerin", bar: 71 },
        { name: "سيروم فيتامين C", bar: 60 },
        { name: "جل التنظيف", bar: 30 },
      ],
      topProfit: [
        { name: "سيروم فيتامين C", bar: 100 },
        { name: "كريم Eucerin", bar: 78 },
        { name: "واقي الشمس", bar: 52 },
        { name: "جل التنظيف", bar: 34 },
      ],
      topQty: [
        { name: "واقي الشمس", bar: 100 },
        { name: "كريم Eucerin", bar: 75 },
        { name: "سيروم فيتامين C", bar: 50 },
        { name: "جل التنظيف", bar: 50 },
      ],
      fastTitle: "منتجات سريعة الدوران",
      slowTitle: "منتجات بطيئة الدوران",
      fast: [
        { name: "واقي الشمس", bar: 100 },
        { name: "كريم Eucerin", bar: 82 },
        { name: "سيروم فيتامين C", bar: 64 },
      ],
      slow: [
        { name: "جل التنظيف", bar: 90 },
        { name: "بلسم الشفاه", bar: 62 },
        { name: "شامبو لطيف", bar: 40 },
      ],
    },
    inventory2: {
      kpis: [
        { label: "قيمة الشراء", value: "1 395٫00 درهم" },
        { label: "قيمة البيع", value: "1 500٫00 درهم" },
        { label: "الربح المتوقّع", value: "105٫00 درهم", accent: "up" },
        { label: "قيمة الجرد", value: "1 395٫00 درهم" },
      ],
      movementsTitle: "حركات المخزون",
      movementsSubtitle: "مسجّلة عند الطلبات / التعديلات",
      movCols: { date: "التاريخ", product: "المنتج", type: "النوع", qty: "الكمية", ref: "المرجع" },
      movements: [
        { date: "22/07/2026 18:34", product: "واقي شمس SPF50", type: "دخول", direction: "in", qty: "+20", ref: "BC-2026-0001" },
        { date: "22/07/2026 15:10", product: "واقي شمس SPF50", type: "خروج", direction: "out", qty: "-4", ref: "FAC-2026-0003" },
        { date: "21/07/2026 11:02", product: "كريم Eucerin", type: "دخول", direction: "in", qty: "+30", ref: "BC-2026-0002" },
        { date: "20/07/2026 16:45", product: "سيروم فيتامين C", type: "خروج", direction: "out", qty: "-2", ref: "FAC-2026-0001" },
      ],
      lowTitle: "مخزون منخفض",
      lowCols: { product: "المنتج", stock: "المخزون", min: "الحد الأدنى", value: "قيمة المخزون" },
      low: [
        { name: "سيروم فيتامين C", stock: "8", min: "10", value: "560٫00 درهم" },
        { name: "بلسم الشفاه", stock: "3", min: "12", value: "90٫00 درهم" },
      ],
      overTitle: "مخزون زائد",
      overSubtitle: "مخزون مرتفع، مبيعات ضعيفة",
      over: [
        { name: "جل التنظيف", stock: "31", sold: "2", value: "930٫00 درهم" },
        { name: "شامبو لطيف", stock: "48", sold: "1", value: "720٫00 درهم" },
      ],
      unsoldTitle: "منتجات غير مباعة",
      unsoldSubtitle: "غير مباعة منذ 30 / 60 / 90 يوم",
      unsoldCols: { product: "المنتج", stock: "المخزون", sold: "الكمية المباعة", days: "الأيام", value: "قيمة المخزون" },
      unsold: [
        { name: "قناع الطين", stock: "18", sold: "0", days: "34", value: "540٫00 درهم" },
        { name: "زيت الأركان", stock: "9", sold: "0", days: "61", value: "810٫00 درهم" },
        { name: "كريم اليدين", stock: "24", sold: "0", days: "92", value: "480٫00 درهم" },
      ],
    },
    purchases2: {
      kpis: [
        { label: "مجموع المشتريات", value: "1 860٫00 درهم" },
        { label: "متوسط الشراء", value: "1 860٫00 درهم" },
        { label: "تكلفة الشراء", value: "1 860٫00 درهم" },
        { label: "عدد الطلبات", value: "1" },
      ],
      trendTitle: "توجّه المشتريات",
      supplierTitle: "المشتريات حسب المورد",
      supplierCols: { supplier: "المورد", orders: "الطلبات", products: "المنتجات", amount: "المبلغ", avg: "متوسط الشراء" },
      suppliers: [
        { name: "نجيب للتوزيع", orders: "1", products: "1", amount: "1 860٫00 درهم", avg: "1 860٫00 درهم" },
        { name: "فارما نور", orders: "2", products: "5", amount: "1 240٫00 درهم", avg: "620٫00 درهم" },
        { name: "كوزمو المغرب", orders: "1", products: "3", amount: "780٫00 درهم", avg: "780٫00 درهم" },
      ],
      productTitle: "المشتريات حسب المنتج",
      productCols: { product: "المنتج", qty: "الكمية المشتراة", cost: "متوسط التكلفة", supplier: "المورد", last: "آخر شراء" },
      products: [
        { name: "واقي شمس SPF50", qty: "20", cost: "93٫00 درهم", supplier: "نجيب للتوزيع", last: "22/07/2026" },
        { name: "كريم Eucerin", qty: "30", cost: "62٫00 درهم", supplier: "فارما نور", last: "21/07/2026" },
        { name: "سيروم فيتامين C", qty: "10", cost: "98٫00 درهم", supplier: "كوزمو المغرب", last: "20/07/2026" },
      ],
    },
    finance2: {
      plTitle: "حساب النتيجة",
      pl: {
        revenue: "رقم المعاملات",
        revenueVal: "400٫00 درهم",
        cogsLabel: "تكلفة البضاعة المباعة",
        cogsVal: "372٫00 درهم",
        grossLabel: "الهامش الإجمالي",
        grossVal: "28٫00 درهم",
        opexLabel: "مصاريف التشغيل",
        opexVal: "1 500٫00 درهم",
        netLabel: "النتيجة الصافية",
        netVal: "-1 100٫00 درهم",
        netNegative: true,
      },
      expensesTitle: "تقرير المصاريف",
      expensesCols: { category: "الصنف", amount: "المبلغ", percent: "النسبة" },
      expenses: [
        { name: "الكراء", amount: "1 500٫00 درهم", percent: "62٫5%", color: "#3FB8C4", slice: 62.5 },
        { name: "الأجور", amount: "600٫00 درهم", percent: "25٫0%", color: "#1D6FD6", slice: 25 },
        { name: "الكهرباء", amount: "300٫00 درهم", percent: "12٫5%", color: "#7C9CF0", slice: 12.5 },
      ],
      marginTitle: "الهامش التجاري",
      marginByProduct: "حسب المنتج",
      marginByCategory: "حسب الصنف",
      marginCols: { name: "الاسم", revenue: "المداخيل", cost: "التكلفة", margin: "الهامش", marginPct: "الهامش %" },
      marginProducts: [
        { name: "واقي شمس SPF50", revenue: "400٫00 درهم", cost: "372٫00 درهم", margin: "28٫00 درهم", marginPct: "7٫0%" },
        { name: "كريم Eucerin", revenue: "285٫00 درهم", cost: "249٫00 درهم", margin: "36٫00 درهم", marginPct: "12٫5%" },
      ],
      marginCategories: [
        { name: "واقيات الشمس", revenue: "400٫00 درهم", cost: "372٫00 درهم", margin: "28٫00 درهم", marginPct: "7٫0%" },
        { name: "عناية بالوجه", revenue: "525٫00 درهم", cost: "441٫00 درهم", margin: "84٫00 درهم", marginPct: "16٫0%" },
      ],
      cashTitle: "التدفق النقدي",
      cashKpis: [
        { label: "المداخيل", value: "400٫00 درهم", accent: "up" },
        { label: "المصاريف", value: "3 360٫00 درهم", accent: "down" },
        { label: "الرصيد", value: "-2 960٫00 درهم", accent: "down" },
      ],
      vatTitle: "تقرير TVA",
      vatSubtitle: "جاهز للتصريح الضريبي",
      vat: {
        collectedLabel: "TVA محصّلة",
        collectedVal: "66٫67 درهم",
        deductibleLabel: "TVA قابلة للخصم",
        deductibleVal: "560٫00 درهم",
        balanceLabel: "رصيد TVA",
        balanceVal: "-493٫33 درهم",
      },
    },
    customers2: {
      topTitle: "أفضل العملاء",
      topCols: { client: "العميل", invoices: "الفواتير", revenue: "المداخيل", profit: "الربح", avg: "متوسط الفاتورة", due: "الرصيد المستحق", last: "آخر شراء" },
      top: [
        { name: "أحمد بناني", invoices: "2", revenue: "300٫00 درهم", profit: "21٫00 درهم", avg: "150٫00 درهم", due: "0٫00 درهم", last: "22/07/2026" },
        { name: "صوفيا علمي", invoices: "1", revenue: "240٫00 درهم", profit: "43٫00 درهم", avg: "240٫00 درهم", due: "120٫00 درهم", last: "21/07/2026" },
        { name: "كريم الإدريسي", invoices: "1", revenue: "120٫00 درهم", profit: "11٫00 درهم", avg: "120٫00 درهم", due: "0٫00 درهم", last: "20/07/2026" },
      ],
      balanceTitle: "رصيد العملاء",
      balanceKpis: [
        { label: "المدفوع", value: "300٫00 درهم", accent: "up" },
        { label: "المتبقّي", value: "120٫00 درهم", accent: "down" },
        { label: "الائتمان", value: "0٫00 درهم", accent: "neutral" },
      ],
      loyaltyTitle: "العملاء الأوفياء",
      loyaltyKpis: [
        { label: "متكررون", value: "1" },
        { label: "مرة واحدة", value: "2" },
        { label: "نسبة الوفاء", value: "100%" },
      ],
      newTitle: "عملاء جدد",
      newValues: [30, 55, 42, 70, 60, 88, 100],
      inactiveTitle: "عملاء غير نشطين",
      inactiveSubtitle: "بلا شراء منذ 30 / 60 / 90 يوم",
      inactiveCols: { client: "العميل", revenue: "المداخيل", last: "آخر شراء", days: "الأيام" },
      inactive: [
        { name: "ياسين فهيم", revenue: "180٫00 درهم", last: "20/06/2026", days: "32" },
        { name: "نادية الشرقاوي", revenue: "450٫00 درهم", last: "18/05/2026", days: "65" },
        { name: "عمر التازي", revenue: "90٫00 درهم", last: "14/04/2026", days: "99" },
      ],
    },
    performance2: {
      compareTitle: "مقارنة الفترات",
      compareSubtitle: "الفترة الحالية مقابل الفترة السابقة",
      compare: [
        { label: "رقم المعاملات", value: "400٫00 درهم", prev: "السابق: 0٫00 درهم", change: "100%", direction: "up" },
        { label: "الربح", value: "-1 100٫00 درهم", prev: "السابق: 0٫00 درهم", change: "—", direction: "flat" },
        { label: "المصاريف", value: "1 500٫00 درهم", prev: "السابق: 0٫00 درهم", change: "100%", direction: "up" },
        { label: "الهامش", value: "7%", prev: "السابق: 0%", change: "100%", direction: "up" },
        { label: "المبيعات", value: "3", prev: "السابق: 0", change: "100%", direction: "up" },
        { label: "المشتريات", value: "1 860٫00 درهم", prev: "السابق: 0٫00 درهم", change: "100%", direction: "up" },
      ],
      growthTitle: "تقرير النمو",
      growth: [
        { label: "نمو المداخيل", value: "+100٫0%", direction: "up" },
        { label: "نمو الربح", value: "—", direction: "flat" },
        { label: "نمو المصاريف", value: "+100٫0%", direction: "up" },
        { label: "نمو العملاء", value: "+100٫0%", direction: "up" },
      ],
      profitTitle: "ربحية المنتجات",
      profitSubtitle: "رتّب حسب الربح أو الهامش أو المداخيل أو الكمية",
      profitCols: { product: "المنتج", qty: "الكمية المباعة", revenue: "المداخيل", profit: "الربح", margin: "الهامش %" },
      profit: [
        { name: "واقي شمس SPF50", qty: "4", revenue: "400٫00 درهم", profit: "28٫00 درهم", margin: "7٫0%" },
        { name: "كريم Eucerin", qty: "3", revenue: "285٫00 درهم", profit: "36٫00 درهم", margin: "12٫5%" },
        { name: "سيروم فيتامين C", qty: "2", revenue: "240٫00 درهم", profit: "43٫00 درهم", margin: "18٫0%" },
      ],
      alertsTitle: "التنبيهات",
      alerts: [
        { text: "ربح صافٍ سلبي: المصاريف تتجاوز الهامش الإجمالي.", level: "warning" },
        { text: "رصيد TVA قابل للخصم لصالحك: -493٫33 درهم.", level: "info" },
        { text: "ارتفاع المداخيل بنسبة 100% مقارنة بالفترة السابقة.", level: "success" },
      ],
    },
    exportNote: "صدّر أو اطبع أي جدول بضغطة وحدة",
    exportFormats: ["CSV", "Excel", "PDF", "طباعة"],
    modulesTitle: "وأكثر بكثير",
    modulesSubtitle:
      "SmartGestion كيغطّي دورة التدبير كاملة ديال البارافارماسي ديالك، من الدوفي حتى الحصيلة.",
    modules: [
      { name: "البيع فالكونطوار", description: "أداء سريع فالكونطوار مع قراءة الباركود." },
      { name: "الدوفيات والفواتير", description: "دوفيات، فواتير وتحويل بضغطة وحدة، متوافقة مع TVA." },
      { name: "سندات التسليم", description: "تبّع كل تسليم واستلامه." },
      { name: "إشعارات دائنة للعملاء والموردين", description: "دبّر المرتجعات والإشعارات من الجهتين." },
      { name: "أوامر الشراء والاقتناء", description: "طلبات الموردين وإعادة التموين." },
      { name: "التخفيضات", description: "تخفيضات محددة على أوامر الشراء، متتبّعة أوتوماتيكياً." },
      { name: "المصاريف", description: "سجّل وصنّف جميع مصاريفك." },
      { name: "محفظة الوثائق", description: "وثائق، ملفات وملاحظات (شيكات، عقود…) مركزية." },
      { name: "تعدد المستودعات", description: "دبّر المخزون على عدة مستودعات." },
    ],
    cta: "اطلب عرضاً تجريبياً",
  },
  modules: {
    badge: "الحلول",
    title1: "حلول مصممة",
    titleHighlight: "على قياس مجالك",
    intro:
      "كنصممو حلول تدبير على المقاس، مجال بمجال. ها أول وحدة ديالنا: حل كامل للصيدليات والبارافارماسيات.",
    pharmacy: {
      eyebrow: "الحل الرئيسي ديالنا",
      title: "حل كامل للبارافارماسي ديالك",
      description:
        "سيّر المبيعات، المخزون، الموردين والمالية من منصة وحدة—مصممة لليومي ديال بارافارماسي مغربية. متاحة على الحاسوب.",
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
    whyTitle1: "ERP",
    whyTitleHighlight: "ذكي",
    whyTitle2: "مصمم للبارافارماسي ديالك",
    whyBody:
      "SmartGestion ParaPharmacie كتجمع البيع فالكونتوار والمخزون واللوطات وتواريخ الصلاحية وشراء المختبرات والزبناء والمالية فمنصة وحدة سريعة وواضحة—مصممة للخدمة اليومية ديال البارافارماسي، باش تهتم بمرضاك ماشي بالبرنامج ديالك.",
    whyCta: "اكتشف حلولنا",
    points: [
      {
        title: "كلشي فمنصة وحدة للبارافارماسي",
        description: "الكونتوار، المخزون، اللوطات، المختبرات والصندوق فمنصة وحدة—سالينا مع الأدوات المبعثرة.",
      },
      {
        title: "مصمم لمهنتك",
        description: "تتبع اللوطات وتواريخ الصلاحية، بطائق المنتجات بالـDCI والماركة، وتنبيهات النفاد على حسب الرايون ديالك.",
      },
      {
        title: "ساهل وسريع فالكونتوار",
        description: "البيع بالباركود، صندوق سلس وتهييء فدقائق مع مرافقة من الفريق ديالنا.",
      },
      {
        title: "مطابق وآمن",
        description: "تتبع اللوطات، تشفير، نسخ احتياطي وتقارير مطابقة للتنظيمات الصيدلية.",
      },
    ],
    valuePanelTitle: "منصة وحدة لكامل البارافارماسي ديالك",
    valuePanelSubtitle: "نتائج ملموسة للمحل ديالك",
    valueStats: [
      { value: "+30%", label: "ربح فالوقت فالكونتوار وفالتدبير" },
      { value: "−40%", label: "تقليل الخسائر ديال المنتجات الفايتة والنفاد" },
      { value: "100%", label: "ديال اللوطات متتبعة وبياناتك آمنة" },
      { value: "24/7", label: "ولوج فالوقت الحقيقي للمخزون والمبيعات" },
    ],
    valueModulesTitle: "كلشي مربوط فسير واحد",
    valueModules: ["الكونتوار", "المخزون واللوطات", "المختبرات", "الزبناء", "المالية"],
    valueFootnote: "مصدر واحد للحقيقة، من الكونتوار للمخزون، فالوقت الحقيقي.",
  },
  pricing: {
    badge: "الأثمنة",
    title1: "تسعير",
    titleHighlight: "بسيط وشفّاف",
    subtitle:
      "نسخة Desktop بلا أنترنيت: رخصة سنوية كتخدم بلا أنترنيت.",
    modeDesktop: "Desktop (بلا أنترنيت)",
    modeOnline: "أونلاين",
    tagNoUpdates: "بلا تحديثات",
    tagUpdates: "التحديثات مشمولة",
    mostPopular: "الأكثر شعبية",
    noteDesktop: "رخصة بلا أنترنيت · فالسنة",
    noteOnline: "اشتراك أونلاين · التحديثات مشمولة",
    footnote:
      "نسخة Desktop: رخصة سنوية كتخدم بلا أنترنيت.",
    periodPerYear: "/ سنة",
    period3Years: "/ 3 سنين",
    periodTrial: "تجربة مرافقة",
    free: "ديمو",
    onQuote: "حسب الطلب",
    trialNote: "مرافقة من طرف فريقنا · بلا استرجاع",
    desktopBackup: "نسخة احتياطية للبيانات",
    promoBadge: "-80% · عرض الإطلاق",
    promoOriginalPrice: "1500 درهم",
    promoDiscount: "وفّر 1200 درهم",
    promoUrgency: "عرض محدود · أماكن قليلة متبقية",
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
        key: "standard",
        name: "ستاندارد",
        description: "كلشي اللي خاصك باش تدبّر النشاط ديالك، مجهّزة بالكامل.",
        features: [
          "حسابات متقدمة وأوتوماتيكية",
          "الفوترة، العروض والإشعارات الدائنة",
          "حساب أوتوماتيكي للـ TVA، HT و TTC",
          "المحاسبة والتقارير المالية",
          "تدبير المخزون (FIFO)",
          "وصولات الطلب والتسليم",
          "تدبير معطيات الزبناء والموردين",
          "لوحات القيادة والتحليلات فالوقت الحقيقي",
          "الدعم مشمول",
        ],
        cta: "اختر ستاندارد",
      },
      {
        key: "custom",
        name: "حسب الطلب",
        description:
          "بني التطبيق على قياس نشاطك—زيد الميزات اللي محتاجها.",
        features: [
          "كلشي فالباقة Standard، وزيادة:",
          "متلائم مع طريقة خدمتك",
          "زيد الموديولات والميزات اللي بغيتي",
          "تكاملات مخصصة عند الطلب",
          "تعدد الفروع وأدوار متقدمة",
          "مرافقة مخصصة",
          "دعم ذو أولوية",
        ],
        cta: "تواصل معنا",
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
    badge:          "لنتحدث",
    title:          "جاهز للبدء مع",
    brand:          "SmartGestion",
    subtitle:       "لديك سؤال أو تريد عرضًا توضيحيًا أو عرض سعر؟ راسلنا مباشرة على واتساب. رد سريع وبدون التزام.",
    placeholder:    "بريدك@الإلكتروني.com",
    button:         "تحدث عبر واتساب",
    note:           "رد سريع خلال ساعات العمل.",
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
    linkPrivacy:     "سياسة الخصوصية",
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
    productAnalysis: {
      title: "تحليل مبيعات المنتجات",
      subtitle: "أداء المنتجات (الفواتير المدفوعة/غير المدفوعة ومبيعات الشباك)",
      period: "الفترة",
      category: "الفئة (العلامة التجارية)",
      allCategories: "جميع الفئات",
      product: "المنتج",
      optional: "(اختياري)",
      searchProduct: "البحث بالاسم أو الباركود أو المرجع...",
      tabOverview: "نظرة عامة",
      tabBest: "أفضل المنتجات",
      tabSlow: "المبيعات البطيئة",
      tabSmart: "تحليلات ذكية",
      bestSeller: "الأكثر مبيعًا",
      units: "وحدات",
      totalSold: "إجمالي المنتجات المباعة",
      revenueTTC: "رقم المعاملات (شامل الضريبة)",
      totalProfit: "إجمالي الربح",
      differentProducts: "منتجات مختلفة",
      avgPerSale: "متوسط القيمة / البيع",
      top10: "أفضل 10 منتجات (رقم المعاملات)",
      salesBreakdown: "توزيع المبيعات",
    },
    salesEvolution: {
      title: "تطور المبيعات",
    },
    productFilter: {
      title: "تصفية المنتج",
      subtitle: "سجل المبيعات حسب المنتج (الفواتير ومبيعات الشباك)",
      qtySold: "الكمية المباعة",
      totalAmount: "المبلغ الإجمالي",
      salesCount: "عدد المبيعات",
      avgPrice: "متوسط السعر",
      differentProducts: "منتجات مختلفة",
      searchResults: "البحث في النتائج...",
      colDate: "تاريخ البيع",
      colProduct: "المنتج",
      colBarcode: "الباركود",
      colQty: "الكمية",
      colUnitPrice: "سعر الوحدة",
      colTotal: "المبلغ الإجمالي",
      colSource: "المصدر",
      colDocument: "رقم المستند",
      colClient: "العميل",
      sourcePassing: "بيع شباك",
      sourceInvoice: "فاتورة",
      showing: "عرض 1 إلى 3 من 3 نتائج",
      print: "طباعة",
    },
    sidebar: {
      sectionDashboard: "لوحة التحكم",
      workspace: "مساحة العمل",
      dashboard: "لوحة التحكم",
      reports: "التقارير",
      sectionSales: "المبيعات",
      invoices: "الفواتير",
      quotes: "العروض التجارية",
      passingSales: "مبيعات الشباك",
      creditNotes: "إشعارات الدائن",
      deliveryNotes: "إيصالات التسليم",
      sectionPurchases: "المشتريات",
      purchaseOrders: "أوامر الشراء",
      discounts: "الخصومات",
      expenses: "المصروفات",
      supplierCreditNotes: "إشعارات دائن المورد",
      sectionContacts: "جهات الاتصال",
      clients: "العملاء",
      suppliers: "الموردون",
      sectionStock: "المخزون",
      products: "المنتجات",
      sectionPortfolio: "المحفظة",
      portfolio: "المحفظة",
      sectionSystem: "النظام",
      settings: "الإعدادات",
    },
  },
};

export const dictionaries: Record<Locale, Dictionary> = { fr, en, ar };
