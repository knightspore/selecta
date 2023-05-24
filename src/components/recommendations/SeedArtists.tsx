"use client";

import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import SeedArtist from "./SeedArtist";

export default function SeedArtists() {
  const { recommendationsInput } = useRecommendationsContext();

  return (
    <>
      {recommendationsInput?.seed_artists?.map((id) => (
        <SeedArtist key={id} id={id} />
      ))}
    </>
  );
}
