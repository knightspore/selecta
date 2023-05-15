import { URLS } from "../constants";
import { Artist, BaseUrl, Image, Track, UserID } from "../types";
import { spotifyFetch } from "../utils";

export type CurrentUsersProfile = {
  display_name: string;
  followers: {
    href: null | string;
    total: number;
  };
  href: `${BaseUrl}/users/${string}`;
  id: UserID;
  images: Image[];
  type: string;
  uri: `spotify:user:${string}`;
};

const Current = async (token: string) =>
  await spotifyFetch<CurrentUsersProfile>(URLS.Users.Current, token);

export type UsersTopArtists = { items: Artist[] };

const Artists = async (token: string) =>
  await spotifyFetch<UsersTopArtists>(URLS.Users.Top.Artists, token);

export type UsersTopTracks = { items: Track[] };

const Tracks = async (token: string) =>
  await spotifyFetch<UsersTopTracks>(URLS.Users.Top.Tracks, token);

export const Users = {
  Current,
  Top: {
    Artists,
    Tracks,
  },
};
