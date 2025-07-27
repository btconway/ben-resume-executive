"use client"

import React from "react"

interface TimelineItemProps {
  company: string
  position: string
  period: string
  details: string[]
  side?: "left" | "right"
  isLast?: boolean
  compact?: boolean
}

/**
 * Displays a single timeline item with alternating sides
 * Used in the professional experience section
 */
export function TimelineItem({
  company,
  position,
  period,
  details,
  compact = false
}: TimelineItemProps) {
  return (
    <div className={`relative ${compact ? 'p-4' : 'p-6'} border rounded-lg bg-card hover:shadow-md transition-all`}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-semibold`}>{company}</h3>
          <p className="text-sm text-primary font-medium">{position}</p>
        </div>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      
      {!compact && details.length > 0 && (
        <ul className="mt-4 space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
              <span className="text-sm">{detail}</span>
            </li>
          ))}
        </ul>
      )}
      
      {compact && details.length > 0 && (
        <p className="text-sm text-muted-foreground mt-2">{details[0]}</p>
      )}
    </div>
  )
}