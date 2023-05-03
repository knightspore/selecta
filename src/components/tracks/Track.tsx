import { useState, useEffect } from "react";
import FeaturesAura from "./Features/FeaturesAura";
import { getTrackFeatures } from "@/lib/api";
import AlbumArt from "./AlbumArt";

export default function Track({ track }: { track: Track }) {
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

  return (
    <div className="text-sm">
      <div className="relative">
        <AlbumArt album={track.album} />
        <div className="absolute bottom-1 left-1 scale-75">
          {features && <FeaturesAura features={features} id={track.id} />}
        </div>
      </div>
      <div className="font-bold line-clamp-4">
        <h2 className="text-base font-bold">{track.name}</h2>
        <p className="text-slate-600">
          {track.artists.map((a) => a.name).join(", ")}
        </p>
      </div>
    </div>
  );
}
