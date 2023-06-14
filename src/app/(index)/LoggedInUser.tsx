"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function LoggedInUser() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return <p className="text-xs font-bold text-shell-500">Not logged in.</p>;
  }

  return (
    <div className="flex items-center justify-between gap-1">
      <div className="flex items-center justify-between gap-1">
        {session?.user?.image && (
          <Image
            className="w-6 border-2 rounded-full border-shell-400"
            src={session?.user?.image}
            width={64}
            height={64}
            alt={`${session?.user?.name} profile picture`}
          />
        )}
        <p className="text-xs font-bold text-shell-500">
          {session?.user?.name}
        </p>
      </div>
      <span className="text-xs">
        <button
          type="button"
          onClick={() => signOut()}
          className="text-xs font-medium text-shell-400"
        >
          Sign Out
        </button>
      </span>
    </div>
  );
}
