export default function LoadingTracks() {
  return (
    <>
      <div className="text-sm">
        <div className="relative">
          <div className="w-64 h-64 rounded bg-shell-300 animate-pulse"></div>
          <div className="absolute top-0 left-0 flex flex-col items-start p-2 text-xs font-medium gap-2 text-shell-200">
            <div>
              <p className="px-1 py-px text-transparent rounded-full animate-pulse bg-shell-700/80">
                BPM
              </p>
            </div>
            <div>
              <p className="px-1 py-px text-transparent rounded-full animate-pulse bg-shell-700/80">
                Time
              </p>
            </div>
          </div>
        </div>
        <div className="p-2 mt-2 font-bold rounded cursor-pointer line-clamp-2 bg-shell-200">
          <h2 className="text-base font-bold text-transparent line-clamp-1">
            Track Name
          </h2>
          <p className="text-transparent text-shell-600">Artist</p>
        </div>
      </div>
    </>
  );
}
