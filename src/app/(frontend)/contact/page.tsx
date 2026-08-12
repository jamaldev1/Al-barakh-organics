import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us | Al Barakh Organics',
  description: 'Talk to Al Barakh. Contact us for orders, consultations, training requests, or bulk inquiries via WhatsApp, email or phone.',
}

const contactMethods = [
  { icon: '📍', title: 'Location', value: 'Pakistan-wide Service', link: null },
  { icon: '📞', title: 'Phone / WhatsApp', value: '+92 300 0000000', link: 'https://wa.me/923000000000' },
  { icon: '✉️', title: 'Email', value: 'info@albarakhorganics.com', link: 'mailto:info@albarakhorganics.com' },
]

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-field.jpg" alt="Contact Al Barakh" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-900/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full text-center">
          <FadeIn>
            <p className="font-cursive text-3xl text-gold-400">Get In Touch</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">Contact Al Barakh</h1>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Contact Info */}
            <FadeIn>
              <div>
                <p className="eyebrow">We&apos;re Here to Help</p>
                <h2 className="font-display text-3xl font-bold text-brand-800 mt-2 leading-snug">
                  Talk to Our Agricultural Experts
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Whether you need product recommendations for your crop, want to schedule a training, or have a bulk order inquiry, our team is ready to assist you.
                </p>

                <div className="mt-10 space-y-6">
                  {contactMethods.map((method) => (
                    <div key={method.title} className="flex items-start gap-5 p-5 rounded-2xl bg-cream-100 border border-cream-200">
                      <div className="icon-box">{method.icon}</div>
                      <div>
                        <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-1">{method.title}</p>
                        {method.link ? (
                          <a href={method.link} target={method.link.startsWith('http') ? '_blank' : undefined} rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="font-display text-xl font-bold text-brand-800 hover:text-brand-600 transition">
                            {method.value}
                          </a>
                        ) : (
                          <p className="font-display text-xl font-bold text-brand-800">{method.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-8 rounded-2xl bg-brand-800 text-white text-center">
                  <h4 className="font-display text-2xl font-bold mb-4">Fastest Response</h4>
                  <p className="text-white/70 mb-6 text-sm">For immediate assistance and quick ordering, reach out to us directly on WhatsApp.</p>
                  <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                    💬 Chat on WhatsApp
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Right: Form */}
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl border border-gray-100">
                <h3 className="font-display text-2xl font-bold text-brand-800 mb-2">Send a Message</h3>
                <p className="text-gray-500 text-sm mb-8">Fill out the form below and our team will get back to you.</p>
                <ContactForm />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  )
}
