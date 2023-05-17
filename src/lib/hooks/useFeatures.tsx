import { useEffect, useState } from "react";
import { TrackAudioFeatures } from "../spotify/client/tracks";
import { TrackID } from "../spotify/types";
import { getTrackFeatures } from "../api";

export default function useFeatures(id: TrackID): TrackAudioFeatures | null {
  const [features, setFeatures] = useState<TrackAudioFeatures | null>(null);

  useEffect(() => {
    async function getFeatures() {
      const f = await getTrackFeatures(id);
      setFeatures(f);
    }
    if (!features) {
      getFeatures();
    }
  }, [features, id]);

  return features;
}
