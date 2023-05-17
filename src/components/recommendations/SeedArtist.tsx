import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import type { ArtistID } from "@/lib/spotify/types";
import useArtist from "@/lib/hooks/useArtist";
import LoadingSeedItemCard from "../loading/LoadingSeedItemCard";
import SeedItemCard from "./SeedItemCard";

export default function SeedArtist({
  id,
  search = false,
}: {
  id: ArtistID;
  search?: boolean;
}) {

  const { seedArtistsInput, setSeedAritstsInput } = useRecommendationsContext();
  const artist = useArtist(id);

  async function handleRemoveArtist() {
    setSeedAritstsInput(seedArtistsInput.filter((v) => v != id));
  }

  if (!artist) {
    return <LoadingSeedItemCard />
  }

  return (
    <SeedItemCard
      name={artist.name}
      img={artist.images[0].url}
      href={artist.external_urls.spotify}
      search={search}
      remove={handleRemoveArtist}
    />
  );
}