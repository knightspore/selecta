export default function Button({
  text,
  type,
  onClick,
  disabled,
}: {
  text: string | React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-1 py-px text-center border-2 rounded bg-shell-200 border-shell-300 ${disabled && "text-shell-900/50"}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
