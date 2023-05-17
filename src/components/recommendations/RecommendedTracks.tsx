"use client";

import { Track as TrackType } from "@/lib/spotify/types";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import Track from "@/components/tracks/Track";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

export default function RecommendedTracks() {
  const { recommendations, isLoading } = useRecommendationsContext();

  if (isLoading) {
    return (
      <div className="relative col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-5">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      {recommendations?.tracks.map((track: TrackType) => {
        return <Track key={track.id} track={track} />;
      })}
    </>
  );
}
