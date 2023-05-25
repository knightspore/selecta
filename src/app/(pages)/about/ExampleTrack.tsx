import Track from "@/components/tracks/Track";
import RecommendationsContextProvider from "@/provider/RecommendationsProvider";
import { Track as TTrack } from "@/lib/spotify/types";
import SelectionsContextProvider from "@/provider/SelectionsProvider";

const TurningIntoMudTrack = {
  album: {
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273acb61c8384370d34b49498d2",
        width: 640,
      },
    ],
  },
  artists: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6RhLS4l1XlQMBME2Ox0t2D",
      },
      href: "https://api.spotify.com/v1/artists/6RhLS4l1XlQMBME2Ox0t2D",
      id: "6RhLS4l1XlQMBME2Ox0t2D",
      name: "Parabyl",
    },
  ],
  available_markets: ["ZA"],
  external_urls: {
    spotify: "https://open.spotify.com/track/492adAvsiH3llAwFNJs0uj",
  },
  href: "https://api.spotify.com/v1/tracks/492adAvsiH3llAwFNJs0uj",
  id: "492adAvsiH3llAwFNJs0uj",
  name: "Turning Into Mud",
  popularity: 0,
  preview_url:
    "https://p.scdn.co/mp3-preview/f4ec9160c5904f5819bf18dc789ad4ace650fd74?cid=c6b450d7ff6a47f0a8c20121538bb48b",
  track_number: 1,
  type: "track",
} as unknown as TTrack;

export default function ExampleTrack() {
  return (
    <div className="max-w-xs mx-auto not-prose">
      <RecommendationsContextProvider>
        <SelectionsContextProvider>
          <div>
            <Track track={TurningIntoMudTrack as TTrack} />
          </div>
        </SelectionsContextProvider>
      </RecommendationsContextProvider>
    </div>
  );
}
