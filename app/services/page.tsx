import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Services — DEV MOTORS',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Expert solutions tailored to drive your business forward."
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {services.length === 0 ? (
          <p className="text-center text-ink-500">No services available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}