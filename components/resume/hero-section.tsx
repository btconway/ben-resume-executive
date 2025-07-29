"use client"

import React from "react"
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/lib/utils"

/**
 * Hero section component for the resume
 * Contains personal info, skills, and contact links
 */
export function HeroSection() {
  return (
    <section id="hero" className="py-12 md:py-20 flex flex-col md:flex-row gap-8 items-center">
      <div className="max-w-2xl">
        <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-fadeIn">
          {resumeData.personal.title}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slideUp">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            {resumeData.personal.name}
          </span>
        </h1>
        <p className="text-lg text-muted-foreground mb-6 animate-slideUp animation-delay-100">
          {resumeData.personal.summary}
        </p>
        <div className="flex flex-wrap gap-3 mb-6 animate-slideUp animation-delay-200">
          {resumeData.coreCompetencies.slice(0, 6).map((skill, i) => (
            <Badge key={i} variant="outline" className="px-3 py-1 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-6 text-sm text-muted-foreground animate-slideUp animation-delay-250">
          <div className="flex items-center gap-2">
            <Mail size={16} aria-hidden="true" />
            <span>{resumeData.personal.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} aria-hidden="true" />
            <span>{resumeData.personal.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} aria-hidden="true" />
            <span>{resumeData.personal.location}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 animate-slideUp animation-delay-300">
          <a
            href={`mailto:${resumeData.personal.email}`}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            aria-label={`Email ${resumeData.personal.name}`}
          >
            <Mail size={16} aria-hidden="true" />
            <span>Contact Me</span>
          </a>
          <a
            href={`https://www.${resumeData.personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors"
            aria-label={`Visit ${resumeData.personal.name}'s LinkedIn profile`}
          >
            <Linkedin size={16} aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <div 
        className="relative w-full max-w-sm aspect-square rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center animate-float"
        aria-hidden="true"
      >
        <div className="absolute inset-4 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow"></div>
        <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
          <span className="text-4xl font-bold text-primary/70">
            {resumeData.personal.name.split(' ').map(name => name[0]).join('')}
          </span>
        </div>
      </div>
    </section>
  )
}