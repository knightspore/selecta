import { URLS } from "../constants";
import { DeviceID, Track } from "../types";
import { spotifyFetch } from "../utils";

export type PlayerState = {
  device: Device;
  repeat_state: string;
  shuffle_state: false;
  context: PlayerContext;
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  item: Track;
  currently_playing_type: string;
  actions: PlayerActions;
};

export type Device = {
  id: DeviceID;
  is_active: boolean;
  is_private_session: boolean;
  is_restricted: boolean;
  name: string;
  type: string;
  volume_percent: number;
};

export type PlayerContext = {
  type: string;
  href: string;
  external_urls: {
    spotify: string;
  };
  uri: string;
};

export type PlayerActions = {
  interrupting_playback: boolean;
  pausing: boolean;
  resuming: boolean;
  seeking: boolean;
  skipping_next: boolean;
  skipping_prev: boolean;
  toggling_repeat_context: boolean;
  toggling_shuffle: boolean;
  toggling_repeat_track: boolean;
  transferring_playback: boolean;
};

const GetState = async (token: string) =>
  await spotifyFetch<PlayerState>(URLS.Player.GetState, token);

export const Player = {
  GetState,
};
