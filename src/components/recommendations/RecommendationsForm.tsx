import FormInput from "./FormInput";
import Button from "../Button";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import SeedArtistsForm from "./SeedArtistsForm";

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
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <SeedArtistsForm />
      <hr />
      <FormInput
        label="Target Tempo"
        value={recommendationsInput.target_tempo}
        onChange={(e: any) =>
          setRecommendationsInput({
            ...recommendationsInput,
            target_tempo: e.target.value,
          })
        }
      />
      <hr />
      <FormInput
        label="Energy"
        value={recommendationsInput.target_energy}
        inputType="range"
        min={0}
        max={1}
        step={0.01}
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
        inputType="range"
        min={0}
        max={1}
        step={0.01}
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
        inputType="range"
        min={0}
        max={1}
        step={0.01}
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
        inputType="range"
        min={0}
        max={1}
        step={0.01}
        onChange={(e: any) => {
          setRecommendationsInput({
            ...recommendationsInput,
            target_speechiness: e.target.value,
          });
        }}
      />
      <hr />
      <Button
        disabled={isLoading}
        text={isLoading ? "🔃 Loading..." : "💡 Recommend"}
        type="submit"
      />
    </form>
  );
}
