import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const notFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex max-w-xl items-center justify-center gap-4 border-4 p-4">
        <Image src="/404-fox.png" alt="404 Image" width={200} height={200} />
        <div className="flex flex-col gap-4 text-sm">
          <h1 className="text-xl font-bold tabular-nums">404 - Page Not Found</h1>
          <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/">
          <Button variant={"link"} className="text-sm">Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default notFoundPage;
