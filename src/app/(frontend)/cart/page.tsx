'use client'

import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import { useCart } from '@/components/CartContext'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CartPage() {
  const { items, removeFromCart } = useCart()

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <FadeIn>
          <p className="eyebrow">Ready to Order?</p>
          <h1 className="font-display text-3xl font-semibold text-brand-900 mt-3">Your Cart</h1>
        </FadeIn>

        {items.length === 0 ? (
          <FadeIn>
            <div className="mt-10 text-center">
              <p className="text-gray-500">Your cart is empty.</p>
              <Link
                href="/products"
                className="inline-block mt-6 bg-brand-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-700 transition"
              >
                Browse Products
              </Link>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.1}>
            <div className="mt-10 divide-y divide-brand-100 border-t border-b border-brand-100">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-6">
                  <div>
                    <h3 className="font-display font-semibold text-brand-900">{item.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Rs. {item.price} × {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="font-bold text-brand-700">
                      Rs. {item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <span className="font-display text-xl font-semibold text-brand-900">Total</span>
              <span className="font-display text-xl font-semibold text-brand-900">Rs. {total}</span>
            </div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Link
                href="/checkout"
                className="mt-8 block text-center bg-brand-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-700 transition"
              >
                Proceed to Checkout
              </Link>
            </motion.div>
          </FadeIn>
        )}
      </main>
    </>
  )
}
