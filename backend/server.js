import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import resumeRoutes from "./routes/resume.routes.js";
import templateRoutes from "./routes/template.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // Vite default
  credentials: true
}));
app.use(cookieParser());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", userRoutes);
app.use("/api/resumes", resumeRoutes);
app.use("/api/templates", templateRoutes);

app.get("/", (req, res) => {
  res.send("Resume Builder API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
