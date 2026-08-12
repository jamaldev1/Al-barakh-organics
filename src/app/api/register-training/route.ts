import { getPayload } from 'payload'
import config from '../../../payload.config'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const payload = await getPayload({ config })
  const body = await req.json()

  const { fullName, phone, email, city, farmSize, session } = body

  const registration = await payload.create({
    collection: 'training-registrations',
    data: {
      fullName,
      phone,
      email,
      city,
      farmSize,
      session,
      status: 'registered',
    },
  })

  return NextResponse.json({ success: true, registrationId: registration.id })
}
