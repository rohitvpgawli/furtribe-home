import { Variants } from "framer-motion";

// Fade animations
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

export const fadeLeftVariant: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const fadeRightVariant: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// Scale animations
export const scaleUpVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06, // 60ms stagger as specified
      delayChildren: 0.1,
    },
  },
};

// Slide animations
export const slideUpVariant: Variants = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export const slideInFromBottom: Variants = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

// Hero specific animations
export const heroTitleVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4, 
      ease: "easeOut",
      delay: 0.2 
    } 
  },
};

export const heroButtonVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.3, 
      ease: "easeOut",
      delay: 0.4 
    } 
  },
};

// Card hover animations
export const cardHoverVariant = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" }
  },
};

// Button animations
export const buttonHoverVariant = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } },
};

// Counter animation
export const counterVariant: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4,
      ease: "easeOut",
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
};

// ROI Widget animations
export const roiInputVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export const roiResultVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.1 } },
};

// Testimonial slider
export const testimonialSlideVariant: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

// FAQ Accordion
export const accordionVariant: Variants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { 
    height: "auto", 
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

// Paw confetti animation
export const pawConfettiVariant: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0, 
    rotate: 0,
    y: 0 
  },
  show: { 
    opacity: [0, 1, 1, 0], 
    scale: [0, 1.2, 1, 0.8], 
    rotate: [0, 180, 360],
    y: [0, -20, -40, -60],
    transition: { 
      duration: 0.4, 
      ease: "easeOut",
      times: [0, 0.3, 0.7, 1]
    }
  },
};

// Loading spinner
export const spinnerVariant: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Gradient sweep animation for CTA button
export const gradientSweepVariant = {
  initial: { backgroundPosition: "0% 50%" },
  hover: { 
    backgroundPosition: "100% 50%",
    transition: { duration: 0.3, ease: "easeInOut" }
  },
}; 