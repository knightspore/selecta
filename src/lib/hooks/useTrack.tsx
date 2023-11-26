import { useEffect, useState } from "react";
import { getTrack } from "../api";
import { Track, TrackID } from "../spotify/types";

export default function useTrack(id: TrackID): Track | null {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    async function getTrackData() {
      const list = await getTrack([id]);
      setTrack(list.tracks ? list.tracks[0] : null);
    }
    if (!track) {
      getTrackData();
    }
  });

  return track;
}
