"use client";

import { getGenres, getRecommendations } from "@/lib/api";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAudioPlayerContext } from "./AudioPlayerProvider";
import {
  defaultRecommendationsInput,
  defaultSeedArtists,
} from "@/lib/constants";
import {
  Genres,
  Recommendations,
  RecommendationsInput,
} from "@/lib/spotify/client/tracks";
import { ArtistID } from "@/lib/spotify/types";
import { trackRecommendations } from "@/lib/analytics";

type RecommendationsContextType = {
  recommendations: Recommendations | null;
  setRecommendations: (r: Recommendations | null) => void;
  recommendationsInput: RecommendationsInput;
  setRecommendationsInput: (r: RecommendationsInput) => void;
  seedArtistsInput: ArtistID[];
  setSeedAritstsInput: (s: ArtistID[]) => void;
  availableGenres: Genres | null;
  refreshRecommendations: () => void;
  isLoading: boolean;
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
  const [availableGenres, setAvailableGenres] = useState<Genres | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Get Genres
  useEffect(() => {
    async function getAvailableGenres() {
      const genres = await getGenres();
      setAvailableGenres(genres);
    }
    if (!availableGenres) {
      getAvailableGenres();
    }
  }, [availableGenres, setAvailableGenres]);

  async function refreshRecommendations() {
    setIsLoading(true);
    trackRecommendations(recommendationsInput, seedArtistsInput);
    const recs = await getRecommendations({
      ...recommendationsInput,
      seed_artists: seedArtistsInput,
    });
    setRecommendations(recs);
    setNowPlayingTrack(recs.tracks[0]);
    setIsLoading(false);
  }

  return (
    <RecommendationsContext.Provider
      value={{
        recommendations,
        setRecommendations,
        recommendationsInput,
        setRecommendationsInput,
        seedArtistsInput,
        setSeedAritstsInput,
        availableGenres,
        isLoading,
        refreshRecommendations,
      }}
    >
      {children}
    </RecommendationsContext.Provider>
  );
}
