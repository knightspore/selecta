"use client";

import { Track as TrackType } from "@/lib/spotify/types";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import Track from "@/components/tracks/Track"

export default function RecommendedTracks() {
  const { recommendations } = useRecommendationsContext();
  return (
    <>
      {recommendations?.tracks.map((track: TrackType) => {
        return <Track key={track.id} track={track} />
      })}
    </>
  );
}
