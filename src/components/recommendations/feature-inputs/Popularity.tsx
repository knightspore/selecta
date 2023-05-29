import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import FormInput from "../FormInput";

export default function Popularity() {
  const { recommendationsInput, update } = useRecommendationsContext();

  return (
    <FormInput
      min={0}
      max={100}
      step={1}
      label="Popularity"
      value={recommendationsInput.target_popularity}
      onChange={(e: any) => {
        update.recommendations({
          target_popularity: e.target.value,
        });
      }}
    />
  );
}
