import { TrackID } from "@/lib/spotify/types";
import useTrack from "@/lib/hooks/useTrack";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import LoadingSeedItemCard from "../loading/LoadingSeedItemCard";
import SeedItemCard from "./SeedItemCard";

export default function SeedTrack({
  id,
  search = false,
}: {
  id: TrackID;
  search?: boolean;
}) {
  const { seedTracksInput, setSeedTracksInput } = useRecommendationsContext();
  const track = useTrack(id);

  async function handleRemoveTrack() {
    setSeedTracksInput(seedTracksInput.filter((v) => v != id));
  }

  if (!track) {
    return <LoadingSeedItemCard />;
  }

  return (
    <SeedItemCard
      name={`${track.name} - ${track.artists[0].name}`}
      img={track.album.images[0].url}
      href={track.external_urls.spotify}
      search={search}
      remove={handleRemoveTrack}
    />
  );
}
