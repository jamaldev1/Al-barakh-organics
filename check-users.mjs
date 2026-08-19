import 'dotenv/config'
import { getPayload } from 'payload'
import config from './src/payload.config.ts'

const payload = await getPayload({ config })

const { docs } = await payload.find({
  collection: 'users',
  limit: 100,
})

console.log(`Found ${docs.length} users:`)
docs.forEach((user) => {
  console.log(`\nEmail: ${user.email}`)
  console.log(`ID: ${user.id}`)
  console.log(`Has password: ${!!user.password}`)
  console.log(`Password field: ${user.password ? user.password.substring(0, 20) + '...' : 'undefined'}`)
})

process.exit(0)
