import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  IconButton,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Add, Edit, Delete, ContentCopy } from "@mui/icons-material";
import { getAllResumes, deleteResume, duplicateResume } from "../services/api";

const Dashboard = () => {
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadResumes();
  }, []);

  const loadResumes = async () => {
    setLoading(true);
    try {
      const response = await getAllResumes();
      setResumes(response.resumes);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to load resumes");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this resume?")) return;
    
    try {
      await deleteResume(id);
      setResumes(resumes.filter((r) => r._id !== id));
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to delete resume");
    }
  };

  const handleDuplicate = async (id: string) => {
    try {
      const response = await duplicateResume(id);
      setResumes([response.resume, ...resumes]);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to duplicate resume");
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
    <Box sx={{ pt: 12, pb: 8, minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Box sx={{ maxWidth: "1280px", mx: "auto", px: 3 }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            My Resumes
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => navigate("/builder")}
            sx={{ px: 3, py: 1.5 }}
          >
            Create New Resume
          </Button>
        </Box>

        {error && (
          <Alert severity="error" onClose={() => setError("")} sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Resume Grid */}
        {resumes.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h6" sx={{ mb: 2, color: "text.secondary" }}>
              No resumes yet
            </Typography>
            <Typography sx={{ mb: 3, color: "text.secondary" }}>
              Create your first resume to get started
            </Typography>
            <Button variant="contained" startIcon={<Add />} onClick={() => navigate("/builder")}>
              Create Resume
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }, gap: 3 }}>
            {resumes.map((resume) => (
              <Card key={resume._id} sx={{ boxShadow: 2, "&:hover": { boxShadow: 4 }, transition: "0.3s" }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {resume.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {resume.personalInfo?.fullName || "No name"}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Last updated: {new Date(resume.updatedAt).toLocaleDateString()}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
                  <Button
                    size="small"
                    startIcon={<Edit />}
                    onClick={() => navigate(`/builder?id=${resume._id}`)}
                  >
                    Edit
                  </Button>
                  <Box>
                    <IconButton size="small" onClick={() => handleDuplicate(resume._id)} title="Duplicate">
                      <ContentCopy fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={() => handleDelete(resume._id)} color="error" title="Delete">
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
                </CardActions>
              </Card>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
