import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface BlogPostParams {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostParams) {
  // In a real app, you would fetch the post data based on the slug
  // For this example, we'll use a mock post
  const post = {
    title: "Getting Started with Next.js",
    date: "June 12, 2024",
    author: "Jane Doe",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Next.js is a powerful React framework that makes building web applications easier and more efficient. It provides a great developer experience with features like server-side rendering, static site generation, and more.</p>
      
      <h2>Why Next.js?</h2>
      
      <p>There are several reasons why Next.js has become so popular:</p>
      
      <ul>
        <li>Zero configuration required</li>
        <li>Automatic code splitting</li>
        <li>Server-side rendering</li>
        <li>Static site generation</li>
        <li>TypeScript support</li>
        <li>Fast refresh</li>
        <li>File-system based routing</li>
      </ul>
      
      <h2>Getting Started</h2>
      
      <p>To create a new Next.js app, you can use the following command:</p>
      
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This will set up a new Next.js project with all the necessary configurations. You can then start the development server with:</p>
      
      <pre><code>cd my-app
npm run dev</code></pre>
      
      <h2>Routing in Next.js</h2>
      
      <p>Next.js uses a file-system based router. Files and folders in the app directory map to URLs. For example:</p>
      
      <ul>
        <li><code>app/page.tsx</code> → <code>/</code></li>
        <li><code>app/blog/page.tsx</code> → <code>/blog</code></li>
        <li><code>app/blog/[slug]/page.tsx</code> → <code>/blog/:slug</code></li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Next.js provides an excellent framework for building modern web applications. Its features make development faster and more enjoyable while ensuring great performance for users.</p>
    `,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <article className="container max-w-3xl px-4 py-12 md:py-20">
          <Button variant="ghost" asChild className="mb-8 -ml-4">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </Button>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{post.title}</h1>

          <div className="mt-4 flex items-center space-x-2 text-gray-500">
            <time dateTime="2024-06-12">{post.date}</time>
            <span>•</span>
            <span>{post.author}</span>
          </div>

          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-lg">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>

          <div
            className="prose prose-gray max-w-none pt-10 dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <Separator className="my-10" />

          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold">Share this post</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                LinkedIn
              </Button>
            </div>
          </div>
        </article>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 My Personal Blog. All rights reserved.</p>
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
  )
}
