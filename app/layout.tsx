import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/header"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AcidicOnionas",
  description: "A personal blog about web development, design, and life.",
  icons: {
    icon: "faviconv2.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
