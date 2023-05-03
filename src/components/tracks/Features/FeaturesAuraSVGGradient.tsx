type FeatureAuraSVGGradientType = {
  id: string;
  fromColour: string;
  toColour: string;
  opacityValue: number;
};

export default function FeatureAuraSVGGradient({
  id,
  fromColour,
  toColour,
  opacityValue,
}: FeatureAuraSVGGradientType) {
  return (
    <radialGradient id={id}>
      <stop offset="0%" stopColor={fromColour} stopOpacity={0.8} />
      <stop offset="32%" stopColor={fromColour} stopOpacity={opacityValue} />
      <stop offset="75%" stopColor={toColour} stopOpacity={opacityValue / 2} />
      <stop offset="100%" stopColor={toColour} stopOpacity={0} />
    </radialGradient>
  );
}
