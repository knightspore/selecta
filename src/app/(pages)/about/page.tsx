"use server";

import Button from "@/components/Button";
import ExampleTrack from "./ExampleTrack";

export default async function AboutPage() {
  return (
    <>
      <h1>What is Selecta?</h1>
      <p>
        Selecta is an app designed to enhance your Spotify
        experience. Spotify is huge - it's home to over{" "}
        <a href="https://newsroom.spotify.com/company-info/" target="_blank">
          100 million songs
        </a>{" "}
        and if you&apos;re a regular user, you know just how good it is at
        finding tracks you love. Just the sort you&apos;d like to stumble across
        on your own. That&apos;s where Selecta comes in. Selecta is a way to
        place a special order with Spotify, and fine-tune the dials to find
        the tracks you didn&apos;t know you were looking for.
      </p>
      <ExampleTrack />
      <h2>How do I use it?</h2>
      <p>Using Selecta is pretty simple.</p>
      <ol>
        <li>
          <p>
            Log in with Spotify. We require a few permissions so that you can
            save tracks you like that you find in your searches.
          </p>
        </li>
        <li>
          <p>
            Select seed tracks, artists or genres. You need at least one seed
            (of any type) to behin a search. You are allowed a combined total of
            5 seeds.
          </p>
        </li>
        <li>
          <p>
            Fine-tune details such as tempo, danceability, liveness and key.
          </p>
        </li>
        <li>
          <p>
            Click <Button type="button" text="💡 Recommend" disabled={false} />{" "}
            and enjoy?
          </p>
        </li>
      </ol>
      <h2>What else do I need to know?</h2>
      <p>
        You can use track results as seeds using the button below the track.
        Artists in track recommendations can be added as seeds by clicking on
        their names.
      </p>
      <p>
        To save tracks to a playlist, click{" "}
        <span className="font-medium">💾 Add Selection</span> beneath a track to
        add it to your selections (top right). The{" "}
        <Button type="button" text="💾 Save Playlist" disabled={false} /> button
        will save your selections to a playlist on your profile titled{" "}
        <span className="font-medium">{`Selecta (${new Date().toLocaleString()})`}</span>
      </p>
      <hr className="my-12" />
      <p className="text-center">
        <a href="https://ciaran.co.za" target="_blank">
          Made with ♥️ by Ciarán
        </a>
      </p>
    </>
  );
}
