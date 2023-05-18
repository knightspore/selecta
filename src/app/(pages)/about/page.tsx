"use server";

import Track from "@/components/tracks/Track";
import { SpotifyClient } from "@/lib/spotify";
import { defaultSeedTracks } from "@/lib/constants";
import RecommendationsContextProvider from "@/provider/RecommendationsProvider";

export default async function AboutPage() {

  const track = (await SpotifyClient.Tracks.Get("", defaultSeedTracks))
    .tracks[0];

  return (
    <>
      <h1>What is Selecta?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        voluptates omnis ducimus iste sit ex repudiandae voluptatum blanditiis
        dignissimos enim. Excepturi deleniti nulla officia maxime rerum
        suscipit, veniam labore iure!
      </p>
      <div className="relative w-64 mx-auto not-prose">
        <div className="absolute inset-0 scale-[120%] bg-gradient-to-b from-coral-200 to-coral-400" />
        <RecommendationsContextProvider>
          <div>
            <Track track={track} />
          </div>
        </RecommendationsContextProvider>
      </div>
      <h2>Who is it for?</h2>
      <h2>How do I use it?</h2>
      <h2>What is an &ldquo;aura&rdquo;?</h2>
      <h2>What else do I need to know?</h2>
    </>
  );
}
