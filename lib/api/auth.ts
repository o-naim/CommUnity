// OAuth 2.0 Authentication with Google and Apple
import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import AppleProvider from "next-auth/providers/apple"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID!,
      clientSecret: process.env.APPLE_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
        // Add user subscription info
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: { subscriptionType: true, subscriptionEndsAt: true },
        })
        session.user.subscriptionType = dbUser?.subscriptionType || "FREE"
        session.user.subscriptionEndsAt = dbUser?.subscriptionEndsAt
      }
      return session
    },
  },
  pages: {
    signIn: "/auth",
    error: "/auth/error",
  },
}
