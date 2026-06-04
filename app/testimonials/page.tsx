import { getTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Testimonials — DEV MOTORS',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div>
      <PageHero
        title="Client Testimonials"
        subtitle="Hear what our clients have to say about working with us."
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {testimonials.length === 0 ? (
          <p className="text-center text-ink-500">No testimonials available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}