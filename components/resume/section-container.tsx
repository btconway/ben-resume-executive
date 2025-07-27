"use client"

import React from "react"

interface SectionContainerProps {
  title: string
  children: React.ReactNode
  id: string
  animateIn?: boolean
}

/**
 * A container component for resume sections that provides consistent styling
 * and optional animation effects when scrolling into view
 */
export function SectionContainer({
  title,
  children,
  id,
  animateIn = false,
}: SectionContainerProps) {
  return (
    <section id={id} className={`py-12 md:py-16 scroll-mt-16 ${animateIn ? "animate-fadeIn" : ""}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2" aria-label={`${title} section`}>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">{title}</span>
        <div className="h-px bg-gradient-to-r from-primary/50 to-transparent flex-grow ml-4"></div>
      </h2>
      {children}
    </section>
  )
}