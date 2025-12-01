import mongoose from "mongoose";

const workExperienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  location: String,
  startDate: { type: String, required: true },
  endDate: String,
  current: { type: Boolean, default: false },
  description: String,
});

const educationSchema = new mongoose.Schema({
  school: { type: String, required: true },
  degree: { type: String, required: true },
  field: String,
  location: String,
  startDate: String,
  endDate: String,
  current: { type: Boolean, default: false },
  description: String,
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  technologies: [String],
  link: String,
  startDate: String,
  endDate: String,
});

const skillSchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [String],
});

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: String,
  date: String,
  link: String,
});

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      default: "Untitled Resume",
    },
    templateId: {
      type: String,
      default: "modern",
    },
    personalInfo: {
      fullName: { type: String, required: true },
      email: { type: String, required: true },
      phone: String,
      location: String,
      website: String,
      linkedin: String,
      github: String,
      summary: String,
    },
    workExperience: [workExperienceSchema],
    education: [educationSchema],
    projects: [projectSchema],
    skills: [skillSchema],
    certifications: [certificationSchema],
    languages: [String],
    interests: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Resume", resumeSchema);
