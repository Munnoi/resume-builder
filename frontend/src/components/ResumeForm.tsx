import { Box, Typography, TextField, Button, IconButton, Divider } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import { useResume } from "../context/ResumeContext";

const ResumeForm = () => {
  const { resumeData, setResumeData } = useResume();

  const handlePersonalInfoChange = (field: string, value: string) => {
    setResumeData({
      ...resumeData,
      personalInfo: { ...resumeData.personalInfo, [field]: value },
    });
  };

  const addWorkExperience = () => {
    setResumeData({
      ...resumeData,
      workExperience: [
        ...resumeData.workExperience,
        {
          company: "",
          position: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        },
      ],
    });
  };

  const updateWorkExperience = (index: number, field: string, value: any) => {
    const updated = [...resumeData.workExperience];
    updated[index] = { ...updated[index], [field]: value };
    setResumeData({ ...resumeData, workExperience: updated });
  };

  const removeWorkExperience = (index: number) => {
    setResumeData({
      ...resumeData,
      workExperience: resumeData.workExperience.filter((_, i) => i !== index),
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          school: "",
          degree: "",
          field: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        },
      ],
    });
  };

  const updateEducation = (index: number, field: string, value: any) => {
    const updated = [...resumeData.education];
    updated[index] = { ...updated[index], [field]: value };
    setResumeData({ ...resumeData, education: updated });
  };

  const removeEducation = (index: number) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((_, i) => i !== index),
    });
  };

  const addSkillCategory = () => {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, { category: "", items: [] }],
    });
  };

  const updateSkillCategory = (index: number, field: string, value: any) => {
    const updated = [...resumeData.skills];
    if (field === "items") {
      updated[index].items = value.split(",").map((s: string) => s.trim());
    } else {
      updated[index].category = value;
    }
    setResumeData({ ...resumeData, skills: updated });
  };

  const removeSkillCategory = (index: number) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((_, i) => i !== index),
    });
  };

  return (
    <Box sx={{ p: 3, overflowY: "auto", height: "100%" }}>
      {/* Personal Information */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Personal Information
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
        <TextField
          label="Full Name"
          value={resumeData.personalInfo.fullName}
          onChange={(e) => handlePersonalInfoChange("fullName", e.target.value)}
          fullWidth
          required
        />
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <TextField
            label="Email"
            type="email"
            value={resumeData.personalInfo.email}
            onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
            required
          />
          <TextField
            label="Phone"
            value={resumeData.personalInfo.phone}
            onChange={(e) => handlePersonalInfoChange("phone", e.target.value)}
          />
        </Box>
        <TextField
          label="Location"
          value={resumeData.personalInfo.location}
          onChange={(e) => handlePersonalInfoChange("location", e.target.value)}
        />
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }}>
          <TextField
            label="Website"
            value={resumeData.personalInfo.website}
            onChange={(e) => handlePersonalInfoChange("website", e.target.value)}
          />
          <TextField
            label="LinkedIn"
            value={resumeData.personalInfo.linkedin}
            onChange={(e) => handlePersonalInfoChange("linkedin", e.target.value)}
          />
          <TextField
            label="GitHub"
            value={resumeData.personalInfo.github}
            onChange={(e) => handlePersonalInfoChange("github", e.target.value)}
          />
        </Box>
        <TextField
          label="Professional Summary"
          value={resumeData.personalInfo.summary}
          onChange={(e) => handlePersonalInfoChange("summary", e.target.value)}
          multiline
          rows={4}
        />
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Work Experience */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Work Experience
        </Typography>
        <Button startIcon={<Add />} onClick={addWorkExperience} variant="outlined" size="small">
          Add Experience
        </Button>
      </Box>
      {resumeData.workExperience.map((exp, index) => (
        <Box key={index} sx={{ mb: 3, p: 2, border: "1px solid #e0e0e0", borderRadius: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="subtitle2">Experience {index + 1}</Typography>
            <IconButton size="small" onClick={() => removeWorkExperience(index)} color="error">
              <Delete />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              <TextField
                label="Company"
                value={exp.company}
                onChange={(e) => updateWorkExperience(index, "company", e.target.value)}
                size="small"
              />
              <TextField
                label="Position"
                value={exp.position}
                onChange={(e) => updateWorkExperience(index, "position", e.target.value)}
                size="small"
              />
            </Box>
            <TextField
              label="Location"
              value={exp.location}
              onChange={(e) => updateWorkExperience(index, "location", e.target.value)}
              size="small"
            />
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              <TextField
                label="Start Date"
                type="month"
                value={exp.startDate}
                onChange={(e) => updateWorkExperience(index, "startDate", e.target.value)}
                size="small"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="End Date"
                type="month"
                value={exp.endDate}
                onChange={(e) => updateWorkExperience(index, "endDate", e.target.value)}
                size="small"
                disabled={exp.current}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <TextField
              label="Description"
              value={exp.description}
              onChange={(e) => updateWorkExperience(index, "description", e.target.value)}
              multiline
              rows={3}
              size="small"
            />
          </Box>
        </Box>
      ))}

      <Divider sx={{ my: 3 }} />

      {/* Education */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Education
        </Typography>
        <Button startIcon={<Add />} onClick={addEducation} variant="outlined" size="small">
          Add Education
        </Button>
      </Box>
      {resumeData.education.map((edu, index) => (
        <Box key={index} sx={{ mb: 3, p: 2, border: "1px solid #e0e0e0", borderRadius: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="subtitle2">Education {index + 1}</Typography>
            <IconButton size="small" onClick={() => removeEducation(index)} color="error">
              <Delete />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="School/University"
              value={edu.school}
              onChange={(e) => updateEducation(index, "school", e.target.value)}
              size="small"
            />
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              <TextField
                label="Degree"
                value={edu.degree}
                onChange={(e) => updateEducation(index, "degree", e.target.value)}
                size="small"
              />
              <TextField
                label="Field of Study"
                value={edu.field}
                onChange={(e) => updateEducation(index, "field", e.target.value)}
                size="small"
              />
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              <TextField
                label="Start Date"
                type="month"
                value={edu.startDate}
                onChange={(e) => updateEducation(index, "startDate", e.target.value)}
                size="small"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="End Date"
                type="month"
                value={edu.endDate}
                onChange={(e) => updateEducation(index, "endDate", e.target.value)}
                size="small"
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Box>
        </Box>
      ))}

      <Divider sx={{ my: 3 }} />

      {/* Skills */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Skills
        </Typography>
        <Button startIcon={<Add />} onClick={addSkillCategory} variant="outlined" size="small">
          Add Category
        </Button>
      </Box>
      {resumeData.skills.map((skill, index) => (
        <Box key={index} sx={{ mb: 2, p: 2, border: "1px solid #e0e0e0", borderRadius: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="subtitle2">Skill Category {index + 1}</Typography>
            <IconButton size="small" onClick={() => removeSkillCategory(index)} color="error">
              <Delete />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Category (e.g., Programming Languages)"
              value={skill.category}
              onChange={(e) => updateSkillCategory(index, "category", e.target.value)}
              size="small"
            />
            <TextField
              label="Skills (comma separated)"
              value={skill.items.join(", ")}
              onChange={(e) => updateSkillCategory(index, "items", e.target.value)}
              size="small"
              placeholder="JavaScript, React, Node.js"
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ResumeForm;
