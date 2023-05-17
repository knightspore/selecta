'use client'

import {useRecommendationsContext} from "@/provider/RecommendationsProvider";
import SeedArtist from "./SeedArtist";

export default function SeedArtists() {

  const { seedArtistsInput } = useRecommendationsContext()

  return (
    <>
      {seedArtistsInput.map((id) => (
        <SeedArtist key={id} id={id} />
      ))}
    </>
  );
}
