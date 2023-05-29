import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import FormInput from "../FormInput";

export default function Liveness() {
  const { recommendationsInput, update } = useRecommendationsContext();

  return (
    <FormInput
      label="🎤 Liveness"
      value={recommendationsInput.target_liveness}
      onChange={(e: any) => {
        update.recommendations({
          target_liveness: e.target.value,
        });
      }}
    />
  );
}
