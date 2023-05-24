import { Genre } from "@/lib/spotify/types";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import { useState } from "react";

export default function SeedGenresForm() {
  const [showAll, setShowAll] = useState(false);

  const { recommendationsInput, update, availableGenres, remainingSeedSpace } =
    useRecommendationsContext();

  function isSelectedGenre(g: Genre): boolean {
    return recommendationsInput?.seed_genres?.includes(g) || false;
  }

  function handleAddRemoveGenre(g: Genre) {
    const remove = isSelectedGenre(g);
    if (remove) {
      update.recommendations({
        seed_genres: recommendationsInput?.seed_genres?.filter((v) => v != g),
      });
    } else {
      update.recommendations({
        seed_genres: recommendationsInput.seed_genres
          ? [...recommendationsInput?.seed_genres, g]
          : [g],
      });
    }
  }

  const selectedGenres = (recommendationsInput.seed_genres?.length || 0) >
    0 && (
    <div className="p-1 text-sm rounded bg-slate-300">
      <p>
        {recommendationsInput.seed_genres &&
          recommendationsInput.seed_genres.join(", ")}
      </p>
    </div>
  );

  return (
    <>
      <button type="button" onClick={() => setShowAll(!showAll)}>
        <h2 className="flex items-center gap-1">
          Seed Genres
          {showAll ? " -" : " +"}
        </h2>
      </button>
      {!showAll && selectedGenres}
      <div className={`flex flex-wrap gap-2 ${showAll ? "visible" : "hidden"}`}>
        {availableGenres.genres?.map((g) => {
          return (
            <label
              htmlFor={g + "genre"}
              className={`flex items-center px-1 py-px text-xs font-medium rounded-full select-none text-shell-900 gap-1 bg-shell-200 ${
                !isSelectedGenre(g) && "text-shell-900/80"
              }`}
              key={g + "genre"}
            >
              {g}
              <input
                checked={isSelectedGenre(g)}
                disabled={!remainingSeedSpace && !isSelectedGenre(g)}
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
