type Props = {
  name: string;
  text: string;
  onClick: () => void;
};

export default function TrackButton({ name, text, onClick }: Props) {
  return (
    <button
      name={name}
      onClick={onClick}
      className="p-2 hover:bg-shell-300 transition-all duration-150"
      type="button"
    >
      {text}
    </button>
  );
}
