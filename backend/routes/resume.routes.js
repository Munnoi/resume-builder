import express from "express";
import {
  createResume,
  getAllResumes,
  getResumeById,
  updateResume,
  deleteResume,
  duplicateResume,
} from "../controllers/resume.controller.js";
import { ProtectRoute } from "../middlewares/protectRoute.js";

const router = express.Router();

// All routes require authentication
router.post("/", ProtectRoute, createResume);
router.get("/", ProtectRoute, getAllResumes);
router.get("/:id", ProtectRoute, getResumeById);
router.put("/:id", ProtectRoute, updateResume);
router.delete("/:id", ProtectRoute, deleteResume);
router.post("/:id/duplicate", ProtectRoute, duplicateResume);

export default router;
