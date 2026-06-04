import { getCaseStudies } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Case Studies — DEV MOTORS',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div>
      <PageHero
        title="Case Studies"
        subtitle="Real challenges solved with measurable, lasting results."
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {caseStudies.length === 0 ? (
          <p className="text-center text-ink-500">No case studies available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}