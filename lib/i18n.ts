export const languages = {
  fr: "Français",
  en: "English",
} as const

export type Language = keyof typeof languages

export const translations = {
  fr: {
    // Navigation
    events: "Événements",
    organize: "Organiser",
    about: "À propos",
    dashboard: "Tableau de bord",
    login: "Se connecter",
    register: "S'inscrire",
    logout: "Se déconnecter",

    // Home page
    heroTitle: "Découvrez les meilleurs événements de votre communauté",
    heroSubtitle:
      "Rejoignez CommUnity et connectez-vous avec votre communauté locale à travers des événements authentiques",
    searchPlaceholder: "Rechercher un événement...",
    locationPlaceholder: "Ville ou code postal...",
    search: "Rechercher",
    exploreEvents: "Explorer les événements",
    organizeEvent: "Organiser un événement",

    // Stats
    events_count: "Événements",
    users_count: "Utilisateurs",
    cities_count: "Villes",
    average_rating: "Note moyenne",

    // Featured events
    featuredEvents: "Événements à la une",
    featuredEventsSubtitle: "Découvrez les événements les plus populaires près de chez vous",
    filter: "Filtrer",
    seeAllEvents: "Voir tous les événements",

    // Features
    whyChoose: "Pourquoi choisir CommUnity ?",
    whyChooseSubtitle: "Une plateforme communautaire pour découvrir, organiser et participer aux événements locaux",
    geolocation: "Géolocalisation",
    geolocationDesc: "Trouvez facilement les événements près de chez vous grâce à notre carte interactive",
    community: "Communauté",
    communityDesc: "Rejoignez des groupes de discussion et connectez-vous avec d'autres participants",
    ratings: "Évaluations",
    ratingsDesc: "Consultez les avis et notations pour choisir les meilleurs événements",

    // CTA
    readyToDiscover: "Prêt à découvrir votre prochain événement ?",
    readyToDiscoverSubtitle: "Rejoignez des milliers d'utilisateurs qui font confiance à CommUnity pour leurs sorties",
    createAccount: "Créer un compte",

    // Event card
    free: "Gratuit",
    participants: "participants",
    seeDetails: "Voir détails",

    // Categories
    music: "Musique",
    food: "Gastronomie",
    tech: "Technologie",
    sport: "Sport",
    art: "Art & Culture",
    business: "Business",

    // Common
    loading: "Chargement...",
    error: "Erreur",
    retry: "Réessayer",
    cancel: "Annuler",
    save: "Enregistrer",
    delete: "Supprimer",
    edit: "Modifier",
    share: "Partager",
    favorite: "Favori",

    // Auth
    continueWithGoogle: "Continuer avec Google",
    continueWithApple: "Continuer avec Apple",
    orContinueWith: "Ou continuer avec",
    email: "Email",
    password: "Mot de passe",
    forgotPassword: "Mot de passe oublié ?",
    fullName: "Nom complet",
    signUpWith: "S'inscrire avec",
    createMyAccount: "Créer mon compte",
    byCreatingAccount: "En créant un compte, vous acceptez nos",
    termsOfService: "conditions d'utilisation",
    and: "et notre",
    privacyPolicy: "politique de confidentialité",

    // General
    appName: "CommUnity",
    tagline: "Votre communauté, vos événements",
  },
  en: {
    // Navigation
    events: "Events",
    organize: "Organize",
    about: "About",
    dashboard: "Dashboard",
    login: "Sign In",
    register: "Sign Up",
    logout: "Sign Out",

    // Home page
    heroTitle: "Discover the best events in your community",
    heroSubtitle: "Join CommUnity and connect with your local community through authentic events",
    searchPlaceholder: "Search for an event...",
    locationPlaceholder: "City or postal code...",
    search: "Search",
    exploreEvents: "Explore events",
    organizeEvent: "Organize an event",

    // Stats
    events_count: "Events",
    users_count: "Users",
    cities_count: "Cities",
    average_rating: "Average rating",

    // Featured events
    featuredEvents: "Featured Events",
    featuredEventsSubtitle: "Discover the most popular events near you",
    filter: "Filter",
    seeAllEvents: "See all events",

    // Features
    whyChoose: "Why choose CommUnity?",
    whyChooseSubtitle: "A community platform to discover, organize and participate in local events",
    geolocation: "Geolocation",
    geolocationDesc: "Easily find events near you with our interactive map",
    community: "Community",
    communityDesc: "Join discussion groups and connect with other participants",
    ratings: "Ratings",
    ratingsDesc: "Check reviews and ratings to choose the best events",

    // CTA
    readyToDiscover: "Ready to discover your next event?",
    readyToDiscoverSubtitle: "Join thousands of users who trust CommUnity for their outings",
    createAccount: "Create account",

    // Event card
    free: "Free",
    participants: "participants",
    seeDetails: "See details",

    // Categories
    music: "Music",
    food: "Food",
    tech: "Technology",
    sport: "Sports",
    art: "Art & Culture",
    business: "Business",

    // Common
    loading: "Loading...",
    error: "Error",
    retry: "Retry",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    share: "Share",
    favorite: "Favorite",

    // Auth
    continueWithGoogle: "Continue with Google",
    continueWithApple: "Continue with Apple",
    orContinueWith: "Or continue with",
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot password?",
    fullName: "Full name",
    signUpWith: "Sign up with",
    createMyAccount: "Create my account",
    byCreatingAccount: "By creating an account, you agree to our",
    termsOfService: "terms of service",
    and: "and our",
    privacyPolicy: "privacy policy",

    // General
    appName: "CommUnity",
    tagline: "Your community, your events",
    taglineEn: "Your community, your events",
  },
} as const

export function getTranslation(lang: Language, key: keyof typeof translations.fr): string {
  return translations[lang][key] || translations.fr[key]
}
