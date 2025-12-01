import express from "express";
import {
  createTemplate,
  getAllTemplates,
  getTemplateById,
  updateTemplate,
  deleteTemplate,
} from "../controllers/template.controller.js";
import { ProtectRoute } from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/create", ProtectRoute, createTemplate);
router.get("/", getAllTemplates);
router.get("/:id", getTemplateById);
router.put("/:id", ProtectRoute, updateTemplate);
router.delete("/:id", ProtectRoute, deleteTemplate);

export default router;
