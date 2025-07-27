"use client"

import React from "react"
import { ThemeProvider } from "@/components/theme-provider"

/**
 * Client-side providers wrapper component
 * Includes ThemeProvider for dark/light mode support
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}