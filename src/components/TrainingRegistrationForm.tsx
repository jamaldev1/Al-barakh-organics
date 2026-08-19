'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function TrainingRegistrationForm({
  sessions = [],
}: {
  sessions?: { id: string; title: string }[]
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    farmSize: '',
    session: sessions[0]?.id || '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/register-training', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const data = await res.json()
    setLoading(false)

    if (data.success) {
      router.push('/training/confirmation')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 border border-brand-100 space-y-5"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          required
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          className="w-full border border-brand-200 rounded-lg px-4 py-3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-brand-200 rounded-lg px-4 py-3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email (optional)</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-brand-200 rounded-lg px-4 py-3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
        <input
          required
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          className="w-full border border-brand-200 rounded-lg px-4 py-3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Farm Size (optional)</label>
        <input
          value={form.farmSize}
          onChange={(e) => setForm({ ...form, farmSize: e.target.value })}
          placeholder="e.g. 5 acres"
          className="w-full border border-brand-200 rounded-lg px-4 py-3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Session</label>
        <select
          value={form.session}
          onChange={(e) => setForm({ ...form, session: e.target.value })}
          className="w-full border border-brand-200 rounded-lg px-4 py-3"
        >
          {sessions.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full bg-gold-400 hover:bg-gold-500 text-brand-950 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 text-base cursor-pointer mt-2"
      >
        {loading ? 'Submitting Registration...' : 'Register for Training Session →'}
      </motion.button>
    </form>
  )
}
