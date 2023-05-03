import { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
import FeaturesText from "./Features/FeaturesText";
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
    <div className="flex flex-col items-center justify-center p-2 text-sm text-center border-2 bg-slate-200 rounded-md space-y-2 border-slate-300 text-slate-500">
      <AlbumArt album={track.album} />
      <div className="transform -translate-y-8 scale-150">
        {features && <FeaturesAura features={features} id={track.id} />}
      </div>
      <h2 className="flex items-center text-base font-bold">
        <AudioPlayer track={track} />
        {track.name}
      </h2>
      <p>
        by {track.artists.map((a) => a.name).join(", ")}
        <br />
        Track ID: {track.id}
        <br />
        Artist ID: {track.artists[0].id}
        <br />
        {features && <FeaturesText features={features} />}
      </p>
    </div>
  );
}
