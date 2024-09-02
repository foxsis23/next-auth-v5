import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import { LoginSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import bcrypt from 'bcryptjs';
import GitHub from 'next-auth/providers/github';

export default {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials): any {
        const validatingFields = LoginSchema.safeParse(credentials);

        if (validatingFields.success) {
          const { email, password } = validatingFields.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
