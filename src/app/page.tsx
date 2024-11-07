import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {[...images, ...images, ...images].map((image) => (
        <div key={image.id}>
          <Link href={`/img/${image.id}`}>
            <div className="flex h-48 w-48 flex-col">
              <Image
                className="h-full"
                style={{ objectFit: "contain" }}
                src={image.url}
                alt={image.name}
                width={192}
                height={192}
              />
            </div>
          </Link>
          <span>{image.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="p-4">
          <span className="text-center">Please sign in to view content</span>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
