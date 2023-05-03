import FormInput from "./FormInput";
import Button from "../Button";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import Artist from "../artists/Artist";

export default function RecommendationsForm() {
  const {
    recommendationsInput,
    setRecommendationsInput,
    seedArtistsInput,
    isLoading,
    refreshRecommendations,
  } = useRecommendationsContext();

  async function handleSubmit(e: any) {
    e.preventDefault();
    refreshRecommendations();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <h3>Seed Artists</h3>
      {(seedArtistsInput as string[])?.map((id: TrackID) => (
        <Artist key={id} id={id} />
      ))}
      <Button
        disabled={seedArtistsInput.length >= 5}
        text={"+ Add"}
        type="button"
        onClick={() => ""}
      />
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
