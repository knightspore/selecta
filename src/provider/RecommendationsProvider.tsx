import { getRecommendations } from "@/lib/api";
import React, { createContext, useContext, useState } from "react";
import { useAudioPlayerContext } from "./AudioPlayerProvider";

type RecommendationsContextType = {
  recommendations: Recommendations | null;
  setRecommendations: (r: Recommendations | null) => void;
  recommendationsInput: RecommendationsInput;
  setRecommendationsInput: (r: RecommendationsInput) => void;
  seedArtistsInput: [string|undefined];
  setSeedAritstsInput: (s: [string|undefined]) => void;
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
  const [recommendations, setRecommendations] =
    useState<Recommendations | null>(null);

  const [recommendationsInput, setRecommendationsInput] =
    useState<RecommendationsInput>({
      limit: 24,
      target_tempo: 140,
      target_energy: 0.8,
      target_valence: 0.5,
      target_instrumentalness: 0.6,
      target_speechiness: 0.4,
    });

  const [seedArtistsInput, setSeedAritstsInput] = useState<[string|undefined]>([
    "6RhLS4l1XlQMBME2Ox0t2D",
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const { setNowPlayingTrack } = useAudioPlayerContext();

  async function refreshRecommendations() {
    setIsLoading(true);
    const recs = await getRecommendations({ ...recommendationsInput, seed_artists: seedArtistsInput });
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
        isLoading,
        refreshRecommendations,
      }}
    >
      {children}
    </RecommendationsContext.Provider>
  );
}
