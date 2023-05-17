import { Track } from "@/lib/spotify/types";
import AlbumArt from "./AlbumArt";
import TrackTitle from "./TrackTitle";
import { useState, useEffect } from "react";
import { TrackAudioFeatures } from "@/lib/spotify/client/tracks";
import { getTrackFeatures } from "@/lib/api";
import { useAudioPlayerContext } from "@/provider/AudioPlayerProvider";
import FeaturesAura from "./Features/FeaturesAura";
import TrackArtists from "./TrackArtists";
import Features from "./Features/Features";

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
    <div
      className={`relative flex flex-col p-2 mt-2 rounded gap-2 bg-shell-200 hover:bg-shell-200/50 transition-all duration-150 ${
        nowPlayingTrack?.id === track.id &&
        "!bg-coral-200 hover:!bg-coral-200/50"
      }`}
    >
      <div
        className="flex items-center cursor-pointer md:items-start md:flex-col gap-2"
        onClick={handleSelectTrack}
      >
        <div className="w-12 h-12 md:w-full md:h-64">
          <AlbumArt album={track.album} />
        </div>
        <div className="absolute -top-1 -left-1 md:w-24 md:h-24 ">
          <FeaturesAura id={track.id} />
        </div>
        <div className="flex flex-col">
          <TrackTitle name={track.name} href={track.external_urls.spotify} />
          <TrackArtists artists={track.artists} />
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        <Features track={track} />
      </div>
    </div>
  );
}
