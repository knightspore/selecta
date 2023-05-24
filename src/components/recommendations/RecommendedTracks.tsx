"use client";

import { Track as TrackType } from "@/lib/spotify/types";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import Track from "@/components/tracks/Track";
import LoadingRecommendedTracks from "../loading/LoadingRecommendedTracks";

export default function RecommendedTracks() {
  const { recommendations, isLoading } = useRecommendationsContext();

  if (isLoading) {
    return <LoadingRecommendedTracks />
  }

  return (
    <>
      {recommendations?.tracks.map((track: TrackType) => {
        return <Track key={track.id} track={track} />;
      })}
    </>
  );
}
