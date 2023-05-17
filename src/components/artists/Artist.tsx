import Image from "next/image";
import Link from "next/link";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";
import type { ArtistID } from "@/lib/spotify/types";
import useArtist from "@/lib/hooks/useArtist";

export default function Artist({
  id,
  search = false,
}: {
  id: ArtistID;
  search?: boolean;
}) {

  const { seedArtistsInput, setSeedAritstsInput } = useRecommendationsContext();
  const artist = useArtist(id);

  async function handleRemoveArtist() {
    setSeedAritstsInput(seedArtistsInput.filter((v) => v != id));
  }

  if (!artist) {
    return (
      <div className="flex items-center p-1 rounded gap-1 animate-pulse bg-shell-200">
        <div className="w-[32px] h-[32px] border-2 rounded-full border-shell-300 bg-shell-200" />
        <p className="w-24 h-6 text-sm font-medium rounded-full bg-shell-300"></p>
      </div>
    );
  }

  return (
    <div className="flex items-center p-1 rounded gap-1 bg-shell-200">
      <div className="relative w-8 h-8">
        <Image
          src={artist.images[0]?.url || ""}
          alt={`${artist.name} avatar`}
          className="border-2 rounded-full border-shell-300"
          fill={true}
        />
      </div>
      {search ? (
        <p className="text-sm font-medium cursor-pointer text-shell-700 hover:text-shell-500 transition-all duration-150">
          {artist.name}
        </p>
      ) : (
        <>
          <Link href={artist.external_urls.spotify} target="_blank">
            <p className="text-sm font-medium text-shell-700 hover:text-shell-500 transition-all duration-150">
              {artist.name}
            </p>
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
        </>
      )}
    </div>
  );
}
