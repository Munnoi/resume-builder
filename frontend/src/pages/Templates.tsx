import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Paper, CircularProgress } from "@mui/material";
import { getAllTemplates } from "../services/api";
import { useResume } from "../context/ResumeContext";

const Templates = () => {
  const navigate = useNavigate();
  const { setResumeData, resumeData } = useResume();
  const [templates, setTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTemplates();
  }, []);

  const loadTemplates = async () => {
    try {
      const response = await getAllTemplates();
      setTemplates(response.templates);
    } catch (error) {
      console.error("Failed to load templates:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectTemplate = (templateId: string) => {
    setResumeData({ ...resumeData, templateId });
    navigate("/builder");
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        pt: 12,
        pb: 8,
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        position: "relative",
        overflow: "hidden",
      }}>
      {/* Background Blobs */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: 500,
          height: 500,
          backgroundColor: "primary.main",
          opacity: 0.05,
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: 500,
          height: 500,
          backgroundColor: "secondary.main",
          opacity: 0.05,
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: 3,
          position: "relative",
          zIndex: 10,
        }}>
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 600,
              color: "text.primary",
              mb: 1,
            }}>
            Professional Templates
          </Typography>

          <Typography
            sx={{
              maxWidth: 600,
              mx: "auto",
              color: "text.secondary",
              fontWeight: 300,
            }}>
            Choose from our collection of ATS-friendly templates designed to
            help you land your dream job.
          </Typography>
        </Box>

        {/* Template Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 3,
            px: { xs: 2, md: 0 },
          }}>
          {templates.map((template) => (
            <Paper
              key={template.id}
              elevation={1}
              sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255,255,255,0.4)",
                boxShadow: "0 3px 10px rgba(0,0,0,0.07)",
                transition: "0.5s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                },
              }}>
              {/* Preview Box */}
              <Box
                sx={{
                  position: "relative",
                  aspectRatio: "1 / 1.4",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  transition: "0.3s",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.8)" },
                }}>
                {/* Fake Resume Preview */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    p: 2,
                    opacity: 0.6,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    transition: "0.5s",
                    transform: "scale(0.9)",
                    "&:hover": {
                      opacity: 0.8,
                      transform: "scale(0.95)",
                    },
                  }}>
                  {/* Top profile bar */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                      mb: 1,
                    }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        backgroundColor: "#e2e8f0",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 8,
                          borderRadius: 2,
                          backgroundColor: "#cbd5e1",
                        }}
                      />
                      <Box
                        sx={{
                          width: 40,
                          height: 6,
                          borderRadius: 2,
                          backgroundColor: "#e2e8f0",
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Divider */}
                  <Box
                    sx={{
                      width: "100%",
                      height: 6,
                      borderRadius: 2,
                      backgroundColor: "#e2e8f0",
                      mb: 1,
                    }}
                  />

                  {/* Body section */}
                  <Box sx={{ display: "flex", gap: 1, height: "100%" }}>
                    <Box
                      sx={{
                        width: "33%",
                        backgroundColor: "#f1f5f9",
                        borderRadius: 2,
                      }}
                    />

                    <Box
                      sx={{
                        width: "67%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}>
                      {[100, 85, 100, 80, 100, 70].map((width, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            width: `${width}%`,
                            height: 8,
                            backgroundColor: "#e2e8f0",
                            borderRadius: 2,
                            mt: idx === 4 ? 2 : 0,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>

                {/* Hover Action Button */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(255,255,255,0.9), rgba(255,255,255,0.2), transparent)",
                    opacity: 0,
                    transition: "0.3s",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    pb: 3,
                    "&:hover": { opacity: 1 },
                  }}>
                  <Button
                    onClick={() => handleSelectTemplate(template.id)}
                    sx={{
                      px: 3,
                      py: 1,
                      backgroundColor: "primary.main",
                      color: "#fff",
                      backdropFilter: "blur(4px)",
                      borderRadius: 5,
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                      transition: "0.3s",
                      "&:hover": { backgroundColor: "primary.dark" },
                    }}>
                    Use Template
                  </Button>
                </Box>
              </Box>

              {/* Caption */}
              <Box sx={{ p: 2, borderTop: "1px solid rgba(255,255,255,0.25)" }}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    color: "text.primary",
                  }}>
                  {template.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: "text.secondary",
                    mt: 0.5,
                  }}>
                  {template.description}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Templates;
