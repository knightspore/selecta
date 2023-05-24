import {
  defaultRecommendationsInput,
  defaultSeedArtists,
  defaultSeedTracks,
} from "@/lib/constants";
import { RecommendationsInput } from "@/lib/spotify/client/tracks";
import { ArtistID, TrackID } from "@/lib/spotify/types";
import { useState } from "react";

type useRecommendationsType = {
  recommendationsInput: RecommendationsInput;
  update: Record<string, (update: any) => void>;
  remove: Record<string, (update: any) => void>;
  remainingSeedSpace: boolean;
};

export default function useRecommendations(): useRecommendationsType {
  const [recommendationsInput, setRecommendationsInput] =
    useState<RecommendationsInput>(defaultRecommendationsInput);
  const [seedArtistsInput, setSeedArtistsInput] =
    useState<Array<ArtistID>>(defaultSeedArtists);
  const [seedTracksInput, setSeedTracksInput] =
    useState<Array<TrackID>>(defaultSeedTracks);

  // Combine Recommendation Pieces

  const combinedRecommmendationsInput: RecommendationsInput = {
    ...recommendationsInput,
    seed_artists: seedArtistsInput,
    seed_tracks: seedTracksInput,
  };

  // Update Functions

  const update = {
    recommendations: (update: Partial<RecommendationsInput>) =>
      setRecommendationsInput({
        ...recommendationsInput,
        ...update,
      }),
    seedArtists: (update: ArtistID) =>
      setSeedArtistsInput([...seedArtistsInput, update]),
    seedTracks: (update: TrackID) =>
      setSeedTracksInput([...seedTracksInput, update]),
  };

  const remove = {
    seedArtists: (update: ArtistID) =>
      setSeedArtistsInput([...seedArtistsInput.filter((v) => v != update)]),
    seedTracks: (update: TrackID) =>
      setSeedTracksInput([...seedTracksInput.filter((v) => v != update)]),
  };

  // Calculate Remaining Seed Space

  const lenSeedGenres = recommendationsInput?.seed_genres?.length || 0;
  const lenSeedArtists = seedArtistsInput.length;
  const lenSeedTracks = seedTracksInput.length;

  const remainingSeedSpace = lenSeedGenres + lenSeedTracks + lenSeedArtists < 5;

  return {
    recommendationsInput: combinedRecommmendationsInput,
    update,
    remove,
    remainingSeedSpace,
  };
}
