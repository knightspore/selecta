import { URLS } from "../constants";
import { Pagination, Playlist, UserID } from "../types";
import { spotifyFetch } from "../utils";

export type GetUserPlaylists = Pagination & {
  items: Partial<Playlist>;
};

const Get = async (token: string) =>
  await spotifyFetch<GetUserPlaylists>(URLS.Playlists.Get, token);

export type CreatePlaylistInput = {
  id: UserID;
  name: string;
};

const Create = async (token: string, input: CreatePlaylistInput): Promise<Playlist> => {
  const playlist = {
    name: input.name,
    description: "Created by selecta.ciaran.co.za",
    public: false,
    collaborative: false,
  };
  const data = await spotifyFetch<Playlist>(
    URLS.Playlists.Create(input),
    token,
    "POST",
    playlist
  );
  console.log(data);
  return data
};

export const Playlists = {
  Get,
  Create,
};
