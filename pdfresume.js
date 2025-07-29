// pdfResume.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link, Image, Font } from '@react-pdf/renderer';
import { resumeData } from './lib/utils';

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
          <Text style={styles.name}>{resumeData.personal.name}</Text>
          <Text style={styles.title}>{resumeData.personal.title}</Text>
          <Text style={styles.summary}>
            {resumeData.personal.summary}
          </Text>
          
          {/* Contact Details */}
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text style={styles.contact}>{resumeData.personal.location}</Text>
            <Text style={styles.contact}> • </Text>
            <Text style={styles.contact}>{resumeData.personal.phone}</Text>
            <Text style={styles.contact}> • </Text>
            <Link src={`mailto:${resumeData.personal.email}`} style={styles.contact}>
              {resumeData.personal.email}
            </Link>
            <Text style={styles.contact}> • </Text>
            <Link src={`https://${resumeData.personal.linkedin}`} style={styles.contact}>
              {resumeData.personal.linkedin}
            </Link>
          </View>
        </View>
      </View>

      {/* Core Competencies */}
      <View style={styles.section}>
        <Text style={styles.heading}>Core Competencies</Text>
        <View style={styles.skillsContainer}>
          {resumeData.coreCompetencies.map((competency, index) => (
            <Text key={index} style={styles.skill}>
              {competency}
            </Text>
          ))}
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        <View style={styles.education}>
          <Text style={styles.subheading}>{resumeData.education.university.name}</Text>
          <Text style={{ fontSize: 8, color: '#6B7280', marginBottom: 2 }}>{resumeData.education.university.location}</Text>
          <Text style={{ fontSize: 9, marginBottom: 2 }}>
            {resumeData.education.university.degree} - {resumeData.education.university.emphasis}
          </Text>
          <Text style={{ fontSize: 8 }}>
            {resumeData.education.university.period}
          </Text>
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.heading}>Professional Experience</Text>
        {resumeData.experience.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <View style={styles.companyDate}>
              <Text style={[styles.company, styles.jobTitle]}>{exp.position}</Text>
              <Text style={styles.date}>{exp.period}</Text>
            </View>
            <Text style={styles.company}>{exp.company}{exp.location && ` - ${exp.location}`}</Text>
            {exp.description && (
              <Text style={{ fontSize: 8, color: '#6B7280', marginBottom: 3 }}>{exp.description}</Text>
            )}
            {exp.categories ? (
              Object.entries(exp.categories).map(([key, category]) => (
                <View key={key} style={{ marginTop: 5 }}>
                  <Text style={[styles.skillCategory, { fontSize: 9 }]}>{category.title}</Text>
                  {category.details.map((detail, detailIndex) => (
                    <View key={detailIndex} style={styles.bulletPoint}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.bulletText}>{detail}</Text>
                    </View>
                  ))}
                </View>
              ))
            ) : (
              exp.details && exp.details.map((detail, detailIndex) => (
                <View key={detailIndex} style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{detail}</Text>
                </View>
              ))
            )}
          </View>
        ))}
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
        <Text style={{ fontSize: 9, marginBottom: 5 }}>{resumeData.patents.description}</Text>
        <View style={styles.columnContainer}>
          <View style={styles.column}>
            <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 3 }}>AI & Computer Vision Patents</Text>
            {resumeData.patents.ai.map((patent, index) => (
              <View key={index} style={styles.patentItem}>
                <Text style={{ fontWeight: 'bold' }}>{patent.id} - {patent.title}</Text>
                <Text>{patent.description}</Text>
              </View>
            ))}
          </View>
          <View style={styles.column}>
            <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 3 }}>Hardware & Projection Patents</Text>
            {resumeData.patents.hardware.map((patent, index) => (
              <View key={index} style={styles.patentItem}>
                <Text style={{ fontWeight: 'bold' }}>{patent.id} - {patent.title}</Text>
                <Text>{patent.description}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Recognition & Professional Involvement */}
      <View style={styles.section}>
        <Text style={styles.heading}>Recognition & Professional Involvement</Text>
        <View style={styles.columnContainer}>
          <View style={styles.column}>
            {resumeData.recognition.slice(0, Math.ceil(resumeData.recognition.length / 2)).map((item, index) => (
              <View key={index} style={styles.patentItem}>
                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ fontSize: 8, color: '#6B7280' }}>{item.category} - {item.year || item.details}</Text>
              </View>
            ))}
          </View>
          <View style={styles.column}>
            {resumeData.recognition.slice(Math.ceil(resumeData.recognition.length / 2)).map((item, index) => (
              <View key={index} style={styles.patentItem}>
                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ fontSize: 8, color: '#6B7280' }}>{item.category} - {item.year || item.details}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>


      {/* Footer with contact details */}
      <View style={[styles.footer, { flexDirection: 'row', justifyContent: 'center', gap: 5 }]}>
        <Text>{resumeData.personal.name}</Text>
        <Text>•</Text>
        <Text>{resumeData.personal.location}</Text>
        <Text>•</Text>
        <Text>{resumeData.personal.phone}</Text>
        <Text>•</Text>
        <Link src={`mailto:${resumeData.personal.email}`}>{resumeData.personal.email}</Link>
        <Text>•</Text>
        <Link src={`https://${resumeData.personal.linkedin}`}>{resumeData.personal.linkedin}</Link>
        <Text>•</Text>
        <Text>Page 2 of 2</Text>
      </View>
    </Page>
  </Document>
);

export default PDFResume;