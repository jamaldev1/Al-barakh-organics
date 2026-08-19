import { getPayload } from 'payload'
import config from '../../payload.config'
import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import MotionButton from '@/components/MotionButton'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import CountUpStats from '@/components/CountUpStats'
import HeroBackgroundSlider from '@/components/HeroBackgroundSlider'
import CTABanner from '@/components/CTABanner'
import MediaGallery from '@/components/MediaGallery'
import SolutionsSlider from '@/components/SolutionsSlider'

export const revalidate = 0

const credibilityStats = [
  { value: 30, suffix: '+', label: 'Years Experience', description: 'Delivering trusted organic farming solutions for decades' },
  { value: 500, suffix: '+', label: 'Projects Completed', description: 'Consistently producing high-quality crops across global markets' },
  { value: 1200, suffix: '+', label: 'Happy Clients', description: 'Trusted by farms and agribusiness clients worldwide' },
]

const featureIcons = [
  { icon: 'https://askit.dextheme.net/agrow/wp-content/uploads/sites/53/2026/04/icon-1a.png', title: 'Organic Product' },
  { icon: 'https://askit.dextheme.net/agrow/wp-content/uploads/sites/53/2026/04/icon-2a.png', title: 'Quality Standards' },
  { icon: 'https://askit.dextheme.net/agrow/wp-content/uploads/sites/53/2026/04/icon-3a.png', title: 'Modern Farming' },
]

const whatMakesUsDifferent = [
  { icon: 'https://askit.dextheme.net/agrow/wp-content/uploads/sites/53/2026/04/icon-13.png', title: 'Professional Farmers', desc: 'Skilled experts ensuring consistent farm quality' },
  { icon: 'https://askit.dextheme.net/agrow/wp-content/uploads/sites/53/2026/04/icon-12.png', title: 'Organic & Eco Solutions', desc: 'Sustainable methods for cleaner farming results' },
  { icon: 'https://askit.dextheme.net/agrow/wp-content/uploads/sites/53/2026/04/icon-11.png', title: 'Sustainable Farming', desc: 'Long-term solutions for eco-friendly agriculture' },
]



export default async function HomePage() {
  const payload = await getPayload({ config })

  const { docs: testimonials } = await payload.find({
    collection: 'testimonials',
    where: { status: { equals: 'published' } },
  })

  const { docs: galleryDocs } = await payload.find({
    collection: 'gallery',
    where: { status: { equals: 'published' } },
    sort: 'order',
  })

  const galleryItems = galleryDocs
    .filter((doc: any) => doc.media && typeof doc.media === 'object' && doc.media.url)
    .map((doc: any) => {
      const media = doc.media
      const thumbnail = typeof doc.thumbnail === 'object' ? doc.thumbnail : null
      const isDocVideo =
        doc.mediaType === 'video' ||
        (media.mimeType && media.mimeType.startsWith('video/')) ||
        /\.(mp4|webm|ogg|mov|m4v)($|\?)/i.test(media.url || '')
      const isThumbVideo =
        thumbnail?.mimeType?.startsWith('video/') ||
        /\.(mp4|webm|ogg|mov|m4v)($|\?)/i.test(thumbnail?.url || '')
      const validThumbnailUrl = !isThumbVideo
        ? thumbnail?.url || media.sizes?.thumbnail?.url || undefined
        : undefined

      return {
        id: String(doc.id),
        title: doc.title,
        mediaType: isDocVideo ? ('video' as const) : ('photo' as const),
        mediaUrl: media.url,
        thumbnailUrl: validThumbnailUrl,
        caption: doc.caption || undefined,
        featured: Boolean(doc.featured),
      }
    })

  return (
    <>
      <Header />

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        <HeroBackgroundSlider />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 w-full">
          <div className="max-w-xl">
            <FadeIn>
              <p className="font-cursive text-3xl md:text-4xl text-gold-400">Farm Tomorrow</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mt-3">
                Growing the Future Naturally
              </h1>
              <p className="mt-6 text-white/80 leading-relaxed max-w-md text-base">
                Supporting agriculture with forward-thinking organic solutions that deliver results while protecting nature.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <MotionButton
                  href="/products"
                  className="btn-primary text-base"
                >
                  Discover More →
                </MotionButton>
                <MotionButton
                  href="https://wa.me/923000000000"
                  className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition text-sm"
                >
                  💬 Talk to Us
                </MotionButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ FEATURE ICONS + ABOUT OUR FARM + WHAT MAKES US DIFFERENT ═══ */}
      <section className="home-feature-section max-w-7xl mx-auto px-6 -mt-16 pb-16 md:pb-24 lg:pb-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
          {/* Left Column: Feature Icons + About */}
          <div className="flex flex-col">
            <FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {featureIcons.map((item) => (
                  <div key={item.title} className="feature-icon-card">
                    <img src={item.icon} alt={item.title} className="feature-icon-img" />
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="about-farm-copy mt-10">
                <p className="eyebrow">About Our Farm</p>
                <h2 className="about-farm-title">
                  Rooted in Nature,<br />Driven by Sustainability
                </h2>
                <p className="about-farm-description">
                  Al Barakh Organics works to make sustainable agriculture practical and accessible. We provide quality vermicompost, red wigglers, agricultural solutions and practical training for farmers, growers, nurseries, institutions and businesses across Pakistan.
                </p>
                <a href="/about" className="about-farm-button">
                  Read More →
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: What Makes Us Different */}
          <div className="self-start">
            <FadeIn delay={0.15}>
              <div className="highlight-card">
                <h3 className="font-display text-2xl font-bold mb-6">What Makes Us Different</h3>
                <div className="space-y-5">
                  {whatMakesUsDifferent.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="icon-box bg-brand-800">
                        <img src={item.icon} alt={item.title} className="w-7 h-7 object-contain" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-900">{item.title}</h4>
                        <p className="text-brand-800/70 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ CREDIBILITY STATS (Agrow-style bento) ═══ */}
      <section className="bg-cream-100 px-6 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="stats-bento-heading">
              <p className="stats-bento-intro">From small farms to large agribusiness, we empower sustainable agriculture with proven systems and eco-driven innovation.</p>
              <div>
                <p className="eyebrow">Trusted by Organic Growers</p>
                <h2 className="stats-bento-title">
                  Supporting Farms<br />That Feed the Future
                </h2>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <CountUpStats stats={credibilityStats} variant="bento" />
          </FadeIn>
        </div>
      </section>

      {/* ═══ SERVICES / SOLUTIONS SLIDER ═══ */}
      <SolutionsSlider />

      {/* ═══ FULL-WIDTH FARM BANNER ═══ */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/farmer-training.jpg"
            alt="Farmers working in the field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 w-full text-center">
          <FadeIn>
            <p className="font-cursive text-3xl text-gold-400">From Our Farms to Farmers</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 max-w-3xl mx-auto">
              Real Experience. Real Solutions.
            </h2>
            <p className="mt-6 text-white/80 max-w-2xl mx-auto leading-relaxed">
              Our knowledge comes from practical field experience. Organic fertilizers have been used across 400+ acres, giving Al Barakh practical insight into the application of organic inputs under real agricultural conditions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/about" className="btn-primary">Our Story →</a>
              <a href="/impact" className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition text-sm">
                See Our Impact
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ TRAINING TEASER ═══ */}
      <section className="px-6 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80"
                  alt="Farmer working in a field with rich soil"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <p className="eyebrow">Training & Capacity Building</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-800 mt-2 leading-snug">
                  Empowering Farmers with Knowledge
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Training is a major part of the Al Barakh model. We believe sustainable agriculture requires not only access to organic inputs but also practical knowledge. More than 100 farmer and grower trainings have been conducted.
                </p>
                <ul className="mt-6 space-y-3">
                  {['Vermicomposting', 'Organic fertilizer production', 'Soil health & sustainable agriculture', 'Farm-level composting', 'Farmer entrepreneurship'].map((topic) => (
                    <li key={topic} className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/training" className="btn-primary">Request a Training →</a>
                  <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="btn-dark">
                    💬 Talk to Us
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ FARM TOUR / MEDIA GALLERY ═══ */}
      <MediaGallery items={galleryItems.length > 0 ? galleryItems : undefined} />

      {/* ═══ TESTIMONIALS ═══ */}
      {testimonials.length > 0 && (
        <section className="bg-cream-100 px-6 py-16 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="eyebrow">Real Feedback</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-800 mt-2">
                  Farmer Stories
                </h2>
                <p className="text-gray-500 mt-3 max-w-lg mx-auto">
                  Real experiences from farmers and growers who use Al Barakh solutions
                </p>
              </div>

              <TestimonialCarousel
                testimonials={testimonials.map((t: any) => {
                  const photo = typeof t.photo === 'object' ? t.photo : null
                  return { id: t.id, customerName: t.customerName, location: t.location, quote: t.quote, rating: t.rating, photoUrl: photo?.url }
                })}
              />
            </FadeIn>
          </div>
        </section>
      )}

      {/* ═══ FAQ SECTION WITH ACCORDION & WHATSAPP ═══ */}
      <section className="px-6 py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-cream-50 to-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-brand-50 rounded-full mb-4">
                <p className="text-sm font-semibold text-brand-700 uppercase tracking-wide">FAQ</p>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-900 mt-3 mb-4">
                Common Questions Answered
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about our organic products, training programs, and services. Can't find what you're looking for? Our team is just a message away.
              </p>
            </div>
          </FadeIn>

          {/* FAQs Grid */}
          <div className="mb-12">
            <div className="space-y-3">
              {[
                {
                  icon: '⏱️',
                  q: 'How long does vermicompost take to show results?',
                  a: 'Most farmers notice improved soil texture within 2-3 weeks, with visible plant growth improvements over 1-2 growing cycles. Results vary based on soil condition and application method.',
                },
                {
                  icon: '🌱',
                  q: 'How do I apply vermicompost to my crops?',
                  a: 'Mix it into topsoil before planting, or apply as a top-dressing around existing plants. For larger farms, it can be applied using standard fertilizer application equipment. We recommend 2-5 tons per acre.',
                },
                {
                  icon: '✅',
                  q: 'Is vermicompost safe for all types of plants?',
                  a: 'Yes — it is 100% organic and safe for vegetables, fruits, flowers, and field crops alike. It will not burn roots like synthetic fertilizers can and improves soil structure for all plant types.',
                },
                {
                  icon: '🚚',
                  q: 'Do you offer delivery across Pakistan?',
                  a: 'Yes, we serve individual, commercial, and institutional customers across Pakistan. Please contact us on WhatsApp with your location and requirement to discuss delivery options, bulk pricing, and logistics.',
                },
                {
                  icon: '🎓',
                  q: 'How can I register for a farmer training session?',
                  a: 'Visit our Farmer Training page to see upcoming sessions and register directly, or contact us on WhatsApp to request a customized training for your agricultural team. We offer both group and individual sessions.',
                },
              ].map((faq, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <details className="group bg-white rounded-xl border border-brand-100/50 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 overflow-hidden cursor-pointer">
                    <summary className="flex items-start justify-between p-6 font-semibold text-brand-900 text-base select-none hover:bg-brand-50/30 transition-colors">
                      <div className="flex items-start gap-4 flex-1">
                        <span className="text-2xl flex-shrink-0 mt-0.5">{faq.icon}</span>
                        <span className="leading-relaxed pt-1">{faq.q}</span>
                      </div>
                      <span className="text-brand-600 group-open:text-brand-700 flex-shrink-0 ml-4 text-xl transition-transform duration-300 group-open:rotate-180">
                        ⌄
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700 text-sm leading-relaxed border-t border-brand-100/30 bg-brand-50/20 group-open:bg-brand-50/40">
                      <p className="ml-12">{faq.a}</p>
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Premium WhatsApp Banner */}
          <FadeIn delay={0.3}>
            <div className="relative bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
              </div>
              <div className="relative px-6 md:px-10 py-8 md:py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 mb-3 md:mb-2">
                      <span className="text-3xl">💬</span>
                      <h3 className="font-display font-bold text-white text-xl md:text-2xl">Still Have Questions?</h3>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed max-w-lg">
                      Connect with our agricultural experts for personalized advice on products, delivery, training programs, and farm consultations.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/923000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold hover:bg-gold-400 hover:text-brand-900 transition-all duration-300 text-sm whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <span>💬</span>
                    WhatsApp Us Now
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Response', value: 'Within minutes' },
                    { label: 'Available', value: 'Mon-Fri 9-5 PKT' },
                    { label: 'Support', value: '24/7 via chat' },
                    { label: 'Expertise', value: 'Agricultural pros' },
                  ].map((item) => (
                    <div key={item.label} className="text-center md:text-left">
                      <p className="text-white/70 text-xs font-semibold uppercase tracking-wide">{item.label}</p>
                      <p className="text-white font-semibold text-sm mt-1">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ PREMIUM CTA BANNER ═══ */}
      <CTABanner
        eyebrow="Transform Your Farm"
        title="Ready to Grow Sustainably?"
        description="Whether you are a farmer, nursery, or business — talk to Al Barakh today and discover organic solutions that truly work for your farm."
        primaryBtnText="Explore Products →"
        primaryBtnHref="/products"
        secondaryBtnText="💬 Chat with Us"
        secondaryBtnHref="https://wa.me/923000000000"
      />
    </>
  )
}
