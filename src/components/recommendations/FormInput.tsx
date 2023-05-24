import { formatPercentage } from "@/lib/utils";

type Props = {
  label: string;
  value: any;
  onChange: (e: any) => void;
  max?: number;
  min?: number;
  step?: number;
};

export default function FormInput({
  label,
  value,
  onChange,
  max = 1,
  min = 0,
  step = 0.01,
}: Props) {
  const id = label.replace(" ", "");

  const isTempo = label.toLowerCase().includes("tempo");

  return (
    <label className="grid gap-2" htmlFor={id}>
      <p className="flex items-center justify-between">
        {label}
        <span className="text-sm font-medium text-shell-500">
          {isTempo ? `${value} BPM` : formatPercentage(value)}
        </span>
      </p>
      <input
        id={id}
        type="range"
        value={value}
        onChange={onChange}
        max={max}
        min={min}
        step={step}
      />
    </label>
  );
}
