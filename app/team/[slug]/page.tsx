// app/team/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTeamMember, getMetafieldValue } from '@/lib/cosmic'

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const member = await getTeamMember(slug)

  if (!member) {
    notFound()
  }

  const name = getMetafieldValue(member.metadata?.name) || member.title
  const jobTitle = getMetafieldValue(member.metadata?.job_title)
  const bio = getMetafieldValue(member.metadata?.bio)
  const email = getMetafieldValue(member.metadata?.email)
  const linkedin = getMetafieldValue(member.metadata?.linkedin_url)
  const photo = member.metadata?.photo

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/team" className="text-brand-600 text-sm font-medium hover:text-brand-700 transition-colors">
        ← Back to Team
      </Link>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          {photo && (
            <img
              src={`${photo.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
              alt={name}
              width={400}
              height={400}
              className="w-full rounded-2xl object-cover"
            />
          )}
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink-900">{name}</h1>
          {jobTitle && <p className="mt-2 text-lg text-brand-600 font-semibold">{jobTitle}</p>}

          {bio && (
            <div
              className="mt-6 prose prose-lg max-w-none prose-headings:text-ink-900 prose-a:text-brand-600"
              dangerouslySetInnerHTML={{ __html: bio }}
            />
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
              >
                Email
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-ink-200 text-ink-700 text-sm font-semibold hover:bg-ink-50 transition-colors"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}