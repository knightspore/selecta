import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import FormInput from "../FormInput";

export default function Instrumentalness() {
  const { recommendationsInput, update } = useRecommendationsContext();

  return (
    <FormInput
      label="Instrumentalness"
      value={recommendationsInput.target_instrumentalness}
      onChange={(e: any) => {
        update.recommendations({
          target_instrumentalness: e.target.value,
        });
      }}
    />
  );
}
