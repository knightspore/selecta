import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import FormInput from "../FormInput";

export default function Energy() {
  const { recommendationsInput, update } = useRecommendationsContext();

  return (
    <FormInput
      label="Energy"
      value={recommendationsInput.target_energy}
      onChange={(e: any) => {
        update.recommendations({
          target_energy: e.target.value,
        });
      }}
    />
  );
}
