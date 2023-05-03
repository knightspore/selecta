import { formatPercentage } from "@/lib/utils";

type FormInputType = {
  label: string;
  value: any;
  onChange: (e: any) => void;
  inputType?: string;
  max?: number;
  min?: number;
  step?: number;
};

export default function FormInput({
  label,
  value,
  onChange,
  inputType,
  max,
  min,
  step,
}: FormInputType) {

  const id = label.replace(" ", "")

  if (inputType == "range") {
    label = `${label} (${formatPercentage(value)})`;
  }

  return (
    <div className="grid gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={inputType ?? "number"}
        className={`${
          inputType != "range" &&
          "p-1 border rounded bg-slate-200 border-slate-300"
        }`}
        value={value}
        onChange={onChange}
        max={max}
        min={min}
        step={step}
      />
    </div>
  );
}
