import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AcidicOnionas",
  description: "A personal blog about web development, design, and life.",
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
          <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center">
              <div className="flex items-center" style={{ gap: "28.5rem" }}>
                <Link href="/" className="flex-shrink-0">
                  <span className="text-xl font-bold whitespace-nowrap">My Blog</span>
                </Link>
                <nav className="hidden md:flex items-center">
                  <Link href="/" className="px-2 text-sm font-medium transition-colors hover:text-primary">
                    Home
                  </Link>
                  <Link href="/blog" className="px-2 text-sm font-medium transition-colors hover:text-primary">
                    Blog
                  </Link>
                  <Link href="/about" className="px-2 text-sm font-medium transition-colors hover:text-primary">
                    About
                  </Link>
                </nav>
              </div>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
