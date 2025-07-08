"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { heroTitleVariant, heroButtonVariant, staggerContainer } from "@/lib/animations";

interface HeroProps {
  onBookDemo?: () => void;
  onJoinWaitlist?: () => void;
}

export function Hero({ onBookDemo, onJoinWaitlist }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Morning glow over a peaceful animal sanctuary with dogs and cats playing together"
          fill
          priority
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.h1
            variants={heroTitleVariant}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          >
            The Pack Is Getting{" "}
            <span className="bg-gradient-to-r from-brandBlue via-brandPink to-brandYellow bg-clip-text text-transparent">
              an Upgrade
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={heroTitleVariant}
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            One suite, four tools, infinite{" "}
            <span className="italic text-brandYellow">paw-sibilities</span>.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={heroTitleVariant}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            From shelters to pet parents, feeders to boarding facilities — 
            discover the perfect tool for every animal care need.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={heroButtonVariant}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              onClick={onBookDemo}
              className="bg-gradient-to-r from-brandBlue to-brandPink hover:from-brandBlue/90 hover:to-brandPink/90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-brandBlue/25 transform transition-all duration-300"
            >
              Book a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onJoinWaitlist}
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              Join Wait-list
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-brandBlue/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-brandPink/20 rounded-full blur-lg"
        animate={{
          y: [0, 15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-12 h-12 bg-brandYellow/20 rounded-full blur-lg"
        animate={{
          y: [0, -10, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
} 