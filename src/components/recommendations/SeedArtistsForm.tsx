import { useState } from "react";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import Artist from "../artists/Artist";
import Button from "../Button";
import FormInput from "./FormInput";

export default function SeedArtistsForm() {

  const { seedArtistsInput, setSeedAritstsInput } = useRecommendationsContext();
  const [showInput, setShowInput] = useState(false);
  const [formArtist, setFormArtist] = useState("");

  function handleClick() {
    if (showInput) {
      setSeedAritstsInput([...seedArtistsInput, formArtist]);
      setFormArtist("");
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  }

  return (
    <div className="space-y-4">
      <h3>Seed Artists</h3>
      {(seedArtistsInput as string[])?.map((id: TrackID) => (
        <Artist key={id} id={id} />
      ))}
      {showInput && (
        <form id="add-artist">
          <FormInput
            label="Add Artist"
            value={formArtist}
            inputType="text"
            onChange={(e: any) => setFormArtist(e.target.value)}
          />
        </form>
      )}
      <Button
        disabled={seedArtistsInput.length >= 5}
        text={"+ Add"}
        type="button"
        onClick={handleClick}
      />
    </div>
  );
}
