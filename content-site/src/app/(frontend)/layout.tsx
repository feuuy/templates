import React from 'react'
import { JetBrains_Mono } from 'next/font/google'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import './styles.css'

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  description: 'A modern Next.js + Payload CMS project',
  title: 'Welcome',
}

export default async function RootLayout(props: Readonly<{ children: React.ReactNode }>) {
  const { children } = props

  return (
    <html lang="en" className={`${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeToggle />
        <main>{children}</main>
      </body>
    </html>
  )
}
