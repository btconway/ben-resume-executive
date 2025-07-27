import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: 'Ben Conway - Technical Product Lead & AI Enthusiast',
  description: 'Portfolio showcasing my experience with AI development and technical product leadership',
  keywords: 'technical product, AI, machine learning, Next.js, Python, TypeScript',
}

/**
 * Root layout component 
 * Wraps all pages with the Providers component for theme support
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
