import { getTrackFeatures } from "@/lib/api";
import { TrackAudioFeatures } from "@/lib/spotify/client/tracks";
import { Track } from "@/lib/spotify/types";
import { useEffect, useState } from "react";
import FeatureTag from "./FeatureTag";
import { formatPercentage, msToMinSec } from "@/lib/utils";
import { Keys } from "@/lib/spotify/constants";

export default function Features({ track }: { track: Track }) {
  const [features, setFeatures] = useState<TrackAudioFeatures | null>(null);
  useEffect(() => {
    async function getFeatures() {
      const f = await getTrackFeatures(track.id);
      setFeatures(f);
    }
    if (!features) {
      getFeatures();
    }
  }, [features, track.id]);

  if (!features) {
    return <FeatureTag>🔃Loading</FeatureTag>
  }

  return (
    <>
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
