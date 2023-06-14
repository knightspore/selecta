export default function LoadingSeedItemCard() {
  return (
    <div className="flex items-center rounded-r gap-1 animate-pulse bg-shell-200">
      <div className="w-8 h-8 bg-shell-300" />
      <p className="flex-1 w-24 h-4 text-sm font-medium rounded-full bg-shell-300"></p>
      <p className="w-5 h-5 mr-2 rounded-full bg-shell-300"></p>
    </div>
  );
}
