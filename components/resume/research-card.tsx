"use client"

import React from "react"

interface ResearchCardProps {
  title: string
  description: string
  icon: string
}

/**
 * Displays a research interest card with icon and description
 * Used in the research interests section
 */
export function ResearchCard({ title, description, icon }: ResearchCardProps) {
  const cardId = `research-${title.toLowerCase().replace(/\s+/g, '-')}`
  
  return (
    <div 
      className="p-6 border rounded-lg bg-card hover:shadow-md transition-all hover:-translate-y-1 flex flex-col items-center text-center"
      aria-labelledby={cardId}
    >
      <div 
        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl mb-4"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 id={cardId} className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}