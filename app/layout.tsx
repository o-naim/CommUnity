import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MobileNavigation } from "@/components/mobile-navigation"
import { LanguageProvider } from "@/hooks/use-language"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CommUnity - Votre communauté, vos événements",
  description: "Application mobile communautaire pour découvrir, organiser et participer aux événements locaux",
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CommUnity" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>
            <div className="min-h-screen bg-background">
              <MobileNavigation />
              <main>{children}</main>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
