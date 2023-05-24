import { TrackID } from "@/lib/spotify/types";
import { useState } from "react";
import Button from "../Button";
import SelectedTrack from "./SelectedTrack";
import { saveSelectionAsPlaylist } from "@/lib/api";
import { useSelectionsContext } from "@/provider/SelectionsProvider";

export default function SelectedTracks() {
  const { selectedTracks, resetSelection } = useSelectionsContext();
  const [loading, setLoading] = useState(false);

  async function handleSavePlaylist() {
    setLoading(true);
    const result = await saveSelectionAsPlaylist(selectedTracks);
    if (result.snapshot_id) {
      resetSelection();
    }
    setLoading(false);
  }

  if (selectedTracks.length == 0) {
    return <p className="text-sm text-slate-500">No tracks selected.</p>;
  }

  return (
    <>
      {selectedTracks?.map((id: TrackID) => {
        return <SelectedTrack key={id} id={id} />;
      })}
      <Button
        text={loading ? "♻️ Saving Playlist" : "💾 Save Playlist"}
        onClick={handleSavePlaylist}
        type="button"
        disabled={loading}
      />
    </>
  );
}
