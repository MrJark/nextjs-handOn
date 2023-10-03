import prisma from "@/app/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";

import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials" // -> https://next-auth.js.org/providers/credentials
import { signInEmailAndPassword } from "@/auth/actions/authActions";


export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // dependiendo del orde en que coloques en el arreglo los provaiders apareceran en la pantalla
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    }),
    GithubProvider({
      // porngo el ?? '' porque obligado tiene que ser un string y no un null
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@email.com" },
        password: { label: "Password", type: "password", placeholder: "******" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = await signInEmailAndPassword(credentials!.email, credentials!.password) // porngo ! porque le digo que confie porque siempre las va a recibir
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } 
        
        return null
      }
    }),
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async signIn({ user, account, credentials, email, profile}) {
      // console.log({user});
      
      return true;
    },
    async jwt({ account, token, user, profile, session, trigger}) {
      // console.log({token});
      const dbUser = await prisma.user.findUnique({ where: { email: token.email ?? 'no-email'}});

      if ( dbUser?.isActive === false ) {
        throw new Error('Need a user')
      }
      token.role = dbUser?.roles ?? ['no-role']
      token.id = dbUser?.id ?? 'no-uuid'

      return token;
    },
    async session({ session, token, user, newSession, trigger}) {
      // console.log({token});
      if (session && session.user ) {
        session.user.roles = token.roles
        session.user.id = token.id
      }

      return session;
    },
  }
}

const handler = NextAuth(authOptions);
export { handler as GET,  handler as POST}

