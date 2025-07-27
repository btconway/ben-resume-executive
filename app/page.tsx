"use client"

import React from "react"
import { Mail, Linkedin, MapPin, Github, ExternalLink, ChevronRight } from "lucide-react"
// ThemeProvider is now in the providers.tsx file
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/lib/utils"

// Import separated components
import { SectionContainer } from "@/components/resume/section-container"
import { SkillBar, SkillChip } from "@/components/resume/skill-components"
import { ProjectCard } from "@/components/resume/project-card"
import { TimelineItem } from "@/components/resume/timeline-item"
import { ResearchCard } from "@/components/resume/research-card"
import { HeroSection } from "@/components/resume/hero-section"
import { AwardItem } from "@/components/resume/award-item"

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
            {["hero", "skills", "education", "projects", "patents", "experience", "research", "awards"].map((section) => (
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

          {/* Technical Skills Section */}
          <SectionContainer title="Technical Skills" id="skills" animateIn={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Programming & Development</h3>

                {resumeData.skills.programming.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
                <p className="text-sm text-muted-foreground mb-3">Hands-on experience aided by AI tools</p>

                <div className="grid grid-cols-2 gap-3">
                  {resumeData.skills.ai.map((skill, index) => (
                    <SkillChip key={index} name={skill} />
                  ))}
                </div>
              </div>
            </div>
          </SectionContainer>

          {/* Education Section */}
          <SectionContainer title="Education & Learning" id="education" animateIn={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg bg-card hover:shadow-md transition-all hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">{resumeData.education.aiPath.title}</h3>
                <p className="text-sm text-primary font-medium mb-4">{resumeData.education.aiPath.subtitle}</p>
                <p className="text-sm mb-4">Strategic curriculum designed to build foundational knowledge in computer science, mathematics and machine learning concepts required for advanced AI research and development:</p>

                <ul className="space-y-3">
                  {resumeData.education.aiPath.courses.map((course, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true"></div>
                      <div>
                        <p className="font-medium">{course.name}</p>
                        <p className="text-sm text-muted-foreground">{course.provider} - {course.completion}</p>
                        <p className="text-xs mt-1">{course.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border rounded-lg bg-card hover:shadow-md transition-all hover:-translate-y-1">
                <h3 className="text-xl font-semibold">{resumeData.education.university.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{resumeData.education.university.period}</p>

                <div className="mb-4">
                  <p className="font-medium">{resumeData.education.university.degree}</p>
                  <p className="text-sm">{resumeData.education.university.program}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true"></div>
                    <div>
                      <p className="font-medium">Relevant Technical Coursework</p>
                      <p className="text-sm text-muted-foreground">{resumeData.education.university.relevantCourses}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true"></div>
                    <div>
                      <p className="font-medium">Academic Research Project</p>
                      <p className="text-sm text-muted-foreground">{resumeData.education.university.research}</p>
                    </div>
                  </li>
                </ul>
                
                <div className="rounded-lg bg-muted p-3">
                  <h4 className="text-sm font-medium mb-2">Future Academic Plans</h4>
                  <p className="text-xs">Applying to MS in AI programs to formalize technical education, with focus on healthcare and enterprise applications. Seeking programs with strong research components in NLP and multimodal AI systems.</p>
                </div>
              </div>
            </div>
          </SectionContainer>

          {/* AI Projects Section */}
          <SectionContainer title="Featured Projects" id="projects" animateIn={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  period={project.period}
                  tags={project.tags}
                  details={[
                    ...project.details,
                    // Additional details from the original component that weren't in the shared data
                    ...(project.title === "Medical Communication Simulation Tool" 
                      ? [
                          "Designed the conversation flow and prompt engineering for realistic clinical scenarios",
                          "Implemented user authentication and session management features"
                        ]
                      : project.title === "AI-Enhanced Sales Assistant" 
                      ? [
                          "Collaborated with team using Python, Langchain framework and Weaviate vector database",
                          "Created custom prompt templates to ensure consistent, high-quality content output"
                        ]
                      : [])
                  ]}
                />
              ))}
            </div>
          </SectionContainer>

          {/* Patents & Intellectual Property Section */}
          <SectionContainer title="Patents & Intellectual Property" id="patents" animateIn={true}>
            <div className="p-6 border rounded-lg bg-card hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-4">Co-Inventor on Multiple Patents</h3>
              <p className="mb-4">Named inventor on several granted and pending patents for innovations in holographic and 3D technology, including AI-related applications:</p>
              
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
              
              <p className="mt-4 text-sm text-muted-foreground">These innovations represent a cross-disciplinary approach combining physical computing, optics, and emerging AI technologies.</p>
            </div>
          </SectionContainer>

          {/* Professional Experience Section */}
          <SectionContainer title="Professional Journey" id="experience" animateIn={true}>
            <div className="space-y-8">
              <TimelineItem
                company={resumeData.experience[0].company}
                position={resumeData.experience[0].position}
                period={resumeData.experience[0].period}
                details={[
                  ...resumeData.experience[0].details,
                  // Additional details from the original component
                  "Secured and managed enterprise partnerships with Adidas, Nike, Kohler, and other Fortune 500 companies",
                  "Developed go-to-market strategy resulting in ~$2M ARR",
                  "Negotiated and closed multiple $500K+ enterprise deals with major brands",
                  "Created strategic partnerships with key industry technology platforms",
                  "Identified market opportunity for 3D asset optimization, leading to development of company's core IP",
                  "Developed proprietary IP that became core to company's technology advantage",
                  "Collaborated on R&D for novel projection and interaction systems",
                  "Represented company at industry conferences and speaking engagements"
                ]}
              />

              <div className="grid grid-cols-2 gap-6">
                <TimelineItem
                  company={resumeData.experience[1].company}
                  position={resumeData.experience[1].position}
                  period={resumeData.experience[1].period}
                  details={resumeData.experience[1].details}
                  compact={true}
                />

                <TimelineItem
                  company={resumeData.experience[2].company}
                  position={resumeData.experience[2].position}
                  period={resumeData.experience[2].period}
                  details={resumeData.experience[2].details}
                  compact={true}
                />
              </div>
            </div>
          </SectionContainer>

          {/* Research Interests Section */}
          <SectionContainer title="Research Interests" id="research" animateIn={true}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {resumeData.research.map((research, index) => (
                <ResearchCard 
                  key={index}
                  title={research.title}
                  description={research.description}
                  icon={research.icon}
                />
              ))}
            </div>
          </SectionContainer>

          {/* Awards Section */}
          <SectionContainer title="Awards & Recognitions" id="awards" animateIn={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.awards.map((award, index) => (
                <AwardItem
                  key={index}
                  title={award.title}
                  year={award.year}
                  description={award.description}
                  icon={award.icon}
                />
              ))}
            </div>
          </SectionContainer>
        </main>

        <footer className="bg-muted py-8 mt-12" id="contact">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h2 className="text-xl font-bold mb-2">{resumeData.personal.name}</h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} aria-hidden="true" />
                    <span>{resumeData.personal.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail size={14} aria-hidden="true" />
                    <a href={`mailto:${resumeData.personal.email}`} className="hover:text-primary transition-colors">
                      {resumeData.personal.email}
                    </a>
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
                <a
                  href={`https://github.com/${resumeData.personal.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github size={18} aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label="Personal website"
                >
                  <ExternalLink size={18} aria-hidden="true" />
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