"use client"

import React from "react"
import { Mail, Linkedin, MapPin, Phone, ExternalLink, ChevronRight } from "lucide-react"
// ThemeProvider is now in the providers.tsx file
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/lib/utils"

// Import separated components
import { SectionContainer } from "@/components/resume/section-container"
import { HeroSection } from "@/components/resume/hero-section"

/**
 * Main page component that assembles all resume sections
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full -z-10" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full -z-10" aria-hidden="true"></div>
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-primary/20 rounded-full -z-10" aria-hidden="true"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary/20 rounded-full -z-10" aria-hidden="true"></div>

        {/* Floating navigation for desktop */}
        <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block" aria-label="Section navigation">
          <ul className="space-y-4">
            {["hero", "competencies", "experience", "education", "patents", "recognition"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="w-3 h-3 rounded-full bg-muted hover:bg-primary transition-colors block"
                  aria-label={`Navigate to ${section} section`}
                />
              </li>
            ))}
          </ul>
        </nav>

        <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/80 border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold relative group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                {resumeData.personal.name}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
            </h1>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <a
                href="#contact"
                className="hidden md:flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                aria-label="Jump to contact section"
              >
                Contact
                <ChevronRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <HeroSection />

          {/* Core Competencies Section */}
          <SectionContainer title="Core Competencies" id="competencies" animateIn={true}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {resumeData.coreCompetencies.map((competency, index) => (
                <div key={index} className="p-4 border rounded-lg bg-card hover:shadow-md transition-all hover:-translate-y-1 text-center">
                  <span className="font-medium text-sm">{competency}</span>
                </div>
              ))}
            </div>
          </SectionContainer>

          {/* Professional Experience Section */}
          <SectionContainer title="Professional Experience" id="experience" animateIn={true}>
            <div className="space-y-8">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="border rounded-lg p-6 bg-card hover:shadow-md transition-all">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-primary">{exp.company} | {exp.position}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{exp.period} | {exp.location}</p>
                    {exp.description && (
                      <p className="text-sm text-muted-foreground italic mt-1">{exp.description}</p>
                    )}
                  </div>
                  
                  {exp.categories ? (
                    <div className="space-y-6">
                      {Object.entries(exp.categories).map(([key, category]) => (
                        <div key={key}>
                          <h4 className="font-semibold mb-3 text-primary">{category.title}</h4>
                          <ul className="space-y-2">
                            {category.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-3">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true"></div>
                                <span className="text-sm leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {exp.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true"></div>
                          <span className="text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </SectionContainer>

          {/* Education Section */}
          <SectionContainer title="Education" id="education" animateIn={true}>
            <div className="p-6 border rounded-lg bg-card hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold">{resumeData.education.university.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{resumeData.education.university.degree}</p>
              <p className="text-sm mb-2">Emphasis: {resumeData.education.university.emphasis}</p>
              <p className="text-sm text-muted-foreground">{resumeData.education.university.location}</p>
            </div>
          </SectionContainer>

          {/* Patents & Intellectual Property Section */}
          <SectionContainer title="Patents & Intellectual Property" id="patents" animateIn={true}>
            <div className="p-6 border rounded-lg bg-card hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-4">Technical Innovation & AI Leadership</h3>
              <p className="mb-4">{resumeData.patents.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* AI-Related Patents - Highlighted */}
                <div className="border border-primary/30 rounded-lg p-4 bg-primary/5">
                  <h4 className="text-lg font-medium text-primary mb-3">AI & Computer Vision Patents</h4>
                  <ul className="space-y-4">
                    {resumeData.patents.ai.map((patent, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1.5 min-w-[1.5rem] font-mono text-xs bg-primary/20 rounded px-1 text-center">
                          {patent.id}
                        </div>
                        <div>
                          <p className="font-medium">{patent.title}</p>
                          <p className="text-sm text-muted-foreground">{patent.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Hardware Patents */}
                <div className="border border-muted rounded-lg p-4">
                  <h4 className="text-lg font-medium mb-3">Hardware & Projection Patents</h4>
                  <ul className="space-y-4">
                    {resumeData.patents.hardware.map((patent, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1.5 min-w-[1.5rem] font-mono text-xs bg-muted rounded px-1 text-center">
                          {patent.id}
                        </div>
                        <div>
                          <p className="font-medium">{patent.title}</p>
                          <p className="text-sm text-muted-foreground">{patent.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SectionContainer>


          {/* Recognition & Professional Involvement Section */}
          <SectionContainer title="Recognition & Professional Involvement" id="recognition" animateIn={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.recognition.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg bg-card hover:shadow-md transition-all hover:-translate-y-1">
                  <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{item.category}</p>
                  {item.year && <p className="text-sm font-medium">{item.year}</p>}
                  {item.details && <p className="text-sm mt-1">{item.details}</p>}
                </div>
              ))}
            </div>
          </SectionContainer>

        </main>

        <footer className="bg-muted py-8 mt-12" id="contact">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h2 className="text-xl font-bold mb-2">{resumeData.personal.name}</h2>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail size={14} aria-hidden="true" />
                    <a href={`mailto:${resumeData.personal.email}`} className="hover:text-primary transition-colors">
                      {resumeData.personal.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone size={14} aria-hidden="true" />
                    <span>{resumeData.personal.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} aria-hidden="true" />
                    <span>{resumeData.personal.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={`https://www.${resumeData.personal.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
              © 2025 {resumeData.personal.name}. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
  )
}