"use client";

import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// ==========================================
// 1. DEFINE STYLES (The "CSS" of PDF)
// ==========================================
// Unlike web, we define styles in a JS object using standard Flexbox
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  sidebar: {
    width: '30%',
    backgroundColor: '#f3f4f6', // gray-100
    padding: 20,
  },
  main: {
    width: '70%',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  headerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb', // Blue
    textTransform: 'uppercase',
  },
  headerTitle: {
    fontSize: 12,
    color: '#4b5563',
    marginBottom: 20,
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2563eb',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    marginBottom: 5,
    paddingBottom: 2,
  },
  text: {
    fontSize: 10,
    marginBottom: 2,
    color: '#374151',
  },
  tag: {
    backgroundColor: '#e5e7eb',
    padding: 4,
    borderRadius: 4,
    fontSize: 8,
    marginRight: 4,
    marginBottom: 4,
  }
});

// ==========================================
// 2. THE PDF DOCUMENT COMPONENT
// This is the actual PDF structure
// ==========================================
const ResumeDocument = ({ data }: { data: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      
      {/* LEFT COLUMN (Sidebar) */}
      <View style={styles.sidebar}>
        <View style={styles.section}>
          <Text style={styles.heading}>Contact</Text>
          <Text style={styles.text}>{data.personalInfo.email}</Text>
          <Text style={styles.text}>{data.personalInfo.phone}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {data.skills.map((skill: string) => (
              <Text key={skill} style={styles.tag}>{skill}</Text>
            ))}
          </View>
        </View>
      </View>

      {/* RIGHT COLUMN (Main) */}
      <View style={styles.main}>
        <View style={styles.section}>
          <Text style={styles.headerName}>{data.personalInfo.name}</Text>
          <Text style={styles.headerTitle}>{data.personalInfo.title}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Summary</Text>
          <Text style={styles.text}>{data.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>
          {data.experience.map((job: any) => (
            <View key={job.id} style={{ marginBottom: 8 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 11, fontWeight: 'bold' }}>{job.role}</Text>
                <Text style={{ fontSize: 10, color: '#6b7280' }}>{job.year}</Text>
              </View>
              <Text style={{ fontSize: 10, fontStyle: 'italic' }}>{job.company}</Text>
            </View>
          ))}
        </View>
      </View>

    </Page>
  </Document>
);

// ==========================================
// 3. THE DOWNLOAD BUTTON (User Interface)
// ==========================================
const DownloadButton = ({ data }: { data: any }) => {
  // Client-side only check to prevent SSR hydration errors
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="mt-8">
      <PDFDownloadLink
        document={<ResumeDocument data={data} />}
        fileName="my_resume.pdf"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition"
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Generating PDF...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default DownloadButton;