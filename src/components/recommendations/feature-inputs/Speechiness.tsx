import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import FormInput from "../FormInput";

export default function Speechiness() {
  const { recommendationsInput, update } = useRecommendationsContext();

  return (
    <FormInput
      label="Speechiness"
      value={recommendationsInput.target_speechiness}
      onChange={(e: any) => {
        update.recommendations({
          target_speechiness: e.target.value,
        });
      }}
    />
  );
}
