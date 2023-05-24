import { Album } from "@/lib/spotify/types";

type Props = {
  album: Album;
};

export default function AlbumArt({ album }: Props) {
  return (
    <img
      className="border-2 rounded-md bg-shell-200 border-shell-300"
      src={album.images[0].url}
      alt={`${album.name} Cover Art`}
    />
  );
}
