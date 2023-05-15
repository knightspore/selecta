import { signIn } from "next-auth/react";
import Button from "../Button";

export default function AuthSignIn() {

  return (
    <div className="flex items-center justify-center w-screen h-screen">
        <Button
          disabled={false}
          text="Sign In"
          type="button"
          onClick={() => signIn("spotify")}
        />
    </div>
  );
}
