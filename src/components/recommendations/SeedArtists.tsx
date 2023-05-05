'use client'

import {useRecommendationsContext} from "@/provider/RecommendationsProvider";
import Artist from "../artists/Artist";

export default function SeedArtists() {

  const { seedArtistsInput } = useRecommendationsContext()

  return (
    <>
      {seedArtistsInput.map((id) => (
        <Artist key={id} id={id} />
      ))}
    </>
  );
}
