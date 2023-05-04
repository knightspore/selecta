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
        seed_genres: recommendationsInput.seed_genres.filter((v) => v != g),
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
      <button
        type="button"
        onClick={() => setShowAll(!showAll)}
      >
        <h2 className="flex items-center gap-1">
          Seed Genres
          {showAll ? " -" : " +"}
        </h2>
      </button>
      <div className={`flex flex-wrap gap-1 ${showAll ? "visible" : "hidden"}`}>
        {availableGenres &&
          availableGenres.genres.map((g) => {
            return (
              <div
                className="flex items-center text-xs gap-1"
                key={g + "genre"}
              >
                <label className="select-none" htmlFor={g + "genre"}>
                  {g}
                </label>
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
              </div>
            );
          })}
      </div>
    </>
  );
}
