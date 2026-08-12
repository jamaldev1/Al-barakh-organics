'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Testimonial = {
  id: string
  customerName: string
  location?: string
  quote: string
  rating: string
  photoUrl?: string
}

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0)

  if (testimonials.length === 0) return null

  const current = testimonials[index]

  function next() {
    setIndex((i) => (i + 1) % testimonials.length)
  }

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-brand-900 rounded-3xl overflow-hidden max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-[220px_1fr] h-110 md:h-80"
        >
          <div className="flex items-center justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-brand-700">
            {current.photoUrl ? (
              <img
                src={current.photoUrl}
                alt={current.customerName}
                className="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover"
              />
            ) : (
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-brand-700 flex items-center justify-center text-brand-200 text-3xl font-display">
                {current.customerName.charAt(0)}
              </div>
            )}
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="text-gold-300 text-base">
                {'★'.repeat(Number(current.rating))}
                {'☆'.repeat(5 - Number(current.rating))}
              </div>
              <p className="text-white font-display text-base md:text-lg leading-snug mt-3 line-clamp-5">
                "{current.quote}"
              </p>
            </div>

            <div className="mt-4">
              <p className="text-white font-semibold text-sm">{current.customerName}</p>
              {current.location && (
                <p className="text-brand-200 text-xs mt-1">{current.location}</p>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between px-6 md:px-8 pb-6">
        <div className="flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-gold-500' : 'w-2 bg-brand-600'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full bg-brand-700 hover:bg-brand-600 text-white flex items-center justify-center transition"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full bg-brand-700 hover:bg-brand-600 text-white flex items-center justify-center transition"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
