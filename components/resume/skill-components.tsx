"use client"

import React from "react"
import { Progress } from "@/components/ui/progress"

/**
 * Represents a skill with a horizontal progress bar
 * Uses proficiency levels instead of precise percentages
 */
export function SkillBar({ name, level }: { name: string; level: "Beginner" | "Intermediate" | "Advanced" | "Expert" }) {
  // Map skill levels to percentage values for visual representation
  const levelToPercentage = {
    Beginner: 25,
    Intermediate: 50,
    Advanced: 75,
    Expert: 90
  }
  
  const percentage = levelToPercentage[level]
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}</span>
      </div>
      <Progress 
        value={percentage} 
        className="h-2" 
        indicatorClassName="bg-gradient-to-r from-primary to-primary/70"
        aria-label={`${name} skill level: ${level}`} 
      />
    </div>
  )
}

/**
 * Displays a skill as a chip/badge element
 * Used for skills with hands-on experience aided by AI tools
 */
export function SkillChip({ name }: { name: string }) {
  return (
    <div 
      className="px-3 py-2 rounded-md bg-primary/10 text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-default"
      aria-label={`Skill: ${name}`}
    >
      {name}
    </div>
  )
}