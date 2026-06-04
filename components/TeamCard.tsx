import Link from 'next/link'
import type { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TeamCard({ member }: { member: TeamMember }) {
  const name = getMetafieldValue(member.metadata?.name) || member.title
  const jobTitle = getMetafieldValue(member.metadata?.job_title)
  const photo = member.metadata?.photo

  return (
    <Link
      href={`/team/${member.slug}`}
      className="group block bg-white rounded-2xl border border-ink-100 overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300"
    >
      {photo && (
        <div className="aspect-square overflow-hidden bg-ink-100">
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5 text-center">
        <h3 className="text-lg font-bold text-ink-900 group-hover:text-brand-600 transition-colors">
          {name}
        </h3>
        {jobTitle && <p className="mt-1 text-sm text-brand-600 font-medium">{jobTitle}</p>}
      </div>
    </Link>
  )
}