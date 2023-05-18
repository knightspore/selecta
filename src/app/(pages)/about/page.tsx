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
      <div className="w-64 mx-auto not-prose">
        <RecommendationsContextProvider>
          <div>
            <Track track={track} />
          </div>
        </RecommendationsContextProvider>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        ipsum saepe adipisci deleniti, laudantium nobis magni ad? At tempora
        sapiente quibusdam provident obcaecati, incidunt soluta, voluptatem
        veniam animi maxime optio.
      </p>
      <h2>How do I use it?</h2>
      <h2>What is an &ldquo;aura&rdquo;?</h2>
      <h2>What else do I need to know?</h2>
    </>
  );
}
