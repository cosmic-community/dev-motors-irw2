import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 text-ink-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏎️</span>
              <span className="text-xl font-extrabold text-white">
                DEV <span className="text-brand-400">MOTORS</span>
              </span>
            </Link>
            <p className="text-sm text-ink-400 max-w-xs">
              Professional services driven by expertise, results, and trust.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-brand-400 transition-colors">Services</Link></li>
              <li><Link href="/team" className="hover:text-brand-400 transition-colors">Team</Link></li>
              <li><Link href="/case-studies" className="hover:text-brand-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/testimonials" className="hover:text-brand-400 transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get in touch</h3>
            <p className="text-sm text-ink-400">
              Ready to accelerate your business? Reach out to our expert team today.
            </p>
          </div>
        </div>

        <div className="border-t border-ink-800 mt-10 pt-6 text-sm text-ink-500">
          © {year} DEV MOTORS. All rights reserved.
        </div>
      </div>
    </footer>
  )
}