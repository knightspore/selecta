import { Session, getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOpts } from "../../auth/[...nextauth]/route";
import { getSessionToken } from "@/lib/utils";
import { SpotifyClient } from "@/lib/spotify";

interface APISession extends Session {
  user: {
    name?: string | null;
    id?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export async function POST(req: NextRequest) {
  const session = (await getServerSession(authOpts)) as APISession;
  const token = getSessionToken(session);
  const { data } = await req.json();
  const playlistName = `Selecta (${new Date().toLocaleString()})`;
  const userID = session.user.id;

  if (!userID) {
    return NextResponse.json({ message: "Error: No User ID in Session" });
  }

  const { id } = await SpotifyClient.Playlists.Create(token.accessToken, {
    id: userID,
    name: playlistName,
  });

  if (!id) {
    return NextResponse.json({ message: "Error: Could not create playlist" });
  }

  const result = await SpotifyClient.Playlists.Add(token.accessToken, {
    id,
    tracks: data,
  });

  return NextResponse.json(result);
}
