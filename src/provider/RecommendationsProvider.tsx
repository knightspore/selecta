"use client";

import { getRecommendations } from "@/lib/api";
import React, { createContext, useContext, useState } from "react";
import { useAudioPlayerContext } from "./AudioPlayerProvider";
import {
  Genres,
  Recommendations,
  RecommendationsInput,
} from "@/lib/spotify/client/tracks";
import useGenres from "@/lib/hooks/useGenres";
import useRecommendations from "@/lib/hooks/useRecommendations";

type RecommendationsContextType = {
  recommendations: Recommendations | null;
  setRecommendations: (r: Recommendations | null) => void;
  recommendationsInput: RecommendationsInput;
  update: Record<string, (i: any) => void>;
  remove: Record<string, (i: any) => void>;
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

  const { recommendationsInput, update, remove, remainingSeedSpace } =
    useRecommendations();

  const [isLoading, setIsLoading] = useState(false);

  const availableGenres = useGenres();

  const [recommendations, setRecommendations] =
    useState<Recommendations | null>(null);

  async function refreshRecommendations() {
    setIsLoading(true);
    const recs = await getRecommendations(recommendationsInput);
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
        update,
        remove,
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
