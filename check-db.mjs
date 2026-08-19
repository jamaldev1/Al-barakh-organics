import 'dotenv/config'
import pkg from 'pg'
const { Client } = pkg

const client = new Client({
  connectionString: process.env.DATABASE_URL,
})

await client.connect()

try {
  // Get the users table structure
  const result = await client.query(`
    SELECT column_name, data_type 
    FROM information_schema.columns 
    WHERE table_name = 'users' 
    ORDER BY ordinal_position;
  `)
  
  console.log('Users table columns:')
  result.rows.forEach(row => {
    console.log(`  - ${row.column_name}: ${row.data_type}`)
  })
  
  // Get all user data
  console.log('\nUser data:')
  const users = await client.query('SELECT * FROM users;')
  console.log(JSON.stringify(users.rows, null, 2))
} finally {
  await client.end()
}
