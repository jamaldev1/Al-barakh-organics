import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import CountUpStats from '@/components/CountUpStats'

export const metadata = {
  title: 'About Us | Al Barakh Organics',
  description:
    'Al Barakh Organics was established to make sustainable agriculture practical, accessible and useful for farmers and growers across Pakistan. Meet our founder Mr. Sohaib Ahmed Khatti.',
}

const impactStats = [
  { value: 400, suffix: '+', label: 'Acres', description: 'Agriculture supported with organic fertilizers' },
  { value: 10000, suffix: '+', label: 'Bags', description: 'Organic fertilizer supplied' },
  { value: 100, suffix: '+', label: 'Trainings', description: 'Farmers and growers trained' },
  { value: 50, suffix: '+', label: 'Cities', description: 'Pakistan-wide reach' },
]

const customerSegments = [
  { icon: '👨‍🌾', label: 'Farmers' },
  { icon: '🌿', label: 'Commercial Growers' },
  { icon: '🌸', label: 'Nurseries' },
  { icon: '🏡', label: 'Home Gardeners' },
  { icon: '🔬', label: 'Agro Research Institutions' },
  { icon: '🎓', label: 'Educational Institutions' },
  { icon: '🏢', label: 'Agribusinesses' },
  { icon: '🤝', label: 'Corporate & B2B Customers' },
]

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-field.jpg" alt="Al Barakh Organics farm" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-900/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full text-center">
          <FadeIn>
            <p className="font-cursive text-3xl text-gold-400">About Our Farm</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
              Making Sustainable Agriculture<br />Practical and Accessible
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="eyebrow">Our Journey</p>
              <h2 className="font-display text-3xl font-bold text-brand-800 mt-2 leading-snug">
                How We Started
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Al Barakh Organics was established with a simple objective: to make sustainable
                agriculture more practical, accessible and useful for farmers and growers. Our work
                combines organic agricultural inputs with practical knowledge, training and
                field-based solutions.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our current focus includes vermicompost, red wigglers, farmer training and
                sustainable agriculture solutions. As we grow, we aim to expand into vermiwash,
                biochar and other solutions that support healthier soil and more sustainable farming.
              </p>
              <a href="/products" className="btn-primary mt-8 inline-flex">Explore Our Products →</a>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="rounded-2xl overflow-hidden">
              <img src="/images/hero-field.jpg" alt="Al Barakh Organics farm and field experience" className="w-full h-96 object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-cream-100 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-brand-700 flex items-center justify-center text-6xl overflow-hidden">
                  👨‍💼
                </div>
                <h3 className="font-display text-xl font-bold text-brand-800 mt-4">
                  Mr. Sohaib Ahmed Khatti
                </h3>
                <p className="text-gold-600 text-sm font-semibold">Founder</p>
              </div>

              <div>
                <p className="eyebrow">Founder&apos;s Vision</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-800 mt-2">
                  Why Al Barakh Exists
                </h2>
                <blockquote className="mt-6 border-l-4 border-gold-400 pl-6">
                  <p className="text-gray-700 leading-relaxed italic text-lg">
                    &quot;When I saw growers who had worked in agriculture for generations
                    selling their lands, and green fields turning into incomplete plotting
                    schemes, I started asking what was going wrong.&quot;
                  </p>
                </blockquote>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  The answer was clear: expensive fertilizers, lack of practical knowledge and
                  limited awareness of modern farming methods.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  That thinking led to Al Barakh Organics — to introduce, create awareness about and
                  provide sustainable agriculture solutions. Vermicompost is only the beginning.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-brand-800 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="font-cursive text-3xl text-gold-400">Our Approach</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3">
              A Solutions Company,<br />Not Just a Product
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed max-w-2xl mx-auto">
              We follow a practical approach: understand the agricultural need, provide an
              appropriate solution, support the customer with knowledge and training, and learn
              from field experience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="eyebrow">Who We Serve</p>
              <h2 className="font-display text-3xl font-bold text-brand-800 mt-2">
                Across the Agricultural Ecosystem
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {customerSegments.map((segment, i) => (
              <FadeIn key={segment.label} delay={i * 0.05}>
                <div className="service-card text-center h-full">
                  <div className="text-3xl mb-3">{segment.icon}</div>
                  <p className="font-semibold text-brand-800 text-sm">{segment.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-cream-100 px-6 py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="agrow-card h-full">
              <p className="eyebrow">Our Vision</p>
              <h3 className="font-display text-2xl font-bold text-brand-800 mt-2">
                A Sustainable Agricultural Future
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To contribute to a healthier and more sustainable agricultural future for
                Pakistan by making organic agriculture solutions practical, accessible and scalable.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="agrow-card h-full">
              <p className="eyebrow">Our Direction</p>
              <h3 className="font-display text-2xl font-bold text-brand-800 mt-2">
                Growing Platform
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our long-term direction is to build a broader platform of sustainable agricultural
                solutions, beginning with vermicompost and expanding into vermiwash, biochar and
                other organic inputs and services.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <CountUpStats stats={impactStats} />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-800 px-6 py-20 text-center">
        <FadeIn>
          <p className="font-cursive text-3xl text-gold-400">Partner With Us</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-3">
            Want to Work with Al Barakh?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-primary">Discuss Your Requirement →</a>
            <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition text-sm">
              💬 Talk to Us on WhatsApp
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
