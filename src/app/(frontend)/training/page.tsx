import { getPayload } from 'payload'
import config from '../../../payload.config'
import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import TrainingRegistrationForm from '@/components/TrainingRegistrationForm'
import CTABanner from '@/components/CTABanner'
import MotionButton from '@/components/MotionButton'

export const revalidate = 0

export const metadata = {
  title: 'Farmer & Grower Training | Al Barakh Organics',
  description:
    'Practical, hands-on training on vermicomposting setup, organic fertilizer production, and sustainable farming methods for growers across Pakistan.',
}

const trainingModules = [
  {
    module: '01',
    icon: '🪱',
    title: 'Vermicomposting Setup & Worm Bed Care',
    description:
      'Step-by-step engineering of productive vermicomposting beds, optimal carbon-to-nitrogen bedding ratios, moisture control, feeding cycles, and Red Wiggler (Eisenia fetida) colony health.',
    points: ['Bed construction & drainage', 'Temperature & moisture regulation', 'Worm multiplication & harvesting'],
  },
  {
    module: '02',
    icon: '♻️',
    title: 'Agricultural Waste Valorization',
    description:
      'Turn crop residues, livestock manure, green waste, and agro-industrial byproducts into high-potency organic bio-fertilizer right at the farm level, reducing input costs.',
    points: ['Raw material pre-composting', 'Pathogen & weed elimination', 'Odor-free decomposition methods'],
  },
  {
    module: '03',
    icon: '🌿',
    title: 'Soil Biology & Microbiome Restoration',
    description:
      'Master the science of living soil. Learn how to replenish depleted microbial networks, balance soil pH, enhance water retention, and transition away from synthetic chemical dependency.',
    points: ['Beneficial bacteria & fungi', 'Salinity & erosion management', 'Humic matter accumulation'],
  },
  {
    module: '04',
    icon: '🚜',
    title: 'Field Application & Yield Scaling',
    description:
      'Precise dosage guidelines, foliar application calendars, and soil incorporation techniques tailored for wheat, cotton, vegetables, sugarcane, orchards, and greenhouse crops.',
    points: ['Crop-specific dosage tables', 'Fertigation & foliar timing', 'Yield & ROI performance tracking'],
  },
]

const traineePerks = [
  {
    icon: '📜',
    title: 'Certificate of Training',
    desc: 'Official recognized certification in sustainable agriculture techniques.',
  },
  {
    icon: '📘',
    title: 'Comprehensive Field Manual',
    desc: 'Complete printed handbook with dosage tables and troubleshooting guides.',
  },
  {
    icon: '🪱',
    title: 'Starter Colony Discount',
    desc: 'Special concession on pure Eisenia fetida breeding stock.',
  },
  {
    icon: '📞',
    title: 'Direct Agronomy Helpline',
    desc: 'Ongoing WhatsApp consultation with our specialists after training.',
  },
]

export default async function TrainingPage() {
  const payload = await getPayload({ config })

  const { docs: sessions } = await payload.find({
    collection: 'training-sessions',
    where: { status: { equals: 'upcoming' } },
    sort: 'date',
  })

  const sessionOptions = sessions.map((s: any) => ({ id: String(s.id), title: s.title }))

  return (
    <>
      <Header />

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/farmer-training.jpg"
            alt="Farmer Training Session by Al Barakh Organics"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/80 to-brand-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full text-center">
          <FadeIn>
            <p className="font-cursive text-3xl md:text-4xl text-gold-400">Hands-On Learning</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 leading-tight max-w-4xl mx-auto">
              Farmer & Grower Training
            </h1>
            <p className="mt-5 text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Empowering farmers, agribusiness teams, and commercial growers across Pakistan with practical skills to establish high-yielding vermicomposting systems and zero-chemical soil vitality.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#sessions" className="btn-primary text-base font-bold shadow-lg">
                View Upcoming Sessions ↓
              </a>
              <a
                href="https://wa.me/923000000000?text=Hi,%20I%20am%20interested%20in%20arranging%20a%20farmer%20training%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm border border-white/30 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                💬 Inquire on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ 1. UPCOMING SESSIONS (POSITIONED AT TOP FOR IMMEDIATE ACCESS) ═══ */}
      <section id="sessions" className="px-6 py-20 lg:py-24 bg-white border-b border-brand-100/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-400/20 text-gold-700 text-xs font-bold uppercase tracking-wider mb-2.5">
                📅 Scheduled Events
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900">
                Upcoming Training Sessions
              </h2>
              <p className="mt-2.5 text-gray-600 text-base">
                Select an upcoming session below to reserve your seat, or request a custom workshop for your farm team.
              </p>
            </div>
          </FadeIn>

          {sessions.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sessions.map((session: any) => (
                <div key={session.id} className="premium-session-card group">
                  <div className="premium-session-top">
                    <span className="session-pill">{session.status}</span>
                    <span className="session-tag">Limited Seats Available</span>
                  </div>

                  <div className="premium-session-content">
                    <h3 className="font-display text-2xl font-bold text-brand-800">{session.title}</h3>
                    <p className="mt-3 text-gray-600 leading-relaxed text-sm">{session.description}</p>

                    <div className="mt-6 space-y-3 text-sm text-brand-800 font-medium">
                      <div className="session-meta-item">
                        <span className="session-meta-icon">📅</span>
                        <span>
                          {new Date(session.date).toLocaleString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                      <div className="session-meta-item">
                        <span className="session-meta-icon">📍</span>
                        <span>{session.location}</span>
                      </div>
                      <div className="session-meta-item">
                        <span className="session-meta-icon">👥</span>
                        <span>{session.seatsAvailable} Seats Remaining</span>
                      </div>
                    </div>
                  </div>

                  <div className="premium-session-footer">
                    <a href="#register" className="session-cta text-center inline-block w-full">
                      Reserve Your Spot →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-cream-50 border border-brand-100 rounded-3xl p-10 text-center max-w-2xl mx-auto shadow-xs">
              <span className="text-4xl mb-3 inline-block">📅</span>
              <h3 className="font-display text-xl font-bold text-brand-900">Custom & On-Demand Workshops Available</h3>
              <p className="text-gray-600 text-sm mt-2 max-w-lg mx-auto">
                No public sessions are scheduled this week. However, we regularly conduct customized on-farm and institutional sessions on request.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="https://wa.me/923000000000?text=Hi,%20I%20would%20like%20to%20schedule%20a%20custom%20training%20session."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2.5 px-6"
                >
                  Schedule On WhatsApp →
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══ 2. VALUE & PERKS STRIP ═══ */}
      <section className="bg-cream-100 border-b border-brand-100/60 py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-400/20 text-gold-700 text-xs font-bold uppercase tracking-wider mb-2.5">
              ⭐ Included with Every Workshop
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-900">
              What Every Trainee Receives
            </h2>
            <p className="text-gray-600 text-sm mt-1.5">
              Complete resources, verified credentials, and ongoing field support for your farm.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {traineePerks.map((perk) => (
              <div
                key={perk.title}
                className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-brand-100 hover:border-gold-400/60 hover:shadow-md transition-all duration-300"
              >
                <span className="text-3xl flex-shrink-0">{perk.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-brand-900 text-sm leading-snug">{perk.title}</h3>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. 4-MODULE CURRICULUM ═══ */}
      <section className="px-6 py-20 lg:py-28 bg-white border-b border-brand-100/60">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="eyebrow text-gold-500">Comprehensive Curriculum</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mt-2">
                What You Will Learn in the Training
              </h2>
              <p className="mt-3 text-gray-600 text-base">
                Four intensive practical modules structured for real-world field application and maximum ROI.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingModules.map((module, i) => (
              <FadeIn key={module.module} delay={i * 0.1}>
                <div className="bg-cream-50/70 rounded-3xl p-8 shadow-xs border border-brand-100 hover:border-gold-400/60 hover:bg-white hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{module.icon}</span>
                      <span className="bg-gold-100 text-brand-900 border border-gold-300 text-xs font-mono font-bold px-3 py-1 rounded-full">
                        MODULE {module.module}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-brand-900 text-xl group-hover:text-brand-700 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-gray-200/70">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-800 mb-2.5">Key Takeaways:</p>
                    <ul className="space-y-1.5">
                      {module.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-xs text-gray-700">
                          <span className="text-gold-500 font-bold">✓</span> {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. INTRODUCTION SECTION (Why Knowledge Matters) ═══ */}
      <section className="bg-cream-100 px-6 py-20 lg:py-28 border-b border-brand-100/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="eyebrow text-gold-500">Practical Knowledge</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mt-2 leading-tight">
                  Knowledge is the Seed of Agricultural Prosperity
                </h2>
                <p className="mt-6 text-gray-700 leading-relaxed text-base md:text-lg">
                  Sustainable agriculture requires more than just biological products — it requires deep, actionable field knowledge. Without proper understanding of moisture, bedding conditions, and dosage, organic inputs cannot reach their full yield potential.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed text-base">
                  Our curriculum bridges that gap. We conduct interactive, hands-on workshops right on active farm beds to help growers make informed agronomic decisions and drastically cut chemical input expenditures.
                </p>

                {/* Target Audience Bento */}
                <div className="mt-8 bg-white rounded-2xl p-6 border border-brand-100 shadow-xs">
                  <h4 className="font-display font-bold text-brand-900 text-base mb-3">Who Should Attend?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-brand-900 font-medium">
                    <div className="flex items-center gap-2">
                      <span className="text-gold-500 font-bold">✓</span> Individual Small & Large Farmers
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gold-500 font-bold">✓</span> Commercial Agriculture Managers
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gold-500 font-bold">✓</span> Plant Nursery & Orchard Owners
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gold-500 font-bold">✓</span> Agronomy Students & Researchers
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gold-500 font-bold">✓</span> NGOs & Rural Development Staff
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gold-500 font-bold">✓</span> Corporate Farm Technical Teams
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Visual Container */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.15}>
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src="/images/satisfiedfarmers.jpg"
                      alt="Satisfied farmers and growers trained by Al Barakh Organics"
                      className="w-full h-[440px] object-cover"
                    />
                  </div>

                  {/* Floating Credential Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-brand-900 text-white p-4.5 rounded-2xl shadow-2xl border border-gold-400/30 hidden sm:flex items-center gap-3.5 z-10">
                    <div className="w-12 h-12 rounded-xl bg-gold-400 flex items-center justify-center text-brand-950 text-xl font-bold shadow-sm">
                      100+
                    </div>
                    <div>
                      <p className="text-xs text-gold-300 font-semibold uppercase tracking-wider">Field Proven</p>
                      <p className="text-sm font-bold text-white">Farmers & Growers Trained</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. REGISTRATION FORM SECTION ═══ */}
      <section id="register" className="px-6 py-20 lg:py-28 bg-white border-t border-brand-100/60 relative overflow-hidden scroll-mt-20">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left information */}
            <div className="lg:col-span-5">
              <FadeIn>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/20 border border-gold-400/30 text-gold-700 text-xs font-bold uppercase tracking-wider mb-4">
                  Direct Enrollment
                </span>
                <p className="eyebrow text-gold-500">Join Our Next Batch</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mt-2 leading-tight">
                  Request a Training Session
                </h2>
                <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
                  Fill out the form to register your interest for upcoming batches or request a customized on-site workshop for your farm staff.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 bg-cream-50 p-4 rounded-2xl border border-brand-100/70 hover:border-gold-400/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-brand-900 text-gold-400 flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-xs">
                      📞
                    </div>
                    <div>
                      <p className="text-xs text-brand-600 font-semibold uppercase tracking-wider">Call / WhatsApp</p>
                      <p className="font-display text-lg font-bold text-brand-900">+92 300 0000000</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-cream-50 p-4 rounded-2xl border border-brand-100/70 hover:border-gold-400/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-brand-900 text-gold-400 flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-xs">
                      ✉️
                    </div>
                    <div>
                      <p className="text-xs text-brand-600 font-semibold uppercase tracking-wider">Email Support</p>
                      <p className="font-display text-base font-bold text-brand-900">training@albarakhorganics.com</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Registration Form */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.15}>
                <div className="bg-cream-50/70 rounded-3xl p-8 md:p-10 shadow-lg border border-brand-100">
                  <h3 className="font-display text-2xl font-bold text-brand-900 mb-2">Register Your Interest</h3>
                  <p className="text-gray-500 text-xs mb-6">Our training coordinator will contact you with batch dates and syllabus details.</p>
                  <TrainingRegistrationForm sessions={sessionOptions} />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRE-FOOTER CTA ═══ */}
      <CTABanner
        eyebrow="Custom Farm Training"
        title="Want On-Site Training at Your Own Farm?"
        description="We travel across Pakistan to train agricultural teams, corporate growers, and university students directly on their own land."
        primaryBtnText="Request Farm Training →"
        primaryBtnHref="/contact"
        secondaryBtnText="💬 Chat on WhatsApp"
        secondaryBtnHref="https://wa.me/923000000000?text=Hi,%20I%20am%20interested%20in%20custom%20on-site%20farmer%20training."
      />
    </>
  )
}
