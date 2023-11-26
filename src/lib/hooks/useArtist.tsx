import { useEffect, useState } from "react";
import { getArtists } from "../api";
import { Artist, ArtistID } from "../spotify/types";

export default function useArtist(id: ArtistID): Artist | null {
  const [artist, setArtist] = useState<Artist | null>(null);

  useEffect(() => {
    async function getArtistData() {
      const list = await getArtists([id]);
      setArtist(list.artists ? list.artists[0] : null);
    }
    if (!artist) {
      getArtistData();
    }
  }, [id, artist]);

  return artist;
}
