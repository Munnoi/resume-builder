import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { TemplateProps } from './types';
import { sharedStyles, colors } from './styles';

const styles = StyleSheet.create({
    ...sharedStyles,
    page: {
        ...sharedStyles.page,
        padding: 0,
        flexDirection: 'row',
    },
    sidebar: {
        width: '30%',
        backgroundColor: '#1e293b', // slate-800
        color: 'white',
        padding: 20,
        height: '100%',
    },
    main: {
        width: '70%',
        padding: 25,
        backgroundColor: '#ffffff',
    },
    sidebarText: {
        fontSize: 10,
        color: '#e2e8f0', // slate-200
        marginBottom: 4,
    },
    sidebarTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 15,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#475569',
        paddingBottom: 2,
        textTransform: 'uppercase',
    },
    dataLabel: {
        fontSize: 8,
        color: '#94a3b8',
        marginTop: 2,
        marginBottom: 0,
    },
    headerName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.primary,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 4,
    },
    headerTitle: {
        fontSize: 14,
        color: colors.secondary,
        marginTop: 15,
        marginBottom: 15,
    },
    mainSectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1e293b',
        marginTop: 15,
        marginBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary,
        paddingBottom: 2,
        textTransform: 'uppercase',
    },
    jobTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#334155',
    },
    jobCompany: {
        fontSize: 10,
        color: '#64748b',
        fontStyle: 'italic',
        marginBottom: 2,
    },
    jobDetails: {
        fontSize: 10,
        marginTop: 3,
        lineHeight: 1.4,
    },
    skillBadge: {
        backgroundColor: '#334155',
        color: 'white',
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 4,
        fontSize: 9,
        marginBottom: 4,
        marginRight: 4,
        alignSelf: 'flex-start',
    },
});

export const ModernTemplate: React.FC<TemplateProps> = ({ data, colorHex }) => {
    // Allow overriding primary color
    const dynamicPrimary = colorHex || colors.primary;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* SIDEBAR */}
                <View style={styles.sidebar}>
                    <Text style={[styles.sidebarTitle, { marginTop: 0 }]}>Contact</Text>

                    <Text style={styles.dataLabel}>Email</Text>
                    <Text style={styles.sidebarText}>{data.personalInfo.email}</Text>

                    <Text style={styles.dataLabel}>Phone</Text>
                    <Text style={styles.sidebarText}>{data.personalInfo.phone}</Text>

                    {data.personalInfo.location && (
                        <>
                            <Text style={styles.dataLabel}>Location</Text>
                            <Text style={styles.sidebarText}>{data.personalInfo.location}</Text>
                        </>
                    )}

                    <Text style={styles.sidebarTitle}>Skills</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 4 }}>
                        {data.skills.map((skill, index) => (
                            <Text key={index} style={styles.skillBadge}>{skill}</Text>
                        ))}
                    </View>

                    {data.education && (
                        <>
                            <Text style={styles.sidebarTitle}>Education</Text>
                            {data.education.map((edu, index) => (
                                <View key={index} style={{ marginBottom: 10 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 10, color: 'white' }}>{edu.degree}</Text>
                                    <Text style={{ fontSize: 9, color: '#cbd5e1' }}>{edu.school}, {edu.year}</Text>
                                </View>
                            ))}
                        </>
                    )}
                </View>

                {/* MAIN CONTENT */}
                <View style={styles.main}>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={[styles.headerName, { color: dynamicPrimary }]}>{data.personalInfo.name}</Text>
                        <Text style={styles.headerTitle}>{data.personalInfo.title}</Text>
                    </View>

                    <View>
                        <Text style={[styles.mainSectionTitle, { borderBottomColor: dynamicPrimary }]}>Summary</Text>
                        <Text style={{ fontSize: 11, lineHeight: 1.5 }}>{data.summary}</Text>
                    </View>

                    <View>
                        <Text style={[styles.mainSectionTitle, { borderBottomColor: dynamicPrimary }]}>Experience</Text>
                        {data.experience.map((exp, index) => (
                            <View key={index} style={{ marginBottom: 15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                                    <Text style={styles.jobTitle}>{exp.role}</Text>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: dynamicPrimary }}>{exp.year}</Text>
                                </View>
                                <Text style={styles.jobCompany}>{exp.company}</Text>
                                {exp.description && <Text style={styles.jobDetails}>{exp.description}</Text>}
                            </View>
                        ))}
                    </View>
                </View>
            </Page>
        </Document>
    );
};
