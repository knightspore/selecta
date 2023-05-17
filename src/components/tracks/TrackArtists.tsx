import { ArtistID, Track } from "@/lib/spotify/types";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";

export default function TrackArtists({
  artists,
}: {
  artists: Track["artists"];
}) {
  const { remainingSeedSpace, seedArtistsInput, setSeedAritstsInput } =
    useRecommendationsContext();

  function add(id: ArtistID) {
    if (remainingSeedSpace && !seedArtistsInput.includes(id)) {
      setSeedAritstsInput([...seedArtistsInput, id]);
    }
  }

  return (
    <p className="text-sm font-medium text-shell-600">
      {artists.map((a, i) => (
        <span
          className="text-shell-600 transition-all duration-150 hover:text-shell-400"
          onClick={() => add(a.id)}
          key={a.id + Math.random()}
        >
          {a.name}
          {i !== artists.length - 1 && ", "}
        </span>
      ))}
    </p>
  );
}
