"use client";

import { useState, useEffect } from "react";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import { Combobox } from "@headlessui/react";
import { searchArtists } from "@/lib/api";
import { Artist as TArtist } from "@/lib/spotify/types";
import useDebounce from "@/lib/hooks/useDebounce";
import SeedArtist from "./SeedArtist";
import Dropdown from "@/components/Dropdown";

export default function SeedArtistsForm() {
  const { recommendationsInput, update, remainingSeedSpace } =
    useRecommendationsContext();

  const [query, setQuery] = useState<TArtist["name"]>("");
  const debouncedQuery = useDebounce<TArtist["name"]>(query, 500);
  const [searchResults, setSearchResults] = useState<TArtist[] | null>(null);

  useEffect(() => {
    async function getArtists() {
      const results = await searchArtists(debouncedQuery);
      setSearchResults(results.artists.items);
    }
    if (debouncedQuery != "") {
      getArtists();
    }
  }, [debouncedQuery, setSearchResults]);

  function handleChange(id: TArtist["id"]) {
    update.seedArtists(id);
    setSearchResults(null);
  }

  return (
    <Dropdown title="Seed Artists" defaultOpen>
      {recommendationsInput?.seed_artists?.map((id) => (
        <SeedArtist key={id} id={id} />
      ))}
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
                  <SeedArtist id={a.id} search />
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </Combobox>
      )}
    </Dropdown>
  );
}
