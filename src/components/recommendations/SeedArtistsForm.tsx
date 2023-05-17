"use client";

import { useState, useEffect } from "react";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import Artist from "../artists/Artist";
import { Combobox } from "@headlessui/react";
import { search } from "@/lib/api";
import { trackFindArtist } from "@/lib/analytics";
import { Artist as TArtist } from "@/lib/spotify/types";
import useDebounce from "@/lib/hooks/useDebounce";

export default function SeedArtistsForm() {
  const { seedArtistsInput, setSeedAritstsInput, remainingSeedSpace } = useRecommendationsContext();

  const [query, setQuery] = useState<TArtist["name"]>("");
  const debouncedQuery = useDebounce<TArtist["name"]>(query, 500);
  const [searchResults, setSearchResults] = useState<TArtist[] | null>(null);

  useEffect(() => {
    async function getArtists() {
      const results = await search(debouncedQuery);
      setSearchResults(results.artists.items);
    }
    if (debouncedQuery != "") {
      getArtists();
    }
  }, [debouncedQuery, setSearchResults]);

  function handleChange(name: TArtist["name"]) {
    trackFindArtist(name, debouncedQuery);
    setSeedAritstsInput([...seedArtistsInput, name]);
    setSearchResults(null);
  }

  return (
    <>
      {remainingSeedSpace && (
        <Combobox value="" onChange={handleChange}>
          <Combobox.Input
            className="p-px px-1 border-2 rounded bg-shell-200 border-shell-300"
            placeholder="Find an artist..."
            onChange={(e: any) => setQuery(e.target.value)}
          />
          {searchResults && (
            <Combobox.Options className="p-2 mt-2 border-2 rounded bottom-2 border-shell-300 space-y-2 bg-shell-200">
              {searchResults.map((a) => (
                <Combobox.Option key={a.id} value={a.id}>
                  <Artist id={a.id} search />
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </Combobox>
      )}
    </>
  );
}
