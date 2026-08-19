import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Products } from './collections/Products'
import { Orders } from './collections/Orders'
import { TrainingSessions } from './collections/TrainingSessions'
import { TrainingRegistrations } from './collections/TrainingRegistrations'
import { BlogPosts } from './collections/BlogPosts'
import { Contacts } from './collections/Contacts'
import { Testimonials } from './collections/Testimonials'
import { Gallery } from './collections/Gallery'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Products,
    Orders,
    TrainingSessions,
    TrainingRegistrations,
    BlogPosts,
    Contacts,
    Testimonials,
    Gallery,
  ],
  editor: lexicalEditor(),
  email: nodemailerAdapter({
    defaultFromAddress: process.env.SMTP_USER || 'noreply@albarakahorganics.com',
    defaultFromName: 'Al-Barakah Organics',
    transportOptions: {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
