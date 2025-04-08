import type React from "react"
import { Inter } from 'next/font/google'
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AcidicOninas",
  description: "Personal Page",
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
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
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 pl-2">
                  <span className="text-xl font-bold">My Blog</span>
                </Link>
                <nav className="hidden gap-6 md:flex">
                  <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                    Home
                  </Link>
                  <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
                    Blog
                  </Link>
                  <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                    About
                  </Link>
                </nav>
                <div className="flex items-center gap-2">
                  {/* <ModeToggle />
                  <Button asChild variant="default" size="sm" className="hidden md:flex">
                    <Link href="/about#contact">Contact Me</Link>
                  </Button>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <line x1="4" x2="20" y1="12" y2="12" />
                      <line x1="4" x2="20" y1="6" y2="6" />
                      <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                    <span className="sr-only">Toggle menu</span>
                  </Button> */}
                </div>
              </div>
            </header>
            <main className="flex-1 w-full">
              {children}
            </main>
            <footer className="w-full border-t py-6">
              <div className="container flex flex-col items-center justify-center gap-4 md:flex-row">
                <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 My Personal Blog. All rights reserved.</p>
                <nav className="flex gap-4">
                  <Link href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                    Twitter
                  </Link>
                  <Link href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                    GitHub
                  </Link>
                  <Link href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                    LinkedIn
                  </Link>
                </nav>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}