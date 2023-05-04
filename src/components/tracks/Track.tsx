import { useState, useEffect } from "react";
import FeaturesAura from "./Features/FeaturesAura";
import { getTrackFeatures } from "@/lib/api";
import AlbumArt from "./AlbumArt";
import { useAudioPlayerContext } from "@/provider/AudioPlayerProvider";
import { msToMinSec } from "@/lib/utils";

export default function Track({ track }: { track: Track }) {
  const { nowPlayingTrack, setNowPlayingTrack, isPlaying, handlePlayPause } =
    useAudioPlayerContext();
  const [features, setFeatures] = useState<TrackAudioFeatures | null>(null);

  useEffect(() => {
    async function getFeatures() {
      const f = await getTrackFeatures(track.id);
      setFeatures(f);
    }
    if (!features) {
      getFeatures();
    }
  }, [features, track.id]);

  function handleSelectTrack() {
    setNowPlayingTrack(track);
    if (isPlaying) {
      handlePlayPause(false);
    }
  }

  return (
    <div className="text-sm">
      <div className="relative">
        <AlbumArt album={track.album} />
        <div className="absolute bottom-1 left-1 scale-[80%] hover:scale-[200%] transition-all duration-150 ease-in-out hover:left-8 hover:bottom-8">
          {features && <FeaturesAura features={features} id={track.id} />}
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-start p-2 text-xs font-medium gap-2 text-slate-200">
          <div>
            <p className="px-1 py-px rounded-full bg-slate-700/80">
              {features?.tempo.toString().split(".")[0]} BPM
            </p>
          </div>
          <div>
            <p className="px-1 py-px rounded-full bg-slate-700/80">
              {msToMinSec(features?.duration_ms)}s
            </p>
          </div>
        </div>
      </div>
      <div
        className="p-2 mt-2 font-bold rounded cursor-pointer line-clamp-2 bg-slate-200"
        onClick={handleSelectTrack}
      >
        <h2 className="text-base font-bold line-clamp-1">
          {nowPlayingTrack?.id === track.id && "🎧 "}
          {track.name}
        </h2>
        <p className="text-slate-600">
          {track.artists.map((a) => a.name).join(", ")}
        </p>
      </div>
    </div>
  );
}
