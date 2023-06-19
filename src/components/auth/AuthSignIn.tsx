import { signIn } from "next-auth/react";
import Button from "../Button";
import { Suspense } from "react";
import ExampleTrack from "@/app/(pages)/about/ExampleTrack";

export default function AuthSignIn() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-shell-900 gap-2 bg-gradient-to-tr from-shell-300 via-coral-100">
      <div className="p-4 mx-auto text-center prose">
        <h1 className="text-2xl font-medium md:text-4xl">
          Welcome to
          <br />
          <span className="text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-br bg-clip-text from-coral-600 to-shell-300">
            Selecta
          </span>
        </h1>
        <p className="max-w-md">
          Selecta is a way to place a special order with Spotify, and fine-tune
          the dials to find the tracks you didn&apos;t know you were looking
          for.
        </p>
        <Suspense>
          {/* @ts-ignore */}
          <ExampleTrack />
        </Suspense>
        <div className="mt-4 not-prose">
          <Button
            text="🧬 Sign-in with Spotify"
            type="button"
            onClick={() => signIn("spotify")}
          />
        </div>
      </div>
    </div>
  );
}
