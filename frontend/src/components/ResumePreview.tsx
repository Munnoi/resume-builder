import { Box, Typography, Divider } from "@mui/material";
import { useResume } from "../context/ResumeContext";

const ResumePreview = () => {
  const { resumeData } = useResume();
  const { personalInfo, workExperience, education, skills } = resumeData;

  return (
    <Box
      id="resume-preview"
      sx={{
        p: 4,
        backgroundColor: "#fff",
        minHeight: "100%",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 3, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: "#1a1a1a" }}>
          {personalInfo.fullName || "Your Name"}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap", fontSize: "0.9rem", color: "#666" }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap", fontSize: "0.85rem", color: "#666", mt: 0.5 }}>
          {personalInfo.website && <a href={personalInfo.website} style={{ color: "#2563eb" }}>{personalInfo.website}</a>}
          {personalInfo.linkedin && <a href={personalInfo.linkedin} style={{ color: "#2563eb" }}>LinkedIn</a>}
          {personalInfo.github && <a href={personalInfo.github} style={{ color: "#2563eb" }}>GitHub</a>}
        </Box>
      </Box>

      {/* Summary */}
      {personalInfo.summary && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "#1a1a1a", fontSize: "1.1rem" }}>
              Professional Summary
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "#444", lineHeight: 1.6 }}>
              {personalInfo.summary}
            </Typography>
          </Box>
        </>
      )}

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#1a1a1a", fontSize: "1.1rem" }}>
              Work Experience
            </Typography>
            {workExperience.map((exp, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem" }}>
                    {exp.position || "Position"}
                  </Typography>
                  <Typography sx={{ fontSize: "0.85rem", color: "#666" }}>
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "0.9rem", color: "#666", mb: 0.5 }}>
                  {exp.company || "Company"} {exp.location && `• ${exp.location}`}
                </Typography>
                {exp.description && (
                  <Typography sx={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                    {exp.description}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </>
      )}

      {/* Education */}
      {education.length > 0 && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#1a1a1a", fontSize: "1.1rem" }}>
              Education
            </Typography>
            {education.map((edu, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.95rem" }}>
                    {edu.degree || "Degree"} {edu.field && `in ${edu.field}`}
                  </Typography>
                  <Typography sx={{ fontSize: "0.85rem", color: "#666" }}>
                    {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "0.9rem", color: "#666" }}>
                  {edu.school || "School"} {edu.location && `• ${edu.location}`}
                </Typography>
              </Box>
            ))}
          </Box>
        </>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#1a1a1a", fontSize: "1.1rem" }}>
              Skills
            </Typography>
            {skills.map((skillCat, index) => (
              <Box key={index} sx={{ mb: 1 }}>
                <Typography component="span" sx={{ fontWeight: 600, fontSize: "0.9rem", mr: 1 }}>
                  {skillCat.category}:
                </Typography>
                <Typography component="span" sx={{ fontSize: "0.9rem", color: "#444" }}>
                  {skillCat.items.join(", ")}
                </Typography>
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default ResumePreview;
