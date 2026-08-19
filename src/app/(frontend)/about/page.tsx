import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import CountUpStats from '@/components/CountUpStats'
import MotionButton from '@/components/MotionButton'
import HeroBackgroundSlider from '@/components/HeroBackgroundSlider'
import CTABanner from '@/components/CTABanner'
import WhoWeServeSlider from '@/components/WhoWeServeSlider'

export const metadata = {
  title: 'About Us | Al Barakh Organics',
  description:
    'Al Barakh Organics was established to make sustainable agriculture practical, accessible, and useful for farmers and growers across Pakistan.',
}

const impactStats = [
  { value: 400, suffix: '+', label: 'Acres Supported', description: 'Agricultural land revitalized with organic fertilizers' },
  { value: 10000, suffix: '+', label: 'Bags Supplied', description: 'Premium vermicompost delivered across Pakistan' },
  { value: 100, suffix: '+', label: 'Farmer Workshops', description: 'Growers and agricultural teams trained' },
  { value: 50, suffix: '+', label: 'Cities Reached', description: 'Pakistan-wide sustainable farming network' },
]

const approachSteps = [
  {
    step: '01',
    title: 'Soil Assessment & Diagnostics',
    description: 'We evaluate field soil conditions, existing crop patterns, and organic deficiencies to recommend the most impactful natural solution.',
    icon: '🔬',
  },
  {
    step: '02',
    title: 'Targeted Organic Inputs',
    description: 'Supplying top-grade vermicompost and healthy Red Wiggler (Eisenia fetida) colonies customized for farm and nursery setups.',
    icon: '🌱',
  },
  {
    step: '03',
    title: 'Farmer Capacity Building',
    description: 'Delivering practical field training, application demonstrations, and troubleshooting to ensure teams apply inputs with maximum efficacy.',
    icon: '🎓',
  },
  {
    step: '04',
    title: 'Long-Term Yield & Soil Health',
    description: 'Monitoring soil regeneration, water retention, and harvest quality over successive seasons to ensure lasting agricultural prosperity.',
    icon: '📈',
  },
]



const coreValues = [
  {
    title: 'Purity & Authenticity',
    desc: '100% genuine vermicompost with zero synthetic chemicals or fillers.',
    icon: '✨',
  },
  {
    title: 'Farmer-First Approach',
    desc: 'Field-tested solutions designed to protect grower margins and livelihoods.',
    icon: '🤝',
  },
  {
    title: 'Ecological Stewardship',
    desc: 'Revitalizing living microbial soil networks and natural moisture retention.',
    icon: '🌍',
  },
  {
    title: 'Knowledge Sharing',
    desc: 'Democratizing modern organic techniques through accessible workshops.',
    icon: '📚',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative min-h-[420px] lg:min-h-[480px] flex items-center overflow-hidden">
        <HeroBackgroundSlider />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 font-semibold text-xs uppercase tracking-wider mb-4 backdrop-blur-sm">
              Rooted in Nature • Built for Farmers
            </span>
            <p className="font-cursive text-3xl md:text-4xl text-gold-400">About Our Farm</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 leading-tight max-w-4xl mx-auto">
              Making Sustainable Agriculture<br />
              <span className="text-gold-300">Practical & Accessible</span>
            </h1>
            <p className="mt-6 text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Empowering growers across Pakistan with premium biological vermicompost, pure earthworm breeds, and practical agricultural training.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ OUR JOURNEY / STORY ═══ */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left copy */}
          <div className="lg:col-span-7">
            <FadeIn>
              <p className="eyebrow text-gold-500">Our Journey</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mt-2 leading-tight">
                How We Started & Why We Care
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed text-base md:text-lg">
                Al Barakh Organics was established with a clear, singular objective: to make sustainable agriculture more practical, accessible, and economically viable for farmers and commercial growers across Pakistan.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed text-base">
                For years, degraded soil biology and skyrocketing chemical fertilizer costs have squeezed grower margins. We bridge that gap by combining premium organic biological inputs with real, field-tested knowledge, hands-on training, and ongoing technical support.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed text-base">
                Today, our operations encompass high-grade vermicompost production, pure Red Wiggler (<em>Eisenia fetida</em>) breeding colonies, farmer capacity workshops, and customized agricultural consulting. As we expand, we are bringing vermiwash, biochar, and advanced microbial solutions directly to Pakistani fields.
              </p>

              {/* Feature Badges */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: '🌿', label: '100% Chemical Free' },
                  { icon: '🧪', label: 'Rich Microbial Life' },
                  { icon: '💧', label: 'Better Water Holding' },
                  { icon: '🚜', label: 'Field Proven Results' },
                ].map((badge) => (
                  <div key={badge.label} className="flex flex-col items-center text-center p-3 rounded-xl bg-cream-100 border border-brand-100">
                    <span className="text-xl mb-1">{badge.icon}</span>
                    <span className="text-xs font-bold text-brand-900 leading-tight">{badge.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <MotionButton href="/products" className="btn-primary">
                  Explore Our Products →
                </MotionButton>
                <MotionButton
                  href="/training"
                  className="inline-flex items-center gap-2 border-2 border-brand-800 text-brand-800 px-6 py-3 rounded-md font-semibold hover:bg-brand-50 transition text-sm"
                >
                  View Farmer Training
                </MotionButton>
              </div>
            </FadeIn>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.15}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/images/farmer-training.jpg"
                    alt="Al Barakh Organics farmer training and field work"
                    className="w-full h-[420px] object-cover"
                  />
                </div>

                {/* Floating highlight badge positioned cleanly without overlap */}
                <div className="absolute -bottom-6 -right-6 bg-brand-900 text-white p-4.5 rounded-2xl shadow-2xl border border-gold-400/30 hidden sm:flex items-center gap-3.5 z-10">
                  <div className="w-12 h-12 rounded-xl bg-gold-400 flex items-center justify-center text-brand-950 text-xl font-bold shadow-sm">
                    30+
                  </div>
                  <div>
                    <p className="text-xs text-gold-300 font-semibold uppercase tracking-wider">Years of Agronomy</p>
                    <p className="text-sm font-bold text-white">Field-Tested Expertise</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ FOUNDER SECTION ═══ */}
      <section className="bg-cream-100 px-6 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-brand-800 to-brand-900 flex flex-col items-center justify-center text-gold-300 shadow-md border-2 border-gold-400/30">
                  <span className="text-5xl font-display font-bold">SAK</span>
                  <span className="text-xs uppercase tracking-widest text-white/70 mt-2 font-medium">Founder</span>
                </div>
                <h3 className="font-display text-xl font-bold text-brand-800 mt-4">
                  Mr. Sohaib Ahmed Khatti
                </h3>
                <p className="text-gold-600 text-sm font-semibold">Founder & Agricultural Visionary</p>
                <div className="mt-2 text-xs text-brand-700/70 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                  Al Barakh Organics
                </div>
              </div>

              <div>
                <p className="eyebrow text-gold-500">Founder&apos;s Vision</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-800 mt-1">
                  Why Al Barakh Exists
                </h2>
                <blockquote className="mt-6 border-l-4 border-gold-400 pl-6 py-1 bg-cream-50 rounded-r-xl">
                  <p className="text-gray-800 leading-relaxed italic text-base md:text-lg">
                    &quot;When I saw growers who had worked in agriculture for generations
                    selling their lands, and green fields turning into incomplete plotting
                    schemes, I started asking what was going wrong.&quot;
                  </p>
                </blockquote>
                <p className="mt-5 text-gray-700 leading-relaxed text-base">
                  The answer was clear: escalating chemical costs, soil exhaustion, lack of practical knowledge, and limited awareness of biological regenerative farming methods.
                </p>
                <p className="mt-3 text-gray-600 leading-relaxed text-base">
                  That realization led to Al Barakh Organics — to introduce, educate, and provide accessible sustainable agriculture solutions. Vermicompost is our foundation, and a thriving green Pakistan is our goal.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ OUR 4-STEP APPROACH ═══ */}
      <section className="bg-brand-900 px-6 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffca19_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-cursive text-3xl md:text-4xl text-gold-400">Our Methodology</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
                A Complete Solutions Framework,<br />
                <span className="text-gold-300">Not Just a Product</span>
              </h2>
              <p className="mt-4 text-white/75 text-base md:text-lg">
                We combine biological inputs with field education to deliver tangible, long-term yield and soil gains.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.1}>
                <div className="bg-brand-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between hover:border-gold-400/50 hover:bg-brand-800 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{step.icon}</span>
                      <span className="text-xs font-mono font-bold text-gold-400 bg-brand-900/80 px-2.5 py-1 rounded-full border border-gold-400/30">
                        STEP {step.step}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-white/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHO WE SERVE ECOSYSTEM SLIDER ═══ */}
      <WhoWeServeSlider />

      {/* ═══ MISSION, VISION & VALUES BENTO ═══ */}
      <section className="bg-cream-100 px-6 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="eyebrow text-gold-500">Guiding Philosophy</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mt-2">
                Our Purpose, Vision & Core Values
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission Card */}
            <FadeIn delay={0.05}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-100 h-full flex flex-col justify-between hover:border-gold-400/50 hover:shadow-md transition-all duration-300">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-brand-900 font-bold text-xs mb-4 border border-gold-300">
                    🎯 Our Mission
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-900 mt-1">
                    Restoring Soil Health Naturally
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                    To empower agricultural communities across Pakistan with high-grade organic biological inputs, practical farmer training, and ecological practices that reduce chemical dependency while boosting harvest yield.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-gold-600">Committed to Farmer Prosperity</span>
                </div>
              </div>
            </FadeIn>

            {/* Vision Card */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-100 h-full flex flex-col justify-between hover:border-gold-400/50 hover:shadow-md transition-all duration-300">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-900 font-bold text-xs mb-4 border border-brand-200">
                    🌟 Our Vision
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-900 mt-1">
                    A Sustainable Agricultural Future
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                    To build Pakistan&apos;s leading platform for regenerative agriculture — expanding from premium vermicompost into vermiwash, biochar, and comprehensive soil health services for long-term ecological balance.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-gold-600">Scalable & Accessible Clean Farming</span>
                </div>
              </div>
            </FadeIn>

            {/* Core Values Card */}
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-100 h-full flex flex-col justify-between hover:border-gold-400/50 hover:shadow-md transition-all duration-300">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-100 text-brand-900 font-bold text-xs mb-4 border border-brand-200">
                    💎 Core Values
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-900 mt-1">
                    What Guides Everything We Do
                  </h3>
                  <div className="mt-4 space-y-3">
                    {coreValues.map((val) => (
                      <div key={val.title} className="flex items-start gap-2.5">
                        <span className="text-base mt-0.5">{val.icon}</span>
                        <div>
                          <h4 className="text-xs font-bold text-brand-900">{val.title}</h4>
                          <p className="text-xs text-gray-500 leading-snug">{val.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-gold-600">Guiding Agricultural Principles</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ IMPACT NUMBERS ═══ */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="eyebrow text-gold-500">Measurable Impact</p>
              <h2 className="font-display text-3xl font-bold text-brand-900 mt-2">
                Delivering Results Across Pakistan
              </h2>
            </div>
            <CountUpStats stats={impactStats} />
          </FadeIn>
        </div>
      </section>

      {/* ═══ PARTNER CTA ═══ */}
      <CTABanner
        eyebrow="Partner With Us"
        title="Ready to Transform Your Soil & Crop Health?"
        description="Get in touch with our agricultural specialists to discuss bulk orders, farm setups, or custom farmer training sessions."
        primaryBtnText="Discuss Your Requirement →"
        primaryBtnHref="/contact"
        secondaryBtnText="💬 Chat with Us"
        secondaryBtnHref="https://wa.me/923000000000"
      />
    </>
  )
}
