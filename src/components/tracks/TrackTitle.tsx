import SpotifyLogo from "../SpotifyLogo";

export default function TrackTitle({
  href,
  name,
}: {
  href: string;
  name: string;
}) {
  return (
    <h2 className="flex items-center text-sm font-bold md:text-base line-clamp-1 gap-1">
      <div className="w-4 h-4 bg-white rounded-full">
        <a target="_blank" href={href}>
          <SpotifyLogo />
        </a>
      </div>
      {name}
    </h2>
  );
}
