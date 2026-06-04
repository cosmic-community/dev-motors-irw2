import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-4">🏎️</div>
        <h1 className="text-4xl font-extrabold text-ink-900">Page Not Found</h1>
        <p className="mt-3 text-ink-500">The page you’re looking for took a wrong turn.</p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center px-6 py-3 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
        >
          Back Home
        </Link>
      </div>
    </div>
  )
}