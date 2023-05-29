"use client";

import Button from "../../components/Button";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import SeedGenresForm from "../../components/recommendations/seeds/genres/SeedGenresForm";
import SeedArtistsForm from "@/components/recommendations/seeds/artists/SeedArtistsForm";
import SeedTracksForm from "../../components/recommendations/seeds/tracks/SeedTracksForm";
import SelectedTracks from "../../components/selections/SelectedTracks";
import FeatureForm from "@/components/recommendations/FeatureForm";

export default function RecommendationsForm() {
  const { isLoading, refreshRecommendations } = useRecommendationsContext();

  async function handleSubmit(e: any) {
    e.preventDefault();
    refreshRecommendations();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <SelectedTracks />
      <hr />
      <SeedTracksForm />
      <hr />
      <SeedArtistsForm />
      <hr />
      <SeedGenresForm />
      <hr />
      <FeatureForm />
      <hr />
      <Button
        disabled={isLoading}
        text={isLoading ? "🔃 Loading..." : "💡 Recommend"}
        type="submit"
      />
    </form>
  );
}
