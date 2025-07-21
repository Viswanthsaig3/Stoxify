// Unified Animation System for Premium UX
// Consistent timing, easing, and transitions across the entire app

export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
  slowest: 1.2
} as const

export const EASING = {
  // Premium easing curves for smooth, natural motion
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  
  // Custom premium curves
  premium: [0.16, 1, 0.3, 1], // Smooth premium feel
  bouncy: [0.68, -0.55, 0.265, 1.55], // Subtle bounce
  anticipate: [0.175, 0.885, 0.32, 1.275], // Anticipation
  elastic: [0.68, -0.6, 0.32, 1.6] // Elastic feel
} as const

export const STAGGER = {
  children: 0.1,
  cards: 0.15,
  items: 0.05,
  sections: 0.2
} as const

// ===========================================
// ENTRANCE ANIMATIONS - Premium entrance patterns
// ===========================================

export const entranceAnimations = {
  // Fade entrance with scale
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASING.premium,
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  },

  // Slide from bottom with premium easing
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASING.premium,
      type: "spring" as const,
      stiffness: 120,
      damping: 20
    }
  },

  // Slide from left for navigation items
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.premium,
      type: "spring" as const,
      stiffness: 150,
      damping: 20
    }
  },

  // Slide from right
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.premium,
      type: "spring" as const,
      stiffness: 150,
      damping: 20
    }
  },

  // Premium scale entrance for cards
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.premium,
      type: "spring" as const,
      stiffness: 150,
      damping: 25
    }
  },

  // Hero title animation
  heroTitle: {
    initial: { opacity: 0, y: 30, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: {
      duration: ANIMATION_DURATIONS.slower,
      ease: EASING.premium,
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
}

// ===========================================
// HOVER ANIMATIONS - Premium hover states
// ===========================================

export const hoverAnimations = {
  // Gentle lift for cards
  cardHover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.premium,
      type: "spring" as const,
      stiffness: 400,
      damping: 25
    }
  },

  // Button hover with premium feel
  buttonHover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.premium,
      type: "spring" as const,
      stiffness: 400,
      damping: 30
    }
  },

  // Icon rotation
  iconHover: {
    rotate: 360,
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASING.premium
    }
  },

  // Scale for interactive elements
  scaleHover: {
    scale: 1.1,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.premium,
      type: "spring" as const,
      stiffness: 300,
      damping: 20
    }
  },

  // Glow effect for premium elements
  glowHover: {
    boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.premium
    }
  }
}

// ===========================================
// TAP ANIMATIONS - Premium tap feedback
// ===========================================

export const tapAnimations = {
  scale: {
    scale: 0.95,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.premium
    }
  },

  gentle: {
    scale: 0.98,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.premium
    }
  }
}

// ===========================================
// CONTAINER ANIMATIONS - For staggered children
// ===========================================

export const containerAnimations = {
  // Standard container with stagger
  staggerContainer: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: STAGGER.children,
        delayChildren: 0.1
      }
    }
  },

  // Premium staggered cards
  cardContainer: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: STAGGER.cards,
        delayChildren: 0.2
      }
    }
  },

  // Fast stagger for items
  itemContainer: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: STAGGER.items,
        delayChildren: 0.1
      }
    }
  }
}

// ===========================================
// PAGE TRANSITIONS - Smooth page changes
// ===========================================

export const pageTransitions = {
  fadeSlide: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.premium
    }
  }
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

// Create staggered animation with custom delay
export const createStagger = (baseAnimation: Record<string, unknown>, delay: number) => ({
  ...baseAnimation,
  transition: {
    ...(baseAnimation.transition as Record<string, unknown>),
    delay
  }
})

// Create responsive animation that adapts to screen size
export const createResponsiveAnimation = (desktop: Record<string, unknown>, mobile: Record<string, unknown>) => {
  return {
    ...desktop,
    "@media (max-width: 768px)": mobile
  }
}

// Premium loading animation
export const loadingAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.premium,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}