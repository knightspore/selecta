"use client";

import Button from "../Button";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import SeedGenresForm from "./SeedGenresForm";
import SeedArtistsForm from "@/components/recommendations/SeedArtistsForm";
import SeedTracksForm from "./SeedTracksForm";
import SelectedTracks from "./SelectedTracks";
import Tempo from "./feature-inputs/Tempo";
import Danceability from "./feature-inputs/Danceability";
import Energy from "./feature-inputs/Energy";
import Valence from "./feature-inputs/Valence";
import Instrumentalness from "./feature-inputs/Instrumentalness";
import Speechiness from "./feature-inputs/Speechiness";
import Popularity from "./feature-inputs/Popularity";

export default function RecommendationsForm() {
  const { isLoading, refreshRecommendations } = useRecommendationsContext();

  async function handleSubmit(e: any) {
    e.preventDefault();
    refreshRecommendations();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <h2>Your Selections</h2>
      <SelectedTracks />
      <hr />
      <SeedTracksForm />
      <hr />
      <SeedArtistsForm />
      <hr />
      <SeedGenresForm />
      <hr />
      <Tempo />
      <hr />
      <Danceability />
      <Energy />
      <Valence />
      <Instrumentalness />
      <Speechiness />
      <Popularity />
      <hr />
      <Button
        disabled={isLoading}
        text={isLoading ? "🔃 Loading..." : "💡 Recommend"}
        type="submit"
      />
    </form>
  );
}
