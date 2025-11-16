import Template from "../models/template.model.js";

export const createTemplate = async (req, res) => {
    try {
        const { templateName, description, imgPreviewUrl, html, css } = req.body;

        const template = await Template.create({
            author: req.user.id, // comes from auth middleware
            templateName,
            description,
            imgPreviewUrl,
            html,
            css
        });

        res.status(201).json({
            message: "Template created successfully",
            template
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getAllTemplates = async (req, res) => {
    try {
        const templates = await Template.find().populate("author", "fullName email"); // replaces the author with actual author doc (_id, fullName, email)

        res.json({
            count: templates.length,
            templates
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getTemplateById = async (req, res) => {
    try {
        const template = await Template.findById(req.params.id).populate("author");

        if (!template) {
            return res.status(404).json({ message: "Template not found" });
        }

        res.json(template);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const updateTemplate = async (req, res) => {
    try {
        const template = await Template.findById(req.params.id);

        if (!template) {
            return res.status(404).json({ message: "Template not found" });
        }

        // only the author can update
        if (template.author.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized" });
        }

        const updated = await Template.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            message: "Template updated successfully",
            updated
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const deleteTemplate = async (req, res) => {
    try {
        const template = await Template.findById(req.params.id);

        if (!template) {
            return res.status(404).json({ message: "Template not found" });
        }

        // only the author can delete
        if (template.author.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized" });
        }

        await template.deleteOne();

        res.json({ message: "Template deleted successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
