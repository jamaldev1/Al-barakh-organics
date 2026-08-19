'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface HeroSlide {
  image: string
  alt: string
  subtitle?: string
}

const defaultSlides: HeroSlide[] = [
  {
    image: '/images/hero-field.jpg',
    alt: 'Organic agriculture field with healthy green crops and fertile soil',
    subtitle: 'Nurturing Soil Naturally',
  },
  {
    image: '/images/hero-farm-landscape.jpg',
    alt: 'Lush green organic farmland and sustainable agriculture at sunrise',
    subtitle: 'Sustainable Farmland Innovation',
  },
  {
    image: '/images/hero-vermicompost.jpg',
    alt: 'Rich organic vermicompost and flourishing organic greenhouse crops',
    subtitle: 'Premium Vermicompost Power',
  },
]

export default function HeroBackgroundSlider({
  slides = defaultSlides,
  autoPlayInterval = 5500,
}: {
  slides?: HeroSlide[]
  autoPlayInterval?: number
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, autoPlayInterval)
    return () => clearInterval(timer)
  }, [autoPlayInterval, nextSlide])

  return (
    <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
      {/* Background Animated Images */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
            scale: { duration: 6, ease: 'easeOut' },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].alt}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Layered Gradient Overlays for High Legibility & Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/65 to-brand-900/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/20" />
    </div>
  )
}
