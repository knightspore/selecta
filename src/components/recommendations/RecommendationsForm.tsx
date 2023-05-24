"use client";

import FormInput from "./FormInput";
import Button from "../Button";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import SeedGenresForm from "./SeedGenresForm";
import RecommendationsAura from "./RecommendationsAura";
import SeedArtists from "@/components/recommendations/SeedArtists";
import SeedArtistsForm from "@/components/recommendations/SeedArtistsForm";
import SeedTracks from "@/components/recommendations/SeedTracks";
import SeedTracksForm from "./SeedTracksForm";

export default function RecommendationsForm() {
  const { recommendationsInput, update, isLoading, refreshRecommendations } =
    useRecommendationsContext();

  async function handleSubmit(e: any) {
    e.preventDefault();
    refreshRecommendations();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <h2>Seed Tracks</h2>
      <SeedTracks />
      <SeedTracksForm />
      <hr />
      <h2>Seed Artists</h2>
      <SeedArtists />
      <SeedArtistsForm />
      <hr />
      <SeedGenresForm />
      <hr />
      <FormInput
        label="Min. Tempo"
        value={recommendationsInput.min_tempo}
        min={60}
        max={recommendationsInput.target_tempo}
        step={1}
        onChange={(e: any) =>
          update.recommendations({
            min_tempo: e.target.value,
          })
        }
      />
      <FormInput
        label="Target Tempo"
        value={recommendationsInput.target_tempo}
        min={recommendationsInput.min_tempo}
        max={recommendationsInput.max_tempo}
        step={1}
        onChange={(e: any) =>
          update.recommendations({
            target_tempo: e.target.value,
          })
        }
      />
      <FormInput
        label="Max. Tempo"
        value={recommendationsInput.max_tempo}
        min={recommendationsInput.target_tempo}
        max={220}
        step={1}
        onChange={(e: any) =>
          update.recommendations({
            max_tempo: e.target.value,
          })
        }
      />
      <hr />
      <RecommendationsAura />
      <FormInput
        label="Danceability"
        value={recommendationsInput.target_danceability}
        onChange={(e: any) => {
          update.recommendations({
            target_danceability: e.target.value,
          });
        }}
      />
      <FormInput
        label="Energy"
        value={recommendationsInput.target_energy}
        onChange={(e: any) => {
          update.recommendations({
            target_energy: e.target.value,
          });
        }}
      />
      <FormInput
        label="Valence (Happiness)"
        value={recommendationsInput.target_valence}
        onChange={(e: any) => {
          update.recommendations({
            target_valence: e.target.value,
          });
        }}
      />
      <FormInput
        label="Instrumentalness"
        value={recommendationsInput.target_instrumentalness}
        onChange={(e: any) => {
          update.recommendations({
            target_instrumentalness: e.target.value,
          });
        }}
      />
      <FormInput
        label="Speechiness"
        value={recommendationsInput.target_speechiness}
        onChange={(e: any) => {
          update.recommendations({
            target_speechiness: e.target.value,
          });
        }}
      />
      <hr className="my-4" />
      <Button
        disabled={isLoading}
        text={isLoading ? "🔃 Loading..." : "💡 Recommend"}
        type="submit"
      />
    </form>
  );
}
