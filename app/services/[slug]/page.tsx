// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getService, getMetafieldValue } from '@/lib/cosmic'

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const icon = getMetafieldValue(service.metadata?.icon) || '⚙️'
  const summary = getMetafieldValue(service.metadata?.summary)
  const description = getMetafieldValue(service.metadata?.description)
  const image = service.metadata?.featured_image

  return (
    <div>
      <section className="hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/services" className="text-brand-200 text-sm font-medium hover:text-white transition-colors">
            ← Back to Services
          </Link>
          <div className="mt-6 text-5xl">{icon}</div>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold">{name}</h1>
          {summary && <p className="mt-4 text-lg text-brand-100 max-w-2xl">{summary}</p>}
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {image && (
          <img
            src={`${image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={name}
            width={800}
            height={400}
            className="w-full rounded-2xl mb-10 object-cover"
          />
        )}
        {description && (
          <div
            className="prose prose-lg max-w-none prose-headings:text-ink-900 prose-a:text-brand-600"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </article>
    </div>
  )
}