"use client";

import { Track } from "@/lib/spotify/types";
import AlbumArt from "./AlbumArt";
import TrackTitle from "./TrackTitle";
import { useAudioPlayerContext } from "@/provider/AudioPlayerProvider";
import TrackArtists from "./TrackArtists";
import Features from "./features/Features";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import { useSelectionsContext } from "@/provider/SelectionsProvider";
import { createTempoRange } from "@/lib/utils";
import { getTrackFeatures } from "@/lib/api";

type Props = {
  track: Track;
};

export default function Track({ track }: Props) {
  const { remainingSeedSpace, recommendationsInput, update, remove } =
    useRecommendationsContext();

  const { selectedTracks, addToSelection, removeFromSelection } =
    useSelectionsContext();

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

  function removeTrack() {
    remove.seedTracks(track.id);
  }

  async function addAura() {
    const features = await getTrackFeatures(track.id);
    const [min_tempo, target_tempo, max_tempo] = createTempoRange(
      features?.tempo
    );
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
        className="flex items-start cursor-pointer md:flex-col"
        onClick={handleSelectTrack}
      >
        <div className="w-32 h-32 md:w-full md:h-auto">
          <AlbumArt album={track.album} />
        </div>
        <div className="flex flex-col p-2">
          <TrackTitle name={track.name} />
          <TrackArtists artists={track.artists} />
          <p className="text-xs font-medium line-clamp-1 text-shell-600">
            {track.album.name}
          </p>
        </div>
      </div>
      <div className="flex-1 bg-shell-300">
        <Features track={track} />
      </div>
      <div className="overflow-hidden text-xs font-medium rounded-b grid grid-cols-2 bg-shell-200/80">
        {!recommendationsInput?.seed_tracks?.includes(track.id) ? (
          <button
            name="Add track to seeds"
            className="btn"
            onClick={() => addTrack()}
            type="button"
          >
            🌱 Add Seed
          </button>
        ) : (
          <button
            name="Remove track from seeds"
            className="btn"
            onClick={() => removeTrack()}
            type="button"
          >
            🍂 Remove Seed
          </button>
        )}
        {!selectedTracks.includes(track.id) ? (
          <button
            name="Add track to selection"
            className="btn"
            onClick={() => addToSelection(track.id)}
            type="button"
          >
            💾 Add Selection
          </button>
        ) : (
          <button
            name="Remove track from selection"
            className="btn"
            onClick={() => removeFromSelection(track.id)}
            type="button"
          >
            🗑️Remove Selection
          </button>
        )}
      </div>
    </div>
  );
}
