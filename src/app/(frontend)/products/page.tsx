import Link from 'next/link'
import { getPayload } from 'payload'
import config from '../../../payload.config'
import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'

export const revalidate = 0

export const metadata = {
  title: 'Products | Al Barakh Organics',
  description: 'Quality vermicompost organic fertilizer and red wigglers (Eisenia fetida) for farms, orchards, nurseries, gardens and horticultural applications.',
}

const futureProducts = [
  { icon: '💧', name: 'Vermiwash', status: 'Coming Soon', description: 'Liquid organic fertilizer — a natural growth booster for crops and plants.' },
  { icon: '🔥', name: 'Biochar', status: 'Coming Soon', description: 'Carbon-rich soil amendment that improves soil structure, water retention and fertility.' },
  { icon: '🌿', name: 'More Organic Inputs', status: 'In Development', description: 'Future organic agricultural inputs — expanding our platform for farmer needs.' },
]

export default async function ProductsPage() {
  const payload = await getPayload({ config })
  const { docs: products } = await payload.find({ collection: 'products', where: { status: { equals: 'published' } } })

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-field.jpg" alt="Organic products" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-900/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full text-center">
          <FadeIn>
            <p className="font-cursive text-3xl text-gold-400">Our Products</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">Organic Agricultural Inputs</h1>
          </FadeIn>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        {products.length === 0 ? (
          <p className="text-gray-500 text-center">No products available right now.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product: any, i: number) => {
              const firstImage = typeof product.images?.[0]?.image === 'object' ? product.images[0].image : null
              return (
                <FadeIn key={product.id} delay={i * 0.1}>
                  <div className="agrow-card flex flex-col justify-between h-full">
                    <div>
                      {firstImage?.url ? (
                        <img src={firstImage.url} alt={firstImage.alt || product.name} className="w-full aspect-square object-cover rounded-xl mb-4" />
                      ) : (
                        <div className="bg-cream-100 rounded-xl aspect-square flex items-center justify-center text-brand-300 mb-4">Product Image</div>
                      )}
                      <h3 className="font-display text-xl font-bold text-brand-800">{product.name}</h3>
                      <p className="text-gray-600 mt-3 text-sm leading-relaxed">{product.shortDescription}</p>
                    </div>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-brand-700 font-bold text-lg">Rs. {product.price}</span>
                        <Link href={`/products/${product.slug}`} className="btn-primary text-xs py-2 px-4">View Details</Link>
                      </div>
                      <a
                        href={`https://wa.me/923000000000?text=Hi, I'm interested in ${encodeURIComponent(product.name)}. Please share details.`}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full btn-dark text-xs py-2.5"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Order on WhatsApp
                      </a>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        )}
      </section>

      {/* Future Products */}
      <section className="bg-cream-100 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="eyebrow">What&apos;s Next</p>
              <h2 className="font-display text-3xl font-bold text-brand-800 mt-2">Future Products</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureProducts.map((product, i) => (
              <FadeIn key={product.name} delay={i * 0.1}>
                <div className="agrow-card h-full relative overflow-hidden">
                  <span className="absolute top-4 right-4 bg-gold-400 text-brand-900 text-xs font-bold px-3 py-1 rounded-md">{product.status}</span>
                  <div className="text-3xl mb-4">{product.icon}</div>
                  <h3 className="font-display font-bold text-brand-800 text-lg">{product.name}</h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">{product.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* B2B CTA */}
      <section className="bg-brand-800 px-6 py-20 text-center">
        <FadeIn>
          <p className="font-cursive text-3xl text-gold-400">Bulk Orders</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-3">Looking for Bulk or Institutional Orders?</h2>
          <div className="mt-8">
            <a href="https://wa.me/923000000000?text=Hi, I'm interested in bulk/institutional organic input solutions." target="_blank" rel="noopener noreferrer" className="btn-primary text-base">💬 Discuss Your Requirement →</a>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
