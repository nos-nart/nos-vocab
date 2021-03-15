import NextAuth, { InitOptions } from 'next-auth';
import Providers from 'next-auth/providers';
import { NextApiRequest, NextApiResponse } from 'next';

const options: InitOptions = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
      scope:
        'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
    })
  ],
  session: {
    jwt: true,
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    encryption: true,
    secret: process.env.NEXTAUTH_JWE_SECRET
  },
  callbacks: {
    // NOTE: https://github.com/nextauthjs/next-auth/blob/e31db1726a11327990b13c4e51f0ec077a9f0608/src/server/lib/callbacks.d.ts#L2
    async redirect(_: any, baseUrl: string): Promise<string> {
      return baseUrl;
    },
    async jwt(token: any, user: any, account: any, profile: any, isNewUser?: boolean): Promise<any> {
      if (user?.id) {
        token.userId = user.id;
      }
      return token;
    },
    async session(session: any, token: any): Promise<any> {
      console.log("🚀 ~ file: [...nextauth].ts ~ line 35 ~ session ~ session", session);
      if (token?.userId) {
        session.user.id = token.userId;
      }
      return session;
    }
  },
  database: process.env.MONGO_URI
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
