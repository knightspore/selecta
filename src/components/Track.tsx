import { SpotifyClient } from "@/lib/spotify";
import Image from "next/image";
import AudioPlayer from "./AudioPlayer";

export default async function Track({ track }: { track: Track }) {

  const features = await SpotifyClient.Tracks.AudioFeaturesSingle(track.id);

  return (
    <div className="flex flex-row items-center p-2 mt-2 bg-slate-200 rounded-md">
      <Image
        className="w-64 h-64 border-2 rounded-md bg-slate-200 border-slate-500"
        src={track.album.images[0].url}
        width={track.album.images[0].width || 500}
        height={track.album.images[0].height || 500}
        alt={`${track.album.name} Cover Art`}
      />
      <div className="inset-0 p-4 bg-slate-200/80">
        <h2 className="text-sm font-medium">{track.name}</h2>
        <p className="text-sm text-slate-500 line-clamp-1">
          {track.album.name}
        </p>
        <p className="text-xs font-bold text-slate-500 line-clamp-1">
          {track.artists.map((a) => a.name).join(", ")}
        </p>
        <AudioPlayer track={track} />
      </div>
      <pre className="text-xs">{JSON.stringify(features, null, 2)}</pre>
    </div>
  );
}
