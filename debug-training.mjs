import 'dotenv/config'
import { getPayload } from 'payload'
import config from './src/payload.config.ts'

const payload = await getPayload({ config })

console.log('Fetching training sessions with status = "upcoming"...')
const { docs: sessions } = await payload.find({
  collection: 'training-sessions',
  where: { status: { equals: 'upcoming' } },
  sort: 'date',
})

console.log(`Found ${sessions.length} sessions:`)
sessions.forEach((s) => {
  console.log(`\n- Title: ${s.title}`)
  console.log(`  ID: ${s.id}`)
  console.log(`  Status: ${s.status}`)
  console.log(`  Date: ${s.date}`)
})

const sessionOptions = sessions.map((s) => ({ id: String(s.id), title: s.title }))
console.log('\nSession options for form:', JSON.stringify(sessionOptions, null, 2))
