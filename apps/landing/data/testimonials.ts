export interface Testimonial {
  id: string;
  name: string;
  title: string;
  organization: string;
  location: string;
  product: string;
  quote: string;
  image: string;
  rating: number;
  impact: {
    metric: string;
    value: string;
    description: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Shelter Director",
    organization: "Happy Paws Animal Rescue",
    location: "San Francisco, CA",
    product: "FurCare",
    quote: "FurCare transformed our operations completely. We've increased adoptions by 45% and cut admin time in half. The automated matching system is incredibly accurate.",
    image: "/testimonials/sarah-chen.jpg",
    rating: 5,
    impact: {
      metric: "Adoption Rate",
      value: "+45%",
      description: "in 6 months"
    }
  },
  {
    id: "2", 
    name: "Mike Rodriguez",
    title: "Pet Parent",
    organization: "Dog Dad of 3",
    location: "Austin, TX",
    product: "FurTag",
    quote: "When Luna went missing, FurTag's community network found her in just 2 hours. The GPS tracking and instant alerts gave me peace of mind I never knew I needed.",
    image: "/testimonials/mike-rodriguez.jpg",
    rating: 5,
    impact: {
      metric: "Reunion Time",
      value: "2 hours",
      description: "average recovery"
    }
  },
  {
    id: "3",
    name: "Priya Sharma",
    title: "Community Feeder",
    organization: "Mumbai Street Dogs Initiative",
    location: "Mumbai, India", 
    product: "FurTrack",
    quote: "FurTrack helped us organize 50+ feeders across the city. We've reduced overlap, improved efficiency, and tracked the health of over 500 street dogs.",
    image: "/testimonials/priya-sharma.jpg",
    rating: 5,
    impact: {
      metric: "Dogs Tracked",
      value: "500+",
      description: "across Mumbai"
    }
  },
  {
    id: "4",
    name: "David Thompson",
    title: "Owner & Manager",
    organization: "Luxury Pet Resort",
    location: "Denver, CO",
    product: "FurBoard",
    quote: "Our booking rates increased 60% after implementing FurBoard. Clients love the photo updates, and our staff efficiency improved dramatically.",
    image: "/testimonials/david-thompson.jpg", 
    rating: 5,
    impact: {
      metric: "Bookings",
      value: "+60%",
      description: "year over year"
    }
  },
  {
    id: "5",
    name: "Dr. Emily Watson",
    title: "Veterinarian",
    organization: "Animal Medical Center",
    location: "Chicago, IL",
    product: "FurCare",
    quote: "The medical tracking in FurCare is phenomenal. We can access complete histories instantly and coordinate care between multiple providers seamlessly.",
    image: "/testimonials/emily-watson.jpg",
    rating: 5,
    impact: {
      metric: "Medical Accuracy", 
      value: "99.2%",
      description: "record keeping"
    }
  },
  {
    id: "6",
    name: "Carlos Mendoza",
    title: "Boarding Facility Owner",
    organization: "Paws & Relax Boarding",
    location: "Phoenix, AZ",
    product: "FurBoard",
    quote: "FurBoard's automation saved us 20 hours per week. The client portal keeps families happy with regular updates, and our revenue increased 40%.",
    image: "/testimonials/carlos-mendoza.jpg",
    rating: 5,
    impact: {
      metric: "Time Saved",
      value: "20 hrs/week",
      description: "admin tasks"
    }
  }
];

export const getTestimonialsByProduct = (productId: string) => {
  return testimonials.filter(testimonial => 
    testimonial.product.toLowerCase() === productId.toLowerCase()
  );
};

export const getFeaturedTestimonials = () => {
  return testimonials.filter(testimonial => 
    ['1', '2', '3', '4'].includes(testimonial.id)
  );
}; 