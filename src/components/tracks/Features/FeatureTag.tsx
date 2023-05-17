export default function FeatureTag({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="px-1 py-px text-xs font-medium rounded-full select-none bg-shell-600/50 text-shell-100">
        {children}
      </p>
    </div>
  );
}
