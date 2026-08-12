'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = {
  value: number
  suffix: string
  label: string
  description: string
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

export default function CountUpStats({ stats }: { stats: Stat[] }) {
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
