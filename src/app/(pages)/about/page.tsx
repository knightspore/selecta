"use server";

import Track from "@/components/tracks/Track";
import RecommendationsContextProvider from "@/provider/RecommendationsProvider";
import { Track as TTrack } from "@/lib/spotify/types";

export default async function AboutPage() {
  return (
    <>
      <h1>What is Selecta?</h1>
      <p>
        Spotify is home to over{" "}
        <a href="https://newsroom.spotify.com/company-info/" target="_blank">
          100 million songs
        </a>{" "}
        and if you&apos;re a regular Spotify user, you know just how good it is
        at finding tracks you love that - just the sort you&apos;d like to
        stumble across on your own. Selecta is a way to place a special order
        with Spotify, and fine-tune those dials for when you&apos;re trying to
        dig <b>deeper</b>.
      </p>
      <div className="w-64 mx-auto not-prose">
        <RecommendationsContextProvider>
          <div>
            <Track track={TurningIntoMudTrack as TTrack} />
          </div>
        </RecommendationsContextProvider>
      </div>
      <p>
        Selecta is here to help you understand the music that{" "}
        <i>you already know</i> better, and speak that same language right back
        to Spotify to find whatever it is you can&apos;t put words to.
      </p>
      <h2>How do I use it?</h2>
      <h2>What is an &ldquo;aura&rdquo;?</h2>
      <h2>What else do I need to know?</h2>
    </>
  );
}

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
