import FormInput from "./FormInput";
import Button from "../Button";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import SeedArtistsForm from "./SeedArtistsForm";
import FeaturesAura from "../tracks/Features/FeaturesAura";
import SeedGenresForm from "./SeedGenresForm";

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
      <SeedArtistsForm />
      <hr className="my-4" />
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <SeedGenresForm />
        <hr className="mt-4" />
        <FormInput
          label="Target Tempo"
          value={recommendationsInput.target_tempo}
          inputType="range"
          min={60}
          max={220}
          step={1}
          onChange={(e: any) =>
            setRecommendationsInput({
              ...recommendationsInput,
              target_tempo: e.target.value,
            })
          }
        />
        <hr />
        <div className="space-y-2">
          <h2>Your Search Aura</h2>
          <div className="flex">
            <div className="mx-auto">
              <FeaturesAura
                features={
                  {
                    energy: recommendationsInput.target_energy || 0,
                    valence: recommendationsInput.target_valence || 0,
                    instrumentalness:
                      recommendationsInput.target_instrumentalness || 0,
                    speechiness: recommendationsInput.target_speechiness || 0,
                    danceability: recommendationsInput.target_danceability || 0,
                  } as TrackAudioFeatures
                }
                id="form"
              />
            </div>
          </div>
        </div>
        <FormInput
          label="Danceability"
          value={recommendationsInput.target_danceability}
          inputType="range"
          min={0}
          max={1}
          step={0.01}
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
