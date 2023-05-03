import FormInput from "./FormInput";
import Button from "../Button";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import { getArtists } from "@/lib/api";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RecommendationsForm() {
  const {
    recommendationsInput,
    setRecommendationsInput,
    seedArtistsInput,
    isLoading,
    refreshRecommendations,
  } = useRecommendationsContext();

  async function handleSubmit(e: any) {
    e.preventDefault();
    refreshRecommendations();
  }

  const [selectedArtists, setSelectedArtists] = useState<Artist[] | null>(null);

  async function getArtistsLoaded() {
    const artists = await getArtists(seedArtistsInput as ArtistID[]);
    setSelectedArtists(artists);
  }

  if (!selectedArtists) {
    getArtistsLoaded();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div>
        Seed Artists
        <br />
        {selectedArtists?.map((a: Artist) => (
          <div key={a.id} className="flex items-center gap-1">
            <Image
              src={a.images[0].url}
              width={32}
              height={32}
              alt={`${a.name} avatar`}
              className="border-2 rounded-full border-slate-300"
            />
            <Link href={a.external_urls.spotify} target="_blank">
              <p className="text-sm font-medium text-slate-700">{a.name}</p>
            </Link>
          </div>
        ))}
        <Button
          disabled={seedArtistsInput.length >= 5}
          text={"+ Add"}
          type="button"
          onClick={() => ""}
        />
      </div>
      <FormInput
        label="Target Tempo"
        value={recommendationsInput.target_tempo}
        onChange={(e: any) =>
          setRecommendationsInput({
            ...recommendationsInput,
            target_tempo: e.target.value,
          })
        }
      />
      <hr />
      <FormInput
        label="Energy"
        value={recommendationsInput.target_energy}
        inputType="range"
        min={0}
        max={1}
        step={0.01}
        onChange={(e: any) => {
          setRecommendationsInput({
            ...recommendationsInput,
            target_energy: e.target.value,
          });
        }}
      />
      <FormInput
        label="Valence (Happiness)"
        value={recommendationsInput.target_valence}
        inputType="range"
        min={0}
        max={1}
        step={0.01}
        onChange={(e: any) => {
          setRecommendationsInput({
            ...recommendationsInput,
            target_valence: e.target.value,
          });
        }}
      />
      <FormInput
        label="Instrumentalness"
        value={recommendationsInput.target_instrumentalness}
        inputType="range"
        min={0}
        max={1}
        step={0.01}
        onChange={(e: any) => {
          setRecommendationsInput({
            ...recommendationsInput,
            target_instrumentalness: e.target.value,
          });
        }}
      />
      <FormInput
        label="Speechiness"
        value={recommendationsInput.target_speechiness}
        inputType="range"
        min={0}
        max={1}
        step={0.01}
        onChange={(e: any) => {
          setRecommendationsInput({
            ...recommendationsInput,
            target_speechiness: e.target.value,
          });
        }}
      />
      <hr />
      <Button
        disabled={isLoading}
        text={isLoading ? "🔃 Loading..." : "💡 Recommend"}
        type="submit"
      />
    </form>
  );
}
