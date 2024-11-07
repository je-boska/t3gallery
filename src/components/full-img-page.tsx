import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex h-full flex-shrink items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="max-h-full object-contain"
        />
      </div>
      <div className="flex w-96 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
