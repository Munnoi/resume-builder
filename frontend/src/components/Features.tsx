import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

type FeatureItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: FeatureItem[] = [
  {
    title: "Real-time Preview",
    description:
      "Watch your resume transform instantly as you edit. No more guessing how the final PDF will look.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={{ width: 24, height: 24 }}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "ATS-Friendly Design",
    description:
      "Templates optimized for Applicant Tracking Systems to ensure your resume gets seen by human eyes.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={{ width: 24, height: 24 }}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    title: "Open Source & Free",
    description:
      "Built by the community, for the community. Completely free to use with no hidden paywalls.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={{ width: 24, height: 24 }}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "Privacy Focused",
    description:
      "Your data stays with you. We don't store your personal information on our servers.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={{ width: 24, height: 24 }}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
];

const Features: React.FC = () => {
  return (
    <Box
      id="features"
      sx={{
        py: 12,
        backgroundColor: "#f8fafc", // ← match your bg-surface-alt color here
        position: "relative",
        overflow: "hidden",
      }}>
      {/* Background Blobs */}
      <Box
        sx={{
          position: "absolute",
          top: 40,
          right: 40,
          width: 96,
          height: 96,
          backgroundColor: "primary.main",
          opacity: 0.1,
          borderRadius: "50%",
          filter: "blur(50px)",
          animation: "pulseSlow 4s infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          left: 80,
          width: 128,
          height: 128,
          backgroundColor: "#60a5fa",
          opacity: 0.1,
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "pulseSlower 6s infinite",
        }}
      />

      <Box sx={{ maxWidth: "1280px", mx: "auto", px: 3 }}>
        {/* Title */}
        <Box
          sx={{ textAlign: "center", maxWidth: "700px", mx: "auto", mb: 10 }}>
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "2.4rem" },
              fontWeight: 700,
              mb: 2,
              animation: "slideUp 0.6s ease forwards",
              color: "text.primary",
            }}>
            Everything you need to stand out
          </Typography>

          <Typography
            sx={{
              fontSize: "1.125rem",
              color: "text.secondary",
              animation: "slideUp 0.8s ease forwards",
            }}>
            Powerful features designed to help you create a compelling narrative
            for your career journey.
          </Typography>
        </Box>

        {/* Feature Grid — exact Tailwind behavior */}
        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
              lg: "repeat(4, 1fr)",
            },
            gridAutoRows: "1fr", // ← makes all rows equal height
          }}>
          {features.map((feature, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                height: "100%", // ← stretch to fill each grid row
                display: "flex",
                flexDirection: "column",
                p: 4,
                borderRadius: 4,
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                transition: "0.3s",
                cursor: "pointer",
                position: "relative",
                boxShadow: "0px 2px 12px rgba(0,0,0,0.05)",
                "&:hover": {
                  transform: "translateY(-6px) rotate(0.8deg)",
                  boxShadow: "0px 12px 22px rgba(0,0,0,0.08)",
                },
                "&:hover .shimmer": { opacity: 1 },
              }}>
              {/* Shimmer */}
              <Box
                className="shimmer"
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, transparent, rgba(255,255,255,0.2), transparent)",
                  opacity: 0,
                  transition: "0.4s",
                  borderRadius: 4,
                }}
              />

              {/* Icon */}
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 3,
                  backgroundColor: "primary.light",
                  color: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}>
                {feature.icon}
              </Box>

              <Typography
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  mb: 1.5,
                  color: "text.primary",
                }}>
                {feature.title}
              </Typography>

              <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                {feature.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
