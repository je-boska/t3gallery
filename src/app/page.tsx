import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image, idx) => (
          <div key={image.id + "-" + idx} className="flex w-48 flex-col">
            <img src={image.url} alt="image" className="h-40 self-center" />
            <span>{image.name}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
