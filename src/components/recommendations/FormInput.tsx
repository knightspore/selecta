type FormInputType = {
  label: string;
  value: any;
  onChange: (e: any) => void;
  inputType?: string;
};

export default function FormInput({ label, value, onChange, inputType }: FormInputType) {
  return (
    <div className="grid gap-1">
      <label htmlFor={label.replace(" ", "")}>{label}</label>
      <input
        id={label.replace(" ", "")}
        type={inputType ?? "number"}
        className={`p-1 border rounded bg-slate-200 border-slate-300`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
