import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";
import { Button } from "../ui/button";
import { IconBrandGithub } from "@tabler/icons-react";
import { Separator } from "../ui/separator";

async function getCount() {
  const repo = "kann4n/resume-builder";
  try {
    const res = await fetch(
      `https://api.github.com/repos/${repo}`,
      { next: { revalidate: 3600*2  } }
      // star count doesn't change often so it is good btw.
    );

    if (!res.ok) return 0;

    const data = await res.json();
    return data.stargazers_count ?? 0;
  } catch {
    return 0;
  }
}

const NavBar = async () => {
  const count = await getCount();
  return (
    <nav className="flex items-center justify-between w-full h-12 px-4 border-b-2 z-10 absolute">
      <Link href="/">
        <h1 className="text-sm sm:text-base font-semibold">Resume Builder</h1>
      </Link>
      <div className="flex gap-1">
        {/* theme toggle */}
        <ModeToggle />
        <Link href="https://github.com/kann4n/resume-builder">
          <Button
            variant="ghost"
            className="flex items-center space-x-2 text-sm"
          >
            <IconBrandGithub />
            <span className="hidden sm:inline">GitHub</span>
            <Separator orientation="vertical" className="hidden sm:block " />
            <span className="sm:ml-2 text-muted-foreground tabular-nums">
              {count}
            </span>
          </Button>
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
