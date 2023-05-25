import { Session } from "next-auth";
import {
  Recommendations,
  TrackAudioFeatureList,
  TrackAudioFeatures,
} from "./spotify/client/tracks";
import { Track, TrackID } from "./spotify/types";

export function formatPercentage(value: number | undefined) {
  value = !value ? 0 : value > 1 ? value / 100 : value;
  return new Intl.NumberFormat("en", {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(value);
}

export function msToMinSec(ms: number | undefined): string {
  if (ms == undefined) {
    return "0:00";
  }
  var mins = Math.floor(ms / 60000);
  var secs = ((ms % 60000) / 1000).toFixed(0);
  return `${mins}:${Number(secs) < 10 ? 0 : ""}${secs}`;
}

export function isExpired(expiresAt: string | number): boolean {
  // Convert from ms to s
  if (expiresAt.toString().length == 13) {
    expiresAt = Number(expiresAt) / 1000;
  }
  const exp = new Date(expiresAt).valueOf();
  const now = new Date().valueOf() / 1000;
  return exp < now;
}

export interface SessionData extends Session {
  token: UserToken;
}

export type UserToken = {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
};

export function getSessionToken(session: Session | null): UserToken {
  if (session == null) {
    return {} as UserToken;
  }
  return (session as SessionData).token;
}

export function createTempoRange(
  tempo: number | undefined
): [number, number, number] {
  return tempo
    ? [Math.floor(tempo - 10), Math.floor(tempo), Math.floor(tempo + 10)]
    : [110, 120, 130];
}

type TrackWithFeatures = Track & {
  features: TrackAudioFeatures;
};

export function addFeaturesToRecommendations(
  recs: Recommendations,
  feats: TrackAudioFeatureList
): TrackWithFeatures[] {
  let result: Record<TrackID, TrackWithFeatures> = {};

  recs.tracks.map((t: Track) => {
    result[t.id] = { ...t, features: {} as TrackAudioFeatures };
  });

  feats.audio_features.map((f: TrackAudioFeatures) => {
    const track = result[f.id];
    result[f.id] = { ...track, features: f };
  });

  return Object.values(result);
}
