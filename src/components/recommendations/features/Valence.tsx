import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import FormInput from "../FormInput";

export default function Valence() {
  const { recommendationsInput, update } = useRecommendationsContext();

  return (
    <FormInput
      label="😊 Valence (Happiness)"
      value={recommendationsInput.target_valence}
      onChange={(e: any) => {
        update.recommendations({
          target_valence: e.target.value,
        });
      }}
    />
  );
}
