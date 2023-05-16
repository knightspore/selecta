import { Session } from "next-auth";

export function formatPercentage(value: number | undefined) {
  return new Intl.NumberFormat("en", {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(value || 0);
}

export function msToMinSec(ms: number | undefined): string {
  if (ms == undefined) {
    return "";
  }
  var mins = Math.floor(ms / 60000);
  var secs = ((ms % 60000) / 1000).toFixed(0);
  return `${mins}:${Number(secs) < 10 ? 0 : ""}${secs}`;
}

export function isExpired(expiresAt: string): boolean {
  const exp = new Date(expiresAt).valueOf();
  const now = new Date().valueOf() / 1000;
  return exp < now;
}

export interface SessionData extends Session {
  token: Token;
}

type Token = {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
};

export function getSessionToken(session: Session | null): Token {
  if (session == null) {
    return {} as Token;
  }
  return (session as SessionData).token;
}
