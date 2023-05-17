"use client";

import { getRecommendations } from "@/lib/api";
import React, { createContext, useContext, useState } from "react";
import { useAudioPlayerContext } from "./AudioPlayerProvider";
import {
  defaultRecommendationsInput,
  defaultSeedArtists,
  defaultSeedTracks,
} from "@/lib/constants";
import {
  Genres,
  Recommendations,
  RecommendationsInput,
} from "@/lib/spotify/client/tracks";
import { ArtistID, TrackID } from "@/lib/spotify/types";
import { trackRecommendations } from "@/lib/analytics";
import useGenres from "@/lib/hooks/useGenres";

type RecommendationsContextType = {
  recommendations: Recommendations | null;
  setRecommendations: (r: Recommendations | null) => void;
  recommendationsInput: RecommendationsInput;
  setRecommendationsInput: (r: RecommendationsInput) => void;
  seedArtistsInput: ArtistID[];
  setSeedAritstsInput: (s: ArtistID[]) => void;
  seedTracksInput: TrackID[];
  setSeedTracksInput: (t: TrackID[]) => void;
  availableGenres: Genres;
  refreshRecommendations: () => void;
  isLoading: boolean;
  remainingSeedSpace: boolean;
};

const RecommendationsContext = createContext<RecommendationsContextType>(
  {} as RecommendationsContextType
);

export function useRecommendationsContext() {
  const value = useContext(RecommendationsContext);
  if (value == null) {
    throw new Error("No RecommendationsContext Value");
  } else {
    return value as RecommendationsContextType;
  }
}

export default function RecommendationsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setNowPlayingTrack } = useAudioPlayerContext();

  const [recommendations, setRecommendations] =
    useState<Recommendations | null>(null);
  const [recommendationsInput, setRecommendationsInput] =
    useState<RecommendationsInput>(defaultRecommendationsInput);
  const [seedArtistsInput, setSeedAritstsInput] =
    useState<ArtistID[]>(defaultSeedArtists);
  const [seedTracksInput, setSeedTracksInput] =
    useState<TrackID[]>(defaultSeedTracks);
  const availableGenres = useGenres();
  const [isLoading, setIsLoading] = useState(false);

  async function refreshRecommendations() {
    setIsLoading(true);
    trackRecommendations(
      recommendationsInput,
      seedArtistsInput,
      seedTracksInput
    );
    const recs = await getRecommendations({
      ...recommendationsInput,
      seed_artists: seedArtistsInput,
      seed_tracks: seedTracksInput,
    });
    setRecommendations(recs);
    setNowPlayingTrack(recs.tracks[0]);
    setIsLoading(false);
  }

  const remainingSeedSpace =
    (recommendationsInput?.seed_genres?.length || 0) +
      seedArtistsInput.length +
      seedTracksInput.length <
    5;

  return (
    <RecommendationsContext.Provider
      value={{
        recommendations,
        setRecommendations,
        recommendationsInput,
        setRecommendationsInput,
        seedArtistsInput,
        setSeedAritstsInput,
        seedTracksInput,
        setSeedTracksInput,
        availableGenres,
        isLoading,
        refreshRecommendations,
        remainingSeedSpace,
      }}
    >
      {children}
    </RecommendationsContext.Provider>
  );
}
