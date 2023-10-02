import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"


export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      // porngo el ?? '' porque obligado tiene que ser un string y no un null
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
}

const handler = NextAuth(authOptions);
export { handler as GET,  handler as POST};