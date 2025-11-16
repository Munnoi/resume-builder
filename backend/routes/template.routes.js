import express from "express";
import {
  createTemplate,
  getAllTemplates,
  getTemplateById,
  updateTemplate,
  deleteTemplate,
} from "../controllers/template.controller.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/create", auth, createTemplate);
router.get("/", getAllTemplates);
router.get("/:id", getTemplateById);
router.put("/:id", auth, updateTemplate);
router.delete("/:id", auth, deleteTemplate);

export default router;
