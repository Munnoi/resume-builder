import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Is Kesume completely free?",
    answer:
      "Yes! Kesume is fully open source with no paywalls, subscriptions, or hidden fees.",
  },
  {
    question: "Do you store my resume data?",
    answer:
      "No. Everything is stored locally in your browser. Your resume stays on your device.",
  },
  {
    question: "Can I download my resume as a PDF?",
    answer: "Absolutely! PDF export is instant and works with every template.",
  },
  {
    question: "Is Kesume ATS-friendly?",
    answer:
      "Yes — every template is optimized to work with Applicant Tracking Systems.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Box
      id="faq"
      sx={{
        py: 12,
        backgroundColor: "#f8fafc",
        position: "relative",
        overflow: "hidden",
      }}>
      {/* Soft blob */}
      <Box
        sx={{
          position: "absolute",
          top: 64,
          right: 64,
          width: 160,
          height: 160,
          backgroundColor: "primary.main",
          opacity: 0.1,
          borderRadius: "50%",
          filter: "blur(50px)",
          animation: "pulseSlow 4s infinite",
        }}
      />

      <Box sx={{ maxWidth: "800px", mx: "auto", px: 3 }}>
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 700,
            textAlign: "center",
            mb: 6,
            color: "text.primary",
            animation: "slideUp 0.6s ease both",
          }}>
          Frequently Asked Questions
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Paper
                key={index}
                elevation={1}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  },
                }}>
                {/* Question row */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <Typography
                    sx={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: "text.primary",
                      transition: "0.25s",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}>
                    {faq.question}
                  </Typography>

                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "primary.main",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "0.3s",
                      fontSize: "1rem",
                    }}>
                    ▼
                  </Box>
                </Box>

                {/* Answer */}
                <Box
                  sx={{
                    maxHeight: isOpen ? 200 : 0,
                    opacity: isOpen ? 1 : 0,
                    mt: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                    {faq.answer}
                  </Typography>
                </Box>
              </Paper>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
