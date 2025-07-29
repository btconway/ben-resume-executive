import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Type definitions for resume data

// Resume data
export const resumeData = {
  personal: {
    name: "Benjamin Conway",
    title: "Strategic Partnerships & Business Development Executive",
    location: "Chicago, IL → SF Bay Area",
    email: "benjamin.t.conway@gmail.com",
    phone: "714-746-8704",
    linkedin: "linkedin.com/in/conwaybenjamin",
    github: "btconway",
    summary: "Strategic partnerships executive with proven track record of building enterprise technology alliances from zero to industry-leading ecosystem. As Co-Founder & COO of VNTANA, created and scaled partnership program to 15+ strategic alliances with Sony, Meta, Amazon, and Google while driving $8M+ in total revenue. Combined entrepreneurial agility with enterprise-grade execution, navigating complex Fortune 500 procurement processes and regulatory compliance. Seeking to leverage partnership innovation expertise and AI business understanding to scale OpenAI's strategic alliance program across AMER region.",
  },
  
  coreCompetencies: [
    "Strategic Partnerships",
    "Enterprise Channel Development",
    "Go-to-Market Strategy",
    "Cross-Functional Leadership",
    "P&L Management",
    "Regulatory Compliance",
    "AI Business Applications",
    "SaaS Partnerships",
    "Contract Negotiation",
    "Systems Integration",
    "Revenue Growth",
    "Stakeholder Management"
  ],
  
  education: {
    university: {
      name: "University of Southern California",
      period: "Graduated",
      degree: "Bachelor of Business Administration",
      emphasis: "Entrepreneurship",
      location: "Los Angeles, CA"
    }
  },
  
  
  experience: [
    {
      company: "VNTANA",
      position: "Co-Founder & Chief Operating Officer",
      period: "2012 – Present",
      location: "Los Angeles, CA",
      description: "SaaS platform for 3D/AR commerce and hologram experiences (16-30 employees, $16M raised)",
      categories: {
        partnerships: {
          title: "Partnership Development & Strategic Alliances:",
          details: [
            "Built partnership program from zero to 15+ strategic alliances including Sony (XYN platform infrastructure), Meta Reality Labs (3D commerce API), Amazon (3D asset publishing), Google Cloud, Canva, and PTC",
            "Secured Fortune 500 enterprise customers including Johnson & Johnson, Puma, Kohler, Patagonia, Pfizer, AT&T, and Ericsson through direct sales and partner channels",
            "Drove $8M+ total revenue across company lifecycle with 90% closure rate in final-stage enterprise negotiations",
            "Orchestrated cross-functional GTM initiatives coordinating engineering, product, sales, and marketing teams to deliver integrated partner solutions and meet enterprise requirements"
          ]
        },
        operations: {
          title: "Operational Leadership & Compliance:",
          details: [
            "Led SOC2 Type II certification establishing enterprise-grade security standards required for pharmaceutical and Fortune 500 partnerships",
            "Scaled team from 3 to 30 employees at peak while maintaining lean operations and high performance culture",
            "Co-raised $16M total funding from investors including Mark Cuban, Brendan Iribe (Oculus co-founder), and General David Petraeus",
            "Navigated complex enterprise procurement including HIPAA compliance for healthcare clients and regulatory requirements across multiple industries"
          ]
        },
        business: {
          title: "Business Development & Market Expansion:",
          details: [
            "Pioneered new market categories through innovative partnerships (first 3D asset integration with Amazon product pages)",
            "Established multi-industry presence spanning retail, manufacturing, telecommunications, and healthcare verticals",
            "Created scalable processes for partner onboarding, technical integration, and performance measurement"
          ]
        },
        technical: {
          title: "Technical Innovation & AI Leadership:",
          details: [
            "Co-invented 4+ patents including AI/ML systems for holographic interaction (US10832424) and computer vision applications",
            "Led development of AI-powered sales automation tool using Python, Langchain, and Weaviate, reducing content creation time by 65%",
            "Won Unity Award for \"Most Innovative Consumer Experience\" with Kohler partnership (2024)"
          ]
        }
      }
    },
    {
      company: "ClinicalSim.ai",
      position: "Founder & CEO (Part-time)",
      period: "2024 – Present",
      details: [
        "Developed AI-powered medical training platform leveraging conversational AI and natural language processing",
        "Secured partnerships with University of Chicago and Advocate Health demonstrating enterprise AI deployment capabilities",
        "Achieved HIPAA compliance and healthcare data security standards for regulated industry"
      ]
    },
    {
      company: "ADP",
      position: "District Manager",
      period: "2010 – 2012",
      location: "Los Angeles, CA",
      details: [
        "Exceeded revenue targets selling enterprise payroll and HR solutions to SMB market",
        "Built systematic approach to customer acquisition increasing pipeline velocity 40%"
      ]
    }
  ],
  
  patents: {
    description: "Co-invented 4+ patents including AI/ML systems for holographic interaction (US10832424) and computer vision applications",
    ai: [
      {
        id: "US10832424",
        title: "Interactive Holographic Avatar Control Systems",
        description: "AI/ML systems for user interaction with holographic projections"
      },
      {
        id: "US11436504", 
        title: "Depth Key Compositing Systems",
        description: "Computer vision applications for 3D rendering"
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
  
  recognition: [
    {
      title: "Forbes 30 Under 30",
      category: "Marketing & Advertising",
      year: "2018"
    },
    {
      title: "Inc. 5000 Fastest-Growing Companies",
      category: "Company Recognition",
      year: "Multiple Years"
    },
    {
      title: "Speaker",
      category: "Industry Conferences",
      details: "Autodesk University, PTC Global Conference, AWE"
    },
    {
      title: "Active Member",
      category: "Professional Organizations",
      details: "Khronos Group (3D technology standards)"
    },
    {
      title: "Board Advisor",
      category: "Professional Involvement",
      details: "Early-stage technology startups"
    }
  ],
  
}