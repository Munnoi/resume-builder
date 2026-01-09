export interface Experience {
  id: string | number;
  role: string;
  company: string;
  year: string;
  description?: string;
}

export interface Education {
  id: string | number;
  degree: string;
  school: string;
  year: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location?: string; // Optional
  portfolioUrl?: string; // Optional
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  skills: string[];
  experience: Experience[];
  education?: Education[]; 
}

export interface TemplateProps {
  data: ResumeData;
  colorHex?: string;
}

