import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, Button, TextField, CircularProgress, Alert } from "@mui/material";
import { Save, ArrowBack } from "@mui/icons-material";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import PDFExport from "../components/PDFExport";
import { useResume } from "../context/ResumeContext";
import { createResume, updateResume, getResumeById } from "../services/api";

const Builder = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resumeId = searchParams.get("id");
  
  const { resumeData, setResumeData } = useResume();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

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
    <Box sx={{ pt: 10, pb: 4, minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <Box sx={{ maxWidth: "1600px", mx: "auto", px: 3, mb: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button startIcon={<ArrowBack />} onClick={() => navigate("/dashboard")} variant="outlined">
              Back
            </Button>
            <TextField
              value={resumeData.title}
              onChange={(e) => setResumeData({ ...resumeData, title: e.target.value })}
              variant="standard"
              sx={{ fontSize: "1.5rem", fontWeight: 600 }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <PDFExport resumeTitle={resumeData.title} />
            <Button
              variant="contained"
              startIcon={<Save />}
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Resume"}
            </Button>
          </Box>
        </Box>
        {message && (
          <Alert severity={message.type} onClose={() => setMessage(null)} sx={{ mb: 2 }}>
            {message.text}
          </Alert>
        )}
      </Box>

      {/* Main Content */}
      <Box sx={{ maxWidth: "1600px", mx: "auto", px: 3 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, height: "calc(100vh - 200px)" }}>
          {/* Form Section */}
          <Box sx={{ backgroundColor: "#fff", borderRadius: 2, boxShadow: 1, overflow: "hidden" }}>
            <ResumeForm />
          </Box>

          {/* Preview Section */}
          <Box sx={{ backgroundColor: "#fff", borderRadius: 2, boxShadow: 1, overflow: "auto" }}>
            <ResumePreview />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Builder;
