"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRightIcon, PawPrint, Users, Star, Clock, MapPin, Heart, Calendar, Menu, X, ChevronDown, ArrowRight, Play, Check } from 'lucide-react';
import { products, type Product } from '@/data/products';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { usePostHog } from '@/lib/posthog';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Sticky Header Component
function StickyHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-xl">🐾</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Furtribe</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#story" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">About</a>
            <a href="#products" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Products</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Testimonials</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">FAQ</a>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 py-4"
            >
              <div className="flex flex-col gap-4">
                <a href="#story" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">About</a>
                <a href="#products" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Products</a>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Testimonials</a>
                <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">FAQ</a>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit">
                  Get Started
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

// Hero Section
function HeroSection() {
  const posthog = usePostHog();

  const handleCTA = (ctaType: 'primary' | 'secondary') => {
    posthog?.capture('hero_cta_click', { cta_type: ctaType });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-purple-100/20"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-6">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-1">
              Transforming Animal Care
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Your beautiful
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              animal care toolkit
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From shelter management to pet tracking, boarding to feeding — make your animal care services stand out with our comprehensive platform designed for modern pet care professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => handleCTA('primary')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 font-semibold px-8 py-4 text-lg shadow-xl rounded-xl group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleCTA('secondary')}
              className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 text-lg rounded-xl flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { stat: "10,000+", label: "Animals Reunited" },
              { stat: "500+", label: "Organizations" },
              { stat: "99%", label: "Success Rate" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-gray-900 mb-1">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Furtribe Story Section
function StorySection() {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Built with passion for animal welfare and modern technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Making a Difference, One Pet at a Time
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We started Furtribe with a simple mission: to use technology to save more animal lives and strengthen the bond between pets and their families.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we're proud to serve thousands of organizations and families worldwide, helping reunite lost pets, streamline shelter operations, and create a more connected animal welfare community.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🐾</div>
                <div className="text-2xl font-bold text-gray-900">Mission Driven</div>
                <div className="text-gray-600">Technology for Good</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Product Cards Section with Portal-inspired Design
function ProductCardsSection() {
  const [selectedAudience, setSelectedAudience] = useState<'shelter' | 'parent' | 'feeder' | 'boarding'>('parent');

  const audiences = [
    { id: 'shelter', label: 'Shelter / NGO', color: 'blue', gradient: 'from-blue-500 to-blue-600' },
    { id: 'parent', label: 'Pet Parent', color: 'purple', gradient: 'from-purple-500 to-purple-600' },
    { id: 'feeder', label: 'Feeder', color: 'green', gradient: 'from-green-500 to-green-600' },
    { id: 'boarding', label: 'Boarding', color: 'orange', gradient: 'from-orange-500 to-orange-600' },
  ] as const;

  const selectedColor = audiences.find(a => a.id === selectedAudience)?.gradient || 'from-blue-500 to-purple-600';

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A comprehensive toolkit designed for every aspect of animal care. Select your role to see tailored solutions.
          </p>
          
          {/* Audience Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {audiences.map((audience) => (
              <button
                key={audience.id}
                onClick={() => setSelectedAudience(audience.id)}
                className={cn(
                  "px-6 py-3 rounded-full font-medium transition-all duration-300 border-2",
                  selectedAudience === audience.id
                    ? `bg-gradient-to-r ${audience.gradient} text-white border-transparent shadow-lg`
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-md"
                )}
              >
                {audience.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeUpVariant}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${selectedColor} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <PawPrint className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                  <p className="text-gray-600">{product.audience}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{product.stats.satisfaction}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{product.stats.users}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-gray-900">${product.pricing.startingAt}</span>
                  <span className="text-gray-600">/{product.pricing.period}</span>
                </div>
                
                <Button className={`bg-gradient-to-r ${selectedColor} text-white hover:shadow-lg group-hover:scale-105 transition-all`}>
                  {product.cta.primary}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Shelter Director",
      organization: "Happy Tails Rescue",
      content: "Furtribe has transformed how we manage our shelter operations. We've increased adoptions by 40% and saved countless hours on administrative tasks.",
      avatar: "SC"
    },
    {
      name: "Mike Rodriguez",
      role: "Pet Parent",
      organization: "Dog Owner",
      content: "When my dog Max went missing, FurTag helped us find him within 2 hours. The GPS tracking and community alerts are incredible.",
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      role: "Veterinarian", 
      organization: "City Animal Hospital",
      content: "The health tracking features help me provide better care for my patients. The digital records are comprehensive and easy to access.",
      avatar: "EW"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what animal care professionals are saying about Furtribe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.organization}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does FurTag's GPS tracking work?",
      answer: "FurTag uses advanced GPS technology combined with cellular connectivity to provide real-time location tracking. The device updates every 30 seconds when your pet is moving and includes geofencing alerts."
    },
    {
      question: "Is FurCare suitable for small shelters?",
      answer: "Absolutely! FurCare is designed to scale with organizations of all sizes. We offer flexible pricing plans and our basic tier is perfect for smaller shelters and rescue organizations."
    },
    {
      question: "What's included in the FurBoard booking system?",
      answer: "FurBoard includes online booking, payment processing, kennel management, client communication tools, staff scheduling, and detailed reporting and analytics."
    },
    {
      question: "How do I get started with Furtribe?",
      answer: "Getting started is easy! Sign up for a free trial, choose your product based on your needs, and our onboarding team will help you get set up within 24 hours."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Furtribe
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4 text-lg">{faq.question}</h3>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-gray-500 transition-transform",
                    openIndex === index ? "rotate-180" : ""
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer Section
function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations already making a difference with Furtribe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg px-8 py-4 text-lg rounded-xl">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-xl">
              Contact Sales
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-800 pt-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">🐾</span>
              </div>
              <span className="text-xl font-bold">Furtribe</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transforming animal care with technology. Making a difference, one pet at a time.
            </p>
            <div className="text-sm text-gray-500">
              Built with ❤️ for animal welfare
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FurCare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FurTag</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FurTrack</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FurBoard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Furtribe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Landing Page
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <StickyHeader />
      <HeroSection />
      <StorySection />
      <ProductCardsSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
