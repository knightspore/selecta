import { Genre } from "@/lib/spotify/types";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import Dropdown from "../../../Dropdown";

export default function SeedGenresForm() {
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

  return (
    <Dropdown title="Seed Genres">
      <div className={`flex flex-wrap gap-2`}>
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
    </Dropdown>
  );
}
