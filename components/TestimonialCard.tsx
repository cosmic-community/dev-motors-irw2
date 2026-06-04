import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const clientName = getMetafieldValue(testimonial.metadata?.client_name) || testimonial.title
  const company = getMetafieldValue(testimonial.metadata?.company)
  const jobTitle = getMetafieldValue(testimonial.metadata?.job_title)
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const rating = typeof testimonial.metadata?.rating === 'number' ? testimonial.metadata.rating : 5
  const photo = testimonial.metadata?.photo

  return (
    <figure className="flex flex-col bg-white rounded-2xl border border-ink-100 p-7 hover:shadow-lg transition-shadow duration-300 h-full">
      <StarRating rating={rating} />
      {quote && (
        <blockquote className="mt-4 text-ink-700 leading-relaxed flex-1">
          “{quote}”
        </blockquote>
      )}
      <figcaption className="mt-6 flex items-center gap-3">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={clientName}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <div className="font-semibold text-ink-900">{clientName}</div>
          <div className="text-sm text-ink-500">
            {jobTitle}
            {jobTitle && company ? ', ' : ''}
            {company}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}