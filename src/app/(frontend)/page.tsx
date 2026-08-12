import { getPayload } from 'payload'
import config from '../../payload.config'
import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import MotionButton from '@/components/MotionButton'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import CountUpStats from '@/components/CountUpStats'

export const revalidate = 0

const credibilityStats = [
  { value: 400, suffix: '+', label: 'Acres', description: 'Agriculture supported with organic fertilizers' },
  { value: 10000, suffix: '+', label: 'Bags', description: 'Organic fertilizer sold' },
  { value: 100, suffix: '+', label: 'Trainings', description: 'Farmers and growers trained' },
  { value: 50, suffix: '+', label: 'Cities', description: 'Pakistan-wide reach serving all customer segments' },
]

const featureIcons = [
  { icon: '🌱', title: 'Organic Product' },
  { icon: '✅', title: 'Quality Standards' },
  { icon: '🚜', title: 'Modern Farming' },
]

const whatMakesUsDifferent = [
  { icon: '👨‍🌾', title: 'Professional Farmers', desc: 'Skilled experts ensuring consistent farm quality' },
  { icon: '♻️', title: 'Organic & Eco Solutions', desc: 'Sustainable methods for cleaner farming results' },
  { icon: '🌿', title: 'Sustainable Farming', desc: 'Long-term solutions for eco-friendly agriculture' },
]

const services = [
  { icon: '🌾', title: 'Organic Fertilizer', desc: 'Quality vermicompost for healthier soil and better crop yields', points: ['100% organic production', 'Soil health optimization', 'Field-tested results'] },
  { icon: '🪱', title: 'Red Wigglers', desc: 'Healthy Eisenia fetida worms for vermicomposting systems', points: ['Productive worm breeds', 'Farm-level setup support', 'Ongoing guidance'] },
  { icon: '🎓', title: 'Farmer Training', desc: 'Practical capacity building for agricultural teams', points: ['Hands-on workshops', 'Customized programs', 'Field demonstration'] },
  { icon: '🌍', title: 'Soil Improvement', desc: 'Natural approaches to restore and maintain soil health', points: ['Microbial activity boost', 'Water retention improvement', 'Chemical-free methods'] },
  { icon: '💧', title: 'Organic Waste Solutions', desc: 'Convert agricultural waste into valuable organic inputs', points: ['Farm waste conversion', 'Cost-effective systems', 'Environmental benefit'] },
  { icon: '🤝', title: 'B2B Solutions', desc: 'Customized solutions for agribusinesses and institutions', points: ['Bulk supply available', 'Institutional training', 'Tailored partnerships'] },
]

export default async function HomePage() {
  const payload = await getPayload({ config })

  const { docs: testimonials } = await payload.find({
    collection: 'testimonials',
    where: { status: { equals: 'published' } },
  })

  return (
    <>
      <Header />

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/hero-field.jpg"
            alt="Organic agriculture field with healthy green crops"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/85 via-brand-900/60 to-brand-900/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
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

      {/* ═══ FEATURE ICONS BAR + WHAT MAKES US DIFFERENT ═══ */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
          {/* Feature Icons */}
          <FadeIn>
            <div className="grid grid-cols-3 gap-4">
              {featureIcons.map((item) => (
                <div key={item.title} className="bg-brand-700 rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* What Makes Us Different */}
          <FadeIn delay={0.1}>
            <div className="highlight-card h-full">
              <h3 className="font-display text-2xl font-bold mb-6">What Makes Us Different</h3>
              <div className="space-y-5">
                {whatMakesUsDifferent.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="icon-box bg-brand-800">{item.icon}</div>
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
      </section>

      {/* ═══ ABOUT SECTION ═══ */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="eyebrow">About Our Farm</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-800 mt-2 leading-snug">
                Rooted in Nature,<br />Driven by Sustainability
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Al Barakh Organics works to make sustainable agriculture practical and accessible. We provide quality vermicompost, red wigglers, agricultural solutions and practical training for farmers, growers, nurseries, institutions and businesses across Pakistan.
              </p>
              <a href="/about" className="btn-primary mt-8 inline-flex">
                Read More →
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/farmer-training.jpg"
                alt="Al Barakh organic farming practices"
                className="w-full h-96 object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CREDIBILITY STATS (Agrow-style bento) ═══ */}
      <section className="bg-cream-100 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="eyebrow">Trusted by Organic Growers</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-800 mt-2">
                Supporting Farms<br />That Feed the Future
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <CountUpStats stats={credibilityStats} />
          </FadeIn>
        </div>
      </section>

      {/* ═══ SERVICES / SOLUTIONS ═══ */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="eyebrow">What We Offer</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-800 mt-2">
                Complete Organic<br />Farming Solutions
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div className="service-card h-full">
                  <div className="icon-box mb-5">{service.icon}</div>
                  <h3 className="font-display text-xl font-bold text-brand-800">{service.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-brand-700">
                        <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

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
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full text-center">
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
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/farmer-training.jpg"
                  alt="Farmer training session"
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

      {/* ═══ TESTIMONIALS ═══ */}
      {testimonials.length > 0 && (
        <section className="bg-cream-100 px-6 py-24">
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

      {/* ═══ FINAL CTA ═══ */}
      <section className="bg-brand-800 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="font-cursive text-3xl text-gold-400">Ready to Grow?</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3">
              Ready to Grow Sustainably?
            </h2>
            <p className="mt-6 text-white/70 max-w-xl mx-auto">
              Whether you are a farmer, nursery, or business — talk to Al Barakh today and discover organic solutions that work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <MotionButton href="/products" className="btn-primary text-base">
                Explore Our Products →
              </MotionButton>
              <MotionButton
                href="https://wa.me/923000000000"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition text-sm"
              >
                💬 Talk to Us on WhatsApp
              </MotionButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
