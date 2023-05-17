export default function FeatureTag({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div onClick={onClick}>
      <p
        className={`px-1 py-px text-xs font-medium rounded-full select-none bg-shell-400 text-shell-100 ${
          onClick &&
          "cursor-pointer hover:bg-shell-200 transition-all duration-150 hover:text-shell-500"
        }`}
      >
        {children}
      </p>
    </div>
  );
}
