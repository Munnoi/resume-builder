import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconFilter, IconArrowRight, IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const TEMPLATES = [
  {
    id: "modern",
    title: "Modern Premium",
    description:
      "A sleek, dark-themed sidebar design focusing on agility and clean typography.",
    imageSrc: "/Fox.png", // Keeping placeholders for now, user can update later
    tags: ["Modern", "Dark Sidebar", "Clean"],
  },
  {
    id: "professional",
    title: "Professional",
    description:
      "Elegant, top-down classic layout perfect for corporate and executive roles.",
    imageSrc: "/Female-Fox.png",
    tags: ["Classic", "Corporate", "Minimalist"],
  },
  {
    id: "creative",
    title: "Creative",
    description:
      "Unique layout with accent headers and dynamic spacing for creative professionals.",
    imageSrc: "/Cat.png",
    tags: ["Creative", "Unique", "Bold"],
  },
];

const TemplatesResumePage = () => {
  return (
    <div className="bg-background min-h-screen w-full px-6 pt-24 pb-10 md:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header Section */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-foreground text-3xl font-bold tracking-tight">
              Choose a Premium Template
            </h1>
            <p className="text-muted-foreground mt-1">
              Select a professional design to stand out from the crowd.
            </p>
          </div>

          <Button variant="outline" className="gap-2">
            <IconFilter size={18} />
            Filters
          </Button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
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
    <Card className="group border-muted relative flex max-h-150 flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image Container */}
      <div className="bg-muted/50 relative aspect-[1/1.41] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Action Button Centered in Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link
            href={`/create-resume/${id}`}
            className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 font-semibold text-black transition-transform hover:scale-105"
          >
            <IconCheck size={18} />
            <span>Select Template</span>
          </Link>
        </div>
      </div>

      <CardHeader className="p-2">
        <CardTitle className="flex items-center justify-between text-lg">
          {title}
          <IconArrowRight className="text-primary h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </CardTitle>
        <CardDescription className="mt-1 line-clamp-2 text-sm">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="p-2">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

export default TemplatesResumePage;
