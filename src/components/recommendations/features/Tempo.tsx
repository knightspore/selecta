import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import FormInput from "../FormInput";

export default function Tempo() {

  const { recommendationsInput, update } = useRecommendationsContext();

  return (
    <>
      {/*
      <FormInput
        label="Min. Tempo"
        value={recommendationsInput.min_tempo}
        min={60}
        max={recommendationsInput.target_tempo}
        step={1}
        onChange={(e: any) =>
          update.recommendations({
            min_tempo: e.target.value,
          })
        }
      />
      */}
      <FormInput
        label="🥁 Tempo"
        value={recommendationsInput.target_tempo}
        min={recommendationsInput.min_tempo}
        max={recommendationsInput.max_tempo}
        step={1}
        onChange={(e: any) =>
          update.recommendations({
            target_tempo: e.target.value,
          })
        }
      />
      {/*
      <FormInput
        label="Max. Tempo"
        value={recommendationsInput.max_tempo}
        min={recommendationsInput.target_tempo}
        max={220}
        step={1}
        onChange={(e: any) =>
          update.recommendations({
            max_tempo: e.target.value,
          })
        }
      />
      */}
    </>
  );
}
