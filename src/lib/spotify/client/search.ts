import { URLS } from "../constants";
import { Album, Artist, Track } from "../types";
import { spotifyFetch } from "../utils";

export type SearchResponse = {
  tracks: SearchTypeResponse<Track>;
  artists: SearchTypeResponse<Artist>;
  albums: SearchTypeResponse<Album>;
};

export type SearchTypeResponse<T> = {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: T[];
};

const Artists = async (token: string, input: Artist["name"]) =>
  await spotifyFetch<SearchResponse>(URLS.Search.Artists(input), token);

const Tracks = async (token: string, input: Track["name"]) => await spotifyFetch<SearchResponse>(URLS.Search.Tracks(input), token)

export const Search = {
  Artists,
  Tracks,
};
