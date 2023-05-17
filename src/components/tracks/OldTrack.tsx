import { useState, useEffect } from "react";
import FeaturesAura from "./Features/FeaturesAura";
import { getTrackFeatures } from "@/lib/api";
import AlbumArt from "./AlbumArt";
import { useAudioPlayerContext } from "@/provider/AudioPlayerProvider";
import { formatPercentage, msToMinSec } from "@/lib/utils";
import { Keys } from "@/lib/spotify/constants";
import { Track as TrackType } from "@/lib/spotify/types";
import { TrackAudioFeatures } from "@/lib/spotify/client/tracks";
import FeatureTag from "./Features/FeatureTag";
import TrackTitle from "./TrackTitle";
import TrackArtists from "./TrackArtists";

export default function OldTrack({ track }: { track: TrackType }) {
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
        <div className="relative w-64 h-64">
          <AlbumArt album={track.album} />
        </div>
        <div className="absolute bottom-1 left-1 scale-[80%] hover:scale-[200%] transition-all duration-150 ease-in-out hover:left-8 hover:bottom-8">
          {features && <FeaturesAura features={features} id={track.id} />}
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-start p-2 text-xs gap-2">
          <FeatureTag>
            🥁 {features?.tempo.toString().split(".")[0]} BPM
          </FeatureTag>
          <FeatureTag>🖋️ {features?.time_signature}/4</FeatureTag>
          <FeatureTag>
            👀 {formatPercentage(track.popularity / 100)} Popular
          </FeatureTag>
          <FeatureTag>
            🎹 {features?.key ? Keys[features?.key] : ""}
            {features?.mode == 0 ? " Min" : " Maj"}
          </FeatureTag>
          <FeatureTag>⏱️ {msToMinSec(features?.duration_ms)}s</FeatureTag>
        </div>
      </div>
      <div
        className="p-2 mt-2 font-bold rounded cursor-pointer line-clamp-2 bg-shell-200 hover:bg-shell-200/50 transition-all duration-150"
        onClick={handleSelectTrack}
      >
        <TrackTitle
          name={track.name}
          href={track.external_urls.spotify}
          playing={nowPlayingTrack?.id === track.id}
        />
        <TrackArtists artists={track.artists} />
      </div>
    </div>
  );
}
