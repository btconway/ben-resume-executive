import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Type definitions for resume data
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

interface ProgrammingSkill {
  name: string;
  level: SkillLevel;
}

// Resume data
export const resumeData = {
  personal: {
    name: "Ben Conway",
    title: "Technical Product Lead & AI Enthusiast",
    location: "Chicago, IL",
    email: "benjamin.t.conway@gmail.com",
    linkedin: "linkedin.com/in/conwaybenjamin",
    github: "btconway",
    summary: "Building innovative AI solutions with a focus on healthcare and enterprise applications. Co-founder with extensive technical product leadership experience and multiple patents in holographic and 3D technology.",
  },
  
  skills: {
    programming: [
      { name: "Python", level: "Intermediate" },
      { name: "JavaScript/TypeScript", level: "Beginner" },
      { name: "Next.js", level: "Beginner" },
      { name: "SQL", level: "Beginner" },
      { name: "Git", level: "Beginner" },
    ] as ProgrammingSkill[],
    ai: [
      "RAG Architecture",
      "LLM Integration",
      "Vector Databases",
      "Prompt Engineering",
      "Supabase",
      "Google Cloud Platform",
      "REST APIs"
    ]
  },
  
  education: {
    aiPath: {
      title: "Technical Education Path for AI",
      subtitle: "Self-Learning Curriculum for MS in AI Preparation",
      courses: [
        {
          name: "Introduction to Discrete Mathematics for Computer Science",
          provider: "Coursera, UC San Diego",
          completion: "Expected June 2025",
          description: "Building mathematical foundation for understanding computer science concepts and algorithms"
        },
        {
          name: "Google's Crash Course on Python",
          provider: "Coursera",
          completion: "Expected April 2025",
          description: "Developing Python programming skills for data analysis and algorithmic problem-solving"
        },
        {
          name: "Algorithms, Part I",
          provider: "Coursera, Princeton University",
          completion: "Expected June 2025",
          description: "Data structures and their Java implementations, plus sorting/searching algorithms (CS 314 equivalent)"
        },
        {
          name: "Algorithmic Toolbox",
          provider: "Coursera, UC San Diego",
          completion: "Expected September 2025",
          description: "Dynamic programming, divide-and-conquer, and greedy algorithms (CS 331 equivalent)"
        },
        {
          name: "Linear Algebra",
          provider: "MIT OpenCourseWare",
          completion: "Expected September 2025",
          description: "Building mathematical foundation for understanding machine learning algorithms and research papers"
        }
      ]
    },
    university: {
      name: "University of Southern California",
      period: "2005 - 2009",
      degree: "Bachelor of Science in Business Administration",
      program: "Entrepreneurship Program at Lloyd Greif Center",
      relevantCourses: "Calculus, Probability, Business Statistics, Data Analysis",
      research: "Statistical analysis of technology adoption trends"
    }
  },
  
  projects: [
    {
      title: "Medical Communication Simulation Tool",
      period: "2024 - Present",
      tags: ["Next.js", "OpenAI", "Supabase"],
      details: [
        "Designed and built AI system for physicians to practice patient communications",
        "Developed full-stack app with Next.js, Supabase, and OpenAI integration",
        "Currently used at University of Chicago for research and will be presented at IPSSW Conference in Munich"
      ]
    },
    {
      title: "AI-Enhanced Sales Assistant",
      period: "2024",
      tags: ["Python", "Langchain", "Weaviate"],
      details: [
        "Built NLP tool to automate sales content generation",
        "Created knowledge base structure and optimization strategy",
        "Solution reduced content creation time by approximately 65%"
      ]
    }
  ],
  
  experience: [
    {
      company: "VNTANA",
      position: "Co-Founder & COO",
      period: "August 2012 - Present",
      details: [
        "Raised $15M in venture funding through strategic investor relationships",
        "Led company pivot from holographic hardware to 3D software platform",
        "Managed cross-functional teams across product, engineering, and sales",
        "Co-inventor on multiple patents for holographic technology innovations"
      ]
    },
    {
      company: "ADP",
      position: "District Manager",
      period: "2010 - 2012",
      details: [
        "Top performer in software sales and customer account management"
      ]
    },
    {
      company: "Gameday Glasses",
      position: "Co-Founder & CEO",
      period: "2009 - 2010",
      details: [
        "Early entrepreneurial venture developing consumer products"
      ]
    }
  ],
  
  patents: {
    ai: [
      {
        id: "US10832424",
        title: "Interactive Holographic Avatar Control Systems",
        description: "Machine learning system for user interaction with holographic projections"
      },
      {
        id: "US11436504", 
        title: "Depth Key Compositing Systems",
        description: "AI-assisted digital image processing for 3D rendering"
      }
    ],
    hardware: [
      {
        id: "US9813745",
        title: "Foil Tensioning Systems for Pepper's Ghost Illusion",
        description: "Novel holographic projection screen technology"
      },
      {
        id: "US10156812",
        title: "Low-Profile Bounce Chamber",
        description: "Efficient compact holographic projection systems" 
      }
    ]
  },
  
  research: [
    {
      title: "Natural Language Processing",
      description: "Specialized domains (healthcare, education)",
      icon: "💬"
    },
    {
      title: "Multimodal AI Systems",
      description: "Combining text, image, and 3D data",
      icon: "🔄"
    },
    {
      title: "Human-AI Interaction",
      description: "Communication and collaboration interfaces",
      icon: "👥"
    },
    {
      title: "Healthcare AI Applications",
      description: "Focus on healthcare AI applications that align with UT Austin's research strengths",
      icon: "🏥"
    }
  ],
  
  awards: [
    {
      title: "Unity Award",
      year: "2024",
      description: "Award to VNTANA (company I co-founded) for 'Most Innovative Consumer Experience' with Kohler",
      icon: "🎮"
    },
    {
      title: "Forbes 30 Under 30",
      year: "2018",
      description: "Recognized for innovation in technology",
      icon: "🏆"
    },
    {
      title: "Inc. 500",
      year: "2018",
      description: "Award to VNTANA (company I co-founded) - ranked #497",
      icon: "🚀"
    },
    {
      title: "Patrick Soon-Shiong Innovation Award",
      year: "2017", 
      description: "Award to VNTANA (company I co-founded) for AR technology by Los Angeles Business Journal",
      icon: "💡"
    }
  ]
}