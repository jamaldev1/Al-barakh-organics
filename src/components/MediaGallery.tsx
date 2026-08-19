'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

export interface GalleryItem {
  id: string | number
  title: string
  mediaType: 'video' | 'photo'
  mediaUrl: string
  thumbnailUrl?: string
  caption?: string
  featured?: boolean
}

function isVideoUrl(url?: string): boolean {
  if (!url) return false
  const clean = url.split('?')[0].toLowerCase()
  return (
    clean.endsWith('.mp4') ||
    clean.endsWith('.webm') ||
    clean.endsWith('.ogg') ||
    clean.endsWith('.mov') ||
    clean.endsWith('.m4v') ||
    clean.includes('video/')
  )
}

interface MediaGalleryProps {
  items?: GalleryItem[]
}

const defaultItems: GalleryItem[] = [
  {
    id: 'sample-1',
    title: 'Worm Bed Aeration & Feeding Tour',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb2252c?auto=format&fit=crop&w=800&q=80',
    caption: 'Daily maintenance and organic feeding routines for our pure Eisenia fetida red wigglers.',
    featured: true,
  },
  {
    id: 'sample-2',
    title: 'Fresh Vermicompost Screening & Quality Check',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    caption: 'Refining and packaging 100% pure organic casting fertilizer ready for delivery.',
    featured: false,
  },
  {
    id: 'sample-3',
    title: 'On-Farm Agricultural Training Workshop',
    mediaType: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    caption: 'Farmers exploring moisture balance and optimal bedding preparation.',
    featured: false,
  },
  {
    id: 'sample-4',
    title: 'Healthy Soil & Crop Field Trials',
    mediaType: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    caption: 'Field performance with 40% increased microbial density after bio-fertilizer treatment.',
    featured: false,
  },
  {
    id: 'sample-5',
    title: 'Commercial Composting Beds Aerial View',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    caption: 'Scalable organic waste processing facility supporting hundreds of acres.',
    featured: false,
  },
  {
    id: 'sample-6',
    title: 'Hand-Harvested Organic Produce',
    mediaType: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
    caption: 'Natural taste, rich color, and chemical-free vitality grown with our vermicompost.',
    featured: false,
  },
]

export default function MediaGallery({ items }: MediaGalleryProps) {
  const displayItems = items && items.length > 0 ? items : defaultItems
  const [activeTab, setActiveTab] = useState<'all' | 'video' | 'photo'>('all')
  const [isGridView, setIsGridView] = useState(false)
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const filteredItems = displayItems.filter((item) => {
    if (activeTab === 'all') return true
    return item.mediaType === activeTab
  })

  // Update scroll arrow availability
  const checkScroll = () => {
    if (!sliderRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      return () => {
        slider.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [filteredItems.length, isGridView])

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return
    const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 360
    const scrollAmount = (cardWidth + 24) * (direction === 'left' ? -1 : 1)
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  // Keyboard navigation & body scroll lock for modal
  useEffect(() => {
    if (selectedItemIndex === null) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItemIndex(null)
      } else if (e.key === 'ArrowRight') {
        setSelectedItemIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        )
      } else if (e.key === 'ArrowLeft') {
        setSelectedItemIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedItemIndex, filteredItems.length])

  const activeModalItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null

  return (
    <section id="farm-gallery" className="py-16 md:py-24 lg:py-32 bg-cream-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="eyebrow">Visual Tour</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-900 mt-2">
                Life on the Farm
              </h2>
              <p className="text-gray-600 text-base md:text-lg mt-3 max-w-xl">
                Explore our vermicomposting beds, training sessions, and sustainable farming methods in action.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-full border border-brand-100 shadow-sm">
                <button
                  onClick={() => {
                    setActiveTab('all')
                    setSelectedItemIndex(null)
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                    activeTab === 'all'
                      ? 'bg-brand-800 text-white shadow-sm'
                      : 'text-brand-900/70 hover:text-brand-900 hover:bg-brand-50'
                  }`}
                >
                  All ({displayItems.length})
                </button>
                <button
                  onClick={() => {
                    setActiveTab('video')
                    setSelectedItemIndex(null)
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 transition-all duration-200 ${
                    activeTab === 'video'
                      ? 'bg-brand-800 text-white shadow-sm'
                      : 'text-brand-900/70 hover:text-brand-900 hover:bg-brand-50'
                  }`}
                >
                  <span>🎬</span> Videos ({displayItems.filter((i) => i.mediaType === 'video').length})
                </button>
                <button
                  onClick={() => {
                    setActiveTab('photo')
                    setSelectedItemIndex(null)
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 transition-all duration-200 ${
                    activeTab === 'photo'
                      ? 'bg-brand-800 text-white shadow-sm'
                      : 'text-brand-900/70 hover:text-brand-900 hover:bg-brand-50'
                  }`}
                >
                  <span>📸</span> Photos ({displayItems.filter((i) => i.mediaType === 'photo').length})
                </button>
              </div>

              {/* View Mode & Slider Arrow Navigation */}
              <div className="flex items-center gap-2">
                {/* Toggle Grid vs Slider */}
                <button
                  onClick={() => setIsGridView(!isGridView)}
                  className="hidden sm:inline-flex items-center gap-1.5 bg-white text-brand-900 px-4 py-2 rounded-full text-xs md:text-sm font-semibold border border-brand-100 shadow-sm hover:bg-brand-50 transition"
                  title={isGridView ? 'Switch to Slider' : 'View All in Grid'}
                >
                  {isGridView ? (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                      </svg>
                      Slider View
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      View All ({filteredItems.length})
                    </>
                  )}
                </button>

                {/* Left/Right Slider Buttons */}
                {!isGridView && (
                  <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-brand-100 shadow-sm">
                    <button
                      onClick={() => scrollSlider('left')}
                      disabled={!canScrollLeft}
                      className="p-2 rounded-full text-brand-900 hover:bg-brand-50 disabled:opacity-30 disabled:hover:bg-transparent transition"
                      aria-label="Previous Slide"
                    >
                      <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => scrollSlider('right')}
                      disabled={!canScrollRight}
                      className="p-2 rounded-full text-brand-900 hover:bg-brand-50 disabled:opacity-30 disabled:hover:bg-transparent transition"
                      aria-label="Next Slide"
                    >
                      <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Media Container: Slider or Grid */}
        <div
          ref={sliderRef}
          className={
            isGridView
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500'
              : 'flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar -mx-6 px-6'
          }
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredItems.map((item, index) => {
            const isVideo = item.mediaType === 'video' || isVideoUrl(item.mediaUrl)
            const hasCustomImageThumbnail =
              Boolean(item.thumbnailUrl) && !isVideoUrl(item.thumbnailUrl)

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItemIndex(index)}
                className={`group relative h-[360px] md:h-[380px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-brand-950 flex flex-col justify-end border border-brand-800/30 select-none ${
                  isGridView
                    ? 'w-full'
                    : 'w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start'
                }`}
              >
                {/* Background Media */}
                {hasCustomImageThumbnail ? (
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100"
                  />
                ) : isVideo ? (
                  <video
                    src={`${item.mediaUrl}#t=0.1`}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={item.mediaUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100"
                  />
                )}

                {/* Top Subtle Gradient for Badge readability */}
                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom Deep Gradient Overlay for High Contrast Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-45% to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md ${
                      isVideo ? 'bg-amber-500 text-white' : 'bg-white/90 text-brand-950'
                    }`}
                  >
                    {isVideo ? (
                      <>
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Video
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                        </svg>
                        Photo
                      </>
                    )}
                  </span>

                  {item.featured && (
                    <span className="bg-gold-400 text-brand-950 text-xs font-bold px-2.5 py-0.5 rounded-full shadow-md">
                      ★ Highlight
                    </span>
                  )}
                </div>

                {/* Center Play Button for Videos */}
                {isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl group-hover:scale-115 group-hover:bg-gold-400 group-hover:text-brand-950 group-hover:border-gold-300 transition-all duration-300">
                      <svg className="w-7 h-7 fill-current translate-x-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Bottom Text Content with High-Legibility Drop Shadows */}
                <div className="relative z-10 p-6 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="font-display font-bold text-white text-lg md:text-xl leading-snug line-clamp-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    {item.title}
                  </h3>
                  {item.caption && (
                    <p className="text-white/90 text-xs md:text-sm mt-2 line-clamp-2 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] font-normal">
                      {item.caption}
                    </p>
                  )}
                  <div className="mt-3 flex items-center gap-2 text-gold-400 text-xs font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    <span>{isVideo ? 'Watch Full Video' : 'View High-Res Photo'}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Slider Indicator Hint on Mobile */}
        {!isGridView && filteredItems.length > 3 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="text-xs text-brand-900/60 font-medium sm:hidden">
              👉 Swipe left/right to view more videos
            </span>
          </div>
        )}
      </div>

      {/* ═══ CINEMATIC FULLSCREEN LIGHTBOX MODAL ═══ */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setSelectedItemIndex(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full bg-brand-950/80 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Controls Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-brand-950/60 z-20">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                      activeModalItem.mediaType === 'video' || isVideoUrl(activeModalItem.mediaUrl)
                        ? 'bg-amber-500 text-white'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    {activeModalItem.mediaType === 'video' || isVideoUrl(activeModalItem.mediaUrl)
                      ? '🎬 Video Tour'
                      : '📸 Farm Photo'}
                  </span>
                  <span className="text-white/50 text-xs hidden sm:inline">
                    {selectedItemIndex! + 1} of {filteredItems.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setSelectedItemIndex((prev) =>
                        prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
                      )
                    }
                    className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition"
                    title="Previous (Left Arrow)"
                  >
                    <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      setSelectedItemIndex((prev) =>
                        prev !== null ? (prev + 1) % filteredItems.length : null
                      )
                    }
                    className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition"
                    title="Next (Right Arrow)"
                  >
                    <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setSelectedItemIndex(null)}
                    className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition ml-2 bg-white/10"
                    title="Close (Esc)"
                  >
                    <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Main Media Player Container */}
              <div className="relative flex-1 min-h-[300px] md:min-h-[480px] max-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
                {activeModalItem.mediaType === 'video' || isVideoUrl(activeModalItem.mediaUrl) ? (
                  <video
                    key={activeModalItem.mediaUrl}
                    src={activeModalItem.mediaUrl}
                    poster={
                      activeModalItem.thumbnailUrl && !isVideoUrl(activeModalItem.thumbnailUrl)
                        ? activeModalItem.thumbnailUrl
                        : undefined
                    }
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full max-h-[60vh] object-contain"
                  />
                ) : (
                  <img
                    src={activeModalItem.mediaUrl}
                    alt={activeModalItem.title}
                    className="w-full h-full max-h-[60vh] object-contain"
                  />
                )}
              </div>

              {/* Caption & Metadata Footer */}
              <div className="p-6 bg-brand-900/90 border-t border-white/10">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                  {activeModalItem.title}
                </h3>
                {activeModalItem.caption && (
                  <p className="text-white/80 text-sm md:text-base mt-2 leading-relaxed max-w-3xl">
                    {activeModalItem.caption}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
