import {Genre} from "@/lib/spotify/types";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import { useState } from "react";

export default function SeedGenresForm() {
  const [showAll, setShowAll] = useState(false);

  const { recommendationsInput, setRecommendationsInput, availableGenres } =
    useRecommendationsContext();

  function handleAddRemoveGenre(g: Genre) {
    if (recommendationsInput.seed_genres?.includes(g)) {
      setRecommendationsInput({
        ...recommendationsInput,
        seed_genres: recommendationsInput.seed_genres.filter((v: string) => v != g),
      });
    } else {
      setRecommendationsInput({
        ...recommendationsInput,
        seed_genres: recommendationsInput.seed_genres
          ? [...recommendationsInput?.seed_genres, g]
          : [g],
      });
    }
  }

  return (
    <>
      <button type="button" onClick={() => setShowAll(!showAll)}>
        <h2 className="flex items-center gap-1">
          Seed Genres
          {showAll ? " -" : " +"}
        </h2>
      </button>
      <div className={`flex flex-wrap gap-2 ${showAll ? "visible" : "hidden"}`}>
        {availableGenres &&
          availableGenres.genres.map((g: string) => {
            return (
              <label
                htmlFor={g + "genre"}
                className={`flex items-center px-1 py-px text-xs font-medium rounded-full select-none text-shell-900 gap-1 bg-shell-200 ${
                  !recommendationsInput.seed_genres?.includes(g) &&
                  "text-shell-900/80"
                }`}
                key={g + "genre"}
              >
                {g}
                <input
                  checked={recommendationsInput.seed_genres?.includes(g)}
                  disabled={
                    recommendationsInput.seed_genres &&
                    recommendationsInput.seed_genres.length >= 5 &&
                    !recommendationsInput.seed_genres?.includes(g)
                  }
                  id={g + "genre"}
                  type="checkbox"
                  value={g}
                  onClick={() => handleAddRemoveGenre(g)}
                />
              </label>
            );
          })}
      </div>
    </>
  );
}
