import { getPayload } from 'payload'
import config from '../../../payload.config'
import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export const revalidate = 0

const categoryStyles: Record<string, string> = {
  vermicompost: 'bg-brand-100 text-brand-700',
  'natural-fertilizers': 'bg-gold-50 text-gold-700',
  'farming-tips': 'bg-brand-50 text-brand-600 border border-brand-200',
  'company-news': 'bg-brand-900 text-white',
}

const categoryLabels: Record<string, string> = {
  vermicompost: 'Vermicompost',
  'natural-fertilizers': 'Natural Fertilizers',
  'farming-tips': 'Farming Tips',
  'company-news': 'Company News',
}

export default async function BlogPage() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'blog-posts',
    where: { status: { equals: 'published' } },
    sort: '-publishedDate',
  })

  return (
    <>
      <Header />

      <section className="px-6 pt-16 pb-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <FadeIn>
            <p className="eyebrow">Learn &amp; Grow</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-brand-900 mt-3">
              Blog &amp; Educational Resources
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Learn about organic farming, vermicompost, and natural fertilizers.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 pb-20 max-w-6xl mx-auto">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center">No posts published yet.</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-8">
            {posts.map((post: any, i: number) => {
              const cover = typeof post.coverImage === 'object' ? post.coverImage : null
              const pillClass = categoryStyles[post.category] || 'bg-brand-100 text-brand-700'
              const label = categoryLabels[post.category] || post.category

              return (
                <FadeIn
                  key={post.id}
                  delay={i * 0.1}
                  className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]"
                >
                  <div className="rounded-3xl overflow-hidden bg-brand-50 h-full flex flex-col hover:-translate-y-1 transition-transform duration-200">
                    {cover?.url && (
                      <img
                        src={cover.url}
                        alt={cover.alt || post.title}
                        className="w-full aspect-4/3 object-cover"
                      />
                    )}

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${pillClass}`}
                        >
                          {label}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(post.publishedDate).toLocaleDateString('en-PK', {
                            dateStyle: 'medium',
                          })}
                        </span>
                      </div>

                      <h2 className="font-display text-lg font-semibold text-brand-900 mt-4 leading-snug">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 mt-3 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="mt-6 inline-flex items-center justify-center border-2 border-brand-700 text-brand-800 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 hover:text-white transition w-fit"
                      >
                        Read this article
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        )}

        {/* FAQs Cross-link Banner */}
        <FadeIn delay={0.2}>
          <div className="mt-16 bg-brand-50 border border-brand-100 rounded-2xl p-8 text-center">
            <h3 className="font-display text-xl font-semibold text-brand-900">
              Have Quick Questions?
            </h3>
            <p className="text-gray-600 text-sm mt-2 max-w-md mx-auto">
              Find answers to commonly asked questions about organic fertilizers, usage guidelines,
              and training sessions.
            </p>
            <Link
              href="/faqs"
              className="mt-5 inline-block bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition"
            >
              Browse FAQs →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
