import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* MAIN */}
      <main className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-2xl flex-col items-center justify-center gap-1 p-4 text-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-5xl">
          Resume Builder
        </h1>
        <p className="text-muted-foreground mb-6">
          Open-source resume builder — free and no sign-up required.
        </p>
        <Boxed />
      </main>
    </div>
  );
}

function Box({
  title,
  buttonText,
  variant = "default",
}: {
  title: string;
  buttonText: string;
  variant?: "default" | "secondary" | "outline";
}) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <h2 className="text-muted-foreground text-sm font-medium">{title}</h2>
      <Button
        className="focus-visible:ring-ring transition-transform duration-200 hover:scale-105 focus-visible:ring-2"
        variant={variant}
        size="lg"
      >
        {buttonText}
      </Button>
    </div>
  );
}

function Boxed() {
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-4">
      <Link href="/create-resume">
        <Box
          title="Create a Resume"
          buttonText="Create Resume"
          variant="outline"
        />
      </Link>
      <Separator
        orientation="vertical"
        className="hidden h-16 opacity-40 sm:block"
      />
      <Link href="/parse-resume">
        <Box
          title="Parse Existing Resume"
          buttonText="Parse Resume"
          variant="outline"
        />
      </Link>
      <Separator
        orientation="vertical"
        className="hidden h-16 opacity-40 sm:block"
      />
      <Link href="/templates">
        <Box
          title="Browse Templates"
          buttonText="View Templates"
          variant="outline"
        />
      </Link>
    </div>
  );
}
