"use client";

import { Track } from "@/lib/spotify/types";
import AlbumArt from "./AlbumArt";
import TrackTitle from "./TrackTitle";
import { useAudioPlayerContext } from "@/provider/AudioPlayerProvider";
import FeaturesAura from "./Features/FeaturesAura";
import TrackArtists from "./TrackArtists";
import Features from "./Features/Features";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import useFeatures from "@/lib/hooks/useFeatures";
import Button from "../Button";

export default function Track({ track }: { track: Track }) {
  const features = useFeatures(track.id);

  const { remainingSeedSpace, recommendationsInput, update } =
    useRecommendationsContext();

  const { nowPlayingTrack, setNowPlayingTrack, isPlaying, handlePlayPause } =
    useAudioPlayerContext();

  function handleSelectTrack() {
    setNowPlayingTrack(track);
    if (isPlaying) {
      handlePlayPause(false);
    }
  }

  function addTrack() {
    if (remainingSeedSpace) {
      update.seedTracks(track.id);
    }
  }

  function addAura() {
    const [min_tempo, target_tempo, max_tempo] = features?.tempo
      ? [
          Math.floor(features.tempo - 10),
          Math.floor(features.tempo),
          Math.floor(features.tempo + 10),
        ]
      : [110, 120, 130];

    update.recommendations({
      min_tempo,
      max_tempo,
      target_tempo,
      target_energy: features?.energy,
      target_valence: features?.valence,
      target_instrumentalness: features?.instrumentalness,
      target_speechiness: features?.speechiness,
      target_danceability: features?.danceability,
    });
  }

  return (
    <div
      className={`relative flex flex-col mt-2 rounded bg-shell-200 hover:bg-shell-200/50 transition-all duration-150 ${
        nowPlayingTrack?.id === track.id &&
        "!bg-coral-200 hover:!bg-coral-200/50"
      }`}
    >
      <div
        className="flex items-start p-2 cursor-pointer md:flex-col gap-2"
        onClick={handleSelectTrack}
      >
        <div className="w-12 h-12 md:w-full md:h-auto">
          <AlbumArt album={track.album} />
        </div>
        <div className="absolute -top-1 -left-1 md:w-24 md:h-24 ">
          <FeaturesAura id={track.id} />
        </div>

        <div className="flex flex-col">
          <TrackTitle name={track.name} />
          <TrackArtists artists={track.artists} />
        </div>
      </div>
      <div className="flex flex-wrap p-2 pt-0 text-xs gap-2">
        {!recommendationsInput?.seed_tracks?.includes(track.id) && (
          <Button
            text="🌱 Add Seed Track"
            onClick={() => addTrack()}
            type="button"
            disabled={false}
          />
        )}
        <Button
          text="🔮 Copy Aura"
          onClick={() => addAura()}
          type="button"
          disabled={false}
        />
      </div>
      <div className="relative flex flex-wrap p-2 rounded-b gap-1 bg-shell-300">
        <Features track={track} />
      </div>
    </div>
  );
}
