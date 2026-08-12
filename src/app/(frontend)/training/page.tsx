import { getPayload } from 'payload'
import config from '../../../payload.config'
import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import TrainingRegistrationForm from '@/components/TrainingRegistrationForm'

export const revalidate = 0

export const metadata = {
  title: 'Farmer Training | Al Barakh Organics',
  description: 'Practical training on vermicomposting, organic fertilizer production, and sustainable agriculture.',
}

const trainingTopics = [
  { icon: '🪱', title: 'Vermicomposting Setup', description: 'Step-by-step guidance on setting up and maintaining productive worm beds for vermicompost production.' },
  { icon: '♻️', title: 'Organic Fertilizer Production', description: 'Learn how to convert agricultural and organic waste into high-quality fertilizer at the farm level.' },
  { icon: '🌱', title: 'Soil Health Management', description: 'Practical approaches to restoring soil structure, increasing microbial activity, and improving fertility naturally.' },
  { icon: '💧', title: 'Organic Input Application', description: 'How and when to apply organic fertilizers, vermiwash, and other inputs for maximum crop yield.' },
]

export default function TrainingPage() {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/farmer-training.jpg"
            alt="Farmer Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-900/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full text-center">
          <FadeIn>
            <p className="font-cursive text-3xl text-gold-400">Capacity Building</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">Farmer & Grower Training</h1>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <p className="eyebrow">Practical Knowledge</p>
                <h2 className="font-display text-3xl font-bold text-brand-800 mt-2 leading-snug">
                  Knowledge is the Seed of Better Farming
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Sustainable agriculture requires more than just products; it requires practical knowledge. We conduct training sessions to help farmers, commercial growers, and agribusinesses adopt organic methods effectively.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed font-semibold">
                  We have trained over 100 farmers and growers across Pakistan.
                </p>
                <div className="mt-8 bg-cream-100 border-l-4 border-gold-400 p-6 rounded-r-lg">
                  <h4 className="font-bold text-brand-800 mb-2">Who is this for?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-brand-700">✓ Individual Farmers & Growers</li>
                    <li className="flex items-center gap-2 text-sm text-brand-700">✓ Commercial Agriculture Operations</li>
                    <li className="flex items-center gap-2 text-sm text-brand-700">✓ Nursery Owners</li>
                    <li className="flex items-center gap-2 text-sm text-brand-700">✓ NGOs & Rural Development Programs</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/farmer-training.jpg" alt="Training session in progress" className="w-full h-auto object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="bg-cream-100 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="eyebrow">Curriculum</p>
              <h2 className="font-display text-3xl font-bold text-brand-800 mt-2">Training Topics</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingTopics.map((topic, i) => (
              <FadeIn key={topic.title} delay={i * 0.05}>
                <div className="agrow-card h-full flex gap-5">
                  <div className="icon-box bg-brand-800">{topic.icon}</div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-800">{topic.title}</h3>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">{topic.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form / CTA */}
      <section className="px-6 py-24 bg-brand-800 relative overflow-hidden">
        {/* Subtle background pattern could go here */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <div className="text-white">
                <p className="font-cursive text-3xl text-gold-400">Join Us</p>
                <h2 className="font-display text-3xl font-bold mt-3">Request a Training Session</h2>
                <p className="mt-6 text-white/70 leading-relaxed">
                  We offer both scheduled group sessions and customized on-farm training for agricultural businesses. Fill out the form or contact us directly on WhatsApp to discuss your training needs.
                </p>
                
                <div className="mt-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="icon-box bg-brand-700 border border-brand-600">📞</div>
                    <div>
                      <p className="text-sm text-gold-400 font-semibold mb-1">Call / WhatsApp</p>
                      <p className="font-display text-xl font-bold">+92 300 0000000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="icon-box bg-brand-700 border border-brand-600">✉️</div>
                    <div>
                      <p className="text-sm text-gold-400 font-semibold mb-1">Email</p>
                      <p className="font-display text-lg font-bold">training@albarakhorganics.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="font-display text-2xl font-bold text-brand-800 mb-6">Register Interest</h3>
                <TrainingRegistrationForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
