import { useState, useEffect } from "react";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import Artist from "../artists/Artist";
import { Combobox } from "@headlessui/react";
import { search } from "@/lib/api";
import { useDebounce } from "@/lib/hooks"

export default function SeedArtistsForm() {
  const { seedArtistsInput, setSeedAritstsInput } = useRecommendationsContext();

  const [query, setQuery] = useState<Artist["name"]>("");
  const debouncedQuery = useDebounce<Artist["name"]>(query, 500);
  const [searchResults, setSearchResults] = useState<Artist[]|null>(null);

  useEffect(() => {
    async function getArtists() {
      const results = await search(debouncedQuery);
      setSearchResults(results.artists.items);
    }
    if (debouncedQuery != "") {
      getArtists();
    }
  }, [debouncedQuery, setSearchResults]);

  function handleChange(name: Artist["name"]) {
    setSeedAritstsInput([...seedArtistsInput, name]);
    setSearchResults(null);
  }

  return (
    <div className="flex flex-col space-y-4">
      <h2>Seed Artists</h2>
      {(seedArtistsInput as string[])?.map((id: TrackID) => (
        <Artist key={id} id={id} />
      ))}
      {seedArtistsInput.length <= 4 && (
        <div className="flex flex-col">
          <Combobox value="" onChange={handleChange}>
            <Combobox.Input
              className="p-px px-1 border-2 rounded bg-slate-200 border-slate-300"
              placeholder="Find an artist..."
              onChange={(e: any) => setQuery(e.target.value)}
            />
            {searchResults && (
              <Combobox.Options className="p-2 mt-2 border-2 rounded bottom-2 border-slate-300 space-y-2 bg-slate-200">
                {searchResults.map((a) => (
                  <Combobox.Option key={a.id} value={a.id}>
                    <Artist id={a.id} search />
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </Combobox>
        </div>
      )}
    </div>
  );
}

