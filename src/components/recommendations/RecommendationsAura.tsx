import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import { TrackAudioFeatures } from "@/lib/spotify/client/tracks";
import FormInputFeaturesAura from "../tracks/Features/FormInputFeaturesAura";

export default function RecommendationsAura() {
  const { recommendationsInput } = useRecommendationsContext();

  return (
    <div className="space-y-2">
      <h2>Your Search Aura</h2>
      <div className="flex">
        <div className="py-6 mx-auto scale-[200%]">
          <FormInputFeaturesAura
            features={
              {
                energy: recommendationsInput.target_energy || 0,
                valence: recommendationsInput.target_valence || 0,
                instrumentalness:
                  recommendationsInput.target_instrumentalness || 0,
                speechiness: recommendationsInput.target_speechiness || 0,
                danceability: recommendationsInput.target_danceability || 0,
                popularity: recommendationsInput.target_popularity || 0,
              } as TrackAudioFeatures
            }
            id="form"
          />
        </div>
      </div>
    </div>
  );
}
