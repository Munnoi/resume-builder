import React from "react";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";

const Pricing: React.FC = () => {
  return (
    <Box
      id="pricing"
      sx={{
        py: 12,
        backgroundColor: "background.default",
        position: "relative",
        overflow: "hidden",
      }}>
      {/* Floating blobs */}
      <Box
        sx={{
          position: "absolute",
          top: 40,
          left: 40,
          width: 160,
          height: 160,
          backgroundColor: "primary.main",
          opacity: 0.1,
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "pulseSlow 4s infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          right: 80,
          width: 200,
          height: 200,
          backgroundColor: "#60a5fa",
          opacity: 0.1,
          borderRadius: "50%",
          filter: "blur(70px)",
          animation: "pulseSlower 6s infinite",
        }}
      />

      <Box sx={{ maxWidth: "1280px", mx: "auto", px: 3, textAlign: "center" }}>
        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 700,
            mb: 2,
            color: "text.primary",
            animation: "slideUp 0.6s ease both",
          }}>
          Simple, Transparent Pricing
        </Typography>

        <Typography
          sx={{
            fontSize: "1.125rem",
            color: "text.secondary",
            maxWidth: "600px",
            mx: "auto",
            mb: 10,
            animation: "slideUp 0.8s ease both",
          }}>
          No hidden fees. No paywalls. Everything you need, completely free and
          open source.
        </Typography>

        {/* Grid: 1 → 2 → 3 columns */}
        <Grid
          container
          spacing={5}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
              lg: "repeat(3, 1fr)",
            },
          }}>
          {/* Free Plan */}
          <Box>
            <Paper
              elevation={0}
              sx={{
                position: "relative",
                p: 6,
                borderRadius: 4,
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                transition: "0.35s",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-8px) rotate(0.5deg)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
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
                    "linear-gradient(135deg, transparent, rgba(255,255,255,0.25), transparent)",
                  opacity: 0,
                  transition: "0.45s",
                  borderRadius: 4,
                }}
              />

              <Typography
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "text.primary",
                  mb: 2,
                }}>
                Free
              </Typography>

              <Typography
                sx={{
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "primary.main",
                  mb: 1,
                }}>
                0$
              </Typography>

              <Typography sx={{ color: "text.secondary", mb: 4 }}>
                Forever free. No limits.
              </Typography>

              <Box sx={{ mb: 6 }}>
                {[
                  "Unlimited resumes",
                  "All templates included",
                  "Instant PDF export",
                  "Full ATS compatibility",
                ].map((text) => (
                  <Typography
                    key={text}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                      color: "text.primary",
                    }}>
                    ✔️ {text}
                  </Typography>
                ))}
              </Box>

              <Button
                fullWidth
                sx={{
                  py: 1.5,
                  backgroundColor: "primary.main",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: 2,
                  boxShadow: (theme) =>
                    `0px 6px 16px ${theme.palette.primary.main}33`,
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    boxShadow: (theme) =>
                      `0px 8px 20px ${theme.palette.primary.main}55`,
                  },
                }}>
                Get Started
              </Button>
            </Paper>
          </Box>

          {/* Open Source Plan */}
          <Box>
            <Paper
              elevation={0}
              sx={{
                position: "relative",
                p: 6,
                borderRadius: 4,
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                transition: "0.35s",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-8px) rotate(0.5deg)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
                },
                "&:hover .shimmer": { opacity: 1 },
              }}>
              <Box
                className="shimmer"
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, transparent, rgba(255,255,255,0.25), transparent)",
                  opacity: 0,
                  transition: "0.45s",
                  borderRadius: 4,
                }}
              />

              <Typography
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "text.primary",
                  mb: 2,
                }}>
                Open Source
              </Typography>

              <Typography
                sx={{
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "primary.main",
                  mb: 1,
                }}>
                Free
              </Typography>

              <Typography sx={{ color: "text.secondary", mb: 4 }}>
                Clone, modify, contribute.
              </Typography>

              <Box sx={{ mb: 6 }}>
                {[
                  "MIT License",
                  "Custom template creation",
                  "Full code access",
                  "Community-driven",
                ].map((text) => (
                  <Typography
                    key={text}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                      color: "text.primary",
                    }}>
                    ✔️ {text}
                  </Typography>
                ))}
              </Box>

              <Button
                href="https://github.com/Munnoi/resume-builder"
                target="_blank"
                fullWidth
                sx={{
                  py: 1.5,
                  border: "2px solid",
                  borderColor: "primary.main",
                  color: "primary.main",
                  fontWeight: 600,
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "primary.light",
                  },
                }}>
                View on GitHub
              </Button>
            </Paper>
          </Box>

          {/* AI Assisted Plan */}
          <Box>
            <Paper
              elevation={0}
              sx={{
                p: 6,
                borderRadius: 4,
                color: "#fff",
                background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                position: "relative",
                transition: "0.35s",
                cursor: "pointer",
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-8px) rotate(0.5deg)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                },
              }}>
              {/* Glow */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  opacity: 0,
                  borderRadius: 4,
                  transition: "0.4s",
                  "&:hover": { opacity: 0.2 },
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  backgroundColor: "rgba(255,255,255,0.25)",
                  px: 2,
                  py: 0.5,
                  fontSize: "0.75rem",
                  borderRadius: 20,
                  backdropFilter: "blur(6px)",
                }}>
                Popular
              </Box>

              <Typography sx={{ fontSize: "1.25rem", fontWeight: 600, mb: 2 }}>
                AI Assisted
              </Typography>

              <Typography sx={{ fontSize: "3rem", fontWeight: 700, mb: 1 }}>
                Free
              </Typography>

              <Typography sx={{ opacity: 0.9, mb: 4 }}>
                AI features included.
              </Typography>

              <Box sx={{ mb: 6, opacity: 0.95, textAlign: "left" }}>
                {[
                  "✨ Bullet point generator",
                  "✨ Resume enhancer",
                  "✨ Skills extractor",
                  "✨ Tailored ATS improvements",
                ].map((text) => (
                  <Typography key={text} sx={{ mb: 1 }}>
                    {text}
                  </Typography>
                ))}
              </Box>

              <Button
                href="/builder"
                fullWidth
                sx={{
                  py: 1.5,
                  backgroundColor: "#fff",
                  color: "primary.main",
                  fontWeight: 600,
                  borderRadius: 2,
                  "&:hover": { backgroundColor: "#f1f5f9" },
                }}>
                Use AI Tools
              </Button>
            </Paper>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Pricing;
