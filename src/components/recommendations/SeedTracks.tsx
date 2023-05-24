"use client";

import { TrackID } from "@/lib/spotify/types";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import SeedTrack from "./SeedTrack";

export default function SeedTracks() {
  const { recommendationsInput } = useRecommendationsContext();

  return (
    <>
      {recommendationsInput?.seed_tracks?.map((id: TrackID) => {
        return <SeedTrack key={id} id={id} />;
      })}
    </>
  );
}
