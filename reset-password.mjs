import 'dotenv/config'
import { getPayload } from 'payload'
import config from './src/payload.config.ts'

const payload = await getPayload({ config })

const email = '231658@students.au.edu.pk'
const newPassword = 'NewPassword123!'

// Delete the existing user
const deleteResult = await payload.delete({
  collection: 'users',
  where: {
    email: {
      equals: email,
    },
  },
})

// Create a fresh user with the new password
await payload.create({
  collection: 'users',
  data: {
    email: email,
    password: newPassword,
  },
})

console.log(`Password reset for ${email}. New password: ${newPassword}`)
process.exit(0)
