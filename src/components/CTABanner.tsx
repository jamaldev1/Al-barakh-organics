'use client'

import FadeIn from '@/components/FadeIn'
import MotionButton from '@/components/MotionButton'

interface CTABannerProps {
  eyebrow?: string
  title?: string
  description?: string
  primaryBtnText?: string
  primaryBtnHref?: string
  secondaryBtnText?: string
  secondaryBtnHref?: string
}

export default function CTABanner({
  eyebrow = 'Partner With Us',
  title = 'Ready to Transform Your Soil & Crop Health?',
  description = 'Get in touch with our agricultural specialists to discuss bulk orders, farm setups, or custom farmer training sessions.',
  primaryBtnText = 'Discuss Your Requirement →',
  primaryBtnHref = '/contact',
  secondaryBtnText = '💬 Chat with Us',
  secondaryBtnHref = 'https://wa.me/923000000000',
}: CTABannerProps) {
  return (
    <section className="relative px-6 py-20 md:py-28 text-center overflow-hidden">
      {/* Rich dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800" />

      {/* Subtle geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <FadeIn>
          {eyebrow && (
            <p className="font-cursive text-3xl md:text-4xl text-gold-400 mb-2">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-4 items-center">
            {primaryBtnText && primaryBtnHref && (
              <MotionButton
                href={primaryBtnHref}
                className="btn-primary text-base font-bold shadow-lg hover:shadow-xl"
              >
                {primaryBtnText}
              </MotionButton>
            )}

            {secondaryBtnText && secondaryBtnHref && (
              <a
                href={secondaryBtnHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm border border-white/30 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {secondaryBtnText}
              </a>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
