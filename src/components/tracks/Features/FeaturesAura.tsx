"use client";

import FeatureAuraSVGGradient from "./FeaturesAuraSVGGradient";
import FeatureAuraSVGRect from "./FeaturesAuraSVGRect";
import { TrackID } from "@/lib/spotify/types";
import useFeatures from "@/lib/hooks/useFeatures";

export default function FeaturesAura({
  id,
}: {
  id: TrackID;
  width?: number | string;
  height?: number | string;
}) {
  const features = useFeatures(id);

  if (!features) {
    return (
      <div className="w-6 h-6 border-2 rounded-full md:w-12 md:h-12 bg-slate-200"></div>
    );
  }

  const totalValue =
    features?.energy +
    features?.instrumentalness +
    features?.valence +
    features?.speechiness;

  return (
    <svg
      viewBox="0 0 50 50"
      className="block w-6 h-6 bg-purple-200 border-2 rounded-full md:w-12 md:h-12 grid grid-cols-3 border-shell-300"
    >
      <defs>
        <filter id={id + "hue"}>
          <feColorMatrix
            type="hueRotate"
            values={(180 - features?.danceability * 180).toString()}
          />
        </filter>
        <FeatureAuraSVGGradient
          id={id + "energy"}
          fromColour="fuchsia"
          toColour="pink"
          opacityValue={features?.energy}
        />
        <FeatureAuraSVGGradient
          id={id + "instrumentalness"}
          fromColour="cornflowerblue"
          toColour="aqua"
          opacityValue={features?.instrumentalness}
        />
        <FeatureAuraSVGGradient
          id={id + "valence"}
          fromColour="orangered"
          toColour="orange"
          opacityValue={features?.valence}
        />
        <FeatureAuraSVGGradient
          id={id + "speechiness"}
          fromColour="olive"
          toColour="lime"
          opacityValue={features?.speechiness}
        />
      </defs>
      <FeatureAuraSVGRect
        id={id}
        x={-50}
        y={-50}
        filter="hue"
        fill={`energy`}
        fillOpacity={(100 / totalValue) * features?.energy}
      />
      <FeatureAuraSVGRect
        id={id}
        x={-50}
        y={0}
        filter=""
        fill={`instrumentalness`}
        fillOpacity={(100 / totalValue) * features?.instrumentalness}
      />
      <FeatureAuraSVGRect
        id={id}
        x={0}
        y={0}
        filter="hue"
        fill={`valence`}
        fillOpacity={(100 / totalValue) * features?.valence}
      />
      <FeatureAuraSVGRect
        id={id}
        x={0}
        y={-50}
        filter=""
        fill={`speechiness`}
        fillOpacity={(100 / totalValue) * features?.speechiness}
      />
    </svg>
  );
}
