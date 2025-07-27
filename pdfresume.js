// pdfResume.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link, Image, Font } from '@react-pdf/renderer';

// Register fonts (optional)
Font.register({
  family: 'Inter',
  fonts: [
    { src: '/fonts/Inter/static/Inter_24pt-Regular.ttf' },
    { src: '/fonts/Inter/static/Inter_24pt-Bold.ttf', fontWeight: 'bold' },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Inter',
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3B82F6', // primary blue color
    borderBottom: '1px solid #E5E7EB',
    paddingBottom: 3,
  },
  subheading: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  headerLeft: {
    width: '70%',
  },
  headerRight: {
    width: '30%',
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B82F6', // primary blue
  },
  title: {
    fontSize: 12,
    marginBottom: 5,
    color: '#4B5563',
  },
  contact: {
    fontSize: 8,
    color: '#6B7280',
    marginTop: 2,
  },
  summary: {
    fontSize: 9,
    lineHeight: 1.5,
    marginBottom: 10,
    color: '#4B5563',
  },
  skill: {
    fontSize: 9,
    backgroundColor: '#EFF6FF', // light blue
    color: '#3B82F6',
    padding: '3 6',
    borderRadius: 4,
    marginRight: 5,
    marginBottom: 5,
    display: 'inline-block',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  skillSection: {
    marginBottom: 8,
  },
  skillCategory: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
  },
  experienceItem: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  companyDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 9,
    marginBottom: 3,
  },
  company: {
    color: '#4B5563',
  },
  date: {
    color: '#6B7280',
  },
  bulletPoint: {
    fontSize: 8,
    lineHeight: 1.4,
    marginBottom: 2,
    flexDirection: 'row',
  },
  bullet: {
    width: 8,
    fontSize: 8,
  },
  bulletText: {
    flex: 1,
  },
  projectItem: {
    marginBottom: 8,
  },
  education: {
    marginBottom: 8,
  },
  patentItem: {
    fontSize: 8,
    lineHeight: 1.4,
    marginBottom: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 8,
    color: '#9CA3AF',
  },
});

// Create the PDF document
const PDFResume = () => (
  <Document>
    {/* PAGE 1 */}
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.name}>Ben Conway</Text>
          <Text style={styles.title}>Technical Product Lead & AI Enthusiast</Text>
          <Text style={styles.summary}>
            Building innovative AI solutions with a focus on healthcare and enterprise applications. 
            Co-founder with extensive technical product leadership experience and multiple patents 
            in holographic and 3D technology.
          </Text>
          
          {/* Contact Details */}
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text style={styles.contact}>Chicago, IL</Text>
            <Text style={styles.contact}> • </Text>
            <Link src="mailto:benjamin.t.conway@gmail.com" style={styles.contact}>
              benjamin.t.conway@gmail.com
            </Link>
            <Text style={styles.contact}> • </Text>
            <Link src="https://www.linkedin.com/in/conwaybenjamin/" style={styles.contact}>
              linkedin.com/in/conwaybenjamin
            </Link>
          </View>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.heading}>Technical Skills</Text>
        <View style={styles.columnContainer}>
          <View style={styles.column}>
            <View style={styles.skillSection}>
              <Text style={styles.skillCategory}>Programming & Development</Text>
              <Text style={{ fontSize: 9, marginBottom: 5 }}>
                Python (Intermediate) • JavaScript/TypeScript (Beginner) • 
                Next.js (Beginner) • SQL (Beginner) • Git (Beginner)
              </Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.skillSection}>
              <Text style={styles.skillCategory}>AI & Machine Learning</Text>
              <Text style={{ fontSize: 9, marginBottom: 5 }}>
                RAG Architecture • LLM Integration • Vector Databases • 
                Prompt Engineering • Supabase • Google Cloud Platform • REST APIs
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.heading}>Education & Learning</Text>
        <View style={styles.columnContainer}>
          <View style={styles.column}>
            <View style={styles.education}>
              <Text style={styles.subheading}>Technical Education Path for AI</Text>
              <Text style={{ fontSize: 8, color: '#3B82F6', marginBottom: 2 }}>
                Self-Learning Curriculum for MS in AI Preparation
              </Text>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Python Programming & Data Structures - Google Python Advanced Course & LeetCode (2025)
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Mathematics for ML - MIT OpenCourseWare (Linear Algebra, Calculus, Statistics)
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Algorithms & CS Theory - UC San Diego Algorithmic Toolbox & Data Structures
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  ML & AI Fundamentals - Stanford CS229 & Fast.ai Deep Learning
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.education}>
              <Text style={styles.subheading}>University of Southern California</Text>
              <Text style={{ fontSize: 8, color: '#6B7280', marginBottom: 2 }}>2005 - 2009</Text>
              <Text style={{ fontSize: 9, marginBottom: 2 }}>
                Bachelor of Science in Business Administration
              </Text>
              <Text style={{ fontSize: 8, marginBottom: 2 }}>
                Entrepreneurship Program at Lloyd Greif Center
              </Text>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Relevant Coursework: Calculus, Probability, Business Statistics, Data Analysis
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Academic Research: Statistical analysis of technology adoption trends
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.heading}>Professional Experience</Text>
        <View style={styles.experienceItem}>
          <View style={styles.companyDate}>
            <Text style={[styles.company, styles.jobTitle]}>Co-Founder & COO</Text>
            <Text style={styles.date}>August 2012 - Present</Text>
          </View>
          <Text style={styles.company}>VNTANA</Text>
          <View style={{ marginTop: 3 }}>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Raised $15M in venture funding through strategic investor relationships</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Led company pivot from holographic hardware to 3D software platform</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Managed cross-functional teams across product, engineering, and sales</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Co-inventor on multiple patents for holographic technology innovations</Text>
            </View>
          </View>
        </View>
        <View style={styles.columnContainer}>
          <View style={[styles.column, styles.experienceItem]}>
            <View style={styles.companyDate}>
              <Text style={[styles.company, styles.jobTitle]}>District Manager</Text>
              <Text style={styles.date}>2010 - 2012</Text>
            </View>
            <Text style={styles.company}>ADP</Text>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Enterprise software implementation and product knowledge</Text>
            </View>
          </View>
          <View style={[styles.column, styles.experienceItem]}>
            <View style={styles.companyDate}>
              <Text style={[styles.company, styles.jobTitle]}>Co-Founder & CEO</Text>
              <Text style={styles.date}>2009 - 2010</Text>
            </View>
            <Text style={styles.company}>Gameday Glasses</Text>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Early entrepreneurial venture developing consumer products</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.heading}>Featured Projects</Text>
        <View style={styles.columnContainer}>
          <View style={[styles.column, styles.projectItem]}>
            <Text style={styles.subheading}>Medical Communication Simulation Tool</Text>
            <Text style={{ fontSize: 8, color: '#6B7280', marginBottom: 2 }}>2023 - Present • Next.js, OpenAI, Supabase</Text>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Designed and built AI system for physicians to practice patient communications</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Developed full-stack app with Next.js, Supabase, and OpenAI integration</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Currently used at University of Chicago for research</Text>
            </View>
          </View>
          <View style={[styles.column, styles.projectItem]}>
            <Text style={styles.subheading}>AI-Enhanced Sales Assistant</Text>
            <Text style={{ fontSize: 8, color: '#6B7280', marginBottom: 2 }}>2023 • Python, Langchain, Weaviate</Text>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Built NLP tool to automate sales content generation</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Created knowledge base structure and optimization strategy</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Solution reduced content creation time by approximately 65%</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>Page 1 of 2</Text>
      </View>
    </Page>

    {/* PAGE 2 */}
    <Page size="A4" style={styles.page}>

      {/* Patents */}
      <View style={styles.section}>
        <Text style={styles.heading}>Patents & Intellectual Property</Text>
        <Text style={{ fontSize: 9, marginBottom: 5 }}>Co-Inventor on Multiple Patents</Text>
        <View style={styles.columnContainer}>
          <View style={styles.column}>
            <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 3 }}>AI & Computer Vision Patents</Text>
            <View style={styles.patentItem}>
              <Text style={{ fontWeight: 'bold' }}>US10832424 - Interactive Holographic Avatar Control Systems</Text>
              <Text>Machine learning system for user interaction with holographic projections</Text>
            </View>
            <View style={styles.patentItem}>
              <Text style={{ fontWeight: 'bold' }}>US11436504 - Depth Key Compositing Systems</Text>
              <Text>AI-assisted digital image processing for 3D rendering</Text>
            </View>
          </View>
          <View style={styles.column}>
            <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 3 }}>Hardware & Projection Patents</Text>
            <View style={styles.patentItem}>
              <Text style={{ fontWeight: 'bold' }}>US9813745 - Foil Tensioning Systems for Pepper's Ghost Illusion</Text>
              <Text>Novel holographic projection screen technology</Text>
            </View>
            <View style={styles.patentItem}>
              <Text style={{ fontWeight: 'bold' }}>US10156812 - Low-Profile Bounce Chamber</Text>
              <Text>Efficient compact holographic projection systems</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Research Interests */}
      <View style={styles.section}>
        <Text style={styles.heading}>Research Interests</Text>
        <View style={styles.columnContainer}>
          <View style={styles.column}>
            <View style={styles.patentItem}>
              <Text style={{ fontWeight: 'bold' }}>Natural Language Processing</Text>
              <Text>Specialized domains (healthcare, education)</Text>
            </View>
            <View style={styles.patentItem}>
              <Text style={{ fontWeight: 'bold' }}>Multimodal AI Systems</Text>
              <Text>Combining text, image, and 3D data</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.patentItem}>
              <Text style={{ fontWeight: 'bold' }}>Human-AI Interaction</Text>
              <Text>Communication and collaboration interfaces</Text>
            </View>
            <View style={styles.patentItem}>
              <Text style={{ fontWeight: 'bold' }}>Healthcare AI Applications</Text>
              <Text>Focus on healthcare AI applications that align with UT Austin's research strengths</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Awards */}
      <View style={styles.section}>
        <Text style={styles.heading}>Awards & Recognitions</Text>
        <View style={styles.columnContainer}>
          <View style={styles.column}>
            <View style={styles.patentItem}>
              <Text style={{ fontWeight: 'bold' }}>Unity Award (2024)</Text>
              <Text>'Most Innovative Consumer Experience' for 3D commerce solutions with Kohler</Text>
            </View>
            <View style={styles.patentItem}>
              <Text style={{ fontWeight: 'bold' }}>Forbes 30 Under 30 (2018)</Text>
              <Text>Recognized for innovation in technology</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.patentItem}>
              <Text style={{ fontWeight: 'bold' }}>Inc. 500 (2018)</Text>
              <Text>Company ranked #497</Text>
            </View>
            <View style={styles.patentItem}>
              <Text style={{ fontWeight: 'bold' }}>Patrick Soon-Shiong Innovation Award (2017)</Text>
              <Text>Recognized for pioneering work in AR technology by Los Angeles Business Journal</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Footer with contact details */}
      <View style={[styles.footer, { flexDirection: 'row', justifyContent: 'center', gap: 5 }]}>
        <Text>Ben Conway</Text>
        <Text>•</Text>
        <Text>Chicago, IL</Text>
        <Text>•</Text>
        <Link src="mailto:benjamin.t.conway@gmail.com">benjamin.t.conway@gmail.com</Link>
        <Text>•</Text>
        <Link src="https://www.linkedin.com/in/conwaybenjamin/">linkedin.com/in/conwaybenjamin</Link>
        <Text>•</Text>
        <Text>Page 2 of 2</Text>
      </View>
    </Page>
  </Document>
);

export default PDFResume;