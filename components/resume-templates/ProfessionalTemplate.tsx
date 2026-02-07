import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { TemplateProps } from './types';
import { sharedStyles, colors } from './styles';

const styles = StyleSheet.create({
    ...sharedStyles,
    page: {
        ...sharedStyles.page,
        padding: 35,
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 4,
        color: '#000',
    },
    title: {
        fontSize: 12,
        color: '#555',
        marginTop: 6,
        marginBottom: 6,
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    contactRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
        fontSize: 9,
        color: '#444',
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 8,
        marginTop: 10,
        backgroundColor: '#eee',
        padding: 4,
        color: '#000',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 2,
    },
    role: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#000',
    },
    company: {
        fontSize: 10,
        fontStyle: 'italic',
        color: '#444',
    },
    date: {
        fontSize: 10,
        color: '#444',
    },
    description: {
        fontSize: 10,
        marginTop: 2,
        marginLeft: 10,
        lineHeight: 1.4,
        color: '#333',
    },
    skillsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 4,
    },
    skill: {
        fontSize: 10,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 2,
    },
});

export const ProfessionalTemplate: React.FC<TemplateProps> = ({ data }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* HEADER */}
                <View style={styles.header}>
                    <Text style={styles.name}>{data.personalInfo.name}</Text>
                    <Text style={styles.title}>{data.personalInfo.title}</Text>

                    <View style={styles.contactRow}>
                        <Text>{data.personalInfo.email}</Text>
                        <Text>•</Text>
                        <Text>{data.personalInfo.phone}</Text>
                        {data.personalInfo.location && (
                            <>
                                <Text>•</Text>
                                <Text>{data.personalInfo.location}</Text>
                            </>
                        )}
                    </View>
                </View>

                {/* SUMMARY */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Professional Summary</Text>
                    <Text style={{ fontSize: 10, lineHeight: 1.5, textAlign: 'justify' }}>
                        {data.summary}
                    </Text>
                </View>

                {/* EXPERIENCE */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Experience</Text>
                    {data.experience.map((exp, index) => (
                        <View key={index} style={{ marginBottom: 12 }}>
                            <View style={styles.row}>
                                <Text style={styles.role}>{exp.role}</Text>
                                <Text style={styles.date}>{exp.year}</Text>
                            </View>
                            <Text style={styles.company}>{exp.company}</Text>
                            {exp.description && <Text style={styles.description}>• {exp.description}</Text>}
                        </View>
                    ))}
                </View>

                {/* EDUCATION - Optional */}
                {data.education && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Education</Text>
                        {data.education.map((edu, index) => (
                            <View key={index} style={{ marginBottom: 6 }}>
                                <View style={styles.row}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{edu.degree}</Text>
                                    <Text style={styles.date}>{edu.year}</Text>
                                </View>
                                <Text style={{ fontSize: 10 }}>{edu.school}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {/* SKILLS */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Skills</Text>
                    <View style={styles.skillsRow}>
                        {data.skills.map((skill, index) => (
                            <Text key={index} style={styles.skill}>{skill}</Text>
                        ))}
                    </View>
                </View>

            </Page>
        </Document>
    );
};
