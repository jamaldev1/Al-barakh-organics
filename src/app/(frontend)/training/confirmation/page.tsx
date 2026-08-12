import Header from '@/components/Header'
import Link from 'next/link'

export default function TrainingConfirmationPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="text-6xl">✅</div>
        <h1 className="text-3xl font-bold text-brand-800 mt-6">Registration Confirmed!</h1>
        <p className="text-gray-600 mt-4">
          Thank you for registering. Our team will contact you shortly with further details about
          the session.
        </p>
        <Link
          href="/"
          className="inline-block mt-10 bg-brand-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-700 transition"
        >
          Back to Home
        </Link>
      </main>
    </>
  )
}
