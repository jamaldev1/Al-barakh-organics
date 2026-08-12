'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from './CartContext'

export default function AddToCartForm({
  product,
}: {
  product: { id: string; name: string; price: number; slug: string }
}) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addToCart(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="mt-8">
      <div className="flex items-center gap-4">
        <label className="text-sm font-medium text-gray-700">Quantity</label>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          className="w-20 border border-brand-200 rounded-lg px-3 py-2"
        />
      </div>

      <motion.button
        onClick={handleAdd}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="mt-4 bg-brand-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-700 transition"
      >
        {added ? 'Added to Cart ✓' : 'Add to Cart'}
      </motion.button>
    </div>
  )
}
