import Link from 'next/link'
import type { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const title = getMetafieldValue(caseStudy.metadata?.title) || caseStudy.title
  const client = getMetafieldValue(caseStudy.metadata?.client_name)
  const industry = getMetafieldValue(caseStudy.metadata?.industry)
  const image = caseStudy.metadata?.featured_image

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group block bg-white rounded-2xl border border-ink-100 overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300"
    >
      {image && (
        <div className="h-52 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=900&h=500&fit=crop&auto=format,compress`}
            alt={title}
            width={450}
            height={260}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {industry && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
            {industry}
          </span>
        )}
        <h3 className="mt-3 text-lg font-bold text-ink-900 group-hover:text-brand-600 transition-colors">
          {title}
        </h3>
        {client && <p className="mt-1 text-sm text-ink-500">Client: {client}</p>}
      </div>
    </Link>
  )
}