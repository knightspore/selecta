import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import FormInput from "../FormInput";

export default function Danceability() {
  const { recommendationsInput, update } = useRecommendationsContext();

  return (
    <FormInput
      label="🕺🏾 Danceability"
      value={recommendationsInput.target_danceability}
      onChange={(e: any) => {
        update.recommendations({
          target_danceability: e.target.value,
        });
      }}
    />
  );
}
