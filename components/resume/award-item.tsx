"use client"

import React from "react"

interface AwardItemProps {
  title: string
  year: string
  description: string
  icon: string
}

/**
 * Award item component for awards section
 * Displays award with emoji icon and description
 */
export function AwardItem({ title, year, description, icon }: AwardItemProps) {
  return (
    <div className="p-6 border rounded-lg bg-card hover:shadow-md transition-all hover:-translate-y-1 flex gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0" aria-hidden="true">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{year}</p>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </div>
  )
}