import { kv } from "@vercel/kv";
import { ArtistID, TrackID, UserID } from "./spotify/types";
import { RecommendationsInput } from "./spotify/client/tracks";

export type SavedSearch = {
  recommendationsInput: Partial<RecommendationsInput>;
  seedArtistsInput: Array<ArtistID>;
  seedTracksInput: Array<TrackID>;
};

export async function saveSearch(
  id: UserID,
  searchData: SavedSearch
): Promise<boolean> {
  const key = `user:${id}:search`;
  try {
    await kv.hset(key, searchData);
    return true;
  } catch (e: any) {
    console.log("kv err: ", e);
  }
  return false;
}

export async function loadSearch(id: UserID): Promise<SavedSearch> {
  const key = `user:${id}:search`;
  try {
    const searchData: SavedSearch | null = await kv.hgetall(key);
    if (!searchData) {
      throw new Error("No search data found with key " + key);
    }
    searchData.recommendationsInput.seed_artists = [];
    searchData.recommendationsInput.seed_tracks = [];
    return searchData;
  } catch (e: any) {
    console.log("kv err: ", e);
  }
  return {} as SavedSearch;
}
