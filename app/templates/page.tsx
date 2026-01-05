import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; 
import { IconFilter, IconArrowRight, IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

// 1. Separate data 
const TEMPLATES = [
  {
    id: "fox-resume",
    title: "Fox Resume",
    description: "A sleek, nature-inspired design focusing on agility.",
    imageSrc: "/Fox.png",
    tags: ["Nature", "Creative", "Modern"],
  },
  {
    id: "vixen-resume",
    title: "Vixen Resume",
    description: "Elegant and poised, perfect for executive roles.",
    imageSrc: "/Female-Fox.png",
    tags: ["Elegant", "Clean", "Minimalist"],
  },
  {
    id: "feline-resume",
    title: "Feline Resume",
    description: "Sharp and focused layout for technical roles.",
    imageSrc: "/Cat.png",
    tags: ["Tech", "Sharp", "Monotonic"],
  },
  {
    id: "canine-resume",
    title: "Canine Resume",
    description: "Loyal and structured format for traditional industries.",
    imageSrc: "/Dog.png",
    tags: ["Professional", "Structured", "Bold"],
  },
];

const TemplatesResumePage = () => {
  return (
    // Removed 'absolute'. Used 'pt-24' to clear fixed navbars while maintaining document flow.
    <div className="min-h-screen w-full bg-background pt-24 pb-10 px-6 md:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Choose a Template
            </h1>
            <p className="mt-1 text-muted-foreground">
              Select a design to get started with your resume in minutes.
            </p>
          </div>

          <Button variant="outline" className="gap-2">
            <IconFilter size={18} />
            Filters
          </Button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TEMPLATES.map((template) => (
            <CardTemplate key={template.id} {...template} />
          ))}
        </div>
      </div>
    </div>
  );
};

function CardTemplate({
  id,
  title,
  description,
  imageSrc,
  tags,
}: {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
}) {
  return (
    <Card className="group relative flex flex-col justify-between overflow-hidden border-muted transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image Container - Changed to A4 Aspect Ratio for Resumes */}
      <div className="relative aspect-3/4 w-full overflow-hidden bg-muted/50">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Action Button Centered in Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {/* Using 'asChild' is the Shadcn standard way to merge Button and Link. 
              This prevents the invalid HTML of <button> inside <a>.
            */}
          <Link href={`/templates/${id}`} className="text-white">
            <IconCheck/>
            <span>Select</span>
          </Link>
        </div>
      </div>

      <CardHeader className="p-4 pb-2">
        <CardTitle className="flex items-center justify-between text-lg">
          {title}
          <IconArrowRight className="h-4 w-4 text-primary opacity-0 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100" />
        </CardTitle>
        <CardDescription className="mt-1 line-clamp-2 text-sm">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="p-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-medium text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

export default TemplatesResumePage;