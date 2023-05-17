import { Track } from "@/lib/spotify/types";
import FeatureTag from "./FeatureTag";
import { formatPercentage, msToMinSec } from "@/lib/utils";
import { Keys } from "@/lib/spotify/constants";
import useFeatures from "@/lib/hooks/useFeatures";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";

export default function Features({ track }: { track: Track }) {
  const { remainingSeedSpace, seedTracksInput, setSeedTracksInput } =
    useRecommendationsContext();

  const features = useFeatures(track.id);

  if (!features) {
    return <FeatureTag>🔃Loading</FeatureTag>;
  }

  function addTrack() {
    if (remainingSeedSpace) {
      setSeedTracksInput([...seedTracksInput, track.id]);
    }
  }

  const isNotSeedTrack = !seedTracksInput.includes(track.id);

  return (
    <>
      {isNotSeedTrack && (
        <FeatureTag onClick={addTrack}>➕ Seed</FeatureTag>
      )}
      <FeatureTag>🥁 {features?.tempo.toString().split(".")[0]} BPM</FeatureTag>
      <FeatureTag>🖋️ {features?.time_signature}/4</FeatureTag>
      <FeatureTag>
        👀 {formatPercentage(track.popularity / 100)} Popular
      </FeatureTag>
      <FeatureTag>
        🎹 {features?.key ? Keys[features?.key] : ""}
        {features?.mode == 0 ? " Min" : " Maj"}
      </FeatureTag>
      <FeatureTag>⏱️ {msToMinSec(features?.duration_ms)}s</FeatureTag>
    </>
  );
}
