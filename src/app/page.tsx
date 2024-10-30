import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url} alt="image" className="h-40 self-center" />
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
