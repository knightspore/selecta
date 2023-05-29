import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import FormInput from "../FormInput";

export default function Acousticness() {
  const { recommendationsInput, update } = useRecommendationsContext();

  return (
    <FormInput
      label="🪘 Acousticness"
      value={recommendationsInput?.target_acousticness}
      onChange={(e: any) => {
        update.recommendations({
          target_acousticness: e.target.value,
        });
      }}
    />
  );
}
