"use client";

import { getGenres, getRecommendations } from "@/lib/api";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAudioPlayerContext } from "./AudioPlayerProvider";
import va from "@vercel/analytics";

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
    useState<RecommendationsInput>({
      limit: 24,
      min_tempo: 60,
      max_tempo: 220,
      target_tempo: 140,
      target_energy: 0.8,
      target_valence: 0.5,
      target_instrumentalness: 0.6,
      target_speechiness: 0.4,
      target_danceability: 0.8,
    });
  const [seedArtistsInput, setSeedAritstsInput] = useState<ArtistID[]>([
    "6RhLS4l1XlQMBME2Ox0t2D",
  ]);
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
    va.track("Get Recommendations", {
      limit: recommendationsInput.limit || 0,
      min_tempo: recommendationsInput.min_tempo || 0,
      max_tempo: recommendationsInput.max_tempo || 0,
      target_tempo: recommendationsInput.target_tempo || 0,
      target_energy: recommendationsInput.target_energy || 0,
      target_valence: recommendationsInput.target_valence || 0,
      target_instrumentalness: recommendationsInput.target_instrumentalness || 0,
      target_speechiness: recommendationsInput.target_speechiness || 0,
      target_danceability: recommendationsInput.target_danceability || 0,
      seedArtists: seedArtistsInput.join(","),
      seedGenres: recommendationsInput?.seed_genres?.join(",") || "",
    });

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
