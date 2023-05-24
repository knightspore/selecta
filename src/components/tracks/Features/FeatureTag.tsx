type Props = {
  children: React.ReactNode;
};

export default function FeatureTag({ children }: Props) {
  return (
    <div>
      <p className="px-1 py-px text-xs font-medium rounded-full select-none bg-shell-400 text-shell-100">
        {children}
      </p>
    </div>
  );
}
