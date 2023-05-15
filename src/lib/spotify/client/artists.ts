import { URLS } from "../constants";
import { Artist, ArtistID } from "../types";
import { spotifyFetch } from "../utils";

export type Artists = {
  artists: Artist[];
};

export const Artists = async (token: string, ids: ArtistID[]) =>
  await spotifyFetch<Artists>(URLS.Artists(ids), token);
