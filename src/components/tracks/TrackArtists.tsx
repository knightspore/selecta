import { Track } from "@/lib/spotify/types";

export default function TrackArtists({
  artists,
}: {
  artists: Track["artists"];
}) {
  return (
    <p className="text-sm font-medium text-shell-600">{artists.map((a) => a.name).join(", ")}</p>
  );
}
