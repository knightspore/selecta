type FeatureAuraType = {
  id: string;
  x: number;
  y: number;
  fill: string;
  fillOpacity: number;
  filter: string;
};

export default function FeatureAuraSVGRect({
  id,
  x,
  y,
  fill,
  fillOpacity,
  filter,
}: FeatureAuraType) {
  return (
    <rect
      x={x}
      y={y}
      fill={`url(#${id + fill})`}
      fillOpacity={fillOpacity}
      width={100}
      height={100}
      rx={50}
      ry={50}
      filter={`url(#${id}${filter})`}
    />
  );
}
