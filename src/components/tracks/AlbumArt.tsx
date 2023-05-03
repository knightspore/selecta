import Image from "next/image";

export default function AlbumArt({ album }: { album: Album }) {
  return (
    <Image
      className="w-48 h-48 border-2 rounded-md bg-slate-200 border-slate-300"
      src={album.images[0].url}
      width={album.images[0].width || 500}
      height={album.images[0].height || 500}
      alt={`${album.name} Cover Art`}
    />
  );
}

