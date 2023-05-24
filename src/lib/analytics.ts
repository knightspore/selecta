import { RecommendationsInput } from "./spotify/client/tracks";
import va from "@vercel/analytics";

export function trackRecommendations(
  input: RecommendationsInput,
) {
  va.track("Get Recommendations", {
    input: JSON.stringify({
      ...input,
    }),
  });
}

export function trackFindArtist(name: string, query: string) {
  va.track("Find Artist", {
    name,
    query,
  });
}


export function trackFindTrack(name: string, query: string) {
  va.track("Find Track", {
    name,
    query,
  });
}
