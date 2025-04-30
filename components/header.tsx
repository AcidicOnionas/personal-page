import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="w-full border-b bg-background">
        <div className="container flex h-16 items-center">
            <div className="flex w-full items-center">
                <Link href="/" className="flex-shrink-0 mr-auto flex items-center gap-2">
                  <Image 
                    src="/faviconv2.png" 
                    alt="logo" 
                    width={64} 
                    height={64} 
                    className="h-[2.5rem] w-auto"
                  />
                  <span className="text-xl font-bold whitespace-nowrap">My Blog</span>
                </Link>
                <div className="flex-1 flex justify-center pr-[8rem]">
                  <nav className="hidden md:flex items-center space-x-8">
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
                <div className="ml-auto"></div>
              </div>
            </div>
          </header>
  )
}