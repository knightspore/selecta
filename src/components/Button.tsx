type Props = {
  text: string | React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  text,
  type,
  onClick,
  disabled = false,
}: Props) {
  return (
    <button
      {...{ type, onClick, disabled }}
      className="p-2 py-px text-center border-2 rounded bg-shell-200 disabled:border-shell-200 hover:bg-shell-300 transition-all duration-150 border-shell-300 disabled:text-shell-900/50"
    >
      {text}
    </button>
  );
}
