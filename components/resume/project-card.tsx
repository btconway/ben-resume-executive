"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  period: string
  tags: string[]
  details: string[]
}

/**
 * Displays a project with its details and technologies used
 * Includes hover effects and responsive layout
 */
export function ProjectCard({ title, period, tags, details }: ProjectCardProps) {
  return (
    <div 
      className="p-6 border rounded-lg bg-card hover:shadow-md transition-all hover:-translate-y-1"
      aria-labelledby={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
        <h3 
          id={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-lg font-semibold"
        >
          {title}
        </h3>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <ul className="space-y-2 mt-4">
        {details.map((detail, index) => (
          <li key={index} className="text-sm flex items-start gap-2">
            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true"></div>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}