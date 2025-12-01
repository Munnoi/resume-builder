import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #f1f5f9",
        py: 5,
        overflow: "hidden",
      }}>
      {/* Floating blob */}
      <Box
        sx={{
          position: "absolute",
          top: -40,
          right: 40,
          width: 160,
          height: 160,
          backgroundColor: "primary.main",
          opacity: 0.1,
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "pulseSlow 4s infinite",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
          animation: "slideUp 0.6s ease both",
        }}>
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            sx={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "primary.main",
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": { opacity: 0.85 },
            }}>
            Kesume
          </Typography>

          <Typography sx={{ color: "#d1d5db" }}>|</Typography>

          <Typography sx={{ fontSize: "0.875rem", color: "text.secondary" }}>
            &copy; {new Date().getFullYear()} Open Source Project.
          </Typography>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", gap: 4 }}>
          {[
            { name: "Privacy", href: "#" },
            { name: "Terms", href: "#" },
            {
              name: "GitHub",
              href: "https://github.com/Munnoi/resume-builder",
              external: true,
            },
          ].map((item) => (
            <Box key={item.name} sx={{ position: "relative" }}>
              <Box
                component="a"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                sx={{
                  fontSize: "0.875rem",
                  color: "text.secondary",
                  textDecoration: "none",
                  transition: "0.3s",
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" },
                  "&:hover .underline": { width: "100%" },
                }}>
                {item.name}
              </Box>

              {/* Animated underline */}
              <Box
                className="underline"
                sx={{
                  position: "absolute",
                  left: 0,
                  bottom: -2,
                  height: 2,
                  width: 0,
                  borderRadius: 2,
                  backgroundColor: "primary.main",
                  transition: "0.3s",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
