import Link from 'next/link'
import { getServices, getTeamMembers, getCaseStudies, getTestimonials } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import TeamCard from '@/components/TeamCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialCard from '@/components/TestimonialCard'

export default async function HomePage() {
  const [services, team, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials(),
  ])

  const featuredServices = services.slice(0, 3)
  const featuredTeam = team.slice(0, 4)
  const recentCaseStudies = caseStudies.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brand-200 mb-4">
              Professional Services
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Driving Your Business <span className="text-brand-300">Forward</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brand-100 leading-relaxed">
              DEV MOTORS partners with ambitious companies to deliver expert services,
              proven results, and a team you can trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      {featuredServices.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-ink-900">Our Services</h2>
              <p className="mt-2 text-ink-500">Solutions engineered for performance.</p>
            </div>
            <Link href="/services" className="hidden sm:inline text-sm font-semibold text-brand-600 hover:text-brand-700">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      )}

      {/* Case Studies */}
      {recentCaseStudies.length > 0 && (
        <section className="bg-ink-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl font-extrabold text-ink-900">Case Studies</h2>
                <p className="mt-2 text-ink-500">Real challenges. Measurable results.</p>
              </div>
              <Link href="/case-studies" className="hidden sm:inline text-sm font-semibold text-brand-600 hover:text-brand-700">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentCaseStudies.map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      {featuredTeam.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-ink-900">Meet the Team</h2>
              <p className="mt-2 text-ink-500">The experts behind your success.</p>
            </div>
            <Link href="/team" className="hidden sm:inline text-sm font-semibold text-brand-600 hover:text-brand-700">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="bg-ink-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-ink-900">What Clients Say</h2>
              <p className="mt-2 text-ink-500">Trusted by businesses across industries.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredTestimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}