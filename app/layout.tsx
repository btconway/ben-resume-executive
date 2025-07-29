import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: 'Benjamin Conway - Strategic Partnerships & Business Development Executive',
  description: 'Strategic partnerships executive with proven track record of building enterprise technology alliances from zero to industry-leading ecosystem',
  keywords: 'strategic partnerships, business development, enterprise sales, go-to-market, OpenAI, VNTANA, Fortune 500',
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
