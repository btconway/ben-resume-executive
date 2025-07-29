"use client"

import React from "react"

/**
 * Client-side providers wrapper component
 * Temporarily disabled ThemeProvider for React 19 compatibility
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}