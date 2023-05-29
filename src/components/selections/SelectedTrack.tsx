import { TrackID } from "@/lib/spotify/types";
import useTrack from "@/lib/hooks/useTrack";
import LoadingSeedItemCard from "../loading/LoadingSeedItemCard";
import SeedItemCard from "../recommendations/SeedItemCard";
import { useSelectionsContext } from "@/provider/SelectionsProvider";

type Props = {
  id: TrackID;
};

export default function SelectedTrack({ id }: Props) {
  const { removeFromSelection } = useSelectionsContext();
  const track = useTrack(id);

  if (!track) {
    return <LoadingSeedItemCard />;
  }

  return (
    <SeedItemCard
      name={`${track.name} - ${track.artists[0].name}`}
      img={track.album?.images[0]?.url || ""}
      href={track.external_urls.spotify}
      search={false}
      remove={() => removeFromSelection(id)}
    />
  );
}
