// Template controller with predefined templates
const templates = [
  {
    id: "modern",
    name: "Modern Professional",
    description: "Clean and modern design perfect for tech and creative industries",
    preview: "/templates/modern.png",
    category: "professional",
  },
  {
    id: "classic",
    name: "Classic Elegant",
    description: "Traditional format suitable for corporate and formal positions",
    preview: "/templates/classic.png",
    category: "traditional",
  },
  {
    id: "creative",
    name: "Creative Bold",
    description: "Eye-catching design for creative professionals and designers",
    preview: "/templates/creative.png",
    category: "creative",
  },
  {
    id: "minimal",
    name: "Minimal Clean",
    description: "Simple and clean layout focusing on content",
    preview: "/templates/minimal.png",
    category: "minimal",
  },
];

export const getAllTemplates = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: templates.length,
      templates,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch templates",
      error: error.message,
    });
  }
};

export const getTemplateById = async (req, res) => {
  try {
    const template = templates.find((t) => t.id === req.params.id);

    if (!template) {
      return res.status(404).json({
        success: false,
        message: "Template not found",
      });
    }

    res.status(200).json({
      success: true,
      template,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch template",
      error: error.message,
    });
  }
};

// Placeholder functions for future admin functionality
export const createTemplate = async (req, res) => {
  res.status(501).json({
    success: false,
    message: "Template creation not yet implemented",
  });
};

export const updateTemplate = async (req, res) => {
  res.status(501).json({
    success: false,
    message: "Template update not yet implemented",
  });
};

export const deleteTemplate = async (req, res) => {
  res.status(501).json({
    success: false,
    message: "Template deletion not yet implemented",
  });
};
