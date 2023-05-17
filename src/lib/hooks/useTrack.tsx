import { useEffect, useState } from "react";
import { Track, TrackID } from "../spotify/types";
import {getTrack} from "../api";

export default function useTrack(id: TrackID): Track | null {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    async function getTrackData() {
      const list = await getTrack([id]);
      setTrack(list.tracks[0]);
    }
    if (!track) {
      getTrackData();
    }
  });

  return track;
}
