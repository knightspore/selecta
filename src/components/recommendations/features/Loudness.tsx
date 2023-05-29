import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import FormInput from "../FormInput";

export default function Loudness() {
  const { recommendationsInput, update } = useRecommendationsContext();

  return (
    <FormInput
      label="🔊 Loudness"
      value={recommendationsInput.target_loudness}
      onChange={(e: any) => {
        update.recommendations({
          target_loudness: e.target.value,
        });
      }}
    />
  );
}
