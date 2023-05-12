import { useState, useEffect } from "react";
import FeaturesAura from "./Features/FeaturesAura";
import { getTrackFeatures } from "@/lib/api";
import AlbumArt from "./AlbumArt";
import { useAudioPlayerContext } from "@/provider/AudioPlayerProvider";
import { formatPercentage, msToMinSec } from "@/lib/utils";
import { Keys, TrackAudioFeatures } from "@/lib/spotify/types";
import SpotifyLogo from "../SpotifyLogo";

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

        <div className="absolute top-0 left-0 flex flex-col items-start p-2 text-xs font-medium gap-2 text-shell-200">
          <div>
            <p className="px-1 py-px rounded-full bg-shell-700/80">
              🥁 {features?.tempo.toString().split(".")[0]} BPM
            </p>
          </div>
          <div>
            <p className="px-1 py-px rounded-full bg-shell-700/80">
              🖋️ {features?.time_signature}/4
            </p>
          </div>
          <div>
            <p className="px-1 py-px rounded-full bg-shell-700/80">
              👀 {formatPercentage(track.popularity / 100)} Popular
            </p>
          </div>
          <div>
            <p className="px-1 py-px rounded-full bg-shell-700/80">
              {/* @ts-ignore */}
              🎹 {features?.key ? Keys[features?.key] : ""}
              {features?.mode == 0 ? " Min" : " Maj"}
            </p>
          </div>
          <div>
            <p className="px-1 py-px rounded-full bg-shell-700/80">
              ⏱️ {msToMinSec(features?.duration_ms)}s
            </p>
          </div>
        </div>
      </div>
      <div
        className="p-2 mt-2 font-bold rounded cursor-pointer line-clamp-2 bg-shell-200 hover:bg-shell-200/50 transition-all duration-150"
        onClick={handleSelectTrack}
      >
        <h2 className="flex items-center text-base font-bold line-clamp-1 gap-1">
          <div className="w-4 h-4 bg-white rounded-full">
            <a target="_blank" href={track.external_urls.spotify}>
              <SpotifyLogo />
            </a>
          </div>
          {nowPlayingTrack?.id === track.id && "🎧 "}
          {track.name}
        </h2>
        <p className="text-shell-600">
          {track.artists.map((a) => a.name).join(", ")}
        </p>
      </div>
    </div>
  );
}
