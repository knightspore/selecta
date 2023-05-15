"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Button from "../Button";

export default function LoggedInUser() {
  const { data: session, status } = useSession();

  console.log(session);

  if (status === "unauthenticated") {
    return (
      <p className="text-xs font-bold text-shell-900/50">Not logged in.</p>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between gap-1">
        <div className="flex items-center justify-between gap-1">
          {session?.user?.image && (
            <Image
              className="w-6 border-2 rounded-full border-shell-300"
              src={session?.user?.image}
              width={64}
              height={64}
              alt={`${session?.user?.name} profile picture`}
            />
          )}
          <p className="text-xs font-bold text-shell-900/50">
            {session?.user?.name}
          </p>
        </div>
        <span className="text-xs">
          <Button
            type="button"
            onClick={() => signOut()}
            text="Sign Out"
            disabled={status != "authenticated"}
          />
        </span>
      </div>
      <hr />
    </>
  );
}
