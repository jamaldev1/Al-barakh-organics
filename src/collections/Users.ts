import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    maxLoginAttempts: 0,
    forgotPassword: {
      generateEmailHTML: (args) => {
        const token = args?.token || '';
        const user = args?.user || { email: 'User' };
        const resetPasswordURL = `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/reset-password?token=${token}`;
        return `
          <!DOCTYPE html>
          <html>
            <body>
              <h2>Reset Your Password</h2>
              <p>Hello ${user.email},</p>
              <p>You recently requested to reset your password for your Al-Barakah Organics account. Click the button below to reset it.</p>
              <a href="${resetPasswordURL}" style="display: inline-block; padding: 10px 20px; background-color: #000; color: #fff; text-decoration: none; border-radius: 5px;">Reset Password</a>
              <p>If you did not request a password reset, please ignore this email.</p>
            </body>
          </html>
        `;
      },
    },
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
