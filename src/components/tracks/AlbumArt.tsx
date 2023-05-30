import { Album } from "@/lib/spotify/types";

type Props = {
  album: Album;
};

export default function AlbumArt({ album }: Props) {
  return (
    <img
      src={album.images[0].url}
      alt={`${album.name} Cover Art`}
    />
  );
}
