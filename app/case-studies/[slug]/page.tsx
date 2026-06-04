// app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCaseStudy, getMetafieldValue } from '@/lib/cosmic'

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const title = getMetafieldValue(caseStudy.metadata?.title) || caseStudy.title
  const client = getMetafieldValue(caseStudy.metadata?.client_name)
  const industry = getMetafieldValue(caseStudy.metadata?.industry)
  const challenge = getMetafieldValue(caseStudy.metadata?.challenge)
  const solution = getMetafieldValue(caseStudy.metadata?.solution)
  const results = getMetafieldValue(caseStudy.metadata?.results)
  const image = caseStudy.metadata?.featured_image
  const relatedService = caseStudy.metadata?.related_service
  const projectLead = caseStudy.metadata?.project_lead

  return (
    <div>
      <section className="hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/case-studies" className="text-brand-200 text-sm font-medium hover:text-white transition-colors">
            ← Back to Case Studies
          </Link>
          {industry && (
            <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-wider text-brand-200 bg-white/10 px-3 py-1 rounded-full">
              {industry}
            </span>
          )}
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold">{title}</h1>
          {client && <p className="mt-3 text-lg text-brand-100">Client: {client}</p>}
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {image && (
          <img
            src={`${image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={title}
            width={800}
            height={400}
            className="w-full rounded-2xl mb-10 object-cover"
          />
        )}

        <div className="space-y-10">
          {challenge && (
            <div>
              <h2 className="text-2xl font-extrabold text-ink-900 mb-3">The Challenge</h2>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: challenge }} />
            </div>
          )}
          {solution && (
            <div>
              <h2 className="text-2xl font-extrabold text-ink-900 mb-3">Our Solution</h2>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: solution }} />
            </div>
          )}
          {results && (
            <div className="bg-brand-50 rounded-2xl p-8">
              <h2 className="text-2xl font-extrabold text-brand-900 mb-3">The Results</h2>
              <div className="prose prose-lg max-w-none prose-headings:text-brand-900" dangerouslySetInnerHTML={{ __html: results }} />
            </div>
          )}
        </div>

        {(relatedService || projectLead) && (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedService && (
              <Link
                href={`/services/${relatedService.slug}`}
                className="block bg-white border border-ink-100 rounded-2xl p-6 hover:shadow-lg hover:border-brand-200 transition-all"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-400">Related Service</span>
                <p className="mt-2 text-lg font-bold text-ink-900">
                  {getMetafieldValue(relatedService.metadata?.service_name) || relatedService.title}
                </p>
              </Link>
            )}
            {projectLead && (
              <Link
                href={`/team/${projectLead.slug}`}
                className="block bg-white border border-ink-100 rounded-2xl p-6 hover:shadow-lg hover:border-brand-200 transition-all"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-400">Project Lead</span>
                <div className="mt-2 flex items-center gap-3">
                  {projectLead.metadata?.photo && (
                    <img
                      src={`${projectLead.metadata.photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                      alt={getMetafieldValue(projectLead.metadata?.name) || projectLead.title}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-bold text-ink-900">
                      {getMetafieldValue(projectLead.metadata?.name) || projectLead.title}
                    </p>
                    <p className="text-sm text-ink-500">
                      {getMetafieldValue(projectLead.metadata?.job_title)}
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        )}
      </article>
    </div>
  )
}