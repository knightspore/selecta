import FeatureAuraSVGGradient from "./FeaturesAuraSVGGradient";
import FeatureAuraSVGRect from "./FeaturesAuraSVGRect";

export default function FeaturesAura({
  features,
  id,
}: {
  features: TrackAudioFeatures;
  id: TrackID;
}) {
  return (
    <svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      className="block bg-purple-200 border-2 rounded-full grid grid-cols-3 border-slate-300"
    >
      <defs>
        <FeatureAuraSVGGradient
          id={id + "energy"}
          fromColour="fuchsia"
          toColour="pink"
          opacityValue={features?.energy}
        />{" "}
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
          id={id + "speeechiness"}
          fromColour="green"
          toColour="lime"
          opacityValue={features?.speechiness}
        />
      </defs>
      <FeatureAuraSVGRect
        x={-50}
        y={-50}
        fill={`${id}energy`}
        fillOpacity={features?.energy}
      />{" "}
      <FeatureAuraSVGRect
        x={-50}
        y={0}
        fill={`${id}instrumentalness`}
        fillOpacity={features?.instrumentalness}
      />
      <FeatureAuraSVGRect
        x={0}
        y={0}
        fill={`${id}valence`}
        fillOpacity={features?.valence}
      />
      <FeatureAuraSVGRect
        x={0}
        y={-50}
        fill={`${id}speechiness`}
        fillOpacity={features?.speechiness}
      />
    </svg>
  );
}
