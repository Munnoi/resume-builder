import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";

interface PDFExportProps {
  resumeTitle?: string;
}

const PDFExport = ({ resumeTitle = "resume" }: PDFExportProps) => {
  const handleExportPDF = async () => {
    const element = document.getElementById("resume-preview");
    if (!element) {
      console.error("Resume preview element not found");
      return;
    }

    try {
      // Convert HTML to canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );

      pdf.save(`${resumeTitle}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <Button
      variant="contained"
      startIcon={<Download />}
      onClick={handleExportPDF}
      sx={{
        backgroundColor: "primary.main",
        "&:hover": { backgroundColor: "primary.dark" },
      }}
    >
      Export PDF
    </Button>
  );
};

export default PDFExport;
