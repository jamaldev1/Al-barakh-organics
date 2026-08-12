import { getPayload } from 'payload'
import config from '../../../payload.config'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const payload = await getPayload({ config })
  const body = await req.json()

  const { name, email, phone, subject, message } = body

  const contact = await payload.create({
    collection: 'contacts',
    data: {
      name,
      email,
      phone,
      subject,
      message,
      status: 'new',
    },
  })

  return NextResponse.json({ success: true, contactId: contact.id })
}
