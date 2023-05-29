import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import FeaturesAura from "../tracks/Features/FeaturesAura";
import {TrackAudioFeatures} from "@/lib/spotify/types";

export default function RecommendationsAura() {
  const { recommendationsInput } = useRecommendationsContext();

  return (
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
  );
}
