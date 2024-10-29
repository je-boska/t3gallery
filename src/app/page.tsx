import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockURLs = [
  "https://utfs.io/f/oVM2T4OK1LUnzZrPp7fRP8cZfLrnKdM6VY1H5oAFmlSCUIpw",
  "https://utfs.io/f/oVM2T4OK1LUnwWFHr72PelGUnA2hj3YHI96uQasRX15T0moW",
  "https://utfs.io/f/oVM2T4OK1LUnr8B9ZrJeKbFEf7qj32PGxsH9M8YgnoS6NlZe",
  "https://utfs.io/f/oVM2T4OK1LUnH5c1A04oPnCHakZMIQeByiNLwVcpvXzFRWbd",
  "https://utfs.io/f/oVM2T4OK1LUngUhzJpZbxfzAGmaFtPX8hKy3DwTuONrH0dRU",
];

const mockImages = mockURLs.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, idx) => (
          <div key={image.id + "-" + idx} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
