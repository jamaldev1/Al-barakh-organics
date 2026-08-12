'use client'

import { motion } from 'framer-motion'

type Props = {
  id: string
  name: string
  shortDescription: string
  price: number
  slug: string
  imageUrl?: string
  imageAlt?: string
}

export default function ProductSpotlight({
  id,
  name,
  shortDescription,
  price,
  slug,
  imageUrl,
  imageAlt,
}: Props) {
  return (
    <div className="rounded-[2rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-brand-900 border border-brand-800 shadow-xl">
      <div className="min-h-[320px] md:min-h-[400px]">
        {imageUrl ? (
          <img src={imageUrl} alt={imageAlt || name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-brand-100 flex items-center justify-center text-brand-400">
            Product Image
          </div>
        )}
      </div>

      <div className="bg-brand-800 text-white p-8 md:p-12 flex flex-col justify-center">
        <h3 className="font-display text-2xl md:text-3xl font-bold leading-snug">{name}</h3>
        <p className="text-gold-400 mt-2 text-sm font-semibold tracking-wide uppercase">⭐ Trusted by farmers</p>
        <p className="mt-4 text-2xl font-display font-bold text-white">Rs. {price}</p>
        <p className="mt-4 text-white/70 text-sm leading-relaxed">{shortDescription}</p>

        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
          <motion.a
            href={`https://wa.me/923000000000?text=Hi, I'm interested in ${encodeURIComponent(name)}. Please share details.`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            Order on WhatsApp
          </motion.a>
          <motion.a
            href={`/products/${slug}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-white/10 transition text-sm"
          >
            View Details
          </motion.a>
        </div>
      </div>
    </div>
  )
}
