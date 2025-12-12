import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, Button, TextField, CircularProgress, Alert, useMediaQuery, useTheme, IconButton, Tabs, Tab } from "@mui/material";
import { Save, ArrowBack, Edit, Visibility } from "@mui/icons-material";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import PDFExport from "../components/PDFExport";
import { useResume } from "../context/ResumeContext";
import { createResume, updateResume, getResumeById } from "../services/api";

const Builder = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resumeId = searchParams.get("id");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { resumeData, setResumeData } = useResume();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [mobileTab, setMobileTab] = useState(0); // 0 = Form, 1 = Preview

  useEffect(() => {
    if (resumeId) {
      loadResume(resumeId);
    }
  }, [resumeId]);

  const loadResume = async (id: string) => {
    setLoading(true);
    try {
      const response = await getResumeById(id);
      setResumeData(response.resume);
    } catch (error: any) {
      setMessage({ type: "error", text: error.response?.data?.message || "Failed to load resume" });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    try {
      if (resumeId) {
        await updateResume(resumeId, resumeData);
        setMessage({ type: "success", text: "Resume updated successfully!" });
      } else {
        const response = await createResume(resumeData);
        setMessage({ type: "success", text: "Resume created successfully!" });
        // Update URL with new resume ID
        navigate(`/builder?id=${response.resume._id}`, { replace: true });
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Failed to save resume";
      setMessage({ type: "error", text: errorMessage });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* White background for navbar area with padding */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: { xs: 80, md: 100 },
          backgroundColor: "transparent",
          zIndex: 40,
        }}
      />
      <Box sx={{ pt: { xs: 12, md: 14 }, pb: 4, position: "relative" }}>
      {/* Header */}
      <Box sx={{ maxWidth: "1600px", mx: "auto", px: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "stretch", sm: "center" },
            gap: 2,
            mb: 2,
          }}
        >
          {/* Left side - Back button and title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 2 }, minWidth: 0 }}>
            {isMobile ? (
              <IconButton onClick={() => navigate("/dashboard")} size="small">
                <ArrowBack />
              </IconButton>
            ) : (
              <Button startIcon={<ArrowBack />} onClick={() => navigate("/dashboard")} variant="outlined">
                Back
              </Button>
            )}
            <TextField
              value={resumeData.title}
              onChange={(e) => setResumeData({ ...resumeData, title: e.target.value })}
              variant="standard"
              sx={{
                fontSize: { xs: "1rem", md: "1.5rem" },
                fontWeight: 600,
                flex: 1,
                minWidth: 0,
                "& .MuiInputBase-input": {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              }}
            />
          </Box>

          {/* Right side - Action buttons */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, md: 2 },
              justifyContent: { xs: "flex-end", sm: "flex-start" },
            }}
          >
            <PDFExport resumeTitle={resumeData.title} />
            <Button
              variant="contained"
              startIcon={!isMobile && <Save />}
              onClick={handleSave}
              disabled={saving}
              size={isMobile ? "small" : "medium"}
            >
              {saving ? "Saving..." : isMobile ? "Save" : "Save Resume"}
            </Button>
          </Box>
        </Box>
        {message && (
          <Alert severity={message.type} onClose={() => setMessage(null)} sx={{ mb: 2 }}>
            {message.text}
          </Alert>
        )}
      </Box>

      {/* Mobile Tab Switcher */}
      {isMobile && (
        <Box sx={{ maxWidth: "1600px", mx: "auto", px: 2, mb: 2 }}>
          <Tabs
            value={mobileTab}
            onChange={(_, newValue) => setMobileTab(newValue)}
            variant="fullWidth"
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              boxShadow: 1,
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
              },
            }}
          >
            <Tab icon={<Edit />} iconPosition="start" label="Edit" />
            <Tab icon={<Visibility />} iconPosition="start" label="Preview" />
          </Tabs>
        </Box>
      )}

      {/* Main Content */}
      <Box sx={{ maxWidth: "1600px", mx: "auto", px: { xs: 2, md: 3 } }}>
        {isMobile ? (
          // Mobile: Single panel with tabs
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              boxShadow: 1,
              overflow: "hidden",
              height: "calc(100vh - 280px)",
            }}
          >
            {mobileTab === 0 ? <ResumeForm /> : <ResumePreview />}
          </Box>
        ) : (
          // Desktop: Side-by-side layout
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr" },
              gap: 3,
              height: "calc(100vh - 200px)",
            }}
          >
            {/* Form Section */}
            <Box sx={{ backgroundColor: "#fff", borderRadius: 2, boxShadow: 1, overflow: "hidden" }}>
              <ResumeForm />
            </Box>

            {/* Preview Section */}
            <Box sx={{ backgroundColor: "#fff", borderRadius: 2, boxShadow: 1, overflow: "auto" }}>
              <ResumePreview />
            </Box>
          </Box>
        )}
      </Box>
      </Box>
    </Box>
  );
};

export default Builder;
