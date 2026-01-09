"use client";

import React, { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useParams } from "next/navigation";
import {
  ModernTemplate,
  ProfessionalTemplate,
  CreativeTemplate,
  ResumeData,
} from "@/components/resume-templates";
import { Button } from "@/components/ui/button";
import { IconDownload, IconLoader } from "@tabler/icons-react";

// Mock Data conforming to our ResumeData interface
const mockUserData: ResumeData = {
  personalInfo: {
    name: "Kannan Developer",
    title: "Full Stack Engineer",
    email: "kannan@example.com",
    phone: "+91 9876543210",
    location: "Bangalore, India", // Added location,
    portfolioUrl: "https://kannandeveloper.com",
  },
  summary:
    "Passionate developer specializing in Next.js, React, and Game Development. Dedicated to building scalable and user-friendly applications with a focus on modern design principles.",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
  ],
  experience: [
    {
      id: 1,
      role: "Senior Developer",
      company: "Tech Corp",
      year: "2024 - Present",
      description:
        "Led a team of 5 developers to rebuild the core platform using Next.js 14.",
    },
    {
      id: 2,
      role: "Frontend Engineer",
      company: "StartUp Inc",
      year: "2022 - 2024",
      description:
        "Implemented a new design system reducing development time by 30%.",
    },
  ],
  education: [
    {
      id: 1,
      degree: "B.Tech Computer Science",
      school: "Anna University",
      year: "2022",
    },
  ],
};

const TemplateResumeMakePage = () => {
  const params = useParams();
  console.log(params);
  const templateId = params.template as string;
  const [isClient, setIsClient] = useState(false);

    useEffect(() => {
    // Set isClient to true after a delay to avoid cascading renders
    const timer = setTimeout(() => {
      setIsClient(true);
    }, 100);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Registry of templates
  const getTemplate = () => {
    switch (templateId) {
      case "modern":
        return <ModernTemplate data={mockUserData} />;
      case "professional":
        return <ProfessionalTemplate data={mockUserData} />;
      case "creative":
        return <CreativeTemplate data={mockUserData} />;
      default:
        return <ModernTemplate data={mockUserData} />;
    }
  };

  if (!isClient)
    return <div className="flex h-screen items-center justify-center"><IconLoader className="animate-spin" /> </div>;

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-8 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 capitalize">
          {templateId} Resume Builder
        </h1>

        <PDFDownloadLink
          document={getTemplate()}
          fileName={`${templateId}_resume.pdf`}
        >
          {({ loading }) => (
            <Button disabled={loading} className="gap-2">
              <IconDownload size={18} />
              {loading ? "Generating..." : "Download PDF"}
            </Button>
          )}
        </PDFDownloadLink>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left: Form Editor (Placeholder for now) */}
        <div className="hidden w-1/2 overflow-y-auto border-r bg-white p-8 md:block">
          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-gray-500">
            <p className="mb-2 font-semibold">Live Editor Coming Soon</p>
            <p className="text-sm">Currently using mock data for preview.</p>
          </div>

          {/* We can envision a form here later using standard inputs mapping to `mockUserData` */}
        </div>

        {/* Right: Preview */}
        <div className="flex w-full justify-center overflow-y-auto bg-gray-500/10 p-8 md:w-1/2">
          <div className="shadow-2xl">
            <ClientPDFViewer>{getTemplate()}</ClientPDFViewer>
          </div>
        </div>
      </div>
    </div>
  );
};

// Wrapper for PDFViewer to handle SSR
import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading Preview...</p>,
  },
);

const ClientPDFViewer = ({ children }: { children: any }) => (
  <PDFViewer className="h-212.5 w-150 rounded-sm shadow-lg" showToolbar={false}>
    {children}
  </PDFViewer>
);

export default TemplateResumeMakePage;
