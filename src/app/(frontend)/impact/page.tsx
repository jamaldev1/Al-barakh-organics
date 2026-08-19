import { getPayload } from 'payload'
import config from '../../../payload.config'
import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import CountUpStats from '@/components/CountUpStats'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import CTABanner from '@/components/CTABanner'

export const revalidate = 0

export const metadata = {
  title: 'Our Impact & Field Results | Al Barakh Organics',
  description:
    'See the measurable field impact of Al Barakh Organics across 400+ acres and 50+ cities in Pakistan.',
}

const impactStats = [
  { value: 400, suffix: '+', label: 'Acres Revitalized', description: 'Agricultural land supported with organic biological inputs' },
  { value: 10000, suffix: '+', label: 'Bags Supplied', description: 'Premium vermicompost delivered nationwide' },
  { value: 100, suffix: '+', label: 'Growers Trained', description: 'Farmers and technical teams upskilled' },
  { value: 50, suffix: '+', label: 'Cities Reached', description: 'Active nationwide organic agriculture network' },
]

const galleryItems = [
  {
    image: '/images/hero-field.jpg',
    tag: 'Field Trials',
    title: 'Biological Soil Revitalization',
    desc: 'Wheat, cotton, and vegetable fields restored with natural microbial inputs.',
  },
  {
    image: '/images/hero-vermicompost.jpg',
    tag: 'Input Quality',
    title: 'High-Density Earthworm Castings',
    desc: 'Pure vermicompost rich in active humus, plant growth hormones, and beneficial bacteria.',
  },
  {
    image: '/images/farmer-training.jpg',
    tag: 'Capacity Building',
    title: 'Hands-On Farm Workshops',
    desc: 'Direct field demonstrations on bed maintenance, moisture regulation, and application.',
  },
  {
    image: '/images/satisfiedfarmers.jpg',
    tag: 'Grower Community',
    title: 'Thriving Grower Partnerships',
    desc: 'Empowering generational farmers to reduce chemical expenses and build lasting fertility.',
  },
]

export default async function ImpactPage() {
  const payload = await getPayload({ config })
  const { docs: testimonials } = await payload.find({
    collection: 'testimonials',
    where: { status: { equals: 'published' } },
  })

  return (
    <>
      <Header />

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative min-h-[420px] lg:min-h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-farm-landscape.jpg"
            alt="Field Impact of Al Barakh Organics"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/80 to-brand-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 font-semibold text-xs uppercase tracking-wider mb-4 backdrop-blur-sm">
              🌾 Verified Field Metrics • Nationwide Reach
            </span>
            <p className="font-cursive text-3xl md:text-4xl text-gold-400">Measurable Evidence</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 leading-tight max-w-4xl mx-auto">
              Real Field Results & Impact
            </h1>
            <p className="mt-5 text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Tracking real yield improvements, chemical reduction metrics, and grower prosperity across Pakistan.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ 1. IMPACT STATS BAR ═══ */}
      <section className="py-20 lg:py-24 px-6 bg-white border-b border-brand-100/60">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-400/20 text-gold-700 text-xs font-bold uppercase tracking-wider mb-2.5">
                📊 By The Numbers
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900">
                Measurable Agricultural Growth
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Delivering proven biological inputs and practical expertise across Pakistan.
              </p>
            </div>
            <CountUpStats stats={impactStats} />
          </FadeIn>
        </div>
      </section>

      {/* ═══ 2. VISUAL EVIDENCE GALLERY (No Placeholders) ═══ */}
      <section className="bg-cream-100 px-6 py-20 lg:py-28 border-b border-brand-100/60">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="eyebrow text-gold-500">Visual Evidence</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mt-2">
                Proven Field Performance
              </h2>
              <p className="mt-3 text-gray-600 text-base">
                Real snapshots of active crop trials, healthy vermicomposting beds, and farmer training sessions.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.08}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-100 hover:border-gold-400/60 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream-50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-brand-900/80 backdrop-blur-md text-gold-300 text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-display font-bold text-brand-900 text-lg group-hover:text-brand-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. FARMER STORIES (LIGHT WHITE BACKGROUND FOR HIGH CONTRAST) ═══ */}
      <section className="bg-white px-6 py-20 lg:py-28 border-b border-brand-100/60">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-400/20 text-gold-700 text-xs font-bold uppercase tracking-wider mb-2.5">
                💬 Real Grower Voices
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900">
                Farmer Stories & Case Studies
              </h2>
              <p className="mt-2.5 text-gray-600 text-base">
                Discover how growers and commercial agriculturalists across Pakistan are transforming their harvests with Al Barakh.
              </p>
            </div>

            {testimonials.length > 0 ? (
              <TestimonialCarousel
                testimonials={testimonials.map((t: any) => {
                  const photo = typeof t.photo === 'object' ? t.photo : null
                  return {
                    id: t.id,
                    customerName: t.customerName,
                    location: t.location,
                    quote: t.quote,
                    rating: t.rating,
                    photoUrl: photo?.url,
                  }
                })}
              />
            ) : (
              <div className="bg-cream-50 border border-brand-100 rounded-3xl p-12 text-center max-w-xl mx-auto text-brand-900">
                <span className="text-4xl mb-3 inline-block">🌾</span>
                <h3 className="font-display text-xl font-bold">Farmer Case Studies Coming Soon</h3>
                <p className="text-gray-600 text-sm mt-2">
                  We are currently documenting full-season harvest comparisons across Sindh and Punjab.
                </p>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* ═══ 4. PRE-FOOTER CTA BANNER (DARK GREEN FINALE) ═══ */}
      <CTABanner
        eyebrow="Join the Organic Movement"
        title="Ready to Transform Your Harvests?"
        description="Connect with our field advisors to start your journey towards cost-effective, chemical-free soil revitalization."
        primaryBtnText="Discuss Your Requirement →"
        primaryBtnHref="/contact"
        secondaryBtnText="💬 Chat on WhatsApp"
        secondaryBtnHref="https://wa.me/923000000000?text=Hi,%20I%20would%20like%20to%20learn%20more%20about%20your%20organic%20impact."
      />
    </>
  )
}
