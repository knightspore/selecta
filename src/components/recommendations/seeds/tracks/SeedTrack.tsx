import { TrackID } from "@/lib/spotify/types";
import useTrack from "@/lib/hooks/useTrack";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import LoadingSeedItemCard from "../../../loading/LoadingSeedItemCard";
import SeedItemCard from "../../SeedItemCard";

type Props = {
  id: TrackID;
  search?: boolean;
};

export default function SeedTrack({ id, search = false }: Props) {
  const { remove } = useRecommendationsContext();
  const track = useTrack(id);

  if (!track) {
    return <LoadingSeedItemCard />;
  }

  return (
    <SeedItemCard
      name={`${track.name} - ${track.artists[0].name}`}
      img={track.album.images[0].url || ""}
      href={track.external_urls.spotify}
      search={search}
      remove={() => remove.seedTracks(id)}
    />
  );
}
