import Image from "next/image";

export default function AlbumArt({ album }: { album: Album }) {
  return (
    <Image
      className="border-2 rounded-md bg-shell-200 border-shell-300"
      src={album.images[0].url}
      width={album.images[0].width || 500}
      height={album.images[0].height || 500}
      alt={`${album.name} Cover Art`}
    />
  );
}

