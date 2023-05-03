import FormInput from "./FormInput";
import Button from "../Button";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";

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
    <form onSubmit={handleSubmit}>
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
      <Button
        disabled={isLoading}
        text={isLoading ? "🔃 Loading..." : "💡 Recommend"}
        type="submit"
      />
    </form>
  );
}
