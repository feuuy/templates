import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-dot-grid" />

      <div className="text-center space-y-8 max-w-3xl px-6">
        <h1 className="text-5xl md:text-8xl tracking-tight uppercase font-bold">
          <span className="text-foreground">Build</span>
          <br />
          <span className="text-primary">Something</span>
        </h1>

        <p className="font-mono text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
          A modern foundation for your next project. Powered by Next.js and Payload CMS.
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <Button asChild className="h-11 px-6 font-mono text-base">
            <Link href="/admin">Get Started</Link>
          </Button>
          <Button asChild variant="outline" className="h-11 px-6 font-mono text-base">
            <Link href="https://payloadcms.com" target="_blank" rel="noopener noreferrer">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
