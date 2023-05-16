import { URLS } from "../constants";
import { Artist, Track, User  } from "../types";
import { spotifyFetch } from "../utils";


const Current = async (token: string) =>
  await spotifyFetch<User>(URLS.Users.Current, token);

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
