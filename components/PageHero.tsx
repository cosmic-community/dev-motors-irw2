export default function PageHero({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <section className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-brand-100 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  )
}