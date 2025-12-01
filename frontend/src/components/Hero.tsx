import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Box, Button, Typography, Grid, Paper } from "@mui/material";

const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Parallax tilt effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      card.style.transform = `rotateX(${-y / 40}deg) rotateY(${
        x / 40
      }deg) scale(1.02)`;
    };

    const reset = () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", reset);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        pt: { xs: 8, lg: 12 },
        pb: { xs: 10, lg: 16 },
        overflow: "hidden",
        backgroundColor: "background.default",
        textAlign: "center",
      }}>
      {/* Floating playful shapes */}
      <Box sx={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <Box
          sx={{
            position: "absolute",
            top: 80,
            left: 40,
            width: 40,
            height: 40,
            backgroundColor: "primary.main",
            opacity: 0.2,
            borderRadius: 3,
            animation: "bounceSlow 4s infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 130,
            right: 80,
            width: 32,
            height: 32,
            backgroundColor: "info.light",
            opacity: 0.2,
            borderRadius: "50%",
            animation: "spinSlow 6s linear infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "33%",
            right: "25%",
            width: 48,
            height: 48,
            backgroundColor: "secondary.light",
            opacity: 0.2,
            borderRadius: "50%",
            animation: "bounceDelayed 5s infinite",
          }}
        />
      </Box>

      {/* Content wrapper */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          mx: "auto",
          px: 3,
        }}>
        {/* Hero Title */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 3,
            lineHeight: 1.1,
            animation: "slideUp 0.8s ease forwards",
            fontSize: { xs: "2.5rem", md: "4rem" },
          }}>
          Get dream jobs with our <br />
          <Box
            component="span"
            sx={{
              background: "linear-gradient(to right, #3b82f6, #2563eb)",
              backgroundClip: "text",
              textFillColor: "transparent",
              animation: "gradientFlow 3s ease infinite",
            }}>
            AI Powered
          </Box>{" "}
          resume builder
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontSize: "1.25rem",
            maxWidth: 600,
            mx: "auto",
            mb: 4,
            color: "text.secondary",
            lineHeight: 1.6,
            animation: "slideUp 0.9s ease forwards",
          }}>
          Build a professional and outstanding resume with our free builder and
          templates.
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            animation: "slideUp 1s ease forwards",
          }}>
          <Button
            component={Link}
            to="/builder"
            sx={{
              px: 4,
              py: 1.5,
              backgroundColor: "primary.main",
              color: "#fff",
              fontSize: "1.1rem",
              fontWeight: 600,
              borderRadius: 2,
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "primary.dark",
              },
              "&:active": { transform: "scale(0.95)" },
            }}>
            Create my resume
          </Button>

          <Button
            component={Link}
            to="/builder"
            variant="outlined"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: 600,
              borderRadius: 2,
              color: "primary.main",
              borderColor: "#ccc",
              backgroundColor: "#fff",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                transform: "scale(1.05)",
              },
              "&:active": { transform: "scale(0.95)" },
            }}>
            Improve resume
          </Button>
        </Box>

        {/* Resume Preview Card */}
        <Box
          sx={{
            mt: 10,
            maxWidth: "900px",
            mx: "auto",
            perspective: "1000px",
            animation: "slideUp 1.2s ease forwards",
          }}>
          <Paper
            ref={cardRef}
            elevation={12}
            sx={{
              position: "relative",
              borderRadius: 4,
              backgroundColor: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(12px)",
              border: "1px solid #e5e7eb",
              overflow: "hidden",
              transition: "0.3s",
            }}>
            {/* Shimmer overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)",
                opacity: 0,
                pointerEvents: "none",
                animation: "shimmer 2s infinite",
                "&:hover": { opacity: 1 },
              }}
            />

            {/* Fake browser header */}
            <Box
              sx={{
                backgroundColor: "#f9fafb",
                borderBottom: "1px solid #e5e7eb",
                px: 3,
                py: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}>
              <Box sx={{ display: "flex", gap: 1, opacity: 0.7 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "#f87171",
                  }}
                />
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "#facc15",
                  }}
                />
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "#4ade80",
                  }}
                />
              </Box>

              <Box
                sx={{
                  mx: "auto",
                  px: 1.5,
                  py: 0.5,
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  fontSize: "0.7rem",
                  border: "1px solid #e5e7eb",
                  color: "#9ca3af",
                  width: "50%",
                  textAlign: "center",
                }}>
                kesume.com/builder
              </Box>
            </Box>

            {/* Resume Content */}
            <Box
              sx={{
                p: { xs: 3, md: 6 },
                backgroundColor: "#fff",
                minHeight: 400,
              }}>
              <Box sx={{ borderBottom: "1px solid #f1f5f9", pb: 3 }}>
                <Box
                  sx={{
                    height: 32,
                    width: "33%",
                    backgroundColor: "#1f2937",
                    borderRadius: 1,
                  }}
                />
                <Box
                  sx={{
                    height: 16,
                    width: "25%",
                    mt: 2,
                    backgroundColor: "primary.light",
                    borderRadius: 1,
                  }}
                />
              </Box>

              <Grid container spacing={3} mt={3}>
                <Grid item xs={12} md={8}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    {/* Section 1 */}
                    <Box>
                      <Box
                        sx={{
                          height: 20,
                          width: "25%",
                          bgcolor: "#e5e7eb",
                          borderRadius: 1,
                        }}
                      />
                      <Box
                        sx={{
                          height: 12,
                          bgcolor: "#f3f4f6",
                          mt: 1,
                          borderRadius: 1,
                        }}
                      />
                      <Box
                        sx={{
                          height: 12,
                          width: "85%",
                          bgcolor: "#f3f4f6",
                          mt: 1,
                          borderRadius: 1,
                        }}
                      />
                    </Box>

                    {/* Section 2 */}
                    <Box>
                      <Box
                        sx={{
                          height: 20,
                          width: "25%",
                          bgcolor: "#e5e7eb",
                          borderRadius: 1,
                        }}
                      />
                      <Box
                        sx={{
                          height: 12,
                          bgcolor: "#f3f4f6",
                          mt: 1,
                          borderRadius: 1,
                        }}
                      />
                      <Box
                        sx={{
                          height: 12,
                          width: "85%",
                          bgcolor: "#f3f4f6",
                          mt: 1,
                          borderRadius: 1,
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>

                {/* Sidebar */}
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      height: 120,
                      bgcolor: "#eff6ff",
                      borderRadius: 2,
                      border: "1px solid #dbeafe",
                    }}
                  />
                  <Box
                    mt={2}
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Box
                      sx={{
                        height: 16,
                        width: "50%",
                        bgcolor: "#e5e7eb",
                        borderRadius: 1,
                      }}
                    />
                    <Box
                      sx={{ height: 10, bgcolor: "#f3f4f6", borderRadius: 1 }}
                    />
                    <Box
                      sx={{ height: 10, bgcolor: "#f3f4f6", borderRadius: 1 }}
                    />
                    <Box
                      sx={{
                        height: 10,
                        width: "75%",
                        bgcolor: "#f3f4f6",
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
