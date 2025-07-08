export interface Product {
  id: string;
  name: string;
  tagline: string;
  audience: string;
  audienceType: 'shelter' | 'parent' | 'feeder' | 'boarding';
  description: string;
  heroImage: string;
  benefits: string[];
  features: string[];
  pricing: {
    startingAt: number;
    period: string;
  };
  cta: {
    primary: string;
    secondary: string;
  };
  color: {
    primary: string;
    accent: string;
    bg: string;
  };
  stats: {
    users: string;
    satisfaction: string;
    timesSaved: string;
  };
}

export const products: Product[] = [
  {
    id: "furcare",
    name: "FurCare",
    tagline: "Complete shelter management for modern animal welfare",
    audience: "Shelter / NGO",
    audienceType: 'shelter',
    description: "Streamline operations, track animal health, and increase adoptions with our comprehensive shelter management platform built for animal welfare organizations.",
    heroImage: "/mockups/furcare-dashboard.jpg",
    benefits: [
      "Reduce administrative tasks by 60% with automated workflows",
      "Increase adoptions by 40% with smart matching algorithms",
      "Track medical records and vaccination schedules seamlessly"
    ],
    features: [
      "Animal intake & profile management",
      "Medical records & vaccination tracking",
      "Adoption management & applications",
      "Volunteer scheduling & coordination",
      "Donation tracking & reporting",
      "Inventory & supply management"
    ],
    pricing: {
      startingAt: 89,
      period: "month"
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See Use Cases"
    },
    color: {
      primary: "bg-blue-600",
      accent: "text-blue-600",
      bg: "bg-blue-50"
    },
    stats: {
      users: "500+ shelters",
      satisfaction: "4.9/5 rating",
      timesSaved: "20+ hrs/week"
    }
  },
  {
    id: "furtag",
    name: "FurTag",
    tagline: "Smart pet identification that brings families together",
    audience: "Pet Parent",
    audienceType: 'parent',
    description: "Advanced pet identification system with GPS tracking, health monitoring, and instant reunion capabilities for responsible pet parents.",
    heroImage: "/mockups/furtag-app.jpg",
    benefits: [
      "GPS tracking with real-time location updates and safe zones",
      "Health monitoring with activity tracking and vet reminders",
      "Instant reunion system with QR codes and community alerts"
    ],
    features: [
      "GPS location tracking & geofencing",
      "Health & activity monitoring",
      "Digital pet passport & records",
      "Community lost pet network",
      "Emergency contact system",
      "Vet appointment reminders"
    ],
    pricing: {
      startingAt: 29,
      period: "month"
    },
    cta: {
      primary: "Protect My Pet",
      secondary: "Learn More"
    },
    color: {
      primary: "bg-pink-600",
      accent: "text-pink-600",
      bg: "bg-pink-50"
    },
    stats: {
      users: "50K+ families",
      satisfaction: "4.8/5 rating",
      timesSaved: "99% reunion rate"
    }
  },
  {
    id: "furtrack",
    name: "FurTrack",
    tagline: "Monitor and care for street animals with precision",
    audience: "Feeder",
    audienceType: 'feeder',
    description: "Track feeding schedules, monitor animal health, and coordinate community care efforts for street animals with our dedicated platform for feeders.",
    heroImage: "/mockups/furtrack-mobile.jpg",
    benefits: [
      "Track feeding schedules and coordinate with other feeders",
      "Monitor animal health and report medical emergencies",
      "Build feeding routes and optimize care efficiency"
    ],
    features: [
      "Feeding schedule management",
      "Animal health tracking",
      "Community feeder coordination",
      "Route optimization",
      "Emergency alert system",
      "TNR (Trap-Neuter-Return) tracking"
    ],
    pricing: {
      startingAt: 19,
      period: "month"
    },
    cta: {
      primary: "Start Tracking",
      secondary: "See Features"
    },
    color: {
      primary: "bg-yellow-600",
      accent: "text-yellow-600", 
      bg: "bg-yellow-50"
    },
    stats: {
      users: "10K+ feeders",
      satisfaction: "4.7/5 rating",
      timesSaved: "5+ hrs/week"
    }
  },
  {
    id: "furboard",
    name: "FurBoard",
    tagline: "Premium boarding management for pet hospitality",
    audience: "Boarding",
    audienceType: 'boarding',
    description: "Complete booking and management system for pet boarding facilities, kennels, and pet hotels with automated scheduling and client communication.",
    heroImage: "/mockups/furboard-booking.jpg",
    benefits: [
      "Automated booking system with real-time availability",
      "Client communication with photo updates and reports",
      "Staff management and facility optimization tools"
    ],
    features: [
      "Online booking & payment system",
      "Kennel & room management",
      "Pet care tracking & reports",
      "Client communication portal",
      "Staff scheduling & tasks",
      "Revenue analytics & reporting"
    ],
    pricing: {
      startingAt: 149,
      period: "month"
    },
    cta: {
      primary: "Book Demo",
      secondary: "View Pricing"
    },
    color: {
      primary: "bg-green-600",
      accent: "text-green-600",
      bg: "bg-green-50"
    },
    stats: {
      users: "200+ facilities",
      satisfaction: "4.9/5 rating",
      timesSaved: "15+ hrs/week"
    }
  }
];

export const getProductByAudience = (audienceType: string) => {
  return products.find(product => product.audienceType === audienceType);
};

export const getProductColors = (audienceType: string) => {
  const colorMap = {
    shelter: 'blue',
    parent: 'pink', 
    feeder: 'yellow',
    boarding: 'green'
  };
  return colorMap[audienceType as keyof typeof colorMap] || 'blue';
}; 