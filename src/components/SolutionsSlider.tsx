'use client'

import React, { useState, useRef, useEffect } from 'react'
import FadeIn from './FadeIn'

interface SolutionItem {
  id: string
  number: string
  title: string
  subtitle: string
  desc: string
  image: string
  points: string[]
  link: string
  linkText: string
  icon: React.ReactNode
}

const solutionsData: SolutionItem[] = [
  {
    id: 'fertilizer',
    number: '01',
    title: 'Organic Vermicompost',
    subtitle: 'Premium Bio-Organic Nutrition',
    desc: '100% pure organic castings produced through controlled earthworm digestion. Packed with active microbes and balanced NPK.',
    image: '/images/hero-vermicompost.jpg',
    points: [
      'Increases root aeration & microbial activity',
      'Non-burning, safe for all crops and orchards',
      'Field-proven results across 400+ acres',
    ],
    link: '/products',
    linkText: 'Explore Fertilizer',
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18C8.5 7 4 9 4 14a8 8 0 0016 0c0-5-4.5-7-8-11z" />
      </svg>
    ),
  },
  {
    id: 'worms',
    number: '02',
    title: 'Live Red Wigglers',
    subtitle: 'High-Efficiency Eisenia Fetida',
    desc: 'Active, healthy breeder-grade composting worms bred for rapid reproduction and superior organic matter processing in Pakistan.',
    image: '/images/hero-farm-landscape.jpg',
    points: [
      'Acclimatized productive starter colonies',
      'Complete farm-level bedding & feed guide',
      'Safe temperature-controlled delivery nationwide',
    ],
    link: '/products',
    linkText: 'Order Worm Colonies',
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 14c2-4 6-4 8 0s6 4 8 0M4 10c2-4 6-4 8 0s6 4 8 0" />
      </svg>
    ),
  },
  {
    id: 'training',
    number: '03',
    title: 'Farmer Training Workshops',
    subtitle: 'Hands-on Capacity Building',
    desc: 'Practical, in-the-field training for growers and agricultural institutions. Learn commercial composting and worm management.',
    image: '/images/farmer-training.jpg',
    points: [
      'Hands-on bed setup & harvesting practice',
      'Cost-reduction strategies for commercial farms',
      'Over 100+ successful workshops conducted',
    ],
    link: '/training',
    linkText: 'Join a Session',
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: 'soil',
    number: '04',
    title: 'Soil Health Restoration',
    subtitle: 'Natural Ecological Regeneration',
    desc: 'Scientific approaches to revitalize tired or chemically exhausted soils. We restore natural fertility and beneficial soil microbes.',
    image: '/images/hero-field.jpg',
    points: [
      'Enhances natural water retention by up to 35%',
      'Buffer against soil salinity & extreme heat',
      'Gradually reduces reliance on synthetic chemicals',
    ],
    link: '/solutions',
    linkText: 'Learn About Soil',
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'waste',
    number: '05',
    title: 'Organic Waste Conversion',
    subtitle: 'Zero-Waste Farm Circularity',
    desc: 'Transform animal manure, crop residues, and agro-industrial waste into high-value organic inputs instead of burning or dumping.',
    image: '/images/statssection.jpg',
    points: [
      'Eliminates harmful crop stubble burning',
      'Generates free, on-farm organic inputs',
      'Customized turnkey setups for large estates',
    ],
    link: '/solutions',
    linkText: 'View Waste Solutions',
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 'b2b',
    number: '06',
    title: 'Commercial & Institutional B2B',
    subtitle: 'Bulk Supply & Corporate Programs',
    desc: 'Tailored solutions for commercial nurseries, corporate agriculture, green initiatives, and research organizations across Pakistan.',
    image: '/images/satisfiedfarmers.jpg',
    points: [
      'Bulk tonnage supply & scheduled logistics',
      'Customized organic formulation for special crops',
      'Dedicated agricultural specialist on call',
    ],
    link: 'https://wa.me/923000000000',
    linkText: 'Inquire for B2B',
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

export default function SolutionsSlider() {
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
    if (newIndex >= 0 && newIndex < solutionsData.length) {
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-3">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-900">
                What We Offer
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-900 leading-tight">
              Complete Organic<br />Farming Solutions
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-3">
              Practical, field-tested products and biological services for healthier soil and better crop yields.
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
          {solutionsData.map((item, index) => {
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

                  {/* Deep Dark Multilayer Gradient Overlay for 100% Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 via-45% to-black/35 group-hover:via-black/80 transition-colors duration-300" />

                  {/* Top Row: Icon + Number Counter */}
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
                      {item.desc}
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
          {solutionsData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSlide(index)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                activeIndex === index
                  ? 'bg-brand-900 text-white shadow-md'
                  : 'bg-white text-brand-900/70 border border-brand-100 hover:bg-brand-50 hover:text-brand-900'
              }`}
            >
              {item.number}. {item.title}
            </button>
          ))}
      </div>
    </section>
  )
}
