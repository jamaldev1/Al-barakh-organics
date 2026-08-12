'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import { useCart } from '@/components/CartContext'
import { motion } from 'framer-motion'

export default function CheckoutPage() {
  const { items, totalItems } = useCart()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ customerName: '', phone: '', address: '', city: '' })

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/place-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        items: items.map((i) => ({
          productName: i.name,
          quantity: i.quantity,
          price: i.price,
        })),
        total,
      }),
    })

    const data = await res.json()
    setLoading(false)

    if (data.success) {
      localStorage.setItem('cart', '[]')
      router.push(`/order-confirmation/${data.orderNumber}`)
    }
  }

  if (totalItems === 0) {
    return (
      <>
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="text-gray-500">Your cart is empty.</p>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-16">
        <FadeIn>
          <p className="eyebrow">Almost There</p>
          <h1 className="font-display text-3xl font-semibold text-brand-900 mt-3">Checkout</h1>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                required
                value={form.customerName}
                onChange={(e) => setForm({ ...form, customerName: e.target.value })}
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                required
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
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

            <div className="bg-brand-50 rounded-lg p-4 flex justify-between font-bold text-brand-900">
              <span>Total (Cash on Delivery)</span>
              <span>Rs. {total}</span>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-brand-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-700 transition disabled:opacity-50"
            >
              {loading ? 'Placing Order...' : 'Place Order'}
            </motion.button>
          </form>
        </FadeIn>
      </main>
    </>
  )
}
