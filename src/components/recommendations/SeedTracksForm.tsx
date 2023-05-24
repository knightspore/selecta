"use client";

import { useState, useEffect } from "react";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import { Combobox } from "@headlessui/react";
import { searchTracks } from "@/lib/api";
import { Track as TTrack, TrackID } from "@/lib/spotify/types";
import useDebounce from "@/lib/hooks/useDebounce";
import { trackFindTrack } from "@/lib/analytics";
import SeedTrack from "./SeedTrack";
import Dropdown from "../Dropdown";

export default function SeedTracksForm() {
  const { recommendationsInput, update, remainingSeedSpace } =
    useRecommendationsContext();

  const [query, setQuery] = useState<TTrack["name"]>("");
  const debouncedQuery = useDebounce<TTrack["name"]>(query, 500);
  const [searchResults, setSearchResults] = useState<TTrack[] | null>(null);

  useEffect(() => {
    async function getTracks() {
      const results = await searchTracks(debouncedQuery);
      setSearchResults(results.tracks.items);
    }
    if (debouncedQuery != "") {
      getTracks();
    }
  }, [debouncedQuery, setSearchResults]);

  function handleChange(id: TTrack["id"]) {
    trackFindTrack(id, debouncedQuery);
    update.seedTracks(id);
    setSearchResults(null);
  }

  return (
    <Dropdown title="Seed Tracks" defaultOpen>
      {recommendationsInput?.seed_tracks?.map((id: TrackID) => {
        return <SeedTrack key={id} id={id} />;
      })}
      {remainingSeedSpace && (
        <Combobox value="" onChange={handleChange}>
          <Combobox.Input
            className="p-px px-1 border-2 rounded bg-shell-200 border-shell-300"
            placeholder="Find a track..."
            onChange={(e: any) => setQuery(e.target.value)}
          />
          {searchResults && (
            <Combobox.Options className="p-2 mt-2 border-2 rounded bottom-2 border-shell-300 space-y-2 bg-shell-200">
              {searchResults.map((t) => (
                <Combobox.Option key={t.id} value={t.id}>
                  <SeedTrack id={t.id} search />
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </Combobox>
      )}
    </Dropdown>
  );
}
