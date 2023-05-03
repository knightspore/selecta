type FeatureAuraType = {
  x: number;
  y: number;
  fill: string;
  fillOpacity: number;
};

export default function FeatureAuraSVGRect({ x, y, fill, fillOpacity }: FeatureAuraType) {
  return (
    <rect
      x={x}
      y={y}
      fill={`url(#${fill})`}
      fillOpacity={fillOpacity}
      width={100}
      height={100}
      rx={50}
      ry={50}
    />
  );
}

