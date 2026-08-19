'use client'

import React, { useState, useRef, useEffect } from 'react'
import FadeIn from './FadeIn'

interface SegmentItem {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  image: string
  points: string[]
  link: string
  linkText: string
  icon: React.ReactNode
}

const customerSegmentsData: SegmentItem[] = [
  {
    id: 'farmers',
    number: '01',
    title: 'Small & Large Farmers',
    subtitle: 'Field Crops & Orchards',
    description: 'Cost-effective soil enrichment for wheat, cotton, rice, sugarcane, citrus, and mango orchards with field-tested dosage protocols.',
    image: '/images/serve-farmers.jpg',
    points: [
      'Reduces chemical fertilizer costs by up to 40%',
      'Strengthens root zones against heat & drought',
      'Field application support across Pakistan',
    ],
    link: '/products',
    linkText: 'Explore Crop Solutions',
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18C8.5 7 4 9 4 14a8 8 0 0016 0c0-5-4.5-7-8-11z" />
      </svg>
    ),
  },
  {
    id: 'growers',
    number: '02',
    title: 'Commercial Growers & Exporters',
    subtitle: 'High-Value Vegetables & Tunnels',
    description: 'High-potency biological inputs for tunnel farming, off-season vegetables, and premium export-grade produce with zero chemical residues.',
    image: '/images/serve-growers.jpg',
    points: [
      'Enhances natural produce color, size & flavor',
      'Zero chemical residue for international export',
      'Accelerates plant nutrient uptake cycles',
    ],
    link: '/solutions',
    linkText: 'Commercial Programs',
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    id: 'nurseries',
    number: '03',
    title: 'Plant Nurseries & Floriculture',
    subtitle: 'Seedling & Potting Media',
    description: 'Nutrient-rich potting mixes and worm castings for accelerated germination, rapid seedling establishment, and vibrant flowering vigor.',
    image: '/images/serve-nurseries.jpg',
    points: [
      'Cuts seedling nursery mortality rates',
      'Natural disease suppression in potting soil',
      'Bulk supply in customized bag sizes',
    ],
    link: '/products',
    linkText: 'Nursery Supply',
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 'gardeners',
    number: '04',
    title: 'Urban & Home Gardeners',
    subtitle: 'Lawn, Balcony & Kitchen Gardens',
    description: '100% natural, odorless, safe organic compost tailored for rooftop gardens, indoor planter boxes, lawns, and backyard organic vegetables.',
    image: '/images/serve-gardeners.jpg',
    points: [
      '100% odorless, weed-seed-free & pet-safe',
      'Convenient 5kg, 10kg & 20kg packaging',
      'Fast doorstep delivery across all major cities',
    ],
    link: '/products',
    linkText: 'Shop Home Gardening',
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 'research',
    number: '05',
    title: 'Agro Research & Universities',
    subtitle: 'Biological Trials & Academic Studies',
    description: 'Supplying pure biological samples, live breeding colonies, and verified soil microbiology data for academic research and agronomy trials.',
    image: '/images/serve-research.jpg',
    points: [
      'Standardized Eisenia fetida biological strains',
      'Collaborative organic trial documentation',
      'Student training & practical field visits',
    ],
    link: '/training',
    linkText: 'Academic Collaboration',
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 'corporate',
    number: '06',
    title: 'Corporate Estates & Agribusinesses',
    subtitle: 'Turnkey Commercial Supply',
    description: 'Bulk fertilizer delivery, organic transition consulting, and large-scale circular waste management programs for agricultural corporations.',
    image: '/images/serve-corporate.jpg',
    points: [
      'Bulk tonnage capacity with scheduled dispatch',
      'Corporate farm organic transition consulting',
      'Dedicated agricultural advisor support',
    ],
    link: 'https://wa.me/923000000000',
    linkText: 'Inquire for Enterprise',
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

export default function WhoWeServeSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    if (!sliderRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
    setCanScrollLeft(scrollLeft > 40)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 40)

    const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 360
    const newIndex = Math.round(scrollLeft / (cardWidth + 24))
    if (newIndex >= 0 && newIndex < customerSegmentsData.length) {
      setActiveIndex(newIndex)
    }
  }

  useEffect(() => {
    updateScrollState()
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener('scroll', updateScrollState)
      window.addEventListener('resize', updateScrollState)
      return () => {
        slider.removeEventListener('scroll', updateScrollState)
        window.removeEventListener('resize', updateScrollState)
      }
    }
  }, [])

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return
    const card = sliderRef.current.children[index] as HTMLElement
    if (card) {
      const targetLeft = card.offsetLeft - 24
      sliderRef.current.scrollTo({ left: targetLeft, behavior: 'smooth' })
      setActiveIndex(index)
    }
  }

  const scrollByDirection = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return
    const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 360
    const scrollAmount = (cardWidth + 24) * (direction === 'left' ? -1 : 1)
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="eyebrow text-gold-500">Who We Serve</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-900 mt-2 leading-tight">
              Serving the Complete<br />Agricultural Ecosystem
            </h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              Whether you manage hundreds of acres of commercial crops or cultivate a home garden, our organic inputs are customized for your needs.
            </p>
          </div>
        </FadeIn>

      </div>

      {/* Carousel Container with Middle-Aligned Floating Arrow Buttons */}
      <div className="relative mt-8 w-full max-w-[100vw]">
        {/* Middle Left Floating Slider Button */}
        {canScrollLeft && (
          <button
            onClick={() => scrollByDirection('left')}
            className="absolute left-3 xl:left-[calc((100vw-1280px)/2+8px)] top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-brand-900/90 backdrop-blur-md text-white shadow-2xl border border-white/20 flex items-center justify-center hover:bg-gold-400 hover:text-brand-950 hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Previous Segment"
          >
            <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Middle Right Floating Slider Button */}
        {canScrollRight && (
          <button
            onClick={() => scrollByDirection('right')}
            className="absolute right-3 xl:right-[calc((100vw-1280px)/2+8px)] top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-brand-900/90 backdrop-blur-md text-white shadow-2xl border border-white/20 flex items-center justify-center hover:bg-gold-400 hover:text-brand-950 hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Next Segment"
          >
            <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Sliding Card Carousel */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-2 no-scrollbar px-6 xl:px-[calc((100vw-1280px)/2+24px)]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {customerSegmentsData.map((item, index) => {
              const isActive = activeIndex === index

              return (
                <div
                  key={item.id}
                  onClick={() => scrollToSlide(index)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 flex flex-col justify-between border select-none snap-start flex-shrink-0 ${
                    isActive
                      ? 'border-brand-600 shadow-xl ring-2 ring-brand-500/20'
                      : 'border-brand-900/40 shadow-md hover:shadow-xl hover:border-brand-400'
                  } w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[390px] md:h-[410px] bg-brand-950`}
                >
                  {/* High Resolution Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out brightness-90"
                  />

                  {/* Deep Dark Multilayer Gradient Overlay for 100% Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 via-45% to-black/35 group-hover:via-black/80 transition-colors duration-300" />

                  {/* Top Row: Custom SVG Icon + Number Counter */}
                  <div className="relative z-10 p-6 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gold-400 text-brand-950 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="font-display text-2xl font-extrabold text-white/40 tracking-wider">
                      {item.number}
                    </span>
                  </div>

                  {/* Bottom Content Area with High Legibility */}
                  <div className="relative z-10 p-6 pt-0 flex flex-col justify-end">
                    <p className="text-gold-400 text-[11px] font-bold uppercase tracking-wider mb-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                      {item.subtitle}
                    </p>
                    <h3 className="font-display font-bold text-white text-xl md:text-2xl leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] group-hover:text-gold-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/85 text-xs mt-2 line-clamp-2 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                      {item.description}
                    </p>

                    {/* Bullet Checklist */}
                    <div className="mt-4 pt-3.5 border-t border-white/20 space-y-2">
                      {item.points.map((point) => (
                        <div key={point} className="flex items-start gap-2 text-xs text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] font-medium">
                          <svg className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      {/* Interactive Bottom Indicator Pills */}
      <div className="mt-4 pb-8 flex flex-wrap items-center justify-center gap-2 max-w-7xl mx-auto px-6">
          {customerSegmentsData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSlide(index)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                activeIndex === index
                  ? 'bg-brand-900 text-white shadow-md'
                  : 'bg-cream-100 text-brand-900/70 hover:bg-brand-50 hover:text-brand-900'
              }`}
            >
              {item.number}. {item.title}
            </button>
          ))}
      </div>
    </section>
  )
}
