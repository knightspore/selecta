"use client";

import FormInput from "./FormInput";
import Button from "../Button";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import SeedGenresForm from "./SeedGenresForm";
import RecommendationsAura from "./RecommendationsAura";

export default function RecommendationsForm() {
  const {
    recommendationsInput,
    setRecommendationsInput,
    isLoading,
    refreshRecommendations,
  } = useRecommendationsContext();

  async function handleSubmit(e: any) {
    e.preventDefault();
    refreshRecommendations();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <SeedGenresForm />
        <hr />
        <FormInput
          label="Min. Tempo"
          value={recommendationsInput.min_tempo}
          min={60}
          max={recommendationsInput.target_tempo}
          step={1}
          onChange={(e: any) =>
            setRecommendationsInput({
              ...recommendationsInput,
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
            setRecommendationsInput({
              ...recommendationsInput,
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
            setRecommendationsInput({
              ...recommendationsInput,
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
            setRecommendationsInput({
              ...recommendationsInput,
              target_danceability: e.target.value,
            });
          }}
        />
        <FormInput
          label="Energy"
          value={recommendationsInput.target_energy}
          onChange={(e: any) => {
            setRecommendationsInput({
              ...recommendationsInput,
              target_energy: e.target.value,
            });
          }}
        />
        <FormInput
          label="Valence (Happiness)"
          value={recommendationsInput.target_valence}
          onChange={(e: any) => {
            setRecommendationsInput({
              ...recommendationsInput,
              target_valence: e.target.value,
            });
          }}
        />
        <FormInput
          label="Instrumentalness"
          value={recommendationsInput.target_instrumentalness}
          onChange={(e: any) => {
            setRecommendationsInput({
              ...recommendationsInput,
              target_instrumentalness: e.target.value,
            });
          }}
        />
        <FormInput
          label="Speechiness"
          value={recommendationsInput.target_speechiness}
          onChange={(e: any) => {
            setRecommendationsInput({
              ...recommendationsInput,
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
    </>
  );
}
