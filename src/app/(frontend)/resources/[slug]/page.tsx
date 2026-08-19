import { getPayload } from 'payload'
import config from '../../../../payload.config'
import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export const revalidate = 0

type Params = Promise<{ slug: string }>

export default async function ResourcePost({ params }: { params: Params }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'blog-posts',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    limit: 1,
  })

  if (!docs.length) return notFound()

  const post = docs[0]
  const coverImage = typeof post.coverImage === 'object' ? post.coverImage : null

  return (
    <>
      <Header />
      <article>
        {/* Article Header */}
        <section className="bg-brand-900 pt-24 pb-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <Link href="/resources" className="text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors mb-6 inline-flex items-center gap-2">
                <span>←</span> Back to Resources
              </Link>
              <div className="mt-4 mb-6">
                <span className="bg-brand-700 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Article</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {post.title}
              </h1>
              <div className="mt-8 flex items-center justify-center gap-4 text-white/60 text-sm">
                <span>{new Date(post.publishedDate || post.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span>•</span>
                <span>Al Barakh Organics</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Article Body */}
        <section className="px-6 -mt-16 relative z-10 pb-24">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Hero Image */}
                {coverImage?.url && (
                  <div className="w-full h-[400px] overflow-hidden">
                    <img
                      src={coverImage.url}
                      alt={coverImage.alt || post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="p-8 md:p-12 lg:p-16">
                  <div className="prose prose-lg prose-green max-w-none prose-headings:font-display prose-headings:text-brand-800 prose-a:text-brand-600">
                    <RichText data={post.content} />
                  </div>
                </div>
                
                {/* CTA Box */}
                <div className="bg-cream-100 p-8 md:p-12 text-center border-t border-cream-200">
                  <h3 className="font-display text-2xl font-bold text-brand-800 mb-4">Have questions about this topic?</h3>
                  <p className="text-gray-600 mb-6 max-w-lg mx-auto">Our team is available to discuss practical applications for your farm.</p>
                  <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
                    💬 Chat with an Expert
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </article>
    </>
  )
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'blog-posts',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    limit: 1,
  })

  if (!docs.length) return { title: 'Not Found' }

  return {
    title: `${docs[0].title} | Al Barakh Organics`,
    description: docs[0].excerpt || `Read about ${docs[0].title}`,
  }
}
