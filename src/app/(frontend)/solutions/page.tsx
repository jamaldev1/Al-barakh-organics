import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'

export const metadata = {
  title: 'Sustainable Agriculture Solutions | Al Barakh Organics',
  description: 'Practical sustainable agriculture solutions for farms, growers, nurseries, institutions and businesses.',
}

const solutions = [
  { icon: '🌱', title: 'Organic Fertilizer Solutions', description: 'We provide high-quality vermicompost and natural inputs designed to restore soil health and improve crop yields naturally.', points: ['100% organic production', 'Soil health optimization', 'Certified organic practices'] },
  { icon: '🪱', title: 'Vermicomposting Solutions', description: 'Red wigglers (Eisenia fetida) and practical guidance to establish productive worm beds on your farm or property.', points: ['Productive worm breeds', 'Setup consultation', 'Ongoing maintenance support'] },
  { icon: '♻️', title: 'Organic Waste Management', description: 'Transform agricultural and organic waste into valuable fertilizer with practical waste management systems.', points: ['Farm waste conversion', 'Cost-effective systems', 'Environmental benefit'] },
  { icon: '🌍', title: 'Soil Health Improvement', description: 'Practical guidance on improving soil structure, water retention, and microbial activity using organic methods.', points: ['Microbial activity boost', 'Water retention improvement', 'Chemical-free methods'] },
  { icon: '👨‍🌾', title: 'Farm-Level Guidance', description: 'Field-tested advice on organic input application for maximum benefit under real farming conditions.', points: ['Seasonal crop planning', 'Yield optimization', 'Quality control systems'] },
  { icon: '🌸', title: 'Nursery & Horticulture', description: 'Tailored organic input solutions for plant nurseries, landscaping, and horticultural businesses.', points: ['Premium soil amendments', 'Plant-specific formulas', 'Bulk supply available'] },
  { icon: '🏢', title: 'B2B & Institutional', description: 'Scalable solutions for agricultural businesses, research organizations, and educational institutions.', points: ['Customized programs', 'Research support', 'Institutional training'] },
]

export default function SolutionsPage() {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-field.jpg" alt="Sustainable agriculture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-900/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full text-center">
          <FadeIn>
            <p className="font-cursive text-3xl text-gold-400">Beyond Products</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">Sustainable Agriculture Solutions</h1>
          </FadeIn>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, i) => (
              <FadeIn key={solution.title} delay={i * 0.08}>
                <div className="service-card h-full flex flex-col">
                  <div className="icon-box mb-5">{solution.icon}</div>
                  <h3 className="font-display text-xl font-bold text-brand-800">{solution.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 mb-4">{solution.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {solution.points.map((point) => (
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

      {/* CTA Banner */}
      <section className="bg-brand-800 px-6 py-20 text-center">
        <FadeIn>
          <p className="font-cursive text-3xl text-gold-400">Need a Practical Solution?</p>
          <h2 className="font-display text-3xl font-bold text-white mt-3">Let&apos;s Discuss Your Requirement</h2>
          <div className="mt-8">
            <a href="https://wa.me/923000000000?text=Hi, I would like to discuss sustainable agriculture solutions." target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
              💬 Discuss Your Requirement →
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
