import { URLS } from "../constants";
import { Pagination, Playlist, PlaylistID, TrackID, UserID } from "../types";
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

const Create = async (
  token: string,
  input: CreatePlaylistInput
): Promise<Playlist> =>
  await spotifyFetch<Playlist>(URLS.Playlists.Create(input), token, "POST", {
    name: input.name,
    description: "Created by selecta.ciaran.co.za",
    public: false,
    collaborative: false,
  });

export type AddToPlaylistInput = {
  id: PlaylistID;
  tracks: TrackID[];
};

export type AddToPlaylistResponse = {
  snapshot_id: string;
};

const Add = async (token: string, input: AddToPlaylistInput) =>
  await spotifyFetch<AddToPlaylistResponse>(
    URLS.Playlists.Add(input),
    token,
    "POST",
    {
      uris: input.tracks.map((t) => `spotify:track:${t}`),
      position: 0,
    }
  );

export const Playlists = {
  Get,
  Create,
  Add,
};
