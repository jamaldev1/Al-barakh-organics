'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = {
  value: number
  suffix: string
  label: string
  description: string
}

type CountUpStatsProps = {
  stats: Stat[]
  variant?: 'default' | 'bento'
}

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const startTime = performance.now()

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold text-brand-700">
      {count.toLocaleString()}
      <span className="text-gold-400">{suffix}</span>
    </div>
  )
}

export default function CountUpStats({ stats, variant = 'default' }: CountUpStatsProps) {
  if (variant === 'bento') {
    return (
      <div className="stats-bento-stage">
        <div className="stats-bento-grid">
          <article className="stats-bento-card stats-bento-card-1">
            <h3>Years of Farming<br />Excellence</h3>
            <p className="stats-bento-description">Delivering trusted organic farming solutions for decades</p>
            <div className="stats-bento-stat"><AnimatedNumber target={stats[0].value} suffix={stats[0].suffix} /><span>Years Experience</span></div>
          </article>
          <article className="stats-bento-card stats-bento-card-2">
            <div className="stats-bento-stat"><AnimatedNumber target={stats[1].value} suffix={stats[1].suffix} /><span>{stats[1].label}</span></div>
            <div className="stats-bento-thumb"><img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80" alt="Pakistani farmer working in wheat field" /></div>
            <h3>Successful Harvest<br />Projects</h3>
            <p className="stats-bento-description">Consistently producing high-quality crops across growing markets</p>
          </article>
          <div className="stats-bento-side">
            <article className="stats-bento-card stats-bento-card-3">
              <h3>Satisfied Farming<br />Partners</h3>
              <p className="stats-bento-description">Trusted by farms and agribusiness clients nationwide</p>
              <div className="stats-bento-stat"><AnimatedNumber target={stats[2].value} suffix={stats[2].suffix} /><span>{stats[2].label}</span></div>
            </article>
            <a href="/products" className="stats-bento-cta">View Our Harvest <span>→</span></a>
          </div>
        </div>
        <div className="stats-bento-photo"><img src="/images/statssection.jpg" alt="Organic farmers standing in a healthy field" /></div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="agrow-card text-center hover:-translate-y-1 transition-transform duration-200"
        >
          <AnimatedNumber target={stat.value} suffix={stat.suffix} />
          <p className="mt-2 text-sm font-bold text-gold-600 uppercase tracking-wider">
            {stat.label}
          </p>
          <p className="mt-1 text-xs text-gray-500">{stat.description}</p>
        </div>
      ))}
    </div>
  )
}
