import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Database, Zap, Eye, GitBranch, Bug } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Hi, I am a class of 2026 CCA student
                  </p>
                </div>
                <div className="space-y-4 text-gray-500 dark:text-gray-400">
                  <p>
                    I have heavy interest in computers and engineering in general. I often spend way too much time researching 
                    computers and AI
                  </p>
                  <p>
                    I enjoy playing games in my free time
                  </p>
                  <p>
                    This blog is where I share my failureness
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Profile picture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here are some of the technologies and tools I work with.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <Card key={skill.name} className="flex flex-col items-center p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <skill.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Socials</h2>
                <p className="text-gray-500 dark:text-gray-400">Find out about me</p>
                <div className="space-x-2">
                  <Button asChild variant="outline" size="icon">
                    <Link href="https://github.com/AcidicOnionas" target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <Link href="https://www.linkedin.com/in/chris-cao-908b611b0/" target="_blank" rel="noopener noreferrer">
                      <LinkedinIcon className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    
    </div>
  )
}

const skills = [
  {
    name: "Frontend Development",
    icon: Code,
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    description: "Figma, Adobe XD, User Research, Prototyping",
  },
  {
    name: "Backend Development",
    icon: Database,
    description: "Node.js, Express, MongoDB, PostgreSQL",
  },
  {
    name: "Performance Optimization",
    icon: Zap,
    description: "Lighthouse, Web Vitals, Caching Strategies",
  },
  {
    name: "Accessibility",
    icon: Eye,
    description: "WCAG, Semantic HTML, Screen Reader Testing",
  },
  {
    name: "DevOps",
    icon: GitBranch,
    description: "CI/CD, Docker, Vercel, AWS",
  },
  {
    name: "Bugging",
    icon: Bug,
    description: "I Hate Bugs",
  },
]