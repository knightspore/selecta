import { useEffect, useState } from "react";
import { getGenres } from "../api";
import { Genres } from "../spotify/client/tracks";

export default function useGenres() {
  const [availableGenres, setAvailableGenres] = useState<Genres>({
    genres: [],
  });

  useEffect(() => {
    async function getAvailableGenres() {
      const genres = await getGenres();
      setAvailableGenres(genres);
    }
    if (availableGenres.genres.length == 0) {
      getAvailableGenres();
    }
  }, [availableGenres, setAvailableGenres]);

  return availableGenres;
}
