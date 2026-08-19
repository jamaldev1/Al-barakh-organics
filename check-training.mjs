import 'dotenv/config'
import pkg from 'pg'
const { Client } = pkg

const client = new Client({
  connectionString: process.env.DATABASE_URL,
})

await client.connect()

try {
  // Get all training sessions
  const sessionsResult = await client.query('SELECT id, title, date, status FROM training_sessions;')
  console.log('Training Sessions:')
  if (sessionsResult.rows.length === 0) {
    console.log('  (none found)')
  } else {
    sessionsResult.rows.forEach(row => {
      console.log(`  - ${row.title} (ID: ${row.id}, Date: ${row.date}, Status: ${row.status})`)
    })
  }
  
  // Get all training registrations
  const regsResult = await client.query('SELECT id, full_name, phone, session_id, status FROM training_registrations;')
  console.log('\nTraining Registrations:')
  if (regsResult.rows.length === 0) {
    console.log('  (none found)')
  } else {
    regsResult.rows.forEach(row => {
      console.log(`  - ${row.full_name} (Session ID: ${row.session_id}, Status: ${row.status})`)
    })
  }
} finally {
  await client.end()
}
