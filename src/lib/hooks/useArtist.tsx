import { useEffect, useState } from "react";
import { Artist, ArtistID } from "../spotify/types";
import { getArtists } from "../api";

export default function useArtist(id: ArtistID) {
  const [artist, setArtist] = useState<Artist | null>(null);

  useEffect(() => {
    async function getArtistData() {
      const list = await getArtists([id]);
      setArtist(list.artists[0]);
    }
    if (!artist) {
      getArtistData();
    }
  }, [id, artist]);

  return artist;
}
