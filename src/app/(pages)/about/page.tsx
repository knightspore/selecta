"use server";

import ExampleTrack from "./ExampleTrack";

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
      <ExampleTrack />
      <p>
        Selecta is here to help you understand the music that{" "}
        <i>you already know</i> better, and speak that same language right back
        to Spotify to find whatever it is you can&apos;t put words to.
      </p>
      <h2>How do I use it?</h2>
      <h2>What else do I need to know?</h2>
      <hr className="my-12" />
      <p className="text-center">
        Built by{" "}
        <a href="https://ciaran.co.za" target="_blank">
          Ciarán
        </a>
      </p>
    </>
  );
}
