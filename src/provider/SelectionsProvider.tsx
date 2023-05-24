"use client";

import { TrackID } from "@/lib/spotify/types";
import { createContext, useContext, useState } from "react";

type SelectionsContextType = {
  selectedTracks: TrackID[];
  addToSelection: (id: TrackID) => void;
  removeFromSelection: (id: TrackID) => void;
  resetSelection: () => void;
};

const SelectionsContext = createContext<SelectionsContextType>(
  {} as SelectionsContextType
);

export function useSelectionsContext() {
  const value = useContext(SelectionsContext);
  if (value == null) {
    throw new Error("No SelectionsContext Value");
  } else {
    return value as SelectionsContextType;
  }
}

export default function SelectionsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedTracks, setSelectedTracks] = useState<TrackID[]>([]);

  function addToSelection(id: TrackID) {
    setSelectedTracks([...selectedTracks, id]);
  }

  function removeFromSelection(id: TrackID) {
    setSelectedTracks([...selectedTracks.filter((v) => v != id)]);
  }

  function resetSelection() {
    setSelectedTracks([]);
  }

  return (
    <SelectionsContext.Provider
      value={{
        selectedTracks,
        addToSelection,
        removeFromSelection,
        resetSelection,
      }}
    >
      {children}
    </SelectionsContext.Provider>
  );
}
