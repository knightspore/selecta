import kv, {createClient} from "@vercel/kv";
import { UserID } from "./spotify/types";

const db = createClient({
  url: `${process.env.KV_REST_API_URL}`,
  token: `${process.env.KV_REST_API_TOKEN}`,
})

export type SaveAuraProps = {
  aura: {
    danceability: number;
    energy: number;
    valence: number;
    instrumentalness: number;
    speechiness: number;
  };
  email: UserID;
};

export async function saveAura(props: SaveAuraProps): Promise<boolean> {
  try {
    await db.hset(`user:${props.email}:aura`, props.aura);
    return true
  } catch (e: any) {
    console.log(e)
  }
  return false;
}

type GetAuraProps = {
  email: string;
};

export async function getAura(
  props: GetAuraProps
): Promise<SaveAuraProps["aura"] | null> {
  let auraData;
  try {
    auraData = await db.hgetall(`user:${props.email}:aura`);
  } catch (e: any) {
    return null;
  }
  return auraData as SaveAuraProps["aura"];
}
