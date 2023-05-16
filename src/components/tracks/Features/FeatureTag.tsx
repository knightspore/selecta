export default function FeatureTag({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="px-1 py-px rounded-full bg-shell-700/80">{children}</p>
    </div>
  );
}
