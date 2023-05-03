export default function Button({
  text,
  type,
  onClick,
  disabled,
}: {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-1 text-center border-2 rounded bg-slate-200 border-slate-300 ${disabled && "text-slate-900/50"}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
