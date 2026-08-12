import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'

export const metadata = {
  title: 'Frequently Asked Questions | Al Barakh Organics',
  description:
    'Find answers to commonly asked questions about vermicompost, our organic fertilizers, application methods, and farmer training programs.',
}

const faqs = [
  {
    q: 'How long does vermicompost take to show results?',
    a: 'Most farmers notice improved soil texture within 2-3 weeks, with visible plant growth improvements over 1-2 growing cycles.',
  },
  {
    q: 'How do I apply vermicompost to my crops?',
    a: 'Mix it into topsoil before planting, or apply as a top-dressing around existing plants. For larger farms, it can be applied using standard fertilizer application equipment.',
  },
  {
    q: 'Is vermicompost safe for all types of plants?',
    a: 'Yes — it is 100% organic and safe for vegetables, fruits, flowers, and field crops alike. It will not burn roots like synthetic fertilizers can.',
  },
  {
    q: 'Do you offer delivery across Pakistan?',
    a: 'Yes, we serve individual, commercial, and institutional customers across Pakistan. Please contact us on WhatsApp with your location and requirement to discuss delivery.',
  },
  {
    q: 'How can I register for a farmer training session?',
    a: 'Visit our Farmer Training page to see upcoming sessions and register directly, or contact us on WhatsApp to request a customized training for your agricultural team.',
  },
]

export default function FAQsPage() {
  return (
    <>
      <Header />
      <section className="px-6 py-20 text-center">
        <FadeIn>
          <p className="eyebrow">Questions? Answered.</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-brand-900 mt-4">
            Frequently Asked Questions
          </h1>
        </FadeIn>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 space-y-6">
        {faqs.map((faq, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="border border-brand-100 rounded-2xl p-6 bg-white hover:-translate-y-1 transition-transform duration-200 shadow-sm">
              <h3 className="font-display font-semibold text-brand-900">{faq.q}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </FadeIn>
        ))}
        
        <FadeIn delay={0.3}>
          <div className="mt-12 text-center p-8 bg-brand-50 rounded-2xl border border-brand-100">
            <h3 className="font-display font-semibold text-brand-900">Still have a question?</h3>
            <p className="text-gray-600 text-sm mt-2 mb-6">Our agricultural experts are ready to help.</p>
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
