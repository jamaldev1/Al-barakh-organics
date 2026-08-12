import { getPayload } from 'payload'
import config from '../../../payload.config'
import { NextResponse } from 'next/server'
import { Orders } from '../../../collections/Orders'

export async function POST(req: Request) {
  const payload = await getPayload({ config })
  const body = await req.json()

  const { customerName, phone, address, city, items, total } = body

  const orderNumber = `ABO-${Date.now()}`

  const order = await payload.create({
    collection: 'orders',
    data: {
      orderNumber,
      customerName,
      phone,
      address,
      city,
      items,
      total,
      paymentMethod: 'cod',
      status: 'pending',
    },
  })

  return NextResponse.json({ success: true, orderId: order.id, orderNumber })
}
