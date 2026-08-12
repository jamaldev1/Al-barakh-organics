import { getPayload } from 'payload'
import config from '../../../../payload.config'
import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { notFound } from 'next/navigation'

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'blog-posts',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
  })

  const post = docs[0]
  if (!post) return notFound()

  const cover = typeof post.coverImage === 'object' ? post.coverImage : null

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <FadeIn>
          {cover?.url && (
            <img
              src={cover.url}
              alt={cover.alt || post.title}
              className="w-full aspect-video object-cover rounded-2xl mb-8"
            />
          )}
          <p className="eyebrow">{post.category?.replace('-', ' ')}</p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-brand-900 mt-2">
            {post.title}
          </h1>
          <p className="text-gray-400 text-sm mt-3">
            {new Date(post.publishedDate).toLocaleDateString('en-PK', { dateStyle: 'long' })}
          </p>

          <div className="prose prose-green max-w-none mt-10">
            <RichText data={post.content} />
          </div>
        </FadeIn>
      </main>
    </>
  )
}
