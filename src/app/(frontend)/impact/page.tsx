import { getPayload } from 'payload'
import config from '../../../payload.config'
import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import CountUpStats from '@/components/CountUpStats'
import TestimonialCarousel from '@/components/TestimonialCarousel'

export const revalidate = 0
export const metadata = { title: 'Our Impact | Al Barakh Organics', description: 'See the real field impact of Al Barakh Organics across Pakistan.' }

const impactStats = [
  { value: 400, suffix: '+', label: 'Acres', description: 'Agriculture supported with organic fertilizers' },
  { value: 10000, suffix: '+', label: 'Bags', description: 'Organic fertilizer supplied' },
  { value: 100, suffix: '+', label: 'Trainings', description: 'Farmers and growers trained' },
  { value: 50, suffix: '+', label: 'Cities', description: 'Pakistan-wide reach' },
]

export default async function ImpactPage() {
  const payload = await getPayload({ config })
  const { docs: testimonials } = await payload.find({ collection: 'testimonials', where: { status: { equals: 'published' } } })

  return (
    <>
      <Header />
      <section className="relative min-h-[350px] flex items-center">
        <div className="absolute inset-0"><img src="/images/hero-field.jpg" alt="Impact" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-brand-900/75" /></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full text-center">
          <FadeIn>
            <p className="font-cursive text-3xl text-gold-400">Our Impact</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">Measurable Activity and<br />Real Field Evidence</h1>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-24 max-w-6xl mx-auto"><FadeIn><CountUpStats stats={impactStats} /></FadeIn></section>

      <section className="bg-cream-100 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn><div className="text-center mb-16"><p className="eyebrow">Visual Evidence</p><h2 className="font-display text-3xl font-bold text-brand-800 mt-2">Field Results</h2></div></FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-square"><img src="/images/hero-field.jpg" alt="Field 1" className="w-full h-full object-cover" /></div>
            <div className="rounded-2xl overflow-hidden aspect-square"><img src="/images/farmer-training.jpg" alt="Field 2" className="w-full h-full object-cover" /></div>
            <div className="rounded-2xl overflow-hidden aspect-[2/1] md:aspect-square col-span-2 md:col-span-1 bg-cream-200 flex items-center justify-center text-brand-300">PHOTO SPACE</div>
          </div>
        </div>
      </section>

      <section className="bg-brand-800 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16"><p className="font-cursive text-3xl text-gold-400">Case Studies</p><h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3">Farmer Stories</h2></div>
            {testimonials.length > 0 ? (
              <TestimonialCarousel testimonials={testimonials.map((t: any) => { const photo = typeof t.photo === 'object' ? t.photo : null; return { id: t.id, customerName: t.customerName, location: t.location, quote: t.quote, rating: t.rating, photoUrl: photo?.url } })} />
            ) : (
              <div className="bg-brand-700 rounded-2xl p-12 text-center text-white/60">Farmer case studies will be displayed here.</div>
            )}
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-20 text-center"><FadeIn><a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="btn-primary text-base">💬 Talk to Us on WhatsApp →</a></FadeIn></section>
    </>
  )
}
