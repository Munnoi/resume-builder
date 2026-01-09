import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { TemplateProps } from './types';
import { sharedStyles, colors } from './styles';

const styles = StyleSheet.create({
    ...sharedStyles,
    page: {
        ...sharedStyles.page,
        padding: 0,
    },
    header: {
        backgroundColor: '#fff',
        padding: 30,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 5,
        borderBottomColor: colors.primary, // Dynamic color target
    },
    headerLeft: {
        flex: 1,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        letterSpacing: -1,
    },
    title: {
        fontSize: 14,
        color: colors.primary,
        fontWeight: 'bold',
        marginTop: 10,
        textTransform: 'uppercase',
    },
    contactInfo: {
        fontSize: 9,
        textAlign: 'right',
        color: '#666',
        lineHeight: 1.5,
    },
    content: {
        flexDirection: 'row',
        padding: 30,
        flex: 1,
    },
    leftColumn: {
        width: '65%',
        paddingRight: 20,
    },
    rightColumn: {
        width: '35%',
        paddingLeft: 20,
        borderLeftWidth: 1,
        borderLeftColor: '#eee',
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    expBlock: {
        marginBottom: 15,
    },
    role: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
    },
    companyDateRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 4,
    },
    company: {
        fontSize: 10,
        color: colors.primary,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 10,
        color: '#888',
    },
    desc: {
        fontSize: 10,
        color: '#555',
        lineHeight: 1.4,
    },
    skillTag: {
        backgroundColor: '#f0f0f0',
        color: '#333',
        padding: 6,
        borderRadius: 8,
        fontSize: 9,
        marginBottom: 6,
        textAlign: 'center',
    },
});

export const CreativeTemplate: React.FC<TemplateProps> = ({ data, colorHex }) => {
    const accentColor = colorHex || colors.primary;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={[styles.header, { borderBottomColor: accentColor }]}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.name}>{data.personalInfo.name}</Text>
                        <Text style={[styles.title, { color: accentColor }]}>{data.personalInfo.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.contactInfo}>{data.personalInfo.email}</Text>
                        <Text style={styles.contactInfo}>{data.personalInfo.phone}</Text>
                        {data.personalInfo.location && <Text style={styles.contactInfo}>{data.personalInfo.location}</Text>}
                    </View>
                </View>

                <View style={styles.content}>

                    {/* Main Experience Column */}
                    <View style={styles.leftColumn}>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={[styles.sectionTitle, { color: accentColor }]}>About Me</Text>
                            <Text style={{ fontSize: 10, lineHeight: 1.5, color: '#444' }}>{data.summary}</Text>
                        </View>

                        <View>
                            <Text style={[styles.sectionTitle, { color: accentColor }]}>Experience</Text>
                            {data.experience.map((exp, index) => (
                                <View key={index} style={styles.expBlock}>
                                    <Text style={styles.role}>{exp.role}</Text>
                                    <View style={styles.companyDateRow}>
                                        <Text style={[styles.company, { color: accentColor }]}>{exp.company}</Text>
                                        <Text style={styles.date}>{exp.year}</Text>
                                    </View>
                                    {exp.description && <Text style={styles.desc}>{exp.description}</Text>}
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Right Skills/Education Column */}
                    <View style={styles.rightColumn}>

                        <View style={{ marginBottom: 25 }}>
                            <Text style={[styles.sectionTitle, { color: accentColor }]}>Skills</Text>
                            <View>
                                {data.skills.map((skill, index) => (
                                    <Text key={index} style={styles.skillTag}>{skill}</Text>
                                ))}
                            </View>
                        </View>

                        {data.education && (
                            <View>
                                <Text style={[styles.sectionTitle, { color: accentColor }]}>Education</Text>
                                {data.education.map((edu, index) => (
                                    <View key={index} style={{ marginBottom: 10 }}>
                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{edu.degree}</Text>
                                        <Text style={{ fontSize: 9, color: '#666' }}>{edu.school}</Text>
                                        <Text style={{ fontSize: 9, color: '#999' }}>{edu.year}</Text>
                                    </View>
                                ))}
                            </View>
                        )}

                    </View>
                </View>
            </Page>
        </Document>
    );
};
