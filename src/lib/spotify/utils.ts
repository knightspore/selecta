import { URLS } from "./constants";
import {AccessToken, Endpoint} from "./types";

export async function spotifyFetch<T>(endpoint: Endpoint): Promise<T> {
  const { access_token } = await getAccessToken();
  const data = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then((res) => res.json());
  return data;
}

export async function getAccessToken(): Promise<AccessToken> {

  const [id, client, refresh] = [
    process.env.SPOTIFY_CLIENT_ID,
    process.env.SPOTIFY_CLIENT_SECRET,
    process.env.SPOTIFY_REFRESH_TOKEN,
  ];

  if (!id || !client || !refresh) {
    throw new Error(
      `You are missing a Spotify ENV Variable: [ id: ${id}, client: ${client}, refresh: ${refresh} ]`
    );
  }

  const basic = Buffer.from(`${id}:${client}`).toString("base64");

  const getTokenResponse = await fetch(URLS.Token, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh,
    }),
  });

  return getTokenResponse.json();
}
