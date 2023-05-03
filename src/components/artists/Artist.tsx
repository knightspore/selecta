import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getArtists } from "@/lib/api";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";

export default function Artist({ id }: { id: ArtistID }) {
  const { seedArtistsInput, setSeedAritstsInput } = useRecommendationsContext();
  const [artist, setArtist] = useState<Artist | null>(null);
  const isLoading = !artist;

  useEffect(() => {
    async function getArtistData() {
      const list = await getArtists([id]);
      setArtist(list.artists[0]);
    }
    if (!artist) {
      getArtistData();
    }
  }, [id, artist]);

  async function handleRemoveArtist() {
    setSeedAritstsInput(
      seedArtistsInput.filter((v) => v != id) as [string | undefined]
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center gap-1 animate-pulse">
        <div className="w-[32px] h-[32px] border-2 rounded-full border-slate-300 bg-slate-200" />
        <p className="w-24 h-6 text-sm font-medium rounded-full bg-slate-200"></p>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <Image
        src={artist.images[0].url}
        width={32}
        height={32}
        alt={`${artist.name} avatar`}
        className="border-2 rounded-full border-slate-300"
      />
      <Link href={artist.external_urls.spotify} target="_blank">
        <p className="text-sm font-medium text-slate-700">{artist.name}</p>
      </Link>
      <div className="flex-1 text-right">
        <button
          type="button"
          onClick={handleRemoveArtist}
          className="text-right"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
